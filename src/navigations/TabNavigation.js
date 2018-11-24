import React from 'react';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconIonic from 'react-native-vector-icons/Ionicons';
import MySubject from '../screens/MySubject/MySubject';
import Notice from '../screens/Notice/Notice';
import LocationMap from '../screens/Location/Location';
import Attendence from '../screens/Attendence/Attendence';
import Payment from '../screens/Payment/Payment'
import colors from '../styles/colors';

const TabNavigation = createMaterialTopTabNavigator({
    MySubject:{
        screen:MySubject,
        navigationOptions: {
            tabBarLabel: "",
            tabBarIcon: ({ tintColor }) => (
                <IconIonic
                    name="md-book"
                    size={30}
                    color={tintColor} />
            )
        }
    },

    Notice:{
        screen:Notice,
        navigationOptions: {
            tabBarLabel: "",
            tabBarIcon: ({ tintColor }) => (
                <IconIonic
                    name="md-notifications"
                    size={30}
                    color={tintColor} />
            )
        }
    },

    LocationMap:{
        screen:LocationMap,
        navigationOptions: {
            tabBarLabel: "",
            tabBarIcon: ({ tintColor }) => (
                <IconIonic
                    name="md-locate"
                    size={30}
                    color={tintColor} />
            )
        }
    },
    Attendence:{
        screen:Attendence,
        navigationOptions: {
            tabBarLabel: "",
            tabBarIcon: ({ tintColor }) => (
                <IconIonic
                    name="md-checkmark-circle"
                    size={30}
                    color={tintColor} />
            )
        }
    },
    Payment:{
        screen:Payment,
        navigationOptions: {
            tabBarLabel: "",
            tabBarIcon: ({ tintColor }) => (
                <IconIonic
                    name="md-card"
                    size={30}
                    color={tintColor} />
            )
        }
    }

},{
    tabBarPosition:'bottom',
    // initialRouteName:'Notice',
    animationEnabled:true,
    tabBarOptions: {
        showIcon:true,
        // labelStyle: {
        //   fontSize: 12,
        // },
        // tabStyle: {
        //   width: 100,
        // },
        style: {
          backgroundColor: colors.greenPrimary,
          height:60,

        },
      }
});

export default createStackNavigator({ TabNavigation }, {headerMode:"none"});