import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
 
class GetToken extends Component{
constructor(props){
    super(props);
    getToken();

} 

async getToken(){
    try{
      let thistoken=await AsyncStorage.getItem("token");
     let token=JSON.stringify(thistoken)

      alert(token)

      console.log(thistoken);
    }catch(error){
      alert(error);
      Actions.login();
    }
  }
     render(){
        return(
            <View style={styles.container}> 
                <Text> GetToken </Text>
             </View>
         )
     }
}
 
export default GetToken;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});