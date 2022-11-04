import React, { Component, forwardRef, useEffect, useImperativeHandle, useState, useRef } from "react";

import {

  View, Image, Dimensions, Text, TouchableOpacity
} from 'react-native';
import FloatLabelInput from "../../CustomizedComponents/FloatingLabel";
import RoundedActionButton from "../../CustomizedComponents/RoundedActionButton";
import ColorConstants from "../../resources/Constants/ColorConstants";
import ScreenNames from "../../resources/Constants/screennames";
import StringConstants from "../../resources/Constants/StringConstants";
import ImageWrapper from "../../resources/Images/ImageWrapper";
import LogoBackground from "./LogoBackground";
import Icon from 'react-native-vector-icons/FontAwesome';

import Icons from 'react-native-vector-icons/AntDesign';


let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

const ModeSelection = ({ navigation }) => {


  return <LogoBackground>
    <View style={{ flex: 1, }}>
      <Icons name="arrowleft" size={30} color={ColorConstants.basicBlackcolor} style={{ position: 'absolute', top: 20, marginLeft: 10 }}
        onPress={() => {
          navigation.pop()
        }}
      >

      </Icons>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginTop: 10 }}>

        <Image resizeMode='contain' progressiveRenderingEnabled={true} source={ImageWrapper.modelScreen_Image} style={{ width: width * 0.7, height: width * 0.7, borderRadius: 999 }}>
        </Image>
        <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: height / 7.5 }}>
          <TouchableOpacity onPress={() => {
            console.log("presseddddd")


          }}>

            <View style={{ backgroundColor: ColorConstants.modelscreen_i_need_a_writer_background, borderRadius: 10, paddingBottom: 10, height: 140, marginLeft: 2, paddingTop: 30, width: 156, marginRight: 10 }}

            >

              <Icon name="user-o" size={30} color={ColorConstants.modelscreen_i_need_a_writer_text} style={{ alignSelf: "center", marginBottom: 10 }} />
              <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 18, color: ColorConstants.modelscreen_i_need_a_writer_text }} >
                {StringConstants.I_need_a_writer}
              </Text>
            </View>

          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            console.log("presseddddd")


          }}>
            <View style={{ backgroundColor: ColorConstants.modelscreen_i_am_a_writer_background, borderRadius: 10, paddingBottom: 10, height: 140, marginRight: 10, paddingTop: 30, width: 150 }}

            >

              <Icon name="user-o" size={30} color={ColorConstants.modelscreen_i_am_a_writer_text} style={{ alignSelf: "center", marginBottom: 10 }} />
              <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 18, color: ColorConstants.modelscreen_i_am_a_writer_text }} >
                {StringConstants.I_am_a_writer}
              </Text>
            </View>
          </TouchableOpacity>
        </View>



      </View>

    </View>




  </LogoBackground>


}
export default ModeSelection;