import React, { useEffect } from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View, Image
} from 'react-native'; 
import ScreenNames from '../../resources/constants/ScreenNames';
 
const SplashScreen = (props) => {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.replace(ScreenNames.KnownLanguages)
        }, 1000)
    }, [])


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"red" }}>
            
        </View>
    );
};



export default SplashScreen;