import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../../components/Header/CustomHeader';
 
class HomeWork extends Component{
    constructor(props){
        super(props);

    } 
     render(){
        return(
            <View> 
            <CustomHeader 
                    title="Homework"
                    // openDrawer={() => this.props.navigation.openDrawer()}
                    // onPress={()=>this.props.navigation.navigate.pop()}
                    leftPress={() => this.props.navigation.goBack()}
                    iconNameRight="md-git-network"
                    iconName="arrow-round-back"
                    type="sub"

                />
                <Text> HomeWork </Text>
             </View>
         )
     }
}
 
export default HomeWork;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});