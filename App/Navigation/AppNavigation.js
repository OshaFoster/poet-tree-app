import React from 'react'
import { Button } from 'react-native'
import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation'

import Login from '../Containers/Login'
import Create from '../Containers/Create'
import MyPoems from '../Containers/MyPoems'
import Themes from '../Containers/Themes'
import About from '../Containers/About'
import Account from '../Containers/Account'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const DrawerNav = createDrawerNavigator({
  create: { screen: Create },
  myPoems: { screen: MyPoems },
  themes: { screen: Themes },
  about: { screen: About },
  account: { screen: Account },
}, {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'create',
  })

const HomeStack = createStackNavigator({
  Home: {
    screen: DrawerNav,
    navigationOptions: ({ navigation }) => ({
      headerTitleStyle: { color: 'blue'},
      title: 'Create',
      headerLeft: <Button title='press' onPress={() => navigation.toggleDrawer()}/>
    })
  },
})

export default createAppContainer(HomeStack)
