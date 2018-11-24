import React, { Component } from 'react';
import {View,
    // Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import {
    Button,
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content,
    Header,
    Title,
    Left,
    Icon,
    Right
  } from "native-base";
// import {Header} from 'react-native-elements'
import Styles from '../../styles';
import CustomHeader from '../../components/Header/CustomHeader';
// import Icon from 'react-native-vector-icons/FontAwesome5';
 
class MySubject extends Component{

    static navigationOptions = ({
        title: "My Subject",
    })

     render(){
        return(
            <View>
                <CustomHeader 
                    title="My Subject"
                    openDrawer={() => this.props.navigation.openDrawer()}
                    iconName="md-notifications"

                />
                <View style={styles.container}> 
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
        },
});