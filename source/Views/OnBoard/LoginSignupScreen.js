import React, { Component, forwardRef, useEffect, useImperativeHandle, useState, useRef } from "react";

import {

  View, Image, Dimensions
} from 'react-native';
import GlobalModal from "../../CustomizedComponents/GlobalModal";
import RoundedActionButton from "../../CustomizedComponents/RoundedActionButton";
import ColorConstants from "../../resources/Constants/ColorConstants";
import ScreenNames from "../../resources/Constants/screennames";
import StringConstants from "../../resources/Constants/StringConstants";
import ImageWrapper from "../../resources/Images/ImageWrapper";


let width = Dimensions.get('window').width
 
  const LogInSignUpScreen = ({ navigation }) => {

  return <View style={{ flex: 1, backgroundColor: ColorConstants.baseColor, alignItems: 'center', justifyContent: 'space-evenly' }}>
    <Image resizeMode='contain' source={ImageWrapper.thewriter} style={{ width: '70%' }}>
    </Image>
    <Image resizeMode='contain' progressiveRenderingEnabled={true} source={ImageWrapper.loginSignup_Image} style={{ width: width * 0.7,height:width * 0.7}}>
    </Image>
    <View style={{ alignItems: 'center' }}>
      <RoundedActionButton presshandler={() => {
        navigation.navigate(ScreenNames.LogIn)
      }} textValue={StringConstants.LOGIN} color={ColorConstants.baseBlueColor}>
      </RoundedActionButton>
      <RoundedActionButton presshandler={() => {
        navigation.navigate(ScreenNames.SignUp)
      }} textValue={StringConstants.SIGNUP} color={ColorConstants.baseOrangeColor}>

      </RoundedActionButton>

    </View>

    <GlobalModal></GlobalModal>
  </View>


}
export default  LogInSignUpScreen;