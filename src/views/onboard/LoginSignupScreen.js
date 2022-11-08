import React, { Component, forwardRef, useEffect, useImperativeHandle, useState, useRef } from "react";

import {

  View, Image, Dimensions
} from 'react-native';
<<<<<<< HEAD:src/views/onboard/LoginSignupScreen.js
import { withGlobalContext } from "../../customizedcomponents/CustomProvider";
=======
>>>>>>> 13d78d6595033b114f944f09936d0a7fa1530f8c:source/Views/OnBoard/LoginSignupScreen.js
import GlobalModal from "../../customizedcomponents/GlobalModal";
import RoundedActionButton from "../../customizedcomponents/RoundedActionButton";
import ColorConstants from "../../resources/constants/ColorConstants";
import ScreenNames from "../../resources/constants/ScreenNames";
import StringConstants from "../../resources/constants/StringConstants";
import ImageWrapper from "../../resources/images/ImageWrapper";


let width = Dimensions.get('window').width
 
  const LogInSignUpScreen = (props ) => {
  
  return <View style={{ flex: 1, backgroundColor: ColorConstants.baseColor, alignItems: 'center', justifyContent: 'space-evenly' }}>
    <Image resizeMode='contain' source={ImageWrapper.thewriter} style={{ width: '70%' }}>
    </Image>
    <Image resizeMode='contain' progressiveRenderingEnabled={true} source={{ uri: "https://picsum.photos/1000/1000?random=" + new Date().getMilliseconds() }} style={{ width: width * 0.7, height: width * 0.7, borderRadius: 999 }}>
    </Image>
    <View style={{ alignItems: 'center' }}>
      <RoundedActionButton presshandler={() => {
<<<<<<< HEAD:src/views/onboard/LoginSignupScreen.js
        props.navigation.navigate(ScreenNames.LogIn)
      }} textValue={StringConstants.LOGIN} color={ColorConstants.baseBlueColor}>
      </RoundedActionButton>
      <RoundedActionButton presshandler={() => {
        props.navigation.navigate(ScreenNames.SignUp)
      }} textValue={StringConstants.SIGNUP} color={ColorConstants.baseOrangeColor}>
=======
        navigation.navigate(ScreenNames.Login)
      }} textValue={StringConstants.Login} color={ColorConstants.baseBlueColor}>
      </RoundedActionButton>
      <RoundedActionButton presshandler={() => {
        navigation.navigate(ScreenNames.SignUp)
      }} textValue={StringConstants.Signup} color={ColorConstants.baseOrangeColor}>
>>>>>>> 13d78d6595033b114f944f09936d0a7fa1530f8c:source/Views/OnBoard/LoginSignupScreen.js

      </RoundedActionButton>

    </View>

   
  </View>


}
export default  withGlobalContext(LogInSignUpScreen);