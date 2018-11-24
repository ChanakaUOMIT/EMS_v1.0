import React from 'react';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import MySubject from '../screens/MySubject/MySubject';
import Notice from '../screens/Notice/Notice';
import LocationMap from '../screens/Location/Location';
import Attendence from '../screens/Attendence/Attendence';
import Payment from '../screens/Payment/Payment'

const TabNavigation = createMaterialTopTabNavigator({
    MySubject:{
        screen:MySubject,
    },

    Notice:{
        screen:Notice,
    },

    LocationMap:{
        screen:LocationMap,
    },
    Attendence:{
        screen:Attendence,
    },
    Payment:{
        screen:Payment,
    }

},{
    tabBarPosition:'bottom',
    tabBarOptions: {
        // labelStyle: {
        //   fontSize: 12,
        // },
        // tabStyle: {
        //   width: 100,
        // },
        style: {
          backgroundColor: '#0d47a1',
        },
      }
});

export default createStackNavigator({ TabNavigation }, {headerMode:"none"});