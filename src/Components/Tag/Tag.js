import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import styles from "./TagStyles";

export default class Tag extends Component {
  static defaultProps = { show: true };

  static propTypes = {
    title: PropTypes.string
  };

  render() {
    const { title } = this.props;
    return (
      <View
        style={{
          minHeight: 20,
          minWidth: 20,
          padding: 5,
          backgroundColor: "white",
          borderColor: "#ddd",
          borderWidth: 1,
          borderRadius: 2,
          marginRight: 5
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            fontSize: 10
          }}
        >
          {title}
        </Text>
      </View>
    );
  }
}
