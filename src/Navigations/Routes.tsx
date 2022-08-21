import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Splash from '../screens/Auth/Splash';
import { useSelector } from 'react-redux';
import DrawerNavigation from './DrawerNavigation';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors
  }
}

const Routes = () => {
  const route = useSelector((state : any)=>state.routeReducer)
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