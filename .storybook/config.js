import { configure, setAddon, addDecorator } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import { withInfo } from "@storybook/addon-info";

addDecorator(withInfo);
setAddon(JSXAddon);

const req = require.context("../packages", true, /.stories.tsx$/);
function loadStories() {
  require("./welcomeStory");
  req.keys().forEach(req);
}

configure(loadStories, module);
