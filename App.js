/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import DrawerNavigation from './src/navigations/DrawerNavigation';
import LandingTemplate from './src/screens/Template/LandingTemplate';

export default class App extends Component{
  render() {
    return (
      // <View>
      //   <DrawerNavigation />
      // </View>
      <AppStackNavigator />

    );
  }
}

const AppStackNavigator = createStackNavigator({
  DrawerNavigation:{
    screen: DrawerNavigation
  },

  // LandingTemplate:{
  //   screen:LandingTemplate
  // }

},
    navigationOptions={
      headerMode:'none'
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  
});
