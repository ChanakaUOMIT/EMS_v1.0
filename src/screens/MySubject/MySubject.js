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
// import Icon from 'react-native-vector-icons/FontAwesome5';
 
class MySubject extends Component{

    static navigationOptions = ({ navigation }) => ({
        title: "CPU",
        headerLeft: (
            <TouchableOpacity
                style={Styles.headerButton}
                onPress={() => navigation.openDrawer()}>
                <Icon name="bars" size={20} />
            </TouchableOpacity>
        ),
    })

     render(){
        return(
            <View>
                {/* <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />  */}
                <Header>
                    <Left>
                        <Button
                        transparent
                        onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        onPress={() => this.props.navigation.openDrawer()}
                        // onPress={() => navigation.openDrawer()}>

                        >
                        <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>HomeScreen</Title>
                    </Body>
                    <Right />
                </Header>
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