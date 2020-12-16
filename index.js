import {AppRegistry} from 'react-native';
import App from './App';
import StorybookUI from './storybook';
import { APP_NAME, IS_STORYBOOK } from './env';

AppRegistry.registerComponent(APP_NAME, () => IS_STORYBOOK ? StorybookUI : App);