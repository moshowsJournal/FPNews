import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import store from './src/store/store'
import {Provider} from 'react-redux';
import Routes from './src/Navigations/Routes';
import { LogBox } from 'react-native';

const App = () => {
  useEffect(()=>{
    LogBox.ignoreAllLogs()
  },[])
  return (
    <Provider store={store}>
        <Routes />
    </Provider>
  );
};

export default App;
