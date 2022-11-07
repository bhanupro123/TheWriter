import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Dimensions,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import ImageWrapper from '../../resources/images/ImageWrapper';
import ColorConstants from '../../resources/constants/ColorConstants';
import RoundedActionButton from '../../customizedcomponents/RoundedActionButton';
import StringConstants from '../../resources/constants/StringConstants';
import ScreenNames from '../../resources/constants/ScreenNames';
import FloatLabelInput from '../../customizedcomponents/FloatingLabel';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import Modal from 'react-native-modal';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import CalendarPicker from 'react-native-calendar-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';
import SearchDropDown from '../../customizedcomponents/SearchableDropDown';
import Feather from 'react-native-vector-icons/Feather';
// import {check, openSettings} from 'react-native-permissions';
import HeaderOfItem from '../../customizedcomponents/HeaderOfItem';

const RegisterNow = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profileName, setprofileName] = useState('');
  const [phoneNo, setPhoneNo] = useState(0);
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('Gender');
  const [userImage, setUserImage] = useState('');
  const [CGmodal, setCGmodal] = useState(false);
  const [currentFieldSearching, setCurrentFieldSearching] = useState(false);
  let genderData = [{name: 'Male'}, {name: 'Female'}, {name: 'Other'}];
  let errorInputs = [
    'fifthTextInput',
    'secondTextInput',
    'thirdTextInput',
    'fourthTextInput',
    'fifthTextInput',
    'sixthTextInput',
  ];
  const calendarPicker = () => {
    console.log('calendar');
    return (
      <Modal
        testID={'modal'}
        isVisible={false}
        // onBackdropPress={() => this.props.ShowStartDate(false)}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}
        transparent={true}
        // onRequestClose={() => {
        //   this.props.ShowStartDate(false);
        // }}
      >
        <View
          style={{
            height: 400,
            width: '100%',
            backgroundColor: 'white',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            bottom: 0,
            position: 'absolute',
          }}>
          <CalendarPicker onDateChange={this.onDateChange} />
        </View>
      </Modal>
    );
  };
  const renderCGModal = () => {
    return (
      <Modal
        style={{margin: 0, width: '100%', justifyContent: 'flex-end'}}
        animated
        animationType="slide"
        transparent={true}
        backdropColor="black"
        isVisible={CGmodal}
        onBackdropPress={() => {
          setCGmodal(false);
        }}
        onRequestClose={() => {
          setCGmodal(false);
        }}>
        <View
          style={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: 'white',
            height: '20%',
            width: '100%',
          }}>
          <View
            style={{
              marginLeft: 20,
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
            }}>
            <TouchableOpacity
              onPress={async () => {
                if (Platform.OS === 'android') {
                  let result = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                      title: 'Permission Required',
                      message: 'UpSquad would like to access your camera.',
                    },
                  );
                  console.log('result', result);
                  if (result == 'never_ask_again') {
                    console.log('never');

                    // await openSettings();
                    return;
                  } else if (result == 'denied') {
                    console.log('Access to pictures was denied');

                    return;
                  } else if (result == 'granted') {
                    console.log('granted');
                    console.log('AAAAAAA');
                    this.setState({cameraFile: ''});
                    ImagePicker.openCamera({
                      width: 400,
                      height: 400,
                      cropping: true,
                      includeBase64: true,

                      // multiple:true
                    })
                      .then(image => {
                        console.log('images', image);
                      })
                      .catch(async error => {
                        let result1;
                        console.log('error', error, typeof error);
                        let permissionError = error.toString();
                        console.log(permissionError);
                        if (
                          permissionError.includes(
                            'User did not grant library permission.',
                          )
                        ) {
                          result1 = await PermissionsAndroid.request(
                            PermissionsAndroid.PERMISSIONS
                              .READ_EXTERNAL_STORAGE,
                            {
                              title: 'Permission Required',
                              message:
                                'UpSquad would like to access your gallery.',
                            },
                          );
                          if (result1 == 'never_ask_again') {
                            console.log('never');

                            // await openSettings();
                            return;
                          } else if (result1 == 'denied') {
                            console.log('Access to pictures was denied');

                            return;
                          }
                        }
                      });
                  }
                } else {
                  this.setState({cameraFile: ''});
                  ImagePicker.openCamera({
                    width: 400,
                    height: 400,
                    cropping: true,
                    includeBase64: true,
                  })
                    .then(image => {
                      // this.setState({ showCGpicker})
                    })
                    .catch(error => {
                      console.log('error', error);
                    });
                }
              }}>
              <View>
                <Ionicons
                  name={'camera-outline'}
                  size={75}
                  color={ColorConstants.baseBlueColor}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '400',
                    color: ColorConstants.baseBlueColor,
                    textAlign: 'center',
                  }}>
                  Camera
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                ImagePicker.openPicker({
                  width: 400,
                  height: 400,
                  mediaType: 'photo',
                  cropping: true,
                  includeBase64: true,
                }).then(image => {
                  console.log('IMAGE', image.path);
                  setCGmodal(false);
                  setUserImage(image.path);
                });
              }}>
              <View style={{marginTop: 15, marginLeft: 20}}>
                <FontAwesome
                  name={'photo'}
                  size={55}
                  color={ColorConstants.baseBlueColor}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '400',
                    color: ColorConstants.baseBlueColor,
                    textAlign: 'center',
                    marginTop: 12,
                  }}>
                  Gallery
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  const onPressGender = text => {
    setCurrentFieldSearching(false);
    setGender(text);
  };
  const onContinue = () => {
    let nameReg = /^[a-zA-Z]{0,63}$/;
    let mailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,40})+$/;
    console.log('sfhskjdhfdsf', firstName, nameReg.test(firstName), nameReg);
    if (!firstName.trim()) {
      errorInputs[0].setError('Please enter firstname');
      return;
    }
    if (!nameReg.test(firstName)) {
      console.log('fggggg', firstName);
      errorInputs[0].setError('Please enter valid first name.');
      return;
    }
    if (lastName.trim() == '') {
      errorInputs[1].setError('Please enter lastname.');
      return;
    }
    if (!nameReg.test(lastName)) {
      errorInputs[1].setError('Please enter valid last name.');
      return;
    }
    if (profileName.trim() == '') {
      errorInputs[2].setError('Please enter profile name.');
      return;
    }
    if (!nameReg.test(profileName)) {
      errorInputs[2].setError('Please enter valid profile name.');
      return;
    }
    if (phoneNo == '') {
      errorInputs[3].setError('Please enter phone number.');
      return;
    }
    if (email.trim() == '') {
      errorInputs[4].setError('Please enter email.');
      return;
    }
    if (!mailReg.test(email)) {
      errorInputs[4].setError('Please enter valid email.');
      return;
    }
    if (dateOfBirth == '') {
      errorInputs[5].setError('Please enter date of birth.');
    }
  };
  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: '#FEF4E8'}}
      behavior={Platform.OS == 'ios' ? 'padding' : null}>
      {calendarPicker()}
      {renderCGModal()}
      <HeaderOfItem
        headerText={'Register'}
        onBackPressed={() => {
          navigation.pop();
        }}
        />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps={'handled'}>
        <TouchableOpacity
          onPress={() => {
            setCGmodal(true);
          }}>
          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <View
              style={{
                marginTop: 20,
                width: 120,
                height: 120,
                borderRadius: 999,
                borderWidth: 1,
              }}>
              {userImage ? (
                <Image
                  resizeMode="contain"
                  source={{uri: userImage}}
                  style={{width: 120, height: 120, borderRadius: 999}}
                />
              ) : (
                <Image
                  resizeMode="contain"
                  source={ImageWrapper.avathar}
                  style={{width: 120, height: 120}}
                />
              )}
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.container}>
          <View style={{marginTop: 20}}>
            <FloatLabelInput
              ref={input => {
                errorInputs[0] = input;
              }}
              editable={true}
              label={'First name'}
              returnKeyType={'next'}
              autoCapitalize={'sentences'}
              multiline={false}
              canIshowOptionalText={false}
              isSecured={false}
              onSubmitEditing={() => {
                errorInputs[1].setFoucus();
              }}
              value={firstName}
              onChangeText={firstName => {
                setFirstName(firstName);
              }}
              maxLength={63}
              show_mandatory_star={false}
            />
            {/* </View> */}
            <FloatLabelInput
              ref={input => {
                errorInputs[1] = input;
              }}
              editable={true}
              label={'Last name'}
              returnKeyType={'next'}
              autoCapitalize={'sentences'}
              multiline={false}
              canIshowOptionalText={false}
              isSecured={false}
              onSubmitEditing={() => {
                errorInputs[2].setFoucus();
              }}
              value={lastName}
              onChangeText={lastName => {
                setLastName(lastName);
              }}
              maxLength={63}
              show_mandatory_star={false}
            />
            <FloatLabelInput
              ref={input => {
                errorInputs[2] = input;
              }}
              editable={true}
              label={'Profile name'}
              returnKeyType={'next'}
              autoCapitalize={'sentences'}
              multiline={false}
              canIshowOptionalText={false}
              isSecured={false}
              onSubmitEditing={() => {
                errorInputs[3].setFoucus();
              }}
              value={profileName}
              onChangeText={profileName => {
                setprofileName(profileName);
              }}
              maxLength={63}
              show_mandatory_star={false}
            />
            <FloatLabelInput
              ref={input => {
                errorInputs[3] = input;
              }}
              editable={true}
              label={'Phone number'}
              returnKeyType={'next'}
              autoCapitalize={'none'}
              multiline={false}
              canIshowOptionalText={false}
              isSecured={false}
              onSubmitEditing={() => {
                errorInputs[4].setFoucus();
              }}
              value={phoneNo}
              onChangeText={phoneNo => {
                setPhoneNo(phoneNo);
              }}
              maxLength={63}
              keyboardType="numeric"
            />
            <FloatLabelInput
              ref={input => {
                errorInputs[4] = input;
              }}
              editable={true}
              label={'Contact email'}
              returnKeyType={'next'}
              autoCapitalize={'none'}
              multiline={false}
              canIshowOptionalText={false}
              isSecured={false}
              onSubmitEditing={() => {
                errorInputs[5].setFoucus();
              }}
              value={email}
              onChangeText={email => {
                setEmail(email);
              }}
              maxLength={63}
              show_mandatory_star={false}
            />
            {/* <FloatLabelInput
              ref={input => {
                errorInputs[5] = input;
              }}
              editable={true}
              label={'Date of birth'}
              returnKeyType={'done'}
              autoCapitalize={'none'}
              multiline={false}
              canIshowOptionalText={false}
              isSecured={false}
              onSubmitEditing={() => {
                errorInputs[4].setFoucus();
              }}
              value={dateOfBirth}
              onChangeText={dateofbirth => {
                setDateOfBirth(dateofbirth);
              }}
              maxLength={63}
              keyboardType="numeric"
            /> */}
            <View style={{marginVertical: 10}}>
              <TouchableOpacity
                onPress={() => {
                  calendarPicker();
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  {dateOfBirth != '' ? (
                    <Text style={styles.label}>
                      {moment(dateOfBirth).format('dddd')},{' '}
                      {moment(dateOfBirth).format('MMMM')}{' '}
                      {moment(dateOfBirth).format('DD')}{' '}
                      {moment(dateOfBirth).format('YYYY')}{' '}
                    </Text>
                  ) : (
                    <Text style={styles.label}>Date of birth</Text>
                  )}
                  <MaterialIcons
                    name={'calendar-today'}
                    size={20}
                    color={'#49658c'}
                    style={{marginRight: 25}}
                  />
                </View>
              </TouchableOpacity>
              <View style={[styles.underline]} />
            </View>
            <View style={{marginHorizontal: 25}}>
              <View
                style={{
                  borderWidth: 1,
                  width: '100%',
                  borderRadius: 5,
                  height: 50,
                  paddingHorizontal: 10,
                  borderColor: '#959494',
                  justifyContent: 'center',
                  marginTop: 20,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    console.log('ONPRESS');
                    setCurrentFieldSearching(!currentFieldSearching);
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '400',
                        color: '#49658c',
                        textAlign: 'left',
                        flex: 1,
                        margin: 2,
                      }}>
                      {gender}
                    </Text>
                    <Feather
                      name="chevron-down"
                      size={20}
                      color={'#49658c'}
                      style={{marginHorizontal: 10, marginTop: 3}}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              {currentFieldSearching ? (
                <SearchDropDown
                  presshandler={onPressGender}
                  dataSource={genderData}
                  scroll={true}
                  height={150}
                  borderBottomLeft={10}
                  borderBottomRight={10}
                />
              ) : null}
              {/* <Text style={styles.error}>{this.state.currentFieldErr}</Text> */}
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            flex: 1,
            marginBottom: 10,
          }}>
          <RoundedActionButton
            presshandler={() => {
              onContinue();
            }}
            textValue={StringConstants.Continue}
            color={ColorConstants.baseBlueColor}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    paddingTop: 15,
    marginTop: 30,
    borderRadius: 20,
    shadowOpacity: 0.05,
    marginHorizontal: 15,
  },
  dateofbirth: {
    fontSize: 16,
    fontWeight: '600',
    // fontFamily: Fonts.mulishRegular,
    color: 'rgba(30, 28, 36, 1)',
    paddingVertical: 1,
    paddingHorizontal: 0,
    flex: 1,
  },
  underline: {
    borderBottomColor: '#959494',
    borderBottomWidth: 1,
    marginTop: 5,
    marginHorizontal: 25,
  },
  label: {
    fontSize: 14,
    fontWeight: '400',
    color: '#49658c',
    // fontFamily: Fonts.mulishRegular,
    left: 0,
    marginHorizontal: 25,
  },
});
export default RegisterNow;
