/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'; 
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';  
import SplashScreen from './source/views/onboard/SplashScreen';
import ScreenNames from './source/resources/constants/ScreenNames'; 
import LogoBackground from './source/views/onboard/LogoBackground';
import ModalTemp from './source/views/onboard/temp/ModalTemp'; 
import SignUp from './source/views/onboard/SignUp';
import LogIn from './source/views/onboard/LogIn';
// import LogInSignUpScreen from './source/views/onboard/LogInSignupScreen';
import Verify from './source/views/onboard/Verify';
import ModeSelection from './source/views/onboard/ModeSelection';
import RegisterNow from './source/views/onborded/RegisterNow';
import OnBoarded from './source/views/onborded/OnBoarded';


const Stack = createNativeStackNavigator();
 

export default  App  = () => {
 

  return (
    <SafeAreaView style={{flex:1}}>
        <NavigationContainer >
      <Stack.Navigator
       initialRouteName={ScreenNames.RegisterNow}
       screenOptions={{
            headerShown: false,
          }}
      >
     <Stack.Screen
          name={"modal"}
          component={ModalTemp}
        />
       
        <Stack.Screen
          name={ScreenNames.Splash}
          component={SplashScreen}
      
        />
        <Stack.Screen
          name={ScreenNames.SignUp}
          component={SignUp}
      
        />
           <Stack.Screen
          name={ScreenNames.Login}
          component={LogIn}
      
        />
          <Stack.Screen
          name={ScreenNames.Verify}
          component={Verify}
      
        />
        <Stack.Screen
          name={ScreenNames.ModeSelection}
          component={ModeSelection}
      
        />
         {/* <Stack.Screen
          name={ScreenNames.LoginSignUp}
          component={LogInSignUpScreen}
      
        /> */}
         
         <Stack.Screen
          name={ScreenNames.LogoBackground}
          component={LogoBackground}
      
        />
        <Stack.Screen
          name={ScreenNames.RegisterNow}
          component={RegisterNow}
      
        />
        <Stack.Screen
          name={ScreenNames.Onboarded}
          component={OnBoarded}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


