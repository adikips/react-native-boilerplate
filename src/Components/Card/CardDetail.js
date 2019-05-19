import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Image, Text, Dimensions } from "react-native";
import StarRating from "react-native-star-rating";
import styles from "./CardDetailStyles";

const { height, width } = Dimensions.get("window");

export default class CardDetail extends Component {
  static propTypes = {
    width: PropTypes.number,
    rating: PropTypes.number,
    type: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number
  };

  render() {
    return (
      <View
        style={{
          width: this.props.width / 2 - 30,
          height: this.props.width / 2 - 30,
          borderWidth: 0.5,
          borderColor: "#ddd",
          marginBottom: 20
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            source={require("../../Images/apartment-architecture-building-1563234.jpg")}
            style={{
              flex: 1,
              height: null,
              width: null,
              resizeMode: "cover"
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "space-evenly",
            paddingLeft: 10
          }}
        >
          <Text style={{ fontSize: 10, color: "#b63838" }}>
            {this.props.type}
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>
            {this.props.name}
          </Text>
          <Text style={{ fontSize: 10 }}>{this.props.price}</Text>
          <StarRating
            disable={true}
            maxStars={5}
            rating={this.props.rating}
            starSize={10}
          />
        </View>
      </View>
    );
  }
}
