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

(storiesOf("Button", module) as any)
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
  .addWithJSX(
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
  .addWithJSX("Button Text", () => (
    <ButtonText
      small={text("Small", "false")}
      onClick={action("clicked button")}
    >
      Click Me!
    </ButtonText>
  ))
  .addWithJSX("Button Link", () => (
    <ButtonLink
      to="/new-link"
      fluid={boolean("Fluid", false)}
      small={text("Small", "false")}
      invert={boolean("Invert", false)}
      disabled={boolean("Disabled", false)}
      chevron={text("Chevron", "false")}
      onClick={action("clicked button")}
    >
      Link
    </ButtonLink>
  ))
  .addWithJSX("Anchor Link Button", () => (
    <AnchorLinkButton
      fluid={boolean("Fluid", false)}
      small={text("Small", "false")}
      invert={boolean("Invert", false)}
      disabled={boolean("Disabled", false)}
      chevron={text("Chevron", "false")}
      onClick={action("clicked button")}
    >
      Hello Button
    </AnchorLinkButton>
  ))
  .addWithJSX("Hyper Anchor Link Button", () => (
    <HyperAnchorLink
      small={text("Small", "false")}
      chevron={text("Chevron", "false")}
      onClick={action("clicked button")}
    >
      Click Me!
    </HyperAnchorLink>
  ))
  .addWithJSX("HyperLink button", () => (
    <HyperLink
      to="/new-link"
      small={text("Small", "false")}
      chevron={text("Chevron", "false")}
      onClick={action("clicked button")}
    >
      Link
    </HyperLink>
  ));
