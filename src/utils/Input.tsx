import { DarkTheme } from "@react-navigation/native";
import React from "react";
import { TextInput,DefaultTheme } from "react-native-paper";
import AppColors from "./colors";
import { Height, Width } from "./dimensions";
import Font_Family from "./fontFamily";

interface InputProps{
    placeholder? : string,
    mode? : 'outlined' | 'flat',
    inputWidth? : number,
    inputMarginTop? : number,
    height? : number,
    minHeight? : number,
    placeholderColor? : string,
    textColor? : string,
    label? : string,
    right? : React.ReactNode,
    keyboardType? : string,
    secureTextEntry? : boolean,
    onChangeText : (text : string) => void,
    value : string
}

const Input = (props : InputProps) => {
    return(
        <TextInput
            label={props.label}
            mode={props?.mode || "outlined"}
            style={[
                {
                    backgroundColor: AppColors.white,
                    width: props?.inputWidth ? Width(props.inputWidth) : Width(90),
                    justifyContent:'center',
                    alignSelf:'center',
                    borderRadius: Width(1.5),
                    marginTop: props?.inputMarginTop ? Height(props.inputMarginTop) : Height(2),
                    height : Height(props.height || 5.5),
                    fontSize : Width(4)
                }
            ]}
            theme={
                {
                    colors : {
                        primary: AppColors.red
                    },
                    fonts: {
                      regular: {
                        fontFamily: Font_Family[700]
                      }
                    },
                  }
            }
            {...props}
        />
    )
}

export default Input;