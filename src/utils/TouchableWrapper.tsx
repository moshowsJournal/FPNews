import React from 'react';
import { TouchableRipple } from 'react-native-paper';
import { Height, Width } from './dimensions';


interface TouchableProps {
    height? : number,
    width? : number,
    size? : number,
    children : React.ReactNode,
    onPress : () => void,
    isText? : boolean,
    style? : any,
    rippleColor? : string

}

export const TouchableWrapper = (props : TouchableProps) => (
    <TouchableRipple onPress={props.onPress}
      rippleColor={props.rippleColor || '#C0C0C0'}
      style={[
        props?.isText ? {
          height : props?.height ? Height(props?.height) : Height(5),
          width : props?.width ? Width(props?.width) : Width(25),
          justifyContent : "center",
          alignItems : "center",
        } : props?.size ? {
          borderRadius : Width(50),
          height : Height(props.size),
          width : Height(props.size),
          justifyContent : "center",
          alignItems : "center"
        } : {},props.style
      ]}
    >
      {props.children}
    </TouchableRipple>
  )

export default TouchableWrapper;