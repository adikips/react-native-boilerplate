import React from "react";
import { 
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  Text,
  Image,
  Dimensions,
  Animated
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { storiesOf } from "@storybook/react-native";
import { CenteredWrapper } from "../../Components";
import SearchBar from "./SearchBar";

const { height, width } = Dimensions.get("window");

storiesOf("SearchBar", module)
  .add("Animated label", () => (
    <CenteredWrapper>
      <SearchBar />
    </CenteredWrapper>
  ))
