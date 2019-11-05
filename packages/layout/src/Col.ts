/**
 *
 * Grid
 *
 */
import * as common from '@acko-ui-kit/common';
import { ThemeInterface } from '@acko-ui-kit/common';

const {
  styled,
  css,
  $gutter,
  $screenXs
} = common;


const breakpoints = {
  extraSmall: $screenXs,
};

const ms = size => `@media screen and (min-width: ${size})`;
const mx = point => (props: ColProps) =>
  typeof props.theme.breakpoints === 'object'
    ? ms(props.theme.breakpoints[point])
    : ms(breakpoints[point]);

const pad = (props: ColProps) =>
  typeof props.theme.gutter === 'number' ? props.theme.gutter / 2 : $gutter / 2;

const p = n => (typeof n !== 'undefined' ? `${n * 100}%` : null);

const colWidth = key => (props: ColProps) =>
  props[key]
    ? `
    -ms-flex-preferred-size: ${p(props[key])};
    flex-basis: ${p(props[key])};
    width: ${p(props[key])};
    `
    : null;

const colOffset = key => (props: ColProps) =>
  props[key] ? `margin-left: ${p(props[key])};` : null;

const autoWidth = key => (props: ColProps) =>
  props[key]
    ? '-webkit-box-flex: 1;-ms-flex-positive: 1;flex-grow: 1;-ms-flex-preferred-size: 0;flex-basis: 0;max-width: 100%;'
    : null;

const alignContent = (props: ColProps) => {
  if (props.alignContent) {
    return `text-align: ${props.alignContent}`;
  }

  return null;
};

const ColCSS = () => (props: ColProps) => css`
  ${props.block ? '' : 'display: inline-block'};
  padding-left: ${pad}px;
  padding-right: ${pad}px;
  ${props.noPadded ? 'padding:0' : ''};
  margin: 0;
  box-sizing: border-box;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto !important;
  width: 100%;
  ${props.stretch ? 'width: 100%' : ''};
  ${autoWidth('autoXXS')};
  ${colWidth('xxs')};
  ${colOffset('offsetXXS')};
  ${props.hiddenXXS ? 'display: none!important;' : ''};
  ${mx('extraSmall')} {
    ${autoWidth('autoXS')};
    ${colWidth('xs')};
    ${colOffset('offsetXS')};
    ${props.hiddenXS ? 'display: none!important;' : ''};
  }
  ${alignContent(props)};
`;

const Col = styled.div<ColProps>`
  ${ColCSS()};
`;

export const SectionCol = styled.section<ColProps>`
  ${ColCSS()};
`;

interface ColProps {
  alignContent?: string;
  block?: boolean;
  noPadded?: boolean;
  stretch?: boolean;
  hiddenXXS?: boolean;
  hiddenXS?: boolean;
  key?: string;
  xxs?: number;
  theme: ThemeInterface;
}

export default Col;
