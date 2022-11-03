import React, { Component, forwardRef, useEffect, useImperativeHandle, useState, useRef } from "react";

import {

  View, Image, Dimensions
} from 'react-native';
import GlobalModal from "../../customizedcomponents/GlobalModal";
import RoundedActionButton from "../../customizedcomponents/RoundedActionButton";
import ColorConstants from "../../resources/constants/ColorConstants";
import ScreenNames from "../../resources/constants/ScreenNames";
import StringConstants from "../../resources/constants/StringConstants";
import ImageWrapper from "../../resources/images/ImageWrapper";


let width = Dimensions.get('window').width
 
  const LogInSignUpScreen = ({ navigation }) => {

  return <View style={{ flex: 1, backgroundColor: ColorConstants.baseColor, alignItems: 'center', justifyContent: 'space-evenly' }}>
    <Image resizeMode='contain' source={ImageWrapper.thewriter} style={{ width: '70%' }}>
    </Image>
    <Image resizeMode='contain' progressiveRenderingEnabled={true} source={{ uri: "https://picsum.photos/1000/1000?random=" + new Date().getMilliseconds() }} style={{ width: width * 0.7, height: width * 0.7, borderRadius: 999 }}>
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