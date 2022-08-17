import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import { Provider as PaperProvider } from 'react-native-paper';
import Splash from '../screens/Auth/Splash';
import { useSelector } from 'react-redux';
import DrawerNavigation from './DrawerNavigation';

const Routes = () => {
  const route = useSelector((state : any)=>state)
    return(
        <PaperProvider>
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