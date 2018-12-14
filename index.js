/** @format */

import { AppRegistry } from 'react-native';
import App from './app/js/Root';
import { name as appName } from './app.json';

console.disableYellowBox = false
AppRegistry.registerComponent(appName, () => App);
