import React, { useEffect } from 'react';
 
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,Image
} from 'react-native';
import ColorConstants from '../../resources/Constants/ColorConstants';
import ScreenNames from '../../resources/Constants/screennames';
import ImageWrapper from '../../resources/Images/ImageWrapper';
const SplashScreen = (props) => {
   
    useEffect(()=>{
setTimeout(()=>{
   props.navigation.push(ScreenNames.LoginSignUp)
},1000)
    },[])


    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:ColorConstants.baseColor}}>
              <Image  source={ImageWrapper.thewriter}>

              </Image>
        </View>
    );
};



export default SplashScreen;