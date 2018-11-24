import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../components/Header/CustomHeader';
 
class Payment extends Component{
    static navigationOptions = ({
        title: "",

    })
constructor(props){
    super(props);

} 
     render(){
        return(
            <View> 
                <CustomHeader 
                    title="My Subject"
                    openDrawer={() => this.props.navigation.openDrawer()}
                    iconName="card"

                /> 
                <Text> Payment </Text>
             </View>
         )
     }
}
 
export default Payment;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});