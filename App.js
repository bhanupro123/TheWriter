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
import LoginSignUp from './source/Views/OnBoard/LoginSignupScreen';
import LogoBackground from './source/Views/OnBoard/Background';
import ScreenNames from './source/resources/Constants/ScreenNames';

const Stack = createNativeStackNavigator();
 

export default  App  = () => {
 

  return (
    <SafeAreaView style={{flex:1}}>
        <NavigationContainer >
      <Stack.Navigator
       initialRouteName='Home'
       screenOptions={{
            headerShown: false,
          }}
      >
    
        <Stack.Screen
          name={ScreenNames.splash}
          component={SplashScreen}
      
        />
        <Stack.Screen
          name={ScreenNames.LoginSignUp}
          component={LoginSignUp}
      
        />
         <Stack.Screen
          name={ScreenNames.Welcome}
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

