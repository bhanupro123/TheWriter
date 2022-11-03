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
import ColorConstants from '../../resources/constants/ColorConstants'; 
import ImageWrapper from '../../resources/images/ImageWrapper';
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