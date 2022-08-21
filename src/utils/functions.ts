
import React from 'react';
import { showMessage } from 'react-native-flash-message';
import { Height,Width } from './dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppColors from './colors';
import Font_Family from './fontFamily';
import {H1} from './components'
import { Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import analytics from '@react-native-firebase/analytics';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';

export const ToastError = (message  : string) => {
    return showMessage({
      message : "Error",
      description : message,
      position: 'top',
      floating: true,
      animated: true,
      backgroundColor: AppColors.defaultSkin,
      color: AppColors.white,
      titleStyle: {fontSize: Width(4), fontFamily: Font_Family[600]}
    });
}


export const ToastSuccess = (message  : string) => {
  return showMessage({
    message : "Success",
    type : "success",
    description : message,
    position: 'top',
    floating: true,
    animated: true,
    color: AppColors.white,
    titleStyle: {fontSize: Width(4), fontFamily: Font_Family[600]}
  });
}

export const validateEmail = (email : string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const storeData = async (key : string,value : any) => {
  try {
    await AsyncStorage.setItem(`@${key}`, JSON.stringify(value))
  } catch (e) {
    return false
  }
}


export const getData = async (key : string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(`@${key}`)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    return false
  }
}

export const logUserActivities = (data  : any) => {
  if(data?.event_type === "LOGIN" && data?.method){
    let load = {
      method : data.method
    }
    return analytics().logLogin(load) 
  }
  if(data?.event_type === "SIGNUP" && data?.method){
    let load = {
      method : data.method
    }
    return analytics().logSignUp(load) 
  }
  if(data?.event_type === "DETAILS" && data?.content_type && data?.id){
    let load = {content_type : data.content_type,item_id : data.id}
    return analytics().logSelectContent(load)
  }
  if(data?.event_type === "SCREEN_CHANGE"){
    let load = {content_type : data.content_type,item_id : data.id}
    return analytics().logScreenView(load)
  }
  if(data?.event_type === "ON_OPEN"){
    return analytics().logAppOpen()
  }
}
