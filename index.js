/**
 * @format
 */

import {AppRegistry,Dimensions} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import Redux from './Redux';
 

AppRegistry.registerComponent(appName, () => Redux);
