import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../components/Header/CustomHeader';
 
class Attendence extends Component{
    static navigationOptions = ({
        title: "",

    })
constructor(props){
    super(props);

} 
     render(){
        return(
            <View > 
                <CustomHeader 
                    title="Attendence"
                    openDrawer={() => this.props.navigation.openDrawer()}
                    iconName="md-checkmark-circle"

                />
                <Text> Attendence </Text>
             </View>
         )
     }
}
 
export default Attendence;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});