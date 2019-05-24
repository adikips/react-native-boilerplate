import React from "react";
import { storiesOf } from "@storybook/react-native";
import { CenteredWrapper } from "../../Components";
import Button from "./Button";

storiesOf("Button", module)
  .add("Default button", () => (
    <CenteredWrapper>
      <Button
        text="A simple button"
        onPress={() => window.alert("Button Clicked")}
      />
    </CenteredWrapper>
  ))
  .add("Button text as children", () => (
    <Button onPress={() => window.alert("Button Clicked")}>
      Text as children
    </Button>
  ));
