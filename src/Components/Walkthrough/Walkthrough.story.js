import React from "react";
import { storiesOf } from "@storybook/react-native";
import { CenteredWrapper } from "../../Components";
import Walkthrough from "./Walkthrough";

storiesOf("Walkthrough", module)
  .add("Default button", () => (
    <CenteredWrapper>
      <Walkthrough
        text="A simple button"
        onPress={() => window.alert("Walkthrough Clicked")}
      />
    </CenteredWrapper>
  ))
  .add("Walkthrough text as children", () => (
    <Walkthrough onPress={() => window.alert("Walkthrough Clicked")}>
      Text as children
    </Walkthrough>
  ));
