import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import colors from '../styles/colors';
import InputField from '../components/form/InputField';
import NextArrorButton from '../components/button/NextArrorButton';
import Loader from '../components/form/Loader';
import Notification from '../components/notification/Notification';
import NavBarButton from '../components/button/NavBarButton';
 
class ForgotPassword extends Component{
    constructor(props){
        super(props);
        this.state={
            formValid:true,
            loadingVisible:false,
            validEmail:false,
            emailAddress:''
        };
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.goToNextStep=this.goToNextStep.bind(this);
        this.handleCloseNotification=this.handleCloseNotification.bind(this);
    }

    handleEmailChange(email){
        const emailCheckRegex=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        this.setState({ emailAddress:email});

        if(!this.state.validEmail){
            if(emailCheckRegex.test(email)){
                this.setState({ validEmail: true});
            }
        }else{
            if(!emailCheckRegex.test(email)){
                this.setState({ validEmail: false});
            }
        }
    }

    goToNextStep(){
        this.setState({ loadingVisible:true});
        setTimeout(() =>{
            //Some basic validation
            if(this.state.emailAddress === 'wrong@email.com'){
                this.setState({
                    loadingVisible:false,
                    formValid:false,
                });
            }else{
                this.setState({
                    loadingVisible:false,
                    formValid:true,
                })
            }
        }, 2000)
    }

    handleCloseNotification(){
        this.setState({ formValid: true})
    }
     render(){
         const { loadingVisible, formValid, validEmail }=this.state;
         const background=formValid ? colors.green01 : colors.darkOrange;
         const showNotification=formValid? false:true;

        return(
            <KeyboardAvoidingView 
                style={[{backgroundColor:background},styles.wrapper]}
                // behavior="padding"
            > 
                <View style={styles.NavBarButtonWrapper}>
                    <NavBarButton style={styles.NavBarButton}
                        // handleButtonPress={this.handleButtonPress}
                        handleButtonPress={() => this.props.navigation.navigate('Login')}
                        location="right"
                        color={colors.white}
                        text="Log In"
                    />
                </View>
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.forgotPasswordHeading}>
                            Forgot your password ?
                        </Text>
                        <Text style={styles.forgotPasswordSubheading}>
                            Enter your email to find your account
                        </Text>

                        <InputField 
                            labelText="EMAIL ADDRESS"
                            customStyle={{marginBottom:30}}
                            textColor={colors.white}
                            labelTextSize={14}
                            labelColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="email"
                            onChangeText={this.handleEmailChange}
                            showCheckmark={validEmail}
                        />
                    </ScrollView>
                

                    <View>
                        <NextArrorButton 
                            handleNextButton={this.goToNextStep}
                            disabled={!validEmail}
                        />
                    </View>

                    <View style={styles.notificationWrapper}>
                        <Notification 
                            showNotification={showNotification}
                            handleCloseNotification={this.handleCloseNotification}
                            type="Error"
                            firstLine="No account exists for the requested"
                            secondLine="email address"
                        />
                    </View>
                </View>

                <Loader 
                    modalVisible={loadingVisible}
                    animationType="fade"
                />
             </KeyboardAvoidingView>
         )
     }
}
 
export default ForgotPassword;


const styles = StyleSheet.create({
    wrapper: {
        display:'flex',
        flex:1,
        // backgroundColor: colors.green01,
    },
    scrollViewWrapper:{
        marginTop:70,
        flex:1,
    },
    scrollView:{
        paddingLeft:30,
        paddingRight:30,
        paddingTop:20,
        flex:1
    },
    form:{
        marginTop:90,
        paddingLeft:20,
        paddingRight:20,
        flex:1,
    },
    forgotPasswordHeading:{
        fontSize:28,
        color:colors.white,
        fontWeight:'300'
    },
    forgotPasswordSubheading:{
        color:colors.white,
        fontWeight:'600',
        fontSize:15,
        marginTop:10,
        marginBottom:60
    },
    notificationWrapper:{
        position:'absolute',
        bottom:0,
        // zIndex:9
        zIndex:999
    },
});