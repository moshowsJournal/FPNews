import React from 'react'
import { Text, View } from "react-native";
import Font_Family from './fontFamily';
import {Height,Width} from './dimensions'
import AppColors from './colors';
import TouchableWrapper from './TouchableWrapper';
import { useNavigation } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons"

interface ContainerProps {
  position? : string,
  borderColor? : string,
  flex? : number,
  width? : number,
  direction? : "row" | "column",
  padding? : number,
  height? : number,
  horizontalAlignment? : string,
  verticalAlignment? : string,
  paddingHorizontal? : number,
  marginTop? : number,
  marginBottom? : number,
  marginLeft? : number,
  paddingTop? : number,
  paddingBottom? : number,
  paddingVertical? : number,
  paddingRight? : number,
  paddingLeft? : number,
  marginRight? : number,
  backgroundColor? : string,
  borderWidth? : number,
  borderTopWidth? : number,
  borderBottomWidth? : number,
  borderRadius? : number,
  alignSelf? : string,
  style? : any,
  children? : React.ReactNode
}

interface PTagInterface {
  fontSize? : number,
  textAlign? : string,
  color? : string,
  style? : any,
  children : React.ReactNode,
  marginTop? : number,
  marginBottom? : number,
  lineHeight? : number,
  marginLeft? : number
}

interface HTagInterface {
  fontSize? : number,
  textAlign? : string,
  color? : string
  style? : any,
  bold? : number,
  children? : React.ReactNode,
  underline? : string,
  lineColor? : string,
  marginLeft? : number,
  marginRight? : number
  marginTop? : number,
  marginBottom? : number,
  numberOfLines? : number,
  lineHeight? : number,
  
}

export const Container = (props : ContainerProps) => (
    <View 
      style={[
        {
          position : props.position,
          borderColor : props.borderColor,
          flex : props.flex,
          flexDirection : props.direction,
          width : props.width ? Width(props.width) : null,
          padding : props.padding ? Width(props.padding) : null,
          height : props.height ? Height(props.height) : null,
          justifyContent:
            props.direction === "row"
              ? props.horizontalAlignment
              : props.verticalAlignment,
          alignItems:
            props.direction === "row"
              ? props.verticalAlignment
              : props.horizontalAlignment,
          paddingHorizontal : props.paddingHorizontal ? Width(props.paddingHorizontal) : null,
          marginTop : props.marginTop ? Height(props.marginTop) : null,
          marginBottom : props.marginBottom ? Height(props.marginBottom) : null,
          marginLeft : props.marginLeft ? Width(props.marginLeft) : null,
          paddingTop : props.paddingTop ? Height(props.paddingTop) : null,
          paddingBottom : props.paddingBottom ? Height(props.paddingBottom) : null,
          paddingVertical : props.paddingVertical ? Height(props.paddingVertical) : null,
          paddingRight : props.paddingRight ? Width(props.paddingRight) : null,
          paddingLeft : props.paddingLeft ? Width(props.paddingLeft) : null,
          marginRight : props.marginRight ? Width(props.marginRight) : null,
          backgroundColor : props.backgroundColor || null,
          borderWidth : props.borderWidth,
          borderTopWidth : props.borderTopWidth,
          borderBottomWidth : props.borderBottomWidth,
          borderRadius : props.borderRadius,
          alignSelf : props.alignSelf,
        },props.style
      ]}
    >
      {props.children}
    </View>
  )

  export const P = (props : PTagInterface) => (
    <Text
      style={[
        {
          fontSize : props.fontSize ? Width(props.fontSize) : Width(3.5),
          fontFamily : Font_Family[400],
          textAlign : props.textAlign,
          color : props.color || AppColors.black,
          marginTop : props?.marginTop ? Height(props?.marginTop) : null,
          marginBottom : props?.marginBottom ? Height(props?.marginBottom) : null,
          lineHeight : props?.lineHeight ? Height(props.lineHeight) : Height(3),
          marginLeft : props?.marginLeft ? Width(props?.marginLeft) : null
        },
        props.style
      ]}
    >
     {props.children}
    </Text>
  )

  export const H1 = (props : HTagInterface) => (
    <Text
      style={[
        {
          fontSize : Width(props.fontSize) || Width(4),
          fontFamily : props.bold ? Font_Family[props.bold] : Font_Family[700],
          color : props.color || 'black',
          textAlign: props.textAlign,
          textDecorationLine: props.underline || "none",
          textDecorationColor : props.lineColor,
          textDecorationStyle: "solid",
          marginLeft : props?.marginLeft ? Width(props?.marginLeft) : null,
          marginRight : props?.marginRight ? Width(props?.marginRight) : null,
          marginTop : props?.marginTop ? Height(props?.marginTop) : null,
          marginBottom : props?.marginBottom ? Height(props?.marginBottom) : null,
          lineHeight : props?.lineHeight ? Height(props.lineHeight) : Height(3)
        },
        props.style
      ]}
    >
      {props.children}
    </Text>
  )

export const BackHandler = () => {
  const navigation = useNavigation()
  return(
    <TouchableWrapper onPress={()=>navigation.goBack()} size={8}>
        <Ionicons 
            color={AppColors.black}
            size={Width(7)}
            name="arrow-back-outline"
        />
    </TouchableWrapper>
  )
}