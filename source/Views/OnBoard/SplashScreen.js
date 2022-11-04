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
import ColorConstants from '../../resources/constants/ColorConstants';
import ScreenNames from '../../resources/constants/ScreenNames';
import ImageWrapper from '../../resources/images/ImageWrapper';
const SplashScreen = (props) => {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.replace(ScreenNames.LoginSignUp)
        }, 1000)
    }, [])


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: ColorConstants.baseColor }}>
            <Image source={ImageWrapper.thewriter}>

            </Image>
        </View>
    );
};



export default SplashScreen;