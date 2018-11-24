import React from 'react'
import { createDrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TabNavigation from './TabNavigation';
import Profile from '../screens/Profile/Profile'
import { Right } from 'native-base';
// import Settings from './Settings';  //Tab Nav
// import Profile from './Profile'; //Stack Nav

export default createDrawerNavigator({
  Home: {
    screen: TabNavigation, 
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => <Icon name="cog" size={17} />,
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      drawerLabel: 'Profile',
      drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} />,
    }
  },
},
{
  drawerPosition :"right"
});  