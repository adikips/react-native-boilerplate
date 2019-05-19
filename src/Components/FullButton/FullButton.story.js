import React from "react";
import { storiesOf } from "@storybook/react-native";
import { CenteredWrapper } from "../../Components";
import FullButton from "./FullButton";

storiesOf("FullButton", module)
  .add("Default", () => (
    <CenteredWrapper>
      <FullButton text="A simple button" />
    </CenteredWrapper>
  ))
  .add("Custom Style", () => (
    <CenteredWrapper>
      <FullButton text="Style Me Up!" styles={{ backgroundColor: "blue" }} />
    </CenteredWrapper>
  ));
