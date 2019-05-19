import React from "react";
import { Dimensions, View } from "react-native";
import { storiesOf } from "@storybook/react-native";
const { height, width } = Dimensions.get("window");
import { CenteredWrapper } from "../../Components";
import Card from "./Card";
import CardDetail from "./CardDetail";

storiesOf("Card", module)
  .add("Default card", () => (
    <CenteredWrapper>
      <Card
        name="Hey there"
        imageUri={require("../../Images/architectural-design-architecture-building-2071216.jpg")}
      />
    </CenteredWrapper>
  ))
  .add("Card Detail", () => (
    <CenteredWrapper>
      <CardDetail
        width={width}
        type="PRIVATE ROOM - 2 BED"
        name="The Cozy Palace"
        price={82}
        rating={4}
      />
    </CenteredWrapper>
  ));
