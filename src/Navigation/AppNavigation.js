import React from 'react'
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import TestScreen from '../Containers/Test/TestScreen'
import TestDetailScreen from '../Containers/TestDetail/TestDetailScreen'
import ProductScreen from '../Containers/Product/ProductScreen'
import ProductGalleryScreen from '../Containers/ProductGallery/ProductGalleryScreen'
import HelloScreen from '../Containers/Hello/HelloScreen'
import HomeScreen from '../Containers/Home/HomeScreen'
import LaunchScreen from '../Containers/Launch/LaunchScreen'
import SearchBarScreen from '../Containers/SearchBar/SearchBarScreen'

import styles from './Styles/NavigationStyles'

const TestStack = createStackNavigator({
  Test: {
    screen: TestScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Test',
        headerLeft: (
          <Icon
            style={{
              paddingLeft: 10
            }}
            onPress={() => navigation.openDrawer()}
            name='md-menu'
            size={30}
          ></Icon>
        )
      }
    }
  },
  TestDetail: {
    screen: TestDetailScreen
  }
}, {
  defaultNavigationOptions: {
    gesturesEnabled: false
  }
})

const ProductStack = createStackNavigator({
  Product: {
    screen: ProductScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Product',
        headerLeft: (
          <Icon
            style={{
              paddingLeft: 10
            }}
            onPress={() => navigation.openDrawer()}
            name='md-menu'
            size={30}
          ></Icon>
        )
      }
    }
  },
  ProductGallery: {
    screen: ProductGalleryScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Product',
        header: null,
      }
    }
  },
  SearchBar: {
    screen: SearchBarScreen,
    navigationOptions: ({ navigation }) => {
      return {
        header: null,
      }
    }
  },
})

const HelloStack = createStackNavigator({
  Hello: {
    screen: HelloScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Hello',
        headerLeft: (
          <Icon
            style={{
              paddingLeft: 10
            }}
            onPress={() => navigation.openDrawer()}
            name='md-menu'
            size={30}
          ></Icon>
        )
      }
    }
  },
})

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Home',
        headerLeft: (
          <Icon
            style={{
              paddingLeft: 10
            }}
            onPress={() => navigation.openDrawer()}
            name='md-menu'
            size={30}
          ></Icon>
        )
      }
    }
  },
})

const DashboardTabNavigator = createBottomTabNavigator({
  TestStack,
  ProductStack,
  HelloStack,
  HomeStack,
}, {
  navigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index]
    return {
      header: null,
      headerTitle : routeName
    }
  }
})

const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator
}, {
  defaultNavigationOptions: ({ navigation }) => {
    return {
      headerLeft: (
        <Icon
          style={{
            paddingLeft: 10
          }}
          onPress={() => navigation.openDrawer()}
          name='md-menu'
          size={30}
        ></Icon>
      )
    }
  }
})

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: { screen: DashboardStackNavigator },
}, {
  // Default config for all screens
  unmountInactiveRoutes: true,
  initialRouteName: 'Dashboard',
  defaultNavigationOptions: {
    headerStyle: styles.header,
  }
})

const AppSwitchNavigator = createSwitchNavigator({
  Launch: { screen: LaunchScreen },
  Dashboard: { screen: AppDrawerNavigator }
})

export default createAppContainer(AppSwitchNavigator)
