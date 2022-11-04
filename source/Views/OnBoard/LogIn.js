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
import Icon from 'react-native-vector-icons/AntDesign';



let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

const LogIn = ({ navigation }) => {
  const [userNumber, setUserNumber] = useState('');
  const [changeColor, setchangeColor] = useState(false)
  const secondField = useRef();
  const thirdField = useRef();
  const fourField = useRef();



  return <LogoBackground>
    {/* <View style = {{flex:1,position:'absolute'}}>
  <TextInput  placeholder="+91 123456789"></TextInput>
</View> */}

<View style = {{ flex:1,}}>
<Icon name="arrowleft" size={30} color={ColorConstants.basicBlackcolor} style={{position:'absolute',top:20,marginLeft:10}}
onPress = {()=>{
    navigation.pop()
}}
>

</Icon>

<View style={{  alignItems: 'center', justifyContent: 'center',}}>


<View style={{marginTop:height/14}}>
  <Text style={{ color: "black", fontSize: 22, fontWeight: "bold", alignSelf: 'center', justifyContent: 'center', fontSize: 40 }}>{StringConstants.Welcome}</Text>
  <Text style={{ color: "black", alignSelf: 'center', fontWeight: "bold", justifyContent: 'center', }}>{StringConstants.SignIn_to_access_your_account}</Text>

</View>
<Image resizeMode='contain' progressiveRenderingEnabled={true} source={ImageWrapper.loginScreen_Image} style={{ width: width * 0.7, height: width * 0.7, borderRadius: 999,  }}>
</Image>

<View style={{
  flexDirection: 'row',

  borderColor: '#000',
  backgroundColor: "#ffffff",

  borderRadius: 5,
  width: 350,
  height: 40,
  justifyContent: "space-evenly",
  alignItems: "center",
  alignSelf: "center",
  elevation: 1,
  marginTop: 50,
 
}} >
  <Text style={{ alignSelf: "center", fontSize: 16, paddingLeft: 10, color: ColorConstants.basicBlackcolor, paddingBottom: 4 }}>+91</Text>
  <TextInput
    style={{ flex: 1, alignSelf: "center", fontSize: 16, paddingLeft: 10, color: changeColor == false ? ColorConstants.login_screen_textinput : ColorConstants.basicBlackcolor }}


    value={userNumber}
    onChangeText={(usernumber) => {
      setUserNumber(usernumber)
      setchangeColor(true)
    }}
    placeholder="987654321"
    maxLength={10} keyboardType="numeric"

  />



</View>


<View style={{ alignItems: 'center', marginTop: 20 }}>

  <RoundedActionButton presshandler={() => {
    navigation.navigate(ScreenNames.Verify, {
      paramKey: userNumber,
    })
  }} textValue={StringConstants.Proceed} color={ColorConstants.baseBlueColor}>

  </RoundedActionButton>

</View>
</View>

        </View>
     

   


  </LogoBackground>


}
export default LogIn;