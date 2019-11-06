import * as React from 'react';
import { debounce } from 'lodash';
import * as common from '@acko-ui-kit/common';
import SearchIcon from './Icon';

const {
  styled, 
  $neutralColors, 
  $primaryColors,
  $grayLight,
  $fontSize,
  $error,
} = common;

const StyledInput = styled.input<StypeProps>`
  height: 50px;
  width: 100%;
  border-radius: 8px;
  color: ${$neutralColors.normal};
  font-size: ${$fontSize.xxs};
  background-color: ${$grayLight};
  border: 1px solid ${$grayLight};
  padding-left: 45px;
  :focus {
    outline: none;
    border: 1px solid ${(props: StypeProps) => (props.error ? $error : $primaryColors.normal)};
  }
`;

const Container = styled.div`
  position: relative;
`;

const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  left: 17px;
  top: 17px;
`;

export default function SearchInput(props: ComponentProps) {
  const delayedCallback = debounce(function(value) {
    props.handleChange(value);
  }, 1000);

  const onInputChange = (event:any) => {
    event.persist();
    delayedCallback(event.target.value);
  };
  return (
    <Container>
      <StyledInput
        error={props.error}
        onChange={onInputChange}
        type="text"
        placeholder={props.placeholder}
      />
      <StyledSearchIcon />
    </Container>
  );
}

interface StypeProps {
  error?: boolean;
}

interface ComponentProps {
  error?: boolean;
  placeholder: string;
  handleChange(value: string): void;
}
