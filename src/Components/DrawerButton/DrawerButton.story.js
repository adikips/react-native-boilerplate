import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";

import { CenteredWrapper } from "../../Components";
import DrawerButton from "./DrawerButton";

storiesOf("DrawerButton", module).add("Default", () => (
  <CenteredWrapper>
    <View style={{ backgroundColor: "black" }}>
      <DrawerButton text="Drawer Button" onPress={() => {}} />
    </View>
  </CenteredWrapper>
));
