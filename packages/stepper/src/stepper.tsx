import * as React from "react";
import { styled, Flex } from "@acko-ui-kit/common";
import { Text } from "@acko-ui-kit/typography";

// images
import StepperDoneIcon from "./done-icon";
import StepperPendingIcon from "./pending-icon";
import StepperRejectIcon from "./reject-icon";
import StepperPath from "./path-icon";

interface StepperProps {
  data: DataProps[];
}
interface DataProps {
  text: string;
  status: string;
}

const StepperPathContainer = styled.div`
  line-height: 0;
  margin: 0 5px;
`;

const StepperText = styled(Text)`
  margin-left: 1em;
`;

function getComponentWithStatus(status: string): JSX.Element {
  let ComponentWithStatus: JSX.Element = <span />;
  switch (status) {
    case "done":
      ComponentWithStatus = <StepperDoneIcon />;
      break;
    case "pending":
      ComponentWithStatus = <StepperPendingIcon />;
      break;
    case "reject":
      ComponentWithStatus = <StepperRejectIcon />;
      break;
    default:
      console.log("something went wrong at stepper component");
  }
  return ComponentWithStatus;
}

function Stepper(props: StepperProps): JSX.Element {
  const { data } = props;
  return (
    <Flex flexDirection="column">
      {data.map((item, index, array) => (
        <Flex flexDirection="column" alignItems="baseline" key={item.text}>
          <Flex flexDirection="row" alignItems="center" width="auto">
            {getComponentWithStatus(item.status)}
            <StepperText size="xxxs" colorVariant="neutralLight">
              {item.text}
            </StepperText>
          </Flex>
          <StepperPathContainer>
            {index !== array.length - 1 && <StepperPath />}
          </StepperPathContainer>
        </Flex>
      ))}
    </Flex>
  );
}

export default Stepper;
