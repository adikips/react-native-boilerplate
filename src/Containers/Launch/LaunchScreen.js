import React, { Component } from 'react'
import { ScrollView, Image, View, TextInput, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import { 
  Text,
  Button, 
  Walkthrough} from '../../Components' 
import { Images, Metrics } from '../../Themes'

// Styles
import styles from './LaunchScreenStyles'

const slides = [
  {
    key: 'specification',
    title: 'Part Specification',
    text: 'You can find more detailed specification',
    image: require('../../Images/business-card.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'compatibility',
    title: 'Part Compatibility',
    text: 'Find part compatibility with other part',
    image: require('../../Images/checklist.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'build',
    title: 'Part Build',
    text: 'Build your own PC, share it to friends, and get commendation',
    image: require('../../Images/education.png'),
    backgroundColor: '#69af50',
  }
];

export default class LaunchScreen extends Component {

  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'blue'
    }
  }

  constructor(props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Walkthrough data={slides}></Walkthrough>
      </View>

    )
  }
}
