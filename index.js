/** @format */

import { AppRegistry } from 'react-native';
import App from './app/js/pages/setup';
import { name as appName } from './app.json';

console.disableYellowBox = true
AppRegistry.registerComponent(appName, () => App);
