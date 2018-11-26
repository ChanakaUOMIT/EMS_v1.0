import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
 
class RoundedButton  extends Component{
     render(){
         const {label, background,handleOnPress, textColor,icon}=this.props;
         const backgroundColor=background || 'transparent';
         const color = textColor || '#000000'

        return(
            <TouchableHighlight 
                style={[{backgroundColor},styles.wrapper]}
                onPress={handleOnPress}    
            > 
                <View style={styles.buttonTextWrapper}>
                    {icon}
                    <Text 
                        style={[{color},styles.buttonText]}>
                            {label}
                    </Text>
                </View>
             </TouchableHighlight>
         )
     }
}
 
export default RoundedButton ;

RoundedButton.propTypes={
    label: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    background: PropTypes.string,
    icon: PropTypes.object,
    handleOnPress:PropTypes.func.isRequired


}

const styles = StyleSheet.create({
    wrapper: {
        display:'flex',
        padding:15,
        borderRadius:40,
        borderWidth:1,
        borderColor:'#ffffff',
        marginBottom:15
    },

    buttonText:{
        fontSize:16,
        width: '100%',
        textAlign:'center'
    },

    buttonTextWrapper:{
        flexDirection:'row',
        justifyContent:'flex-end'
    }
});