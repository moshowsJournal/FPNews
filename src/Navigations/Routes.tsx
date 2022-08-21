import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Splash from '../screens/Auth/Splash';
import { useDispatch, useSelector } from 'react-redux';
import DrawerNavigation from './DrawerNavigation';
import messaging from '@react-native-firebase/messaging';
import { updateNotication } from '../store/notificationSplice';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors
  }
}

const Routes = () => {
  const route = useSelector((state : any)=>state.routeReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
        dispatch(updateNotication(remoteMessage))
    });
    return unsubscribe;
  }, []);

  return(
      <PaperProvider theme={theme}>
        <NavigationContainer>
          {
            route.name === "Splash" ? <Splash /> : 
            route.name === "Auth" ? <AuthNavigation /> : 
            <DrawerNavigation />
          }
        </NavigationContainer>
    </PaperProvider>
  )
}

export default Routes