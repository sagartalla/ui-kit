import * as React from "react";
import PropTypes from "prop-types";
import { styled, css, $neutralColors } from "@acko-ui-kit/common";

const getDiameter = (props: StyleProps): number => (props.params.small ? 5 : 6);

const getGap = (props: StyleProps): number => (props.params.small ? 8 : 30);

const changeStepPosition = (props: StyleProps): number => {
  let { stepPosition } = props.params;
  const { steps } = props.params;
  if (stepPosition > steps) stepPosition = steps;
  return stepPosition
    ? getGap(props) * (stepPosition - 1) + stepPosition * getDiameter(props)
    : getDiameter(props);
};

const containerStyles = (props: StyleProps) => css`
  display: flex;
  flex-direction: ${props.params.vertical ? `column` : `row`};
  position: relative;
  ${Steps}:not(:last-child) {
    margin-bottom: ${props.params.vertical ? getGap(props) : 0}px;
    margin-right: ${props.params.vertical ? 0 : getGap(props)}px;
  }
`;

const transitionStyles = (props: StyleProps) => css`
  height: ${props.params.vertical
    ? `${changeStepPosition(props)}`
    : `${getDiameter(props)}`}px;
  width: ${props.params.vertical
    ? `${getDiameter(props)}`
    : `${changeStepPosition(props)}`}px;
  background: linear-gradient(
    ${props.params.vertical ? `180deg` : `90deg`},
    #7b7cff 0%,
    #a96bff 100%
  );
  border-radius: 10px;
  position: absolute;
  top: 0;
  transition: ease 1s;
`;

const Steps = styled.div<StyleProps>`
  border-radius: 10px;
  background-color: ${$neutralColors.lightest};
  width: ${(props: any) => getDiameter(props)}px;
  height: ${(props: any) => getDiameter(props)}px;
`;

const Container = styled.div<StyleProps>`
  ${(props: any) => containerStyles(props)}
`;

const Transition = styled.div<StyleProps>`
  ${(props: any) => transitionStyles(props)}
`;

function StepTransition(props: ComponentProps): JSX.Element {
  const numberofSteps = (): JSX.Element[] =>
    Array.from(Array(props.steps), (_, i) => <Steps key={i} params={props} />);

  return (
    <Container params={props} className={props.className}>
      <Transition params={props} />
      {numberofSteps()}
    </Container>
  );
}

interface StyleProps {
  params: ComponentProps;
}

interface ComponentProps {
  steps: number;
  stepPosition: number;
  vertical?: boolean;
  small?: boolean;
  className?: string;
}

StepTransition.propTypes = {
  steps: PropTypes.number.isRequired
};

export default StepTransition;
