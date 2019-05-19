import React, { Component } from "react";
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
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Card, CardDetail, Tag } from "../../Components";

const { height, width } = Dimensions.get("window");

class SearchBarScreen extends Component {
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

  render() {
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
                paddingTop: 20
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
              <View
                style={{
                  height: 130,
                  marginTop: 20,
                  paddingRight: 20
                }}
              >
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Card
                    name="Home"
                    imageUri={require("../../Images/architectural-design-architecture-building-2071216.jpg")}
                  />
                  <Card
                    name="Experiences"
                    imageUri={require("../../Images/balance-body-close-up-2043590.jpg")}
                  />
                  <Card
                    name="Restaurant"
                    imageUri={require("../../Images/apartment-architecture-building-1563234.jpg")}
                  />
                </ScrollView>
              </View>
              <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "700"
                  }}
                >
                  Introducing Airbnb Plus
                </Text>
                <Text
                  style={{
                    fontWeight: "100",
                    marginTop: 10
                  }}
                >
                  A new selections of homes verified for quality and comfort
                </Text>
                <View
                  style={{
                    width: width - 40,
                    height: 200,
                    marginTop: 20
                  }}
                >
                  <Image
                    source={require("../../Images/architectural-design-architecture-building-2071216.jpg")}
                    style={{
                      flex: 1,
                      height: null,
                      width: null,
                      resizeMode: "cover",
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: "#ddd"
                    }}
                  />
                </View>
              </View>
              <View style={{ marginTop: 40 }}>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "700",
                    paddingHorizontal: 20
                  }}
                >
                  Homes around the world
                </Text>
                <View
                  style={{
                    paddingHorizontal: 20,
                    marginTop: 20,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between"
                  }}
                >
                  <CardDetail
                    width={width}
                    type="PRIVATE ROOM - 2 BED"
                    name="The Cozy Palace"
                    price={82}
                    rating={4}
                  />
                  <CardDetail
                    width={width}
                    type="PRIVATE ROOM - 2 BED"
                    name="The Cozy Palace"
                    price={82}
                    rating={4}
                  />
                  <CardDetail
                    width={width}
                    type="PRIVATE ROOM - 2 BED"
                    name="The Cozy Palace"
                    price={82}
                    rating={4}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
export default SearchBarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});