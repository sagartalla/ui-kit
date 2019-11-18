import * as React from 'react';
import * as common from '@acko-ui-kit/common';
import { BasicLoaderGif } from './img';

const { styled, Flex } = common;

const Container = styled(Flex)`
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #ffffffab;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
`;

export default function BasicLoader(): JSX.Element {
  return (
    <Container>
      <Image src={BasicLoaderGif} alt="loader" />
    </Container>
  );
}
