import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withNotes } from "@storybook/addon-notes";

import { BasicLoader } from "../src/loaders";

(storiesOf("Loader", module) as any)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addWithJSX("Default Loader", () => <BasicLoader />, {
    notes: "A very simple loader"
  });
