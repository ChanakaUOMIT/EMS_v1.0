import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../components/Header/CustomHeader';
 
class Notice extends Component{
constructor(props){
    super(props);

} 
    // openDrawer(){
    //     onPress={() => this.props.navigation.openDrawer()}

    // }

     render(){
        return(
            <View> 
                <CustomHeader 
                    title="Notice"
                    openDrawer={() => this.props.navigation.openDrawer()}
                    iconName="md-notifications"

                />
                <Text> Notice </Text>
             </View>
         )
     }
}
 
export default Notice;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});