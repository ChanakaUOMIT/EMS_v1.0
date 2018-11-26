import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
 
class Student extends Component{
constructor(props){
    super(props);

} 
     render(){
        return(
            <View style={styles.container}> 
                <Text> Student </Text>

                <TouchableOpacity
                    onPress={()=> this.props.navigation.navigate('Logout')}
                >
                    <Text>Log Out</Text>
                </TouchableOpacity>
             </View>
         )
     }
}
 
export default Student;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});