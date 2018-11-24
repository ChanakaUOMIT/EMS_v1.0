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
import DrawerNavigation from '../../navigations/DrawerNavigation';
 
class LandingTemplate extends Component{
    constructor(props){
        super(props);
    } 

     render(){
        return(
            <View> 
                 <Header>
                    <Left>
                        <Button
                        transparent
                        // onPress={() => this.props.navigation.navigate("DrawerOpen")}
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

                <DrawerNavigation />
             </View>
         )
     }
}
 
export default LandingTemplate;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});