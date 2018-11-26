import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
 
class NavBarButton extends Component{
     render(){
         const { location, text, icon, color,handleButtonPress }=this.props;
         const marginPosition = location === 'right' ? { marginRight: 20 }: {marginLeft:20 };
         let content;

         if(text){
             content =<Text style={[{color}, marginPosition, styles.buttonText]}>{text}</Text>
         }else if(icon){
            content =<Text style={marginPosition}>{icon}</Text>
         }
        return(
            <TouchableOpacity 
                style={styles.container}
                onPress={handleButtonPress}
            > 
                 {content} 
             </TouchableOpacity>
         )
     }
}

NavBarButton.propsTypes={
    text:PropTypes.string,
    icon:PropTypes.object,
    handleButtonPress: PropTypes.func.isRequred,
    location:PropTypes.string,
    color:PropTypes.string,
}
 
export default NavBarButton;


const styles = StyleSheet.create({
    container:{
        // flex:1,
        // display:'flex',
        marginLeft:20
        // marginRight:20
    },
    buttonText: {
        fontSize:16,    
    },
});