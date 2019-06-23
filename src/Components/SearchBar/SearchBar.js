import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import { Tag } from "../../Components";
import styles from './SearchBarStyles'

export default class SearchBar extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    children: PropTypes.string,
    navigator: PropTypes.object
  }

  componentWillMount() {
    this.scrollY = new Animated.Value(0);

    this.startHeaderHeight = 80;
    this.endHeaderHeight = 50;
    if (Platform.OS == "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
      this.endHeaderHeight = 70 + StatusBar.currentHeight;
    }

    this.animatedHeaderHeight = this.scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [this.startHeaderHeight, this.endHeaderHeight],
      extrapolate: "clamp"
    });

    this.animatedOpacity = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [0, 1],
      extrapolate: "clamp"
    });

    this.animatedTagTop = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [-30, 10],
      extrapolate: "clamp"
    });
  }

  render () {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Animated.View
            style={{
              height: this.animatedHeaderHeight,
              backgroundColor: "white",
              borderBottomWidth: 1,
              borderBottomColor: "#dddddd"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 10,
                backgroundColor: "white",
                marginHorizontal: 20,
                shadowOffset: { width: 0, height: 0 },
                shadowColor: "black",
                shadowOpacity: 0.2,
                elevation: 1,
                marginTop: Platform.OS == "android" ? 30 : null,
                borderRadius: 5
              }}
            >
              <Icon
                name="ios-search"
                size={20}
                style={{ marginVertical: 15, marginHorizontal: 10 }}
              />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Try Search"
                placeholderTextColor="grey"
                style={{ flex: 1, fontWeight: "700", backgroundColor: "white" }}
              />
            </View>
            <Animated.View
              style={{
                flexDirection: "row",
                marginHorizontal: 20,
                position: "relative",
                top: this.animatedTagTop,
                opacity: this.animatedOpacity
              }}
            >
              <Tag title="Guests" />
              <Tag title="Dates" />
            </Animated.View>
          </Animated.View>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    y: this.scrollY
                  }
                }
              }
            ])}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "white",
                paddingTop: 20,
                height: 1000
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  paddingHorizontal: 20
                }}
              >
                What we can help you find, Stanger?
              </Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
