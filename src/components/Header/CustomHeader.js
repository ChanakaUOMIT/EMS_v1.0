import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
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
import colors from '../../styles/colors';
 
class CustomHeader extends Component{
    constructor(props){
        super(props);
    } 

     render(){
         const { title, openDrawer, iconName,leftPress, type,iconNameRight } = this.props;
         const rightIcon = type==='sub'? 
            <Icon      
                name={iconNameRight}
                style={{fontSize: 23, color: '#ffffff'}} 
            /> :
            <Button
            transparent
            // onPress={() => this.props.navigation.navigate("DrawerOpen")}
            // onPress={() => this.props.navigation.openDrawer()}
            onPress={openDrawer}
            // onPress={() => navigation.openDrawer()}>

            >
            <Icon name="menu" />
        </Button>

        return(
            <View> 
                 <Header  style={{ backgroundColor: colors.greenPrimary }}
          androidStatusBarColor={colors.greenDark}>
                    <Left>
                        {/* <Button
                            transparent
                            // onPress={() => this.props.navigation.navigate("DrawerOpen")}
                            // onPress={() => this.props.navigation.openDrawer()}
                            onPress={openDrawer}
                            // onPress={() => navigation.openDrawer()}>

                            >
                            <Icon name="menu" />
                        </Button> */}
                        {/* <Button> */}
                            <Icon                            
                                // name="md-notifications"
                                onPress={leftPress}
                                name={iconName}
                                style={{fontSize: 23, color: '#ffffff'}} 
                            />
                        {/* </Button> */}
                    </Left>
                    <Body>
                        <Title>{title}</Title>
                    </Body>
                    <Right>
                        {rightIcon}
                        {/* <Button
                            transparent
                            onPress={openDrawer}
                            >
                            <Icon name="menu" />
                        </Button> */}
                    </Right>
                </Header>
             </View>
         )
     }
}
 
export default CustomHeader;

CustomHeader.propsTypes={
    title:PropTypes.string,
    openDrawer: PropTypes.func.isRequired,
    iconName:PropTypes.string,
    leftPress:PropTypes.func,
    type:PropTypes.string,
    iconNameRight:PropTypes.string
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});