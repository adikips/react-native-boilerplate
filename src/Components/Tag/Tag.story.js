import React from "react";
import { storiesOf } from "@storybook/react-native";
import { CenteredWrapper } from "../../Components";
import Tag from "./Tag";

storiesOf("Tag", module)
  .add("Default", () => (
    <CenteredWrapper>
      <Tag title="ALERT ALERT" />
    </CenteredWrapper>
  ))
  .add("Hidden", () => (
    <CenteredWrapper>
      <Tag title="ALERT ALERT" show={false} />
    </CenteredWrapper>
  ))
  .add("Custom Style", () => (
    <CenteredWrapper>
      <Tag title="ALERT ALERT" style={{ backgroundColor: "red" }} />
    </CenteredWrapper>
  ));
