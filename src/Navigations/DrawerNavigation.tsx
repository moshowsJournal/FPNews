import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStackNavigation from './MainNavigation';
import DrawerBar from '../utils/DrawerBar';


const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
    return(
        <Drawer.Navigator 
            screenOptions={{
                headerShown : false
            }} 
            drawerContent={(props : any)=> <DrawerBar {...props}/>}
        >
            <Drawer.Screen name="Main" component={MainStackNavigation} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;