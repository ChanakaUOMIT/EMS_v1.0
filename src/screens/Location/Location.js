import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../components/Header/CustomHeader';
 
class Location extends Component{
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
                    title="Location"
                    openDrawer={() => this.props.navigation.openDrawer()}
                    iconName="locate"

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