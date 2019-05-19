import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Image, Text } from "react-native";
import styles from "./CardStyles";

export default class Card extends Component {
  static propTypes = {
    name: PropTypes.string,
    imageUri: PropTypes.any
  };

  render() {
    return (
      <View
        style={{
          height: 130,
          width: 130,
          marginLeft: 20,
          borderWidth: 0.5,
          borderColor: "#ddd"
        }}
      >
        <View style={{ flex: 2 }}>
          <Image
            source={this.props.imageUri}
            style={{
              flex: 1,
              height: null,
              width: null,
              resizeMode: "cover"
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              flex: 1,
              paddingLeft: 10,
              paddingTop: 10
            }}
          >
            {this.props.name}
          </Text>
        </View>
      </View>
    );
  }
}
