import React, { Component } from 'react'
import { ScrollView, Image, View, TextInput, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import { 
  Text,
  Button } from '../../Components' 
import { Images, Metrics } from '../../Themes'

// Styles
import styles from './LaunchScreenStyles'

export default class LaunchScreen extends Component {

  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'blue'
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      isLoginForm: true
    }
  }

  loginToggle = () => {
    const { isLoginForm } = this.state;
    this.setState({
      isLoginForm: !isLoginForm
    })
    console.tron.log('click')
  }

  renderLoginForm = () => {
    return (
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.tron.log(values)}
      >
        {props => (
          <View style={{
            margin: 20,
          }}>
            <TextInput
              onChangeText={props.handleChange('email')}
              onBlur={props.handleBlur('email')}
              value={props.values.email}
              style={{
                borderWidth: 0.5,
                borderColor: '#fff',
                padding: 5,
                paddingHorizontal: 10,
                backgroundColor: '#ddd',
                marginTop: 10
              }}
              placeholder="email"
            />
            <TextInput
              onChangeText={props.handleChange('password')}
              onBlur={props.handleBlur('password')}
              value={props.values.password}
              style={{
                borderWidth: 0.5,
                borderColor: '#fff',
                padding: 5,
                paddingHorizontal: 10,
                backgroundColor: '#ddd',
                marginTop: 10
              }}
              placeholder="password"
            />
            <Text style={{
              textAlign: 'right',
              marginTop: 10,
              color: '#333'
            }}>Forgot your password?</Text>
            {/* props.handleSubmit // change to this later */}
            <Button onPress={() => this.props.navigation.navigate('Dashboard')}>Login</Button>
          </View>
        )}
      </Formik>
    )
  }

  renderRegisterForm = () => {
    return (
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.tron.log(values)}
      >
        {props => (
          <View style={{
            margin: 20,
          }}>
            <TextInput
              onChangeText={props.handleChange('username')}
              onBlur={props.handleBlur('username')}
              value={props.values.username}
              style={{
                borderWidth: 0.5,
                borderColor: '#fff',
                padding: 5,
                paddingHorizontal: 10,
                backgroundColor: '#ddd',
                marginTop: 10
              }}
              placeholder="username"
            />
            <TextInput
              onChangeText={props.handleChange('email')}
              onBlur={props.handleBlur('email')}
              value={props.values.email}
              style={{
                borderWidth: 0.5,
                borderColor: '#fff',
                padding: 5,
                paddingHorizontal: 10,
                backgroundColor: '#ddd',
                marginTop: 10
              }}
              placeholder="email"
            />
            <TextInput
              onChangeText={props.handleChange('password')}
              onBlur={props.handleBlur('password')}
              value={props.values.password}
              style={{
                borderWidth: 0.5,
                borderColor: '#fff',
                padding: 5,
                paddingHorizontal: 10,
                backgroundColor: '#ddd',
                marginTop: 10
              }}
              placeholder="set password"
            />
            <Button onPress={() => this.props.navigation.navigate('Dashboard')}>Register</Button>
          </View>
        )}
      </Formik>
    )
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.splashScreenBG} style={styles.backgroundImage} resizeMode='cover' />
        <Image source={Images.logo} resizeMode='contain' style={{
          width: 250,
          height: 180,
          alignSelf: 'center',
          marginTop: 50
        }}/>
        <Text style={{
          textAlign: 'center',
          fontSize: 28,
          color: '#333'
        }}>Moshi moshi</Text>
        {
          this.state.isLoginForm ? this.renderLoginForm() : this.renderRegisterForm()
        }
        <TouchableOpacity
          onPress={() => this.loginToggle()}>
          <Text style={{
            textAlign: 'center',
            marginTop: 10,
            color: '#333'
          }}>{ this.state.isLoginForm ? 'i am new to moshi moshi' : 'i already have account'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
