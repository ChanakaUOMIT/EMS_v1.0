import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Animated,
    Easing
} from 'react-native';
import colors from '../../styles/colors';
 
class InputField  extends Component{

    constructor(props){
        super(props);
        this.state = {
            secureInput: props.inputType === 'text' || props.inputType === 'email' ? false : true,
            // scaleCheckmarkValue : new Animated.Value(0),
            scaleCheckmarkValue: new Animated.Value(0),
            // scaleValue:new Animated.Value(0),
            

        };
        this.toggleShowPassword=this.toggleShowPassword.bind(this);
    }

    scaleCheckmark(value){
        Animated.timing(
            this.state.scaleCheckmarkValue,
            {
                toValue:value,
                duration:400,
                easing:Easing.easeOutBack
            }
        ).start();
    }

    toggleShowPassword(){
        this.setState({ secureInput: !this.state.secureInput});
        // alert(this.state.secureInput)
    }

     render(){
         const { labelText, 
                labelTextSize, 
                labelColor, 
                textColor,
                borderBottomColor,
                inputType, 
                customStyle, 
                onChangeText,
                showCheckmark ,
                autoFocus,
                autoCapitalize
        }=this.props;
         const { secureInput, scaleCheckmarkValue }=this.state;
         const fontSize=labelTextSize || 14;
         const color=labelColor || '#ffffff';
         const inputColor=textColor || '#ffffff';
         const borderBottom=borderBottomColor || 'transparent';

         //let's change the keyboard if the input field is an email
         const keyboardType= inputType === 'email' ? 'email-address':'default';

         const iconScale=scaleCheckmarkValue.interpolate({
             inputRange:[0,0.5,1],
             outputRange:[0.01,1.6,1]
         });

        // const iconScale = scaleCheckmarkValue.interpolate({
        //     inputRange: [0, 0.5, 1],
        //     outputRange: [0.01, 1.6, 1],
        //   });

         const scaleValue = showCheckmark ? 1: 0;
         this.scaleCheckmark(scaleValue);

        //  alert(showCheckmark)

        return(
            <View style={[customStyle, styles.wrapper]}> 
                <Text style={[{fontSize, color},styles.label]}>{labelText}</Text>

                {inputType === 'password' ?
                    <TouchableOpacity
                        style={styles.showButton}
                        onPress={this.toggleShowPassword}
                    >
                        <Text style={styles.showButtonText}>{secureInput ? 'Show': 'Hide'}</Text>
                    </TouchableOpacity>
                    :null
                }
                <Animated.View style={[{transform:[{scale:iconScale}]}, styles.checkmarkWrapper]}>
                    <Icon 
                        name="check"
                        color={colors.white}
                        size={20}
                    />
                </Animated.View>
                <TextInput 
                    // autoCorrect="false"
                    style={[{color: inputColor, borderBottomColor: borderBottom},styles.inputField]}
                    // secureTextEntry={inputType === 'password' ? true: false}
                    secureTextEntry={secureInput}
                    onChangeText={onChangeText}
                    keyboardType ={keyboardType}
                    autoFocus={autoFocus}
                    autoCapitalize={autoCapitalize}
                    autoCorrect={false}
                />
             </View>
         )
     }
} 
 
export default InputField ;

InputField.propTypes={
    labelText: PropTypes.string.isRequired,
    labelTextSize: PropTypes.number,
    labelColor: PropTypes.string,
    textColor: PropTypes.string,
    borderBottomColor: PropTypes.string,
    inputType: PropTypes.string.isRequired,
    customStyle:PropTypes.object,
    onChangeText:PropTypes.func,
    showCheckmark:PropTypes.bool.isRequired,
    autoFocus:PropTypes.bool,
    autoCapitalize:PropTypes.bool,
}


const styles = StyleSheet.create({
    wrapper:{
        display:'flex',
    },
    label:{
        fontWeight:'700',
        marginBottom:20,
    },
    inputField:{
        borderBottomWidth:1,
        paddingTop:5,
        paddingBottom:5
    },
    showButton:{
        position:'absolute',
        right:0
    },
    showButtonText:{
        color:'#ffffff',
        fontWeight:'700'
    },
    checkmarkWrapper:{
        position:'absolute',
        right:0,
        bottom:10
    }

});