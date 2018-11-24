import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import CustomHeader from '../../components/Header/CustomHeader';
import NoticeCard from '../../components/NoticeCard/NoticeCard';
 
class Notice extends Component{
    static navigationOptions = ({
        title: "",

    })
constructor(props){
    super(props);

} 
    // openDrawer(){
    //     onPress={() => this.props.navigation.openDrawer()}

    // }

     render(){
        return(
            <View> 
                <CustomHeader 
                    title="Notice"
                    openDrawer={() => this.props.navigation.openDrawer()}
                    iconName="md-notifications"

                />
                {/* <Text> Notice </Text> */}
                {/* <TouchableOpacity>
                    <Text>View Notice</Text>
                </TouchableOpacity> */}
                <ScrollView>
                    <NoticeCard 
                        noticeHeader="Programming Competition"
                        noticeText="fgkjdfjkghdfjkghj"
                        noticeDate="10 jun 2018"
                    />

                    <NoticeCard 
                        noticeHeader="Programming Competition"
                        noticeText="fgkjdfjkghdfjkghj"
                        noticeDate="10 jun 2018"
                    />
                    {/* <NoticeCard />
                    <NoticeCard /> */}

                </ScrollView>
                <NoticeCard />
             </View>
         )
     }
}
 
export default Notice;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});