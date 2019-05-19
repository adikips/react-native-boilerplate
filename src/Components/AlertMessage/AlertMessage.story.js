import React from "react";
import { storiesOf } from "@storybook/react-native";
import { CenteredWrapper } from "../../Components";
import AlertMessage from "./AlertMessage";

storiesOf("AlertMessage", module)
  .add("Default", () => (
    <CenteredWrapper>
      <AlertMessage title="ALERT ALERT" />
    </CenteredWrapper>
  ))
  .add("Hidden", () => (
    <CenteredWrapper>
      <AlertMessage title="ALERT ALERT" show={false} />
    </CenteredWrapper>
  ))
  .add("Custom Style", () => (
    <CenteredWrapper>
      <AlertMessage title="ALERT ALERT" style={{ backgroundColor: "red" }} />
    </CenteredWrapper>
  ));
