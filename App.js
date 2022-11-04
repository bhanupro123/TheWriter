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







