import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
 
class Login extends Component{
constructor(props){
    super(props);

} 
     render(){
        return(
            <View style={styles.container}> 
                <Text> Login </Text>
                <TouchableOpacity
                    // onPress={this.props.navigation.navigate("DrawerNavigation")}
                    onPress={() => this.props.navigation.navigate("DrawerNavigation")}
                >
                    <Text>Next</Text>
                </TouchableOpacity>
             </View>
         )
     }
}
 
export default Login;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});