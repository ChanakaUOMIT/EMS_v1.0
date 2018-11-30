import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    AsyncStorage
} from 'react-native';
 
class GeoLocation extends Component{
    constructor(props){
        super(props);
        this.getToken();
    }

    state = {
      token:null,
      location:null,
      latitude: null,
      longitude: null,
      timestamp:null,
      speed:null,
      error: null,
    };

    handletoken=(text)=>{
      this.setState({token:text})
      // console.log("Token in Geolocation "+this.state.token)
      // this.sendLocation(text);
    }

    sendLocation=()=>{
      console.log('press')   
      var token=this.state.token;
      console.log(" $$$$$$$ "+token)

      const url = 'https://ems.aladinlabs.com/api/location';
      console.log(url);
      
    // try {
        fetch(url,{
         method:'POST',
        headers: {
            'Authorization':'Bearer '+ token,
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          latitude : this.state.latitude,
          longitude : this.state.longitude,
          timestamp : this.state.timestamp,
        })
      })
      .then((response)=> console.log(response)) 
      // .then((response) => response.json())
      // .then((responseJson) => {
      //       this.datahandler(responseJson)
      //      })
    .catch ((error) => {
        alert('No network Connection Found '+error);
    });
    }

    datahandler(data){
      console.log(data);
      // console.log(data.message);
      // if(data.message === 'Unauthorized'){
      //     console.log('Check ur username n email bcoz Unauthorized')
      //     alert("Check ur username n email bcoz Unauthorized")
      //     return
      // }
      // const token=data.access_token;
  
      // this.setToken(token);
  
      // this.get_user_details(token);
  }

  async getToken(){
      try{
        let thistoken=await AsyncStorage.getItem("token");
       // let token=JSON.stringify(thistoken)
          // console.log("This token  "+thistoken)
          // alert("This token fhf  "+thistoken)
        // return thistoken;

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

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.setState({
              timestamp:position.timestamp,
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              speed:position.coords.speed,
              error: null,
            });
          },
          (error) => this.setState({ error: error.message }),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        )

      }

      findCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
          position => {
            const location = JSON.stringify(position);
    
            this.setState({ location });
          },
          error => Alert.alert(error.message),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
      };

    consolPrint(){
        // console.log("latitude "+this.state.latitude);
        // console.log("longitude "+this.state.longitude);
        console.log("Hello");
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log('timestamp'+position.timestamp),
                console.log('latitude'+ position.coords.latitude),
                console.log('longitude'+ position.coords.longitude),
                console.log('speed'+position.coords.speed)
                // console.log('error'+ this.state.error)
              
            },
          );
    }

    
     render(){
        return(
            <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Latitude: {this.state.latitude}</Text>
                <Text>Longitude: {this.state.longitude}</Text>
                <Text>Timestamp: {this.state.timestamp}</Text>
                <Text>speed: {this.state.speed}</Text>
                {this.state.error ? <Text>Error: {this.state.error}</Text> : null}

                <TouchableOpacity onPress={this.consolPrint}>
                    <Text>consolPrint</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.findCoordinates}>
                    <Text style={styles.welcome}>Find My Coords?</Text>
                    <Text>Location: {this.state.location}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={this.sendLocation}
                >
                  <Text>Send Location to Bckend</Text>
                </TouchableOpacity>
            </View>
         )
        }
}
 
export default GeoLocation;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
      },
      welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
      },
      instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
      }
});