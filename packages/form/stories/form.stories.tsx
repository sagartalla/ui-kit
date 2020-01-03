import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withNotes } from "@storybook/addon-notes";

import FormikInput from "../src/form";

(storiesOf("Forms", module) as any)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addWithJSX(
    "Default Form",
    () => (
      <FormikInput
        name="email"
        validate={() => {
          return {};
        }}
        handleNext={() => {}}
        buttonText="Continue"
      />
    ),
    {
      notes: "A very simple form"
    }
  );
