import * as common from '@acko-ui-kit/common';


const {
	styled,
	css,
  $fontSize,
  $fontWeightBold,
  $fontWeightNormal,
  $neutralColors,
  $primaryColors,
  $accentColors,
  $error,
  $hyperlink,
  $white,
} = common;

interface GetStyleTypes {
  /** TODO once design is fixed change it to string */
  fontSize?: string;
  fontWeight: number;
  color: string;
}

interface TextProps {
  children?: JSX.Element[] | string[] | string | JSX.Element | undefined;
  center?: boolean;
  size?: string;
  colorVariant?: string;
  strikeThrough?: boolean;
  fontWeight?: string;
}

function getFontSize(size) {
  let fontSize;
  switch (size) {
    case 'xxxs':
      fontSize = $fontSize.xxxs;
      break;
    case 'xxs':
      fontSize = $fontSize.xxs;
      break;
    case 'xs':
      fontSize = $fontSize.xs;
      break;
    case 'n':
      fontSize = $fontSize.normal;
      break;
    case 's':
      fontSize = $fontSize.small;
      break;

    default:
      fontSize = $fontSize.normal;
  }
  return fontSize;
}

function getFontColorVariant(colorVariant) {
  let fontColor;
  switch (colorVariant) {
    case 'primary':
      fontColor = $primaryColors.normal;
      break;
    case 'accent':
      fontColor = $accentColors.normal;
      break;
    case 'neutral':
      fontColor = $neutralColors.normal;
      break;
    case 'error':
      fontColor = $error;
      break;
    case 'hyperlink':
      fontColor = $hyperlink;
      break;
    case 'white':
      fontColor = $white;
      break;
    case 'light':
      fontColor = $neutralColors.light;
      break;
    default:
      fontColor = $neutralColors.dark;
  }
  return fontColor;
}

const getStyles = ({
  fontSize,
  fontWeight,
  color,
}: GetStyleTypes) => props => css`
  font-weight: ${fontWeight};
  color: ${props && props.color ? props.color : color};
  margin: 0;
  ${fontSize && `font-size: ${fontSize}`};
  ${props && props.center && 'text-align: center'};
`;

// Heading Compontnes
export const H1 = styled.h1<TextProps>`
  ${getStyles({
    fontSize: $fontSize.xxxl,
    fontWeight: $fontWeightBold,
    color: $neutralColors.dark,
  })}
`;

export const H2 = styled.h2<TextProps>`
  ${getStyles({
    fontSize: $fontSize.xxl,
    fontWeight: $fontWeightBold,
    color: $neutralColors.dark,
  })}
`;

export const H3 = styled.h3<TextProps>`
  ${getStyles({
    fontSize: $fontSize.xl,
    fontWeight: $fontWeightBold,
    color: $neutralColors.dark,
  })}
`;

export const H4 = styled.h4<TextProps>`
  ${getStyles({
    fontSize: $fontSize.large,
    fontWeight: $fontWeightBold,
    color: $neutralColors.dark,
  })}
`;

export const H5 = styled.h5<TextProps>`
  ${getStyles({
    fontSize: $fontSize.medium,
    fontWeight: $fontWeightBold,
    color: $neutralColors.dark,
  })}
  white-space: pre-wrap;
`;

export const H6 = styled.h6<TextProps>`
  ${getStyles({
    fontSize: $fontSize.normal,
    fontWeight: $fontWeightBold,
    color: $neutralColors.dark,
  })}
`;

// extending h6
export const H7 = styled.h6<TextProps>`
  ${getStyles({
    fontSize: $fontSize.xs,
    fontWeight: $fontWeightBold,
    color: $neutralColors.dark,
  })}
`;

// Sub Heading Component
export const SubHeading = styled.p<TextProps>`
  ${getStyles({
    fontWeight: $fontWeightBold,
    color: $neutralColors.dark,
  })};
  font-size: ${props => getFontSize(props.size)};
  ${props =>
    props &&
    props.colorVariant &&
    `color: ${getFontColorVariant(props.colorVariant)}`};
`;

// Text Component
export const Text = styled.p<TextProps>`
  ${getStyles({
    fontWeight: $fontWeightNormal,
    color: $neutralColors.dark,
  })};
  font-size: ${props => getFontSize(props.size)};
  ${props =>
    props &&
    props.colorVariant &&
    `color: ${getFontColorVariant(props.colorVariant)}`};
  ${props => props && props.fontWeight && `font-weight: ${props.fontWeight}`};
`;

export const Price = styled.span<TextProps>`
  text-decoration: ${props => (props.strikeThrough ? 'line-through' : '')};
  font-weight: ${props => (props.strikeThrough ? '' : $fontWeightNormal)};
  font-size: ${props => getFontSize(props.size)};
  margin-right: 0.5em;
  ${props =>
    props &&
    props.colorVariant &&
    `color: ${getFontColorVariant(props.colorVariant)}`};
  &:before {
    content: '\\20B9';
  }
`;
