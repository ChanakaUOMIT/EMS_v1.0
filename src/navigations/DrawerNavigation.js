import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image} from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TabNavigation from './TabNavigation';
import Profile from '../screens/Profile/Profile'
import { Right } from 'native-base';
// import Settings from './Settings';  //Tab Nav
// import Profile from './Profile'; //Stack Nav

const CustomDrawerComponent = (props)=>(
  <SafeAreaView>
      <View style={{height:150, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
          <Image source={require('../Images/user.jpg')} style={{height:120, width:120, borderRadius:60}} />
      </View>
      <ScrollView>
          <DrawerItems {...props} />
      </ScrollView>
  </SafeAreaView>
)


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
  drawerPosition :"right",
  contentComponent:CustomDrawerComponent

});  

