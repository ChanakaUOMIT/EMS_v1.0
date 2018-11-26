import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import colors from '../../styles/colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Easing,
    Animated
} from 'react-native';
 
class Notification  extends Component{
    constructor(props){
        super(props);
        this.state={
            // positionValue: new Animated.Value(60),
            positionValue: new Animated.Value(-60),
        }
        this.closeNotification=this.closeNotification.bind(this);
        this.animateNotification=this.animateNotification.bind(this);
    }

    animateNotification(value){
        const { positionValue } = this.state;
        Animated.timing(
            positionValue,
            {
                toValue: value,
                duration: 300, // Let's increase the speed aswell
                velocity: 3,
                tension:2,
                friction:8,
                easing:Easing.easeOutBack,
            }
        ).start();
    }

    closeNotification(){
        this.props.handleCloseNotification();
    }
     render(){
         const {type, firstLine, secondLine, showNotification}=this.props;
         showNotification ? this.animateNotification(0): this.animateNotification(-60);
         const { positionValue }=this.state;
        //  alert(showNotification);
        //  showNotification ? this.animateNotification(0): this.animateNotification(60);
        return(
            // Rather than using transform to hide the notification let's use marginBottom to make sure it is hidden properly
            // <Animated.View style={[{transform: [{translateY: positionValue}]}, styles.wrapper]}>
            <Animated.View style={[{marginBottom: positionValue}, styles.wrapper]}>
                <View style={styles.notificationContent}> 
                    <Text style={styles.errorText}>{type}</Text>
                    <Text style={styles.errorMessage}>{firstLine}</Text>
                    <Text style={styles.errorMessage}>{secondLine}</Text>
                    <TouchableOpacity 
                        style={styles.closeButton}
                        onPress={this.closeNotification}
                    >
                        <Icon 
                            name='times'
                            size={20}
                            color={colors.lightGray}
                        />
                    </TouchableOpacity>
             </View>
            </Animated.View>
         )
     }
}
 
export default Notification ;

Notification.propsTypes={
    showNotification:PropTypes.bool.isRequired,
    type:PropTypes.string.isRequired,
    firstLine:PropTypes.string,
    secondLine:PropTypes.string,
    handleCloseNotification:PropTypes.func,
}


const styles = StyleSheet.create({
    wrapper:{
        backgroundColor:colors.white,
        height:60,
        width:'100%',
        padding:10
    },
    notificationContent: {
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'flex-start'
    },

    errorText:{
        color:colors.darkOrange,
        marginRight:5,
        fontSize:14,
        marginBottom:2
    },
    errorMessage:{
        marginBottom:2,
        fontSize:14,
    },
    closeButton:{
        position:'absolute',
        right:10,
        top:10,
    }
});