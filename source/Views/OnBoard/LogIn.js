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
  StyleSheet
} from 'react-native';
import RoundedActionButton from '../../customizedcomponents/RoundedActionButton';
import ColorConstants from '../../resources/constants/ColorConstants';
import ScreenNames from '../../resources/constants/ScreenNames';
import StringConstants from '../../resources/constants/StringConstants';
import ImageWrapper from '../../resources/images/ImageWrapper';
import LogoBackground from './LogoBackground';
import Icon from 'react-native-vector-icons/AntDesign';
import APIHandler from '../../network/NetworkOperations';
import ServiceUrls from '../../network/ServiceUrls';
import SimpleToast from 'react-native-simple-toast'; 


let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const LogIn = ({navigation}) => {
  const [userNumber, setUserNumber] = useState('');
  const [changeColor, setchangeColor] = useState(false);
  const[userNumberErr,setuseNumberErr]=useState('');
  const apiHandler = new APIHandler();
  const serviceUrls = new ServiceUrls();
  const proceed = async () => {
    if(userNumber == ''){
      setuseNumberErr('Please enter phone number');
      return;
    }
    else if(userNumber.trim().length != 10){
      setuseNumberErr('Please enter valid phone number');
      return;
    }
    const userLoginData = {
      countryCode: '+91',
      phoneNumber: userNumber,
    };
    var response = await apiHandler.requestPost(
      userLoginData,
      serviceUrls.login_signup,
    );
    console.log('LOGIN RESPONSE', response);
    if (response.status == ScreenNames.DEVICE_OFFLINE) {
    } else {
      if (response.status == 'success') {
        let verifyCode = response.data.phoneNumber.verificationCode.toString();
        SimpleToast.show(verifyCode);
        SimpleToast.show(verifyCode);

        setTimeout(() => {
          navigation.navigate(ScreenNames.Verify,{userNumber:userNumber,verifyCode:verifyCode});
      }, 2000);
       
      }
    }
  };
  return (
    <LogoBackground>
      <View style={{flex: 1}}>
        <Icon
          name="arrowleft"
          size={30}
          color={ColorConstants.basicBlackcolor}
          style={{margin: 10}}
          onPress={() => {
            navigation.pop();
          }}></Icon>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View style={{marginTop: 20}}>
            <Text
              style={{
                color: 'black',
                fontSize: 22,
                fontWeight: 'bold',
                alignSelf: 'center',
                justifyContent: 'center',
                fontSize: 40,
              }}>
              {StringConstants.Welcome}
            </Text>
            <Text
              style={{
                color: 'black',
                alignSelf: 'center',
                fontWeight: 'bold',
                justifyContent: 'center',
              }}>
              {StringConstants.SignIn_to_access_your_account}
            </Text>
          </View>
          <Image
            resizeMode="contain"
            progressiveRenderingEnabled={true}
            source={ImageWrapper.loginScreen_Image}
            style={{
              width: width * 0.7,
              height: width * 0.7,
              borderRadius: 999,
            }}></Image>

          <View
            style={{
              flexDirection: 'row',

              borderColor: '#000',
              backgroundColor: '#ffffff',

              borderRadius: 5,
              width: 350,
              height: 40,
              justifyContent: 'space-evenly',
              alignItems: 'center',
              alignSelf: 'center',
              elevation: 1,
              marginTop: 50,
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 16,
                paddingLeft: 10,
                color: ColorConstants.basicBlackcolor,
              }}>
              +91
            </Text>
            <TextInput
              style={{
                flex: 1,
                alignSelf: 'center',
                fontSize: 16,
                paddingLeft: 10,
                color:
                  changeColor == false
                    ? ColorConstants.login_screen_textinput
                    : ColorConstants.basicBlackcolor,
              }}
              value={userNumber}
              onChangeText={usernumber => {
                setUserNumber(usernumber);
                setchangeColor(true);
                setuseNumberErr('')
              }}
              placeholder="987654321"
              maxLength={10}
              keyboardType="numeric"
            />
          </View>
        </View>
        <Text style={styles.error}>{userNumberErr}</Text>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <RoundedActionButton
              presshandler={() => {
                proceed();
              }}
              textValue={StringConstants.Proceed}
              color={ColorConstants.baseBlueColor}></RoundedActionButton>
          </View>
      </View>
    </LogoBackground>
  );
};
const styles = StyleSheet.create({
  error: {
    color: 'red',
    marginLeft: 25,
    fontSize:14,
    fontWeight:'400',
    marginTop:5,
    
},
})

export default LogIn;
