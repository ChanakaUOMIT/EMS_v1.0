import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage, 
  Image,
} from 'react-native';
import {StackNavigator} from 'react-navigation';



export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username : '',
      password : '',
      currentToken:''
    }
    // this.checkToken();
    this.login();
    // this.getToken();
    // _retrieveData();
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

//   async checkToken(){
//     try{
//       let thistoken=await AsyncStorage.getItem("token");
//     //   let a=JSON.stringify(thistoken)
//     //   alert(a)
//     //   alert(thistoken)
//       if(thistoken!=null){
//         // Actions.screen1()
//         // alert("emplty")
//         // alert("in check login " +thistoken)
//     console.log("checktoken try");
//         get_user_details(thistoken)

//       }
//     }catch(error){
//     //   alert("token get error");
//     console.log("checktoken catch");
//     this.login();

//     }
//   }

  async setToken(mytoken){
    try{
      await AsyncStorage.setItem("token",mytoken);
    //   alert('Token saves asyn');
      this.getToken();
    }catch(error){
      alert("token store error");
    }
  }

//   _storeData = async (mytoken) => {
//     try {
//       await AsyncStorage.setItem('token', mytoken);
//       console.log('saved')
//     } catch (error) {
//       // Error saving data
//         alert("token store error");
//     }
//   }

  async getToken(){
    try{
      let thistoken=await AsyncStorage.getItem("token");
    //   let a=JSON.stringify(thistoken)
    //   alert(a)
    //   alert(thistoken)
      if(thistoken!=null){
        // Actions.screen1()
        // alert("emplty")
      }
    }catch(error){
      alert("token get error");
    }
  }
// _retrieveData = async (token) => {
//     try {
//       const value = await AsyncStorage.getItem(token);
//       if (value !== null) {
//         // We have data!!
//         console.log("********** ASy "+value);
//       }
//      } catch (error) {
//        // Error retrieving data
//      }
//   }

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

datailshandler(details){
    console.log(details)
    console.log(details.email)
    console.log(details.roles)
    // console.log(details.roles.length)
    // console.log(details.roles[0])
    // console.log(details.roles[0].name)
    // console.log(details.roles[1])
    //  for(k in details){
    //     console.log(roles[k].name);
    //     // console.log(d.k);
    // }
    const len= details.roles.length

    if(len === 'undefined'){
        console.log("*************** This is undefined ***************")
    }
    var i;
    for(i=0 ;i<len;i++){
        console.log(details.roles[i].name)
        if(details.roles[i].name === "Student")  {
            console.log("Hi i am Student");
            this.props.navigation.navigate('Student');
            break;
        }  
        else if(details.roles[i].name === "Parent")  {
            console.log("Hi i am Parent");
            // this.props.navigation.navigate('Parent');
            this.props.navigation.navigate('Parent');
            break;
        }  
        else if(details.roles[i].name === "Teacher")  {
            console.log("Hi i am Teacher");
            this.props.navigation.navigate('Teacher');
            break;
        }
        // else{
        //     alert("Check ur email n password")
        // }      
    }
}
get_user_details(token){
    console.log("Bearer "+token);

    const details_url='https://ems.aladinlabs.com/api/auth/user';
    console.log(details_url);  

    try {
        fetch(details_url,{
         method:'GET',
        headers: {
            'Authorization': 'Bearer '+token,
            'X-Requested-With': 'XMLHttpRequest'
        },
      })
    //   .then((response)=> console.log(response)) 
      .then((res) => res.json())
    // .then((response)=> console.log(response.roles)) 

      .then((response) => {
        this.datailshandler(response)
       })
      .done();
    } catch (error) {
        alert('No network Connection Found user details');
    }
}

datahandler(data){
    console.log(data);
    console.log(data.message);
    if(data.message === 'Unauthorized'){
        console.log('Check ur username n email bcoz Unauthorized')
        alert("Check ur username n email bcoz Unauthorized")
        return
    }
    const token=data.access_token;
    this.setToken(data.access_token);
    // this.state.currentToken=this.setStateawait AsyncStorage.getItem("token");
    // console.log(" ********* "+this.state.currentToken+" ***** ");
    // (username) => this.setState({username})
    // _storeData(token);
    // console.log("Token "+token);
    // console.log(data.expires_at);
    // console.log(data.token_type);

    this.get_user_details(token);
/*
    const details_url='https://ems.aladinlabs.com/api/auth/user';
    console.log(details_url);      
    try {
        fetch(url,{
         method:'GET',
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU4YWNjZWViMWY5ZDc5MDc0YTAwNTY3YTQ1ZGYzZTI4Y2E0YWViMWM5MzJmYTlhZTMyYWEyMzEyMjU4MzEwZjJhYWU2N2IyMmEzZWRiYjFiIn0.eyJhdWQiOiIxIiwianRpIjoiNThhY2NlZWIxZjlkNzkwNzRhMDA1NjdhNDVkZjNlMjhjYTRhZWIxYzkzMmZhOWFlMzJhYTIzMTIyNTgzMTBmMmFhZTY3YjIyYTNlZGJiMWIiLCJpYXQiOjE1NDMxNzQ4MDcsIm5iZiI6MTU0MzE3NDgwNywiZXhwIjoxNTc0NzEwODA3LCJzdWIiOiI1MiIsInNjb3BlcyI6W119.BN8xjBHWnA4CSpD-OB2gwkK9rpaft7Giujvptd7UkFwYjBjiJerWLAQGvC1P0HtBP7Fc2ZeA2HKU1TCzRjw83dLyFCP9Ozb4zgGUVo6KjWLXR0TgZEyHiy28Z5xqz_vuBh6PXMcji2sAA-SaDgZOIAtTplUhzCz6jZufJKOTl1HYq2j6oVuuZZcH5s8VVsOgwy91POywvqk01czPr-grWILHUPBPmyCIxRN22JHXGUox05bSiFCbzfEnsANAPn6s3h6dklMKQVnsq2LQ78IOjycL2HJQi3TriAqAVJlAPVXxzNQElOjCQx8yzbO-6lprPc0iZ5hJPJn93njO1Zz5MwyPZe2xIh9mPuWexq8ZLxRQCYK3L3DbYu3Qj36cb8-PD9EKpcZZM3F02emLAetj172hw6CBgvFV_XwQCW_UDRefSNVVzODOh6n-1nCpM5WGwWLm8mLxZk2Yi7SKGt5hLRgD0qcnMLqYpTCNiaRyr8bIrBzMdYVaeiwpbol7yeLLyMALTXV3-lTa9jM51_fh31aTn442j8wdaZlj2bvB2AgeuFBaijUfNivVANaaTqT3oPw8hjXkhPzSnDZ-GjXX4C2uclOyVvttHOwmsphJYdxmTCZUOYmiRvV5O616_qvFQSHJX6rJh91ajr2P9Au4ytJuwKZlgBUpKcZgm2tfMnQ',
            'X-Requested-With': 'XMLHttpRequest'
        },
      })
    //   .then((response)=> console.log(response)) 
      .then((response) => response.json())
      .then((response)=> console.log(response)) 
      .done();
    } catch (error) {
        alert('No network Connection Found user details');
    }*/


    // let d = data.json();
    // for(k in d){
    //     console.log(k);
    //     console.log(d.k);
    // }
    // console.log(d);
    // console.log(d._55);
    // console.log(d.access_token);
}

  login = () => {
      console.log('Login');
      console.log(this.state.username)
      
      url = 'https://ems.aladinlabs.com/api/auth/login';
      console.log(url);
      
    try {
        fetch(url,{
         method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        },
        body:JSON.stringify({
        //   email : this.state.username,
        //   password : this.state.password,
        //   remember_me : true
            // email : "bhanuka2017@gmail.com",
            // password : "abc123",
            // remember_me : true
            email : "student@ems.com",
            password : "123456",
            remember_me : true
        })
      })
    //   .then((response)=> console.log(response)) 
      .then((response) => response.json())
      .then((responseJson) => {
            this.datahandler(responseJson)
           })
      /*
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
