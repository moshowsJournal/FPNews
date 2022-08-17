import React from 'react';
import {SafeAreaView, StyleSheet,StatusBar,View} from 'react-native'
import AppColors from './colors';

interface ScreenWrapperProps {
    children? : React.ReactNode,
    barStyle? : "dark-content" | "light-content",
    backgroundColor? : string,
    wrapperStyle? : any
}

const ScreenWrapper = ({
    children,
    barStyle = "light-content",
    backgroundColor,
    wrapperStyle
} : ScreenWrapperProps) => (
    <View style={[styles.container,wrapperStyle]}>
        <SafeAreaView style={{backgroundColor}}
        
        />
        <StatusBar
            barStyle={barStyle}
        />
        {children}
    </View>
)
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : AppColors.white
    }
})
export default ScreenWrapper;