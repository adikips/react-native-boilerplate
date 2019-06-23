import React, { Component } from 'react'
import { Image, Text , View} from 'react-native'
import PropTypes from 'prop-types'
import AppIntroSlider from 'react-native-app-intro-slider';
import { connect } from 'react-redux';
import styles from './WalkthroughStyles'
import { Colors, Metrics } from '../../Themes';


export default class Walkthrough extends Component {
  static propTypes = {
    data: PropTypes.array,
    navigator: PropTypes.object
  }

  renderItem = (props) => {
    return (
      <View
        style={{
          width: Metrics.screenWidth,
          height: Metrics.screenHeight,
          backgroundColor: props.backgroundColor,
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <Image
          source={props.image}
          resizeMode="contain"
          style={[
            {
              width: 225,
              height: 225,
            },
          ]}
        />
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'bold',
            }}
          >
            {props.title}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 15,
              marginTop: 10,
              marginBottom: 20
            }}
          >
            {props.text}
          </Text>
        </View>
      </View>
    )
  };

  render () {
    console.tron.log(this.props.finishedIntro)
    return (
      <AppIntroSlider
        slides={this.props.data}
        dotStyle={{
          backgroundColor: 'rgba(0, 0, 0, .4)',
        }}
        activeDotStyle={{
          backgroundColor: Colors.primaryColor,
        }}
        bottomButton
        keyExtractor={(item, index) => `key${item.key}`}
        renderItem={this.renderItem}
        onDone={this.props.finishIntro}
      />
    )
  }
}

// const mapStateToProps = ({app}) =>   {
//   return app
// }

// // wraps dispatch to create nicer functions to call within our component
// const mapDispatchToProps = (dispatch) => ({
//   finishIntro: () => dispatch(AppActions.finishIntro())
// })

// export default connect(null, null)(Walkthrough)