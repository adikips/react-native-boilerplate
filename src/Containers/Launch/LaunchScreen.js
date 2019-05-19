import React, { Component } from 'react'
import { ScrollView, Image, View } from 'react-native'
import { 
  Text,
  RoundedButton } from '../../Components' 
import { Images } from '../../Themes'

// Styles
import styles from './LaunchScreenStyles'

export default class LaunchScreen extends Component {

  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'blue'
    }
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite.
            </Text>
          </View>
          <Text>asdasd</Text>
          <RoundedButton onPress={() => this.props.navigation.navigate('Dashboard')}/>

        </ScrollView>
      </View>
    )
  }
}
