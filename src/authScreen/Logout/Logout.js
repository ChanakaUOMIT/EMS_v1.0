import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    AsyncStorage
} from 'react-native';
 
class Logout extends Component{
    constructor(props){
        super(props);
        // this.removeToken();
        this.getToken();
        this.getAns();
    } 

    state={
        ans:'',
        token:""
      };

      async removeToken(){
        try{
            // let thistoken=await AsyncStorage.removeItem("token");
            await AsyncStorage.removeItem("token");
            alert("You are sucessfuly loggedout");
            // Actions.login();
          this.props.navigation.navigate('LoginEMS');
            //alert(a)
        }catch(error){
            alert("token get error");
            // Actions.pop();
            this.props.navigation.pop()
        }
  }
    
      handletoken=(text)=>{
        this.setState({token:text})
        // console.log("Token in log out "+this.state.token)
      }

    async getToken(){
        try{
          let thistoken=await AsyncStorage.getItem("token");
         // let token=JSON.stringify(thistoken)
            console.log("This token  "+thistoken)
            // alert("This token fhf  "+thistoken)

        //   alert(a)
          if(thistoken!=null){
            this.handletoken(thistoken);
          }else{
            // Actions.login();  
          this.props.navigation.navigate('LoginEMS');

          }
        }catch(error){
          alert(error);
          this.props.navigation.navigate('LoginEMS');
        }
      }

    getAns(){
        Alert.alert(
            'Logout comfirmation',
            'do you want to logout?',
            [
            {text:'Yes', onPress:()=>this.requestlogout()},
            // {text:'No', onPress:()=>this.props.navigation.pop()}
            {text:'No', onPress:()=>this.props.navigation.navigate('Student')}
            ],
            { cancelable: false}
        )
    }

    requestlogout(){
        const url='https://ems.aladinlabs.com/api/auth/logout';
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer '+ this.state.token,
                'X-Requested-With': 'XMLHttpRequest'
            },
            
        })
      
            .then((response) => response.json())
            .then((res) => {
      
                if (res.message === "Successfully logged out") {
                  this.removeToken()
                  
                } else {
                    alert(res.msg+" else")
                }
            })
            .done();
    }

     render(){
        return(
            <View style={styles.container}> 
                {/* <Text> Logout </Text> */}
             </View>
         )
     }
}
 
export default Logout;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});