import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import AppColors from './colors';
import { H1 } from "./components";
import { Height, Width } from './dimensions';
import TouchableWrapper from "./TouchableWrapper";


interface ButtonProps {
    text : string,
    onPress : () => void,
    loading? : boolean,
    primaryColor? : string
}

export default function Button({
    text,
    onPress,
    loading,
    primaryColor
} : ButtonProps){
    return(
        <TouchableWrapper disabled={loading} onPress={onPress} isText style={[styles.button,{backgroundColor : primaryColor}]} rippleColor={AppColors.white}>
            {!loading ? <H1 color={AppColors.white} fontSize={5}>{text}</H1> : 
                <ActivityIndicator size={Width(7)} color={AppColors.white} />
            }
        </TouchableWrapper>
    )
}

const styles = StyleSheet.create({
    button : {
        width : Width(40),
        height : Height(6),
        textAlignVertical : "center",
        backgroundColor : AppColors.defaultSkin,
        borderRadius : Width(8),
        marginTop : Height(2)
    }
})