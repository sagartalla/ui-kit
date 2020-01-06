import * as React from "react";
import { MemoryRouter } from "react-router";
import { storiesOf } from "@storybook/react";
import { withKnobs, object, array } from "@storybook/addon-knobs";
import { withNotes } from "@storybook/addon-notes";

import Radio from "../src/radio-button";

interface Option {
  value: string;
  displayValue: string;
}

(storiesOf("Radio", module) as any)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addWithJSX(
    "Default Radio",
    () => (
      <Radio
        selectedValue={object("Selected Value", {
          value: "1",
          displayValue: "Yes"
        })}
        options={[
          { value: "1", displayValue: "Yes" },
          { value: "0", displayValue: "No" }
        ]}
        onSubmit={() => {}}
      />
    ),
    { notes: "A very simple component" }
  );
