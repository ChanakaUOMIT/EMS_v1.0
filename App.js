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
import CalendersList from './src/components/Calender/CalendersList';
import Attendence from './src/screens/Attendence/Attendence';
// import Loginnew from './src/authScreen/Login/Loginnew';
import LoginEMS from './src/authScreen/Login/LoginEMS';
import Student from './src/landingPages/student/Student';
import Parent from './src/landingPages/parent/Parent';
import Teacher from './src/landingPages/teacher/Teacher';
import Logout from './src/authScreen/Logout/Logout';
import GeoLocation from './src/components/GeoLocation/GeoLocation';

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

  // DrawerNavigation:{
  //   screen: DrawerNavigation
  // },
  // GeoLocation:{
  //   screen:GeoLocation
  // },

  LoginEMS:{
    screen:LoginEMS
  },
//  Loginnew:{
//     screen:Loginnew
//   },

  // DrawerNavigation:{
  //   screen: DrawerNavigation
  // },

  Student:{
    screen:Student
  },
  
  Parent:{
    screen:Parent
  },
  
  Teacher:{
    screen:Teacher
  },

  Logout:{
    screen:Logout
  },

  // DrawerNavigation:{
  //   screen: DrawerNavigation
  // },

  HomeWork:{
    screen:HomeWork
  },

  SideDrawer:{
    screen:SideDrawer
  },

  Calender:{
    screen:CalendersList
  },

  Attendence:{
    screen:Attendence
  },

  LandingTemplate:{
    screen:LandingTemplate
  },
  GeoLocation:{
    screen:GeoLocation
  },

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
