import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
 
class Teacher extends Component{
constructor(props){
    super(props);

} 
     render(){
        return(
            <View style={styles.container}> 
                <Text> Teacher </Text>
             </View>
         )
     }
}

// const AppStackNavigator = createStackNavigator({  
//     DrawerNavigation:{
//         screen: DrawerNavigation
//       },

//     HomeWork:{
//       screen:HomeWork
//     },

//     Teachers:{
//         screen:Teacher
//     }
  
//   },
//       navigationOptions={
//         headerMode:'none'
//   })
 
export default Teacher;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});