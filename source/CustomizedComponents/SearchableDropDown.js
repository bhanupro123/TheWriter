
import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    IOSStatusBarHeight,
    Keyboard,
} from 'react-native';
// import Fonts from '../../res/Fonts';


class SearchDropDown extends Component {





    render() {
        console.log('drope')
        const { presshandler, dataSource,
            scroll, height,borderTopLeft,borderTopRight,borderBottomLeft,borderBottomRight } = this.props
      

        return (


            <View
                style={{
                    
                    // flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // margin: 10,

                    width: '100%',
                    height: height,
                    marginTop: Platform.OS === 'ios' ? IOSStatusBarHeight : null

                }}>
                <View
                    style={{
                        
                        width: '100%',
                        //height: '20%',
                        borderWidth: 1,
                        // borderRadius: 10,
                        borderColor: '#959494',
                        backgroundColor: '#ffffff',
                        borderBottomLeftRadius:borderBottomLeft,
                        borderBottomRightRadius:borderBottomRight,
                        borderTopLeftRadius:borderTopLeft,
                        borderTopRightRadius:borderTopRight,
                        marginBottom:15

                    }}>

                    <ScrollView nestedScrollEnabled={scroll}
                    keyboardShouldPersistTaps={'handled'}>

                        {dataSource.map(item => {
                            // console.log(this.props)
                            return (
                                <ScrollView keyboardShouldPersistTaps={'handled'}>
                                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, marginVertical: 10 }}
                                        onPress={() => {
                                            console.log(item.name)
                                            presshandler(item.name)
                                            Keyboard.dismiss()
                                        }}
                                    >

                                        <Text style={{ fontSize: 15, color: '#49658c', fontWeight: '400', marginHorizontal: 10 }}>
                                            {item.name}
                                        </Text>

                                    </TouchableOpacity>
                                </ScrollView>
                            )
                        })}

                    </ScrollView>
                </View>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: '6.2%',
        left: 0, right: 0, bottom: 0,

    },
    subContainer: {

        backgroundColor: 'white',
        paddingTop: 10,
        marginHorizontal: 20,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    
        flexWrap: 'wrap',

        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    itemView: {
        // marginHorizontal: '10%',
        backgroundColor: 'white',
        height: 30,
        width: '90%',
        marginBottom: 10,
        justifyContent: 'center',
        borderRadius: 4,
    },
    itemText: {
        color: '#49658c',
        paddingHorizontal: 10,
    },
    noResultView: {
        alignSelf: 'center',
        // margin: 20,
        height: 100,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    noResultText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },

});

export default SearchDropDown;