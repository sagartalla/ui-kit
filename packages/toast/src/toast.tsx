import React from 'react';
import * as common from '@acko-ui-kit/common';
import { Text } from '@acko-ui-kit/typography';

const { styled } = common;

const Wrapper = styled.div<StyleProps>`
  background-color: rgba(70, 70, 70, 0.9);
  border-radius: 2em;
  width: fit-content;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 20px;
  margin: auto;
  white-space: nowrap;
  text-align: center;
  padding: 0.5em 1.5em;
  visibility: ${(props: any) => (props.visible ? 'visible' : 'hidden')};
  z-index: 2;
`;

interface ComponentProps {
  visible: boolean;
  toastMessage: string;
  handleToast: Function;
}
interface StyleProps {
  visible: boolean;
}

export default function Toast(props: ComponentProps): JSX.Element {
  let toast = true;
  const showToast = props.visible && toast;
  if (props.visible)
    setTimeout(() => {
      toast = false;
      props.handleToast();
    }, 2000);

  return (
    <Wrapper visible={showToast}>
      <Text size="xxs" color="white">
        {props.toastMessage}
      </Text>
    </Wrapper>
  );
}
