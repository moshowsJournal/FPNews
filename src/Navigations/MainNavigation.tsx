import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Main/Home';
import Details from '../screens/Main/Details';

const MainStack = createNativeStackNavigator()

const MainStackNavigation = () => {
    return(
        <MainStack.Navigator screenOptions={{
            headerShown : false
        }}>
            <MainStack.Screen name="Home" component={Home} />
            <MainStack.Screen name="Details" component={Details} />
        </MainStack.Navigator>
    )
}

export default MainStackNavigation;
