/**
 * @format
 */
//import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import navegacao from './src/navegacao';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => navegacao);
