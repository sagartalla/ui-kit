import React from "react";
import {
  styled,
  Flex,
  $fontWeightNormal,
  $fontSize,
  $neutralColors,
  $primaryColors
} from "@acko-ui-kit/common";
import { Text } from "@acko-ui-kit/typography";

interface Item {
  value: any;
  displayValue: string;
}

interface Props {
  selectedValue: Item;
  options: Item[];
  onSubmit: Function;
}

const StyledText = styled(Text)`
  font-weight: ${$fontWeightNormal};
  font-size: ${$fontSize.xxxs};
  line-height: 1em;
  color: ${$neutralColors.dark};
  margin-left: 5px;
`;

const Radio = styled.div`
  width: 12px;
  height: 12px;
  border: 1px solid #8990a1;
  box-sizing: border-box;
  border-radius: 22px;
  ${(props: any) =>
    props.selected
      ? `border: 3px solid ${$primaryColors.normal}`
      : `border: 1px solid #8990a1`}
`;

const StyledFlex = styled(Flex)`
  width: fit-content;
`;

const Container = styled(Flex)`
  margin-left: 1em;
`;

const RadioButtons = ({ selectedValue, options, onSubmit }: Props) => {
  return (
    <StyledFlex>
      {options.map(item => (
        <Container key={item.value} justifyContent="center" alignItems="center">
          <Radio
            selected={item.value === selectedValue.value}
            onClick={() => onSubmit(item)}
          />
          <StyledText>{item.displayValue}</StyledText>
        </Container>
      ))}
    </StyledFlex>
  );
};
export default RadioButtons;
