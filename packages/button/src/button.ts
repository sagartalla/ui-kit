import * as common from '@acko-ui-kit/common';
import { Link } from 'react-router-dom';
const {
	styled, 
  css,
  $fontSize,
  $primaryColors,
  $neutralColors,
  $white,
  $fontWeightNormal,
  $fontWeightBold,
  $hyperlink,
} = common ;

const getBackgroundColor = () => props => {
  if (props.disabled)
    return props.invert
      ? `background-color:${$white}`
      : `background-color:${$neutralColors.lightest}`;
  return props.invert
    ? `background-color:${$white}`
    : `background-color:${$primaryColors.normal}`;
};

const getFontSize = () => props => {
  if (props.small === 'true') return `font-size:${$fontSize.xxs}`;
  return `font-size:${$fontSize.xs}`;
};

const getFontColor = () => props => {
  if (props.disabled) return `color:${$neutralColors.light}`;
  return props.invert ? `color:${$primaryColors.normal}` : `color:${$white}`;
};

const getBorderColor = () => props => {
  if (props.disabled) return `border:1.5px solid ${$neutralColors.lightest}`;
  return `border:1.5px solid ${$primaryColors.normal}`;
};

const getBoxShadow = () => props => {
  if (props.invert || props.disabled) return `box-shadow:0`;
  return `box-shadow:0 12px 18px -9px ${$primaryColors.normal}`;
};

const getPadding = () => props =>
  props.small === 'true' ? `padding:0.5em 2em` : `padding:1em 3em`;

const getHoverBackgroundColor = () => props => {
  if (props.disabled)
    return props.invert
      ? `background-color:${$white}`
      : `background-color:${$neutralColors.lightest}`;
  return props.invert
    ? `background-color:${$primaryColors.normal}`
    : `background-color:${$primaryColors.dark}`;
};

const getHoverFontColor = () => props => {
  if (props.disabled) return `color:${$neutralColors.light}`;
  return `color:${$white}`;
};

const getHoverBorderColor = () => props => {
  if (props.disabled) return `border:1.5px solid ${$neutralColors.lightest}`;
  return props.invert
    ? `border:1.5px solid ${$primaryColors.normal}`
    : `border:1.5px solid ${$primaryColors.dark}`;
};

const getHoverBoxShadow = () => props => {
  if (props.invert || props.disabled) return `box-shadow:0`;
  return `box-shadow:0 8px 44px -6px ${$primaryColors.normal}`;
};

const getChevron = () => props => {
  if (props.chevron === 'true')
    return `&:after {
    content: '\\203A';
    font-size:1.5em;
    font-weight:300;
    padding-left: 0.4em;
    height: 29px;
  }`;
  return ``;
};

const buttonStyles = () => props => css`
  border-radius: 6px;
  font-weight: ${$fontWeightBold};
  text-align: center;
  text-decoration: none;
  display: flex;
  diplay: inline;
  justify-content: center;
  align-items: center;
  ${() => props.fluid && 'width: 100%'};
  ${getPadding()};
  ${getBoxShadow()};
  ${getFontSize()};
  ${getBackgroundColor()};
  ${getBorderColor()};
  ${getFontColor()};
  ${getChevron()};

  :hover {
    cursor: pointer;
    outline: none;
    text-decoration: none;
    ${getHoverBackgroundColor()};
    ${getHoverFontColor()};
    ${getHoverBorderColor()};
    ${getHoverBoxShadow()};
  }
`;

export const A = styled.a`
  ${buttonStyles()};
`;

/**
 * small and chevron is string and not boolean beacause
 * we are passing the values to dom and dom doen't take boolean values
 * https://github.com/styled-components/styled-components/issues/1198
 */
export const HyperLink = styled(Link)<ButtonProps>`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: ${$hyperlink};
  font-weight: ${$fontWeightNormal};
  ${getFontSize()};
  ${getChevron()};
`;

export const HyperAnchorLink = styled.a<ButtonProps>`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: ${$hyperlink};
  font-weight: ${$fontWeightNormal};
  ${getFontSize()};
  ${getChevron()};
`;

export const AnchorLinkButton = styled.a<ButtonProps>`
  ${buttonStyles()}
`;

const Button = styled.button<ButtonProps>`
  ${buttonStyles()}
`;

export const ButtonLink = styled(Link)<ButtonProps>`
  ${buttonStyles()}
`;

export const ButtonText = styled(Button)<ButtonProps>`
  color: ${$hyperlink};
  padding: 0;
  border: 0;
  background: transparent;
  box-shadow: none;
  font-weight: ${$fontWeightNormal};
  :hover {
    border: 0;
    box-shadow: none;
    background-color: transparent;
    color: ${$hyperlink};
  }
  ${getFontSize()};
`;

interface ButtonProps {
  fluid?: boolean;
  invert?: boolean;
  disabled?: boolean;
  small?: string;
  chevron?: string;
}

export default Button;
