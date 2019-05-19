import React from "react";
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";

// Styles
import styles from "./ProductScreenStyle";

class ProductScreen extends React.PureComponent {
  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ProductGallery")}
          >
            <Text>Click to Test Product Gallery Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SearchBar")}
          >
            <Text>Click to View Animated Search Bar</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    // ...redux state to props here
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductScreen);
