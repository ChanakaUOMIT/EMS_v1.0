import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../components/Header/CustomHeader';
 
class Profile extends Component{
constructor(props){
    super(props);

} 
     render(){
        return(
            <View> 
                <CustomHeader 
                    title="Profile"
                    openDrawer={() => this.props.navigation.openDrawer()}
                    iconName="md-notifications"

                /> 
                <Text> Profile </Text>
             </View>
         )
     }
}
 
export default Profile;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});