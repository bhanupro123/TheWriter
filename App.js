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
import SplashScreen from './source/Views/OnBoard/SplashScreen';
import ScreenNames from './source/resources/Constants/screennames'; 
import LogoBackground from './source/Views/OnBoard/LogoBackground';
import ModalTemp from './source/Views/OnBoard/temp/ModalTemp'; 
import SignUp from './source/Views/OnBoard/SignUp';
import LogIn from './source/Views/OnBoard/LogIn';
import LogInSignUpScreen from './source/Views/OnBoard/LoginSignupScreen';
import Verify from './source/Views/OnBoard/Verify';
import ModeSelection from './source/Views/OnBoard/ModeSelection';
  

const Stack = createNativeStackNavigator();
 

export default  App  = () => {
 

  return (
    <SafeAreaView style={{flex:1}}>
        <NavigationContainer >
      <Stack.Navigator
       initialRouteName={ScreenNames.SPLASH}
       screenOptions={{
            headerShown: false,
          }}
      >
     <Stack.Screen
          name={"modal"}
          component={ModalTemp}
        />
       
        <Stack.Screen
          name={ScreenNames.SPLASH}
          component={SplashScreen}
      
        />
        <Stack.Screen
          name={ScreenNames.SignUp}
          component={SignUp}
      
        />
           <Stack.Screen
          name={ScreenNames.LogIn}
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


