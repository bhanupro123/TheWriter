import React, {
  Component,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
  useRef,
} from 'react';

import {
  View,
  Image,
  Dimensions,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Platform
} from 'react-native';
import FloatLabelInput from '../../customizedcomponents/FloatingLabel';
import RoundedActionButton from '../../customizedcomponents/RoundedActionButton';
import ColorConstants from '../../resources/constants/ColorConstants';
import ScreenNames from '../../resources/constants/ScreenNames';
import StringConstants from '../../resources/constants/StringConstants';
import ImageWrapper from '../../resources/images/ImageWrapper';
import LogoBackground from './LogoBackground';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/AntDesign';
import VersionNumber from 'react-native-version-number';
import DeviceInfo from 'react-native-device-info';
import APIHandler from '../../network/NetworkOperations';
import ServiceUrls from '../../network/ServiceUrls';
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const Verify = ({route, navigation}) => {
  const [firstField, setFirstField] = useState(null);
  const [secondField, setSecondField] = useState(null);
  const [thirdField, setThirdField] = useState(null);
  const [fourthField, setFourthField] = useState(null);
  const [fifthField, setFifthField] = useState(null);
  const [sixthField, setSixthField] = useState(null);

  const firstFieldTextInput = useRef();
  const secondFieldTextInput = useRef();
  const thirdFieldTextInput = useRef();
  const fourthFieldTextInput = useRef();
  const fifthFieldTextInput = useRef();
  const sixthFieldTextInput = useRef();
  const apiHandler = new APIHandler();
  const serviceUrls = new ServiceUrls();
const verifyOtp=async()=>{
  const verifyOtpData={
    "phoneNumber": route.params.userNumber,
    "verificationCode":route.params.verifyCode,
    "deviceUdid": DeviceInfo.getUniqueId(),
    "deviceModel":DeviceInfo.getDeviceName(),
    "deviceOs": Platform.OS,
    "appVersion": VersionNumber.buildVersion
  }
  console.log('verifyOtpData',verifyOtpData)
  var response = await apiHandler.requestPost(
    verifyOtpData,
    serviceUrls.otpVerify,
  );
  console.log('LOGIN RESPONSE', response);
  if (response.status == ScreenNames.DEVICE_OFFLINE) {
  } else {
    if (response.status == 'success') {
    //   let verifyCode = response.data.phoneNumber.verificationCode.toString();
    //   SimpleToast.show(verifyCode);
    //   SimpleToast.show(verifyCode);

    //   setTimeout(() => {
    //     navigation.navigate(ScreenNames.Verify,{userNumber:userNumber,verifyCode:verifyCode});
    // }, 2000);
     
    }
  }
}
  return (
    <LogoBackground>
      <View style={{flex: 1}}>
        <Icons
          name="arrowleft"
          size={30}
          color={ColorConstants.basicBlackcolor}
          style={{margin: 10}}
          onPress={() => {
            navigation.pop();
          }}></Icons>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View style={{marginTop: 20, marginLeft: 10, marginRight: 10}}>
            <Text
              style={{
                color: ColorConstants.basicBlackcolor,
                fontSize: 22,
                fontWeight: 'bold',
                textAlign: 'center',
                paddingBottom: 5,
              }}>
              {StringConstants.Verify_your_number}
            </Text>
            <Text
              style={{
                color: ColorConstants.basicBlackcolor,
                textAlign: 'center',
              }}>
              {StringConstants.Verify_your_otp}
            </Text>
          </View>
          <Image
            resizeMode="contain"
            progressiveRenderingEnabled={true}
            source={ImageWrapper.verifyScreen_Image}
            style={{
              width: width * 1,
              borderRadius: 999,
              marginTop: 10,
            }}></Image>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                padding: 10,
                color: ColorConstants.basicGreycolor,
              }}>{`+91 ${route.params.paramKey}`}</Text>
            <Icon
              name="edit-3"
              size={30}
              color={ColorConstants.basicGreycolor}
              style={{paddingRight: 20}}
              onPress={() => navigation.push(ScreenNames.Login)}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              borderColor: '#000',
              paddingBottom: 10,
              marginHorizontal: 10,
              // height: 60,
              alignItems: 'center',
              alignContent: 'center',
              justifyContent: 'space-between',
              marginTop: 10,
              marginBottom: 10,
            }}>
            <TextInput
              style={styles.inputBoxStyle}
              maxLength={1}
              keyboardType="numeric"
              ref={firstFieldTextInput}
              onChangeText={values => {
                setFirstField(values);
                secondFieldTextInput.current.focus();
                if (values == '') {
                  firstFieldTextInput.current.focus();
                }
              }}></TextInput>

            <TextInput
              style={styles.inputBoxStyle}
              maxLength={1}
              keyboardType="numeric"
              ref={secondFieldTextInput}
              onChangeText={values => {
                setSecondField(values);
                thirdFieldTextInput.current.focus();
                if (values == '') {
                  secondFieldTextInput.current.focus();
                } //assumption is TextInput ref is input_2
              }}></TextInput>
            <TextInput
              style={styles.inputBoxStyle}
              maxLength={1}
              keyboardType="numeric"
              ref={thirdFieldTextInput}
              onChangeText={values => {
                setThirdField(values);
                fourthFieldTextInput.current.focus();
                if (values == '') {
                  thirdFieldTextInput.current.focus();
                } //assumption is TextInput ref is input_2
              }}></TextInput>
            <TextInput
              style={styles.inputBoxStyle}
              maxLength={1}
              keyboardType="numeric"
              ref={fourthFieldTextInput}
              onChangeText={values => {
                setFourthField(values);
                fifthFieldTextInput.current.focus();
                if (values == '') {
                  fourthFieldTextInput.current.focus();
                }
                //assumption is TextInput ref is input_2
              }}></TextInput>
            <TextInput
              style={styles.inputBoxStyle}
              maxLength={1}
              keyboardType="numeric"
              ref={fifthFieldTextInput}
              onChangeText={values => {
                setFifthField(values);
                sixthFieldTextInput.current.focus();
                if (values == '') {
                  fifthFieldTextInput.current.focus();
                }
                //assumption is TextInput ref is input_2
              }}></TextInput>
            <TextInput
              style={styles.inputBoxStyle}
              maxLength={1}
              keyboardType="numeric"
              ref={sixthFieldTextInput}
              onChangeText={values => {
                setSixthField(values);
                if (values == '') {
                  sixthFieldTextInput.current.focus();
                }
                //assumption is TextInput ref is input_2
              }}></TextInput>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{color: ColorConstants.verifyscreen_below_otpfiled}}>
              {"Haven't received the code?  "}
            </Text>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: ColorConstants.basicBlackcolor,
              }}>
              Resend code
            </Text>
          </View>

          <View style={{alignItems: 'center', marginTop: 10, marginBottom: 10}}>
            <RoundedActionButton
              presshandler={() => {
                verifyOtp()
                // navigation.navigate(ScreenNames.ModeSelection);
              }}
              textValue={StringConstants.Verify}
              color={ColorConstants.baseBlueColor}></RoundedActionButton>
          </View>
        </View>
      </View>
    </LogoBackground>
  );
};
const styles = StyleSheet.create({
  inputBoxStyle: {
    borderColor: '#f1d9bf',
    backgroundColor: '#f5e6d4',
    borderBottomWidth: 1,
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    marginHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    width: 50,
  },
});
export default Verify;
