import React from "react";
import { storiesOf } from "@storybook/react-native";
import { CenteredWrapper } from "../../Components";
import RoundedButton from "./RoundedButton";

storiesOf("RoundedButton", module)
  .add("Default button", () => (
    <CenteredWrapper>
      <RoundedButton
        text="A simple rounded button"
        onPress={() => window.alert("Button Clicked")}
      />
    </CenteredWrapper>
  ))
  .add("Button text as children", () => (
    <RoundedButton onPress={() => window.alert("Button Clicked")}>
      Text as children
    </RoundedButton>
  ));
