import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../components/Header/CustomHeader';
 
class Location extends Component{
constructor(props){
    super(props);

} 
     render(){
        return(
            <View>
                <CustomHeader 
                    title="My Subject"
                    openDrawer={() => this.props.navigation.openDrawer()}
                    iconName="md-notifications"

                /> 
                <Text> Location </Text>
             </View>
         )
     }
}
 
export default Location;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});