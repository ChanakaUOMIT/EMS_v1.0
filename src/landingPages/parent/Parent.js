import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
 
class Parent extends Component{
constructor(props){
    super(props);

} 
     render(){
        return(
            <View style={styles.container}> 
                <Text> Parent </Text>
             </View>
         )
     }
}
 
export default Parent;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});