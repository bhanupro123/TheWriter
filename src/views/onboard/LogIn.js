import React, { Component, forwardRef, useEffect, useImperativeHandle, useState, useRef } from "react";

import {

  View, Image, Dimensions,Text
} from 'react-native'; 
import FloatLabelInput from "../../customizedcomponents/FloatingLabel";
import RoundedActionButton from "../../customizedcomponents/RoundedActionButton";
import ColorConstants from "../../resources/constants/ColorConstants";
import ScreenNames from "../../resources/constants/ScreenNames";
import StringConstants from "../../resources/constants/StringConstants";
import ImageWrapper from "../../resources/images/ImageWrapper";
import LogoBackground from "./LogoBackground";


let width = Dimensions.get('window').width

const LogIn = ({navigation}) => {


  return <LogoBackground>
    <View style={{ flex: 1,alignItems: 'center', justifyContent: 'center' }}>
     <View>
     <Text style={{fontSize:40,textAlign:'center'}}>{StringConstants.Welcome}</Text>
     <Text style={{fontSize:30,textAlign:'center'}}>{StringConstants.SignIn_to_access_your_account}</Text>
     </View>
    <Image resizeMode='contain' progressiveRenderingEnabled={true} source={{ uri: "https://picsum.photos/1000/1000?random=" + new Date().getMilliseconds() }} style={{ width: width * 0.7, height: width * 0.7, borderRadius: 999 }}>
    </Image>
  
    <View style={{ alignItems: 'center' }}>
        
      <RoundedActionButton presshandler={() => {
        navigation.navigate(ScreenNames.Verify)
      }} textValue={StringConstants.Proceed} color={ColorConstants.baseBlueColor}>

      </RoundedActionButton>

    </View> 
  </View>
  </LogoBackground>


}
export default LogIn;