<<<<<<< HEAD
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
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
import SplashScreen from './src/views/onboard/SplashScreen';
import ScreenNames from './src/resources/constants/ScreenNames';
import { AlertConsumer, AlertProvider } from './src/customizedcomponents/CustomProvider';
import KnownLanguages from './src/views/categories/languagesknown/KnownLanguages';
 

const Stack = createNativeStackNavigator();


const App = (responsiveHeight) => {

 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer >
        <Stack.Navigator
          initialRouteName={ScreenNames.SPLASH}
          screenOptions={{
            headerShown: false,
          }}
        >
           <Stack.Screen
            name={ScreenNames.SPLASH}
            component={SplashScreen}

          />
          <Stack.Screen
            name={ScreenNames.KnownLanguages}
            component={KnownLanguages}

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


export default () => (
  <AlertProvider
  >
    <AlertConsumer>
      {({ responsiveHeight }) => <App responsiveHeight={responsiveHeight} />}
    </AlertConsumer>
  </AlertProvider>
);







=======
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
import LogInSignUpScreen from './source/views/onboard/LoginSignupScreen';
import Verify from './source/views/onboard/Verify';
import ModeSelection from './source/views/onboard/ModeSelection';
import RegisterNow from './source/views/onborded/RegisterNow';
import OnBoarded from './source/views/onborded/OnBoarded';
import TermsAndConditionsStep1 from './source/views/terms&conditions/Terms&ConditionsStep1';


const Stack = createNativeStackNavigator();
 

export default  App  = () => {
 

  return (
    <SafeAreaView style={{flex:1}}>
        <NavigationContainer >
      <Stack.Navigator
       initialRouteName={ScreenNames.LoginSignUp}
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
         <Stack.Screen
          name={ScreenNames.LoginSignUp}
          component={LogInSignUpScreen}
      
        />
         
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
         <Stack.Screen
          name={ScreenNames.TermsAndConditionsStep1}
          component={TermsAndConditionsStep1}
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


>>>>>>> 13d78d6595033b114f944f09936d0a7fa1530f8c
