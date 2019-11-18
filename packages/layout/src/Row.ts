/**
 *
 * Row
 *
 */

import * as common from '@acko-ui-kit/common';

const {
  styled,
  css,
  $gutter,
  $screenXs
} = common;

const RowCSS = () => (props: RowProps) => css`
  margin-right: -${$gutter / 2}px;
  margin-left: -${$gutter / 2}px;
  box-sizing: border-box;
  display: -webkit-flex;
  -webkit-flex-wrap: wrap;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-flex: 0;
  flex: 0 1 auto !important;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  ${props.verticle
    ? 'flex-direction: column;-webkit-flex-direction: column;'
    : 'flex-direction: row;-webkit-flex-direction: row;'};
  ${getReverseRow(props)};
  ${getColumnPosition(props)};
  ${getDistribution(props)};
`;

function getReverseRow(props: RowProps) {
  if (props.reverse) {
    return css`
      -webkit-box-orient: horizontal;
      -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse;
    `;
  }
  return false;
}

function getColumnPosition(props: RowProps) {
  return css`
    ${getPositionCss(props.xxs)};
    @media (min-width: ${$screenXs}) {
      ${getPositionCss(props.xs)};
    }
  `;
}

function getDistribution(props: RowProps) {
  if (props.around) {
    return css`
      -ms-flex-pack: distribute;
      justify-content: space-around;
    `;
  }
  if (props.between) {
    return css`
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    `;
  }
  return false;
}

function getPositionCss(property) {
  let styles;
  switch (property) {
    case 'center':
      styles = `
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
      `;
      break;
    case 'end':
      styles = `
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      text-align: end;
      `;
      break;
    case 'top':
      styles = `
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
      `;
      break;
    case 'middle':
      styles = `
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      `;
      break;
    case 'bottom':
      styles = `
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
      `;
      break;
    case 'start':
      styles = `
        -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      text-align: start;
      `;
      break;
    default:
      styles = null;
  }
  return styles;
}

const Row = styled.div<RowProps>`
  ${RowCSS()}
`;

export const SectionRow = styled.section<RowProps>`
  ${RowCSS()}
`;

interface RowProps {
  reverse?: boolean;
  xs?: string;
  xxs?: string;
  tagName?: string;
  around?: boolean;
  between?: boolean;
  verticle?: boolean;
}
export default Row;
