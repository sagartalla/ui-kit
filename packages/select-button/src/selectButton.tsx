import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as common from '@acko-ui-kit/common';

import SelectRound from './Icon';

const { styled, $fontSize, $neutralColors, $white, $grayLighter } = common;

const Button = styled.button<StyleProps>`
  width: 100%;
  padding: 0.75em 0;
  border-radius: 6px;
  border: 1px solid
    ${(props:StyleProps) => (props.select ? props.theme.primaryColor.light : $grayLighter)};
  font-size: ${$fontSize.xxs};
  font-weight: ${(props:StyleProps) => props.theme.normalWeight};
  color: ${(props:StyleProps) =>
    props.select ? $neutralColors.normal : $neutralColors.dark};
  background-color: ${(props:StyleProps) => (props.select ? $white : $grayLighter)};
  :hover {
    cursor: pointer;
    outline: none;
  }
`;

const StyledSelectIcon = styled(SelectRound)`
  margin: 0 1em;
  float: right;
`;

export default function SelectButton(props: ComponentProps): JSX.Element {
  const onButtonClick = () => {
    props.handleClick(props.value);
  };
  return (
    <Button
      select={props.selected}
      onClick={onButtonClick}
      className={props.className}
    >
      {props.selected ? <StyledSelectIcon /> : null}
      {props.children}
    </Button>
  );
}

interface StyleProps {
  select?: boolean;
  theme: { 
    primaryColor: { 
    	light: string 
    },
		normalWeight: string 
	} 
}

interface ComponentProps {
  selected: boolean;
  children: string | JSX.Element[];
  handleClick(value: string): void;
  className?: string;
  value: string;
}

SelectButton.propTypes = {
  children: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
