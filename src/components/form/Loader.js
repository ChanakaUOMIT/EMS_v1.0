import React, { Component } from 'react';
import { PropTypes } from 'prop-types'; 
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
    Image,
} from 'react-native';
import colors from '../../styles/colors';
 
class Loader  extends Component{
     render(){
    const { animationType, modalVisible }=this.props;
        return(
            <Modal 
                animationType={animationType}
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                  }}
            >
                <View style={styles.wrapper}>
                    <View style={styles.loaderWrapper}>
                        <Image 
                            style={styles.loaderImage}
                            source={require('../../Images/loading5.gif')}
                        />
                    </View>
                </View>
            </Modal>
         )
     }
}
 
export default Loader ;

Loader.propTypes ={
    animationType: PropTypes.string.isRequired, 
    modalVisible: PropTypes.bool.isRequired,
}


const styles = StyleSheet.create({
    wrapper: {
        zIndex:9,
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left:0
    },
    
    loaderWrapper:{
        width:90,
        height:90,
        backgroundColor:colors.white,
        borderRadius:15,
        position:'absolute',
        left:'50%',
        top:'50%',
        marginLeft:-45,
        marginTop:-45,
    },

    loaderImage:{
        width:90,
        height:90,
        borderRadius:15,
    },
});