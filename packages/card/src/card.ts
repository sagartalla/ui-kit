import * as common from "@acko-ui-kit/common";
const { styled, $white } = common;

const Card = styled.div<StyleProps>`
  width: 100%;
  background-color: ${$white};
  border-radius: 12px;
  box-shadow: ${(props): string => {
    if (props.shadow === "dark")
      return `0 15px 29px -19px rgba(46, 64, 71, 0.71)`;
    if (props.shadow === "light")
      return `0 15px 29px -19px rgba(46, 64, 71, 0.15)`;
    return `0`;
  }};
  padding: ${(props): string => (props.noPadding ? `0` : `1em`)};
  ${props => props.styles};
`;
interface StyleProps {
  shadow?: string;
  noPadding?: boolean;
}

export default Card;
