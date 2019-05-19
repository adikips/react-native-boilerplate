import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import Reactotron from 'reactotron-react-native'
// Styles
import styles from './TestScreenStyle'

class TestScreen extends Component {

  componentDidMount() {
  }

  render () {
    Reactotron.log('asd')
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <TouchableOpacity
           onPress={() => this.props.navigation.navigate('TestDetail')}
          >
            <Text>Click to Test Detail Screen</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestScreen)
