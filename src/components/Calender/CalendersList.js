import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import {CalendarList} from 'react-native-calendars';

 
class CalendersList extends Component{
constructor(props){
    super(props);
    state={
        data:[
            {
                id:1,
                date:'2018-11-20',
                
            }
        ]
    }

} 
     render(){
        return(
            <View> 
                <CalendarList 
                    style={styles.calendar}
                    hideExtraDays
                    current={'2018-11-25'} 
                    pastScrollRange={24} 
                    futureScrollRange={24}       
                    markingType={'custom'}
                    markedDates={{
                        '2018-11-09': {
                            customStyles: {
                                container: {
                                    backgroundColor: 'red',
                                    elevation: 4,
                                },
                                text: {
                                    color: 'white',
                                },
                            }
                        },                    

                        '2018-11-14': {
                            customStyles: {
                                container: {
                                    backgroundColor: 'green',
                                },

                                text: {
                                    color: 'white',
                                },
                            },
                        },
                       }
                    }
     
                />
             </View>
         )
     }
}
 
export default CalendersList;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    calendar: {
        borderTopWidth: 1,
        paddingTop: 5,
        borderBottomWidth: 1,
        borderColor: '#eee',
        // height: 350
      },
      text: {
        textAlign: 'center',
        borderColor: '#bbb',
        padding: 10,
        backgroundColor: '#eee'
      },

});