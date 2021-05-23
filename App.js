import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Facebook from './screens/Facebook';
import Insta from './screens/Insta';

export default function App() {
  return (
    <AppContainer/>
  );
}

const tabNavigator = createBottomTabNavigator({
  Facebook: {screen: Facebook},
  Instagram: {screen: Insta}
})

const AppContainer = createAppContainer(tabNavigator)