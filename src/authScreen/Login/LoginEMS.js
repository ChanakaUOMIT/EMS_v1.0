import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage, 
  Image
} from 'react-native';
import {StackNavigator} from 'react-navigation';



export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username : '',
      password : '',
    }
  }

  //Customersize Navigation
  static navigationOptions={
    //disable header
    header: null
    }
/*
  componentDidMount(){
      console.log('log');
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {

    var value =await AsyncStorage.getItem('token_id');
    if (value !== null){
      this.props.navigation.navigate('profile');
    }

  }*/

  render() {
    return (
      
      <View style = {styles.container}>
         {/* <Image
              style={styles.image}
              source={require('../assert/image/logo.png')}
            /> */}
        <Text style={styles.headder}> Login into EMS </Text>
        <TextInput
              style = {styles.TextInput} placeholder = 'Username'
              onChangeText={(username) => this.setState({username})}
              underlineColorAndorid = 'transparent'
        />
        <TextInput
              style = {styles.TextInput} placeholder = 'password'
              onChangeText={(password) => this.setState({password})}
              underlineColorAndorid = 'transparent'
              secureTextEntry={true}
            />
            
            <TouchableOpacity 
                style={styles.btn} 
                onPress={this.login} >                    
                        <Text style={styles.loginTxt}>Login</Text>     
            </TouchableOpacity>

            {/* <TouchableOpacity 
                //style={styles.btn} 
                onPress={() =>this.props.navigation.navigate('forgotPassword')} >                    
                        <Text style={styles.txt}>Forgot Password</Text>     
            </TouchableOpacity> */}

            {/* <TouchableOpacity 
                //style={styles.btn} 
                onPress={() =>this.props.navigation.navigate('student')} >                    
                        <Text style={styles.txt}>skipp >></Text>     
            </TouchableOpacity>

            <TouchableOpacity 
                //style={styles.btn} 
                onPress={() =>this.props.navigation.navigate('parent')} >                    
                        <Text style={styles.txt}>skipp parent>></Text>     
            </TouchableOpacity> */}

      </View>
      
    );
  }/*

  register = () =>{
    this.props.navigation.navigate('Register');
  }
*/
  login = () => {
      console.log('Login');
      console.log(this.state.username)
      
      url = 'https://ems.aladinlabs.com/api/auth/login';
      console.log(url);
      
    try {
       // fetch('http://192.168.43.148:3000/users/authenticate',{
        fetch(url,{
         method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        //    'Accept':'application/json',
        //    'Content-Type' : 'application/json',
          //'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY1NmIzMGRjZGQzODZiYjA4YmYzOTIzMDRhOGY1ZDNmZjZiNjhmNmM0NTQyNmUwMWQwNmM4NjRlMDdjMjg4ZjQ2MmQ1MTQzNzUyMmJhYjdlIn0.eyJhdWQiOiIxIiwianRpIjoiNjU2YjMwZGNkZDM4NmJiMDhiZjM5MjMwNGE4ZjVkM2ZmNmI2OGY2YzQ1NDI2ZTAxZDA2Yzg2NGUwN2MyODhmNDYyZDUxNDM3NTIyYmFiN2UiLCJpYXQiOjE1NDAxODA1MDIsIm5iZiI6MTU0MDE4MDUwMiwiZXhwIjoxNTcxNzE2NTAyLCJzdWIiOiIiLCJzY29wZXMiOltdfQ.LmqAQ8hRF0N2pEwz9KTRAVqcgQ_cXcythwec7lJFhlTEXlBJGCpIpqZQ8_16iR0suRICwg4s5-f9IzI4YaKZqRMTDxy-XGaNGKzML6yAsV6VX6oZGyBK7U94G5AuAPnBn_2ZgFiw4BVcuoc157wkRuCVnh6zpoKXyDhFlUHFnOOAiEB5f11xpTO7u21-4giTncy43bm6kzPyJhfwaYnFV4caFu0ThwH4eiOB3vYtQC5iCHdcIFFWmV6KuZR_uIkxm9rdLhqjKvxQBqjvlyUN-tHNy1po4RxGsxCkF-UFbr_qOJANSZF1YXo4d-m3EnfGOxPxT_uIkqXRVx_QHNv_DsxxYjn2ux1PVHBQi2nttBCEw-Qpp3QMMPIOooRmxtN9hcncZGqd8jdZh033Lla6Z0TnQjlmJTauszeDRnCF2bhi5xjeomtWJCmAtiG9kYBB2mbdaWn1hF4VOiuR95QJCD7iID-Af-6BNB3ziLmZ21KexbqFIdfRCqen1xvlpsoxWhgKQFKhnikeIYHAcAxo1Kt9ByNDkHpOhkPuP-YWl_rG6FlGDuuQj21kaAlZPV3T9BPRJV4ALoYOzZdtVqX6awkoyAaKwQ10JYAD-1J3y1ySh9NuSw4GZiDo0J3XMe1qN-kk2PQrtA6xIfYgI8Aw5hM4wH0kEJjbPo59a_pUMOE',
        },
        body:JSON.stringify({
          email : this.state.username,
          password : this.state.password,
        })
      })
      .then((response) => response.json())
      .then((response)=> console.log(response)) 
      .then((response)=> console.log(response.access_token)) /*
      .then((response) => {
          if(response.user){
              if(response.user.role == 'Parent'){
                if(response.access_token){
                AsyncStorage.setItem('token_id', response.access_token);
                this.props.navigation.navigate('parent');
                }
                } else if(response.user.role == 'Student'){
                    if(response.access_token){
                    AsyncStorage.setItem('token_id', response.access_token);
                    this.props.navigation.navigate('student');
                    }
                    } else {
                    alert("Invalid User");
                }
            }
        else{
          alert(response.error);
        }
      })*/
      .done();
    } catch (error) {
        alert('No network Connection Found');
    }
    
  }
/*
    forgotPasswordHandler = () =>{
     this.props.navigation.navigate('forgotPassword');
   }*/
}

const styles = StyleSheet.create({
  wrapper: {
    flex:1,
  },
  image:{
    width:125,
    height: 125
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
  },
  
  headder:{
    fontSize : 24,
    marginBottom: 60,
    //color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  TextInput:{
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 15
    //backgroundColor: '#fff',
  },
  btn: {
    marginTop: 5,
    alignSelf: 'stretch',
    backgroundColor: '#130643',
    padding:10,
    alignItems: 'center',
    marginBottom: 5,
    width:300,
    borderRadius: 25,
  },
  loginTxt:{
      fontSize:20,
      color:'#fff',
      fontWeight:'500'
  },

  txt:{
    fontSize:15,
    color:'#130643',
    fontWeight:'500'
},

  forgottenPassword:{
    //alignItems:'left'
  }
});
