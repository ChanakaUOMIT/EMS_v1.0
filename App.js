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
import Login from './src/authScreen/Login/Login';
import HomeWork from './src/screens/MySubject/HomeWork/HomeWork';
import SideDrawer from './src/components/SideDrawer/SideDrawer';

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
  // Login:{
  //   screen:Login
  // },

  DrawerNavigation:{
    screen: DrawerNavigation
  },

  HomeWork:{
    screen:HomeWork
  },

  SideDrawer:{
    screen:SideDrawer
  }

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
