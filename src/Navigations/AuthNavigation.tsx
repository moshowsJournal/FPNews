import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import RegisterTwo from '../screens/Auth/RegisterTwo';

const AuthStack = createNativeStackNavigator()

const AuthNavigation = () => {
    return(
        <AuthStack.Navigator
            screenOptions={{
                headerShown : false
            }}
        >
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="RegisterTwo" component={RegisterTwo} />
            <AuthStack.Screen name="Register" component={Register} />
        </AuthStack.Navigator>
    )
}

export default AuthNavigation