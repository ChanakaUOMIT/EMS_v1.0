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

                        '2018-11-26': {
                            customStyles: {
                                container: {
                                backgroundColor: 'white',
                                elevation: 2
                                },
                                text: {
                                    color: 'blue',
                                },
                            }
                        },

                      '2018-11-08': {selected: true},

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
                        
                        '2018-11-10': {disabled: true},
                        
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
                        /*
                        '2018-03-15': {
                        customStyles: {
                            container: {
                            backgroundColor: 'black',
                            elevation: 2
                            },
                            text: {
                            color: 'yellow',
                            },
                        }
                        },
                        '2018-03-20': {
                        customStyles: {
                            container: {
                            backgroundColor: 'pink',
                            elevation: 4,
                            },
                            text: {
                            color: 'blue',
                            },
                        }
                        },
                        '2018-03-21': {disabled: true},
                        '2018-03-28': {
                        customStyles: {
                            container: {
                            backgroundColor: 'green',
                            },
                            text: {
                            color: 'black',
                            fontWeight: 'bold'
                            },
                        },
                        },
                        '2018-03-29': {
                        customStyles: {
                            container: {
                            backgroundColor: 'white',
                            elevation: 2
                            },
                            text: {
                            color: 'blue',
                            },
                        }
                        },
                        '2018-03-30': {
                        customStyles: {
                            container: {
                            backgroundColor: 'violet',
                            elevation: 4,
                            borderColor: 'red',
                            borderWidth: 5,
                            },
                            text: {
                            marginTop: 3,
                            fontSize: 11,
                            color: 'yellow',
                            },
                        }
                        },
                        '2018-03-31': {
                        customStyles: {
                            container: {
                            backgroundColor: 'green',
                            borderRadius: 0,
                            },
                            text: {
                            color: 'white',
                            },
                        },
                        }*/}}
     
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