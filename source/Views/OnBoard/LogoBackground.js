import React, { useEffect } from 'react';
 
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,Image,
    KeyboardAvoidingView,
    Dimensions
} from 'react-native';
import ColorConstants from '../../resources/Constants/ColorConstants'; 
import ImageWrapper from '../../resources/Images/ImageWrapper';
const LogoBackground = (props) => {
   
    


    return (
        <View style={{flex:1,backgroundColor:ColorConstants.baseColor}}>
              <Image  resizeMode='contain' source={ImageWrapper.thewriter} style={{opacity:0.2,position:'absolute',bottom:0,alignSelf:'center',width:'70%'}}>

              </Image>
             
              {props.children}
        </View>
    );
};



export default LogoBackground;