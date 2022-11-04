import React, { Component, forwardRef, useEffect, useImperativeHandle, useState, useRef } from "react";

import {

  View, Image, Dimensions, Text, TextInput, KeyboardAvoidingView
} from 'react-native';
import FloatLabelInput from "../../CustomizedComponents/FloatingLabel";
import RoundedActionButton from "../../CustomizedComponents/RoundedActionButton";
import ColorConstants from "../../resources/Constants/ColorConstants";
import ScreenNames from "../../resources/Constants/screennames";
import StringConstants from "../../resources/Constants/StringConstants";
import ImageWrapper from "../../resources/Images/ImageWrapper";
import LogoBackground from "./LogoBackground";
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/AntDesign';



let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

const Verify = ({ route, navigation }) => {
  const firstField = useRef();
  const secondField = useRef();
  const thirdField = useRef();
  const fourField = useRef();



  return <LogoBackground>
     <View style = {{ flex:1,}}>
<Icons name="arrowleft" size={30} color={ColorConstants.basicBlackcolor} style={{position:'absolute',top:20,marginLeft:10}}
onPress = {()=>{
  navigation.pop()
}}
>

</Icons>

<View style={{ alignItems: 'center', justifyContent: 'center', }}>
      <View style={{ marginTop: height/14, marginLeft:10,marginRight:10,}}>


        <Text style={{ color: ColorConstants.basicBlackcolor, fontSize: 22, fontWeight: "bold", textAlign: 'center', paddingBottom: 5 ,marginLeft:30}}>{StringConstants.Verify_your_number}</Text>
        <Text style={{ color: ColorConstants.basicBlackcolor, textAlign: 'center', marginRight: 22, marginLeft: 22,  }}>{StringConstants.Verify_your_otp}</Text>
      </View>
      <Image resizeMode='contain' progressiveRenderingEnabled={true} source={ImageWrapper.verifyScreen_Image} style={{ width: width * 1, borderRadius: 999, marginTop: 10,  }}>
      </Image>

      <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginTop: 10,  }}>
        <Text style={{ fontSize: 20, padding: 10, color: ColorConstants.basicGreycolor }}>{`+91 ${route.params.paramKey}`}</Text>
        <Icon name="edit-3" size={30} color={ColorConstants.basicGreycolor} style={{ paddingRight: 20, }}
        
        onPress = {()=> navigation.push(ScreenNames.LogIn)}
        />

      </View>

      <View style={{
        flexDirection: 'row',
        borderColor: '#000',
        paddingBottom: 10,
        marginHorizontal: 50,
        height: 60,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
        marginTop: 10, marginBottom: 10

      }}>

        <TextInput style={{
          borderColor: '#f1d9bf',
          backgroundColor: "#f5e6d4",
          borderBottomWidth: 1,
          flex: 1,
          borderRadius: 5,
          borderWidth: 1,

          alignSelf: 'center', textAlign: 'center', marginHorizontal: 10
        }} maxLength={1} keyboardType="numeric" ref={firstField}
        
        onChangeText={values => {
         
         secondField.current.focus()
         if (values == ""){
          firstField.current.focus()
         }
      
       }}
        >

        </TextInput>


        <TextInput style={{
          borderColor: '#f1d9bf',
          backgroundColor: "#f5e6d4",
          borderBottomWidth: 1,
          flex: 1,
          alignSelf: 'center',
          textAlign: 'center',
          marginHorizontal: 10,
          borderRadius: 5,
          borderWidth: 1,
        }} maxLength={1} keyboardType="numeric" ref={secondField}
        
        onChangeText={values => {
         
          thirdField.current.focus() 
          if (values == ""){
            firstField.current.focus()
           }//assumption is TextInput ref is input_2
        }}
        >

        </TextInput>
        <TextInput style={{
          borderColor: '#f1d9bf',
          backgroundColor: "#f5e6d4",
          borderBottomWidth: 1,
          flex: 1,
          alignSelf: 'center',
          textAlign: 'center',
          marginHorizontal: 10,
          borderRadius: 5,
          borderWidth: 1,
        }} maxLength={1} keyboardType="numeric" ref={thirdField}
        
        onChangeText={values => {
         
          fourField.current.focus() 
          if (values == ""){
            secondField.current.focus()
           }//assumption is TextInput ref is input_2
        }}
        >

        </TextInput>
        <TextInput style={{
          borderColor: '#f1d9bf',
          backgroundColor: "#f5e6d4",
          borderBottomWidth: 1,
          flex: 1,
          alignSelf: 'center',
          textAlign: 'center',
          marginHorizontal: 10,
          borderRadius: 5,
          borderWidth: 1,
        }} maxLength={1} keyboardType="numeric" ref={fourField}   onChangeText={(values) => {
         if (values == ""){
          thirdField.current.focus()
         }
           //assumption is TextInput ref is input_2
        }}>

        </TextInput>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: ColorConstants.verifyscreen_below_otpfiled }}>
          {"Haven't received the code?  "}
        </Text>
        <Text style={{ textDecorationLine: 'underline', color: ColorConstants.basicBlackcolor }}>
          Resend code
        </Text>
      </View>


      <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 10 }}>

        <RoundedActionButton presshandler={() => {
          navigation.navigate(ScreenNames.ModeSelection)
        }} textValue={StringConstants.Verify} color={ColorConstants.baseBlueColor}>

        </RoundedActionButton>

      </View>
    </View>
   

        </View>
   

    


  </LogoBackground>


}
export default Verify;