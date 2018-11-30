import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import DrawerNavigation from '../../navigations/DrawerNavigation';
// import Home from '../'
import { createStackNavigator } from 'react-navigation';
import HomeWork from '../../screens/MySubject/HomeWork/HomeWork';
import Teacher from '../teacher/Teacher';
import Logout from '../../authScreen/Logout/Logout';
import GeoLocation from '../../components/GeoLocation/GeoLocation';
import GetToken from '../../components/GetToken/GetToken';

 
class Student extends Component{ 
    constructor(props){
        super(props); 

    } 

    async getToken(){
        let thistoken=await AsyncStorage.getItem("token");
        console.log(thistoken)
    }
     render(){
        return(
            <View>
                <Text>Hello Student</Text>

                <TouchableOpacity
                    onPress={()=> this.props.navigation.navigate('Logout')}
                >
                    <Text>Logout</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=> this.props.navigation.navigate('GeoLocation')}
                >
                    <Text>GeoLocation</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    // onPress={()=> this.props.navigation.navigate('GetToken')}
                    onPress={()=> this.getToken()}
                >
                    <Text>GetToken</Text>
                </TouchableOpacity>
            </View>
            // <AppStackNavigator />
            // <Text>Hello</Text>
         )
     }
}

const AppStackNavigator = createStackNavigator({  
    DrawerNavigation:{
        screen: DrawerNavigation
      },

    HomeWork:{
      screen:HomeWork
    },

    GeoLocation:{
        screen:GeoLocation
      },

    Logout:{
        screen:Logout
      },

      GetToken:{
          screen:GetToken
      }
  
  },
      navigationOptions={
        headerMode:'none'
  })
 
export default Student;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});