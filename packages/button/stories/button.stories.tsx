import * as React from "react";
import { MemoryRouter } from "react-router";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  // number,
  // object,
  boolean
} from "@storybook/addon-knobs";
import { withNotes } from "@storybook/addon-notes";
import {
  action
  // configureActions
} from "@storybook/addon-actions";

import Button, {
  ButtonText,
  ButtonLink,
  AnchorLinkButton,
  HyperAnchorLink,
  HyperLink
} from "../src/button";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(story => (
    <MemoryRouter
      initialEntries={["/"]}
      style={{ width: "100%", height: "100%" }}
    >
      {story()}
    </MemoryRouter>
  ))
  .add(
    "Default Button",
    () => (
      <Button
        disabled={boolean("Disabled", false)}
        invert={boolean("Invert", false)}
        small={text("Small", "false")}
        chevron={text("Chevron", "false")}
        fluid={boolean("Fluid", false)}
        onClick={action("clicked button")}
      >
        Hello Button
      </Button>
    ),
    { notes: "A very simple component" }
  )
  .add("Button Text", () => <ButtonText>Click Me!</ButtonText>)
  .add("Button Link", () => <ButtonLink to="/new-link">Link</ButtonLink>)
  .add("Anchor Link Button", () => (
    <AnchorLinkButton>Hello Button</AnchorLinkButton>
  ))
  .add("Hyper Anchor Link Button", () => (
    <HyperAnchorLink>Click Me!</HyperAnchorLink>
  ))
  .add("HyperLink button", () => <HyperLink to="/new-link">Link</HyperLink>);

// storiesOf("Button")
//   .addDecorator(withKnobs)
//   .addDecorator(withNotes)
//   .add(
//     "with text",
//     () => (
//       <Button
//         disabled={boolean("Disabled", false)}
//         onClick={action("clicked button")}
//       >
//         Hello Button
//       </Button>
//     ),
//     { notes: "A very simple component" }
//   )
//   .add("with some emoji", () => (
//     <Button>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
