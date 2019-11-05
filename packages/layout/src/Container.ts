import * as common from '@acko-ui-kit/common';

const  {
  styled, 
  css,
  $containerXs,
  $screenXs,
  $gutter
} = common;

const getContainerWidth = (key, container) => props => {
  if (props[key] === 'fixed') {
    return css`
      width: ${container};
    `;
  }

  return css`
    width: 100%;
  `;
};

const Container = styled.div`
  padding-left: ${$gutter / 2}px;
  padding-right: ${$gutter / 2}px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  @media screen and (min-width: ${$screenXs}) {
    ${getContainerWidth('xs', $containerXs)}
  }
`;

export default Container;
