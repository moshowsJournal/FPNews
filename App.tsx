import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import store from './src/store/store'
import {Provider} from 'react-redux';
import Routes from './src/Navigations/Routes';
import { LogBox } from 'react-native';
import CodePush from 'react-native-code-push';
import FlashMessage from "react-native-flash-message";
import firebaseConfig from './src/utils/firebase';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const App = () => {

  useEffect(()=>{
    GoogleSignin.configure({
      webClientId: '631795731887-qea5n2hakmkcovth546ga0ccaje5m1g7.apps.googleusercontent.com',
      offlineAccess: true,
    });
    firebaseConfig()
    LogBox.ignoreAllLogs()
  },[])
  
  return (
    <Provider store={store}>
        <Routes />
        <FlashMessage position="top" />
    </Provider>
  );
};
let codePushOptions = {checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,installMode: CodePush.InstallMode.ON_NEXT_RESUME};
export default CodePush(codePushOptions)(App);
