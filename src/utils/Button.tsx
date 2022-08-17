import React from 'react';
import { StyleSheet } from 'react-native';
import AppColors from './colors';
import { H1 } from "./components";
import { Height, Width } from './dimensions';
import TouchableWrapper from "./TouchableWrapper";


interface ButtonProps {
    text : string,
    onPress : () => void,
    loading? : boolean
}

export default function Button({
    text,
    onPress,
    loading
} : ButtonProps){
    return(
        <TouchableWrapper onPress={onPress} isText style={styles.button} rippleColor={AppColors.white}>
            <H1 color={AppColors.white} fontSize={5}>{text}</H1>
        </TouchableWrapper>
    )
}

const styles = StyleSheet.create({
    button : {
        width : Width(40),
        height : Height(6),
        textAlignVertical : "center",
        backgroundColor : AppColors.red,
        borderRadius : Width(8),
        marginTop : Height(2)
    }
})