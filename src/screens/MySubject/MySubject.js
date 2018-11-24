import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Styles from '../../styles';
import CustomHeader from '../../components/Header/CustomHeader';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';

 
class MySubject extends Component{

    static navigationOptions = ({
        title: "",

    })

     render(){
        return(
            <View>
                <CustomHeader 
                    title="My Subject"
                    openDrawer={() => this.props.navigation.openDrawer()}
                    iconName="book"

                />
                <View style={Styles.wrapper}> 
                    <Text> MySubject vg </Text>
                </View>
            </View>

            
         )
     }
}
 
export default MySubject;

// const MyLeftComponent({
//     <Text>Hello Left</Text>
// })


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:25
        },
});