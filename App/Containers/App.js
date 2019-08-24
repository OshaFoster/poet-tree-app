import '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'

// create our store
const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */

import firebase from 'firebase/app'
import '@firebase/firestore'
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

firebase.initializeApp({
  apiKey: 'AIzaSyBBcpAywBVDPhG-4vehBvIbHPtpkeQNnIU',
  authDomain: 'poet-tree.firebaseapp.com',
  databaseURL: 'https://poet-tree.firebaseio.com',
  projectId: 'poet-tree',
  storageBucket: 'poet-tree.appspot.com',
  messagingSenderId: '721416476712',
  appId: '1:721416476712:web:2679f51b047f4d87',
})

export const db = firebase.firestore()


class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
