import styled from "styled-components";

interface Props {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  textAlign?: string;
  width?: string;
  margin?: string;
  padding?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  pt?: string;
  pb?: string;
  pl?: string;
  pr?: string;
  styles?: string;
  overflow?: string;
}

export const Box = styled.div<Props>`
  width: ${props => (props.width ? props.width : "100%")};
  ${props =>
    props.justifyContent ? `justify-content: ${props.justifyContent}` : ""};
  ${props => (props.alignItems ? `align-items: ${props.alignItems}` : "")};
  ${props => (props.textAlign ? `text-align: ${props.textAlign}` : "")};
  ${props => (props.margin ? `margin: ${props.margin}` : "")};
  ${props => (props.padding ? `padding: ${props.padding}` : "")};
  ${props => (props.mt ? `margin-top: ${props.mt}` : "")};
  ${props => (props.mr ? `margin-right: ${props.mr}` : "")};
  ${props => (props.mb ? `margin-bottom: ${props.mb}` : "")};
  ${props => (props.ml ? `margin-left: ${props.ml}` : "")};
  ${props => (props.pt ? `padding-top: ${props.pt}` : "")};
  ${props => (props.pb ? `padding-bottom: ${props.pb}` : "")};
  ${props => (props.pl ? `padding-left: ${props.pl}` : "")};
  ${props => (props.pr ? `padding-right: ${props.pr}` : "")};
  ${props => (props.overflow ? `overflow: ${props.overflow}` : "")};
  ${props => props.styles};
`;

export const Flex = styled(Box)<Props>`
  display: flex;
  ${props =>
    props.flexDirection ? `flex-direction: ${props.flexDirection}` : ""};
  ${props => props.styles};
`;

export default {};
