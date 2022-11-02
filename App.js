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
import LoginSignUp from './source/views/onboard/LoginSignupScreen';
import LogoBackground from './source/views/onboard/Background';
import ModalTemp from './source/views/onboard/temp/ModalTemp';
  

const Stack = createNativeStackNavigator();
 

export default  App  = () => {
 

  return (
    <SafeAreaView style={{flex:1}}>
        <NavigationContainer >
      <Stack.Navigator
       initialRouteName='modal'
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
          name={ScreenNames.LoginSignUp}
          component={LoginSignUp}
      
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


