import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Styles from '../../styles';
import CustomHeader from '../../components/Header/CustomHeader';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import MySubjectCard from '../../components/MySubjectCard/MySubjectCard';

 
class MySubject extends Component{

    static navigationOptions = ({
        title: "",

    })

     render(){
        return(
            <ScrollView>
                <CustomHeader 
                    title="My Subject"
                    openDrawer={() => this.props.navigation.openDrawer()}
                    iconName="book"

                />
                {/* <ScrollView >                     
                    <MySubjectCard />
                </ScrollView> */}
                <Text> MySubject vg </Text>
                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('HomeWork')}
                >
                    <Text>Homework</Text>
                </TouchableOpacity>

            </ScrollView>

            
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
        marginTop:25
        },
});