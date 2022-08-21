
import React, { useEffect } from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import AppColors from './colors';
import { Container, H1, P } from './components';
import { Height, Width } from './dimensions';
import TouchableWrapper from './TouchableWrapper';
import Ionicons from "react-native-vector-icons/Ionicons"
import { useDispatch } from 'react-redux';
import { changeRoute } from '../store/routeReducer';
import { getData } from './functions';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import perf from '@react-native-firebase/perf';

interface DrawerBarProps{
    navigation : any
}

export default function DrawerBar({navigation} : DrawerBarProps){
    const dispatch = useDispatch()
    const [user,setUser] = React.useState({
        full_name : ""
    })
    const signOut = async () => {
        const trace = await perf().startTrace('SIGNOUT_TRACE');
        navigation.closeDrawer()
        await AsyncStorage.removeItem('@user')
        auth().signOut()
        GoogleSignin.signOut()
        await trace.stop();
        dispatch(changeRoute("Auth"))
    }
    const getUserData = async () => {
        try{
           let data = await getData("user")
           setUser(data)
        }catch(err){

        }
    }
    useEffect(()=>{
        getUserData()
    },[])
    return(
        <Container verticalAlignment='space-between' flex={1} paddingVertical={5}>
            <Container>
                <Container 
                    style={styles.avatar}
                    alignSelf='center'
                />
                <H1 textAlign='center' marginTop={2} numberOfLines={1}>Hello, {user?.full_name}</H1>
            </Container>
            <TouchableWrapper isText onPress={signOut} width={70} style={styles.button}>
                <Container direction='row' verticalAlignment='center'>
                    <Ionicons name="log-out" color={AppColors.black} size={Width(6)} />
                    <H1 marginLeft={2}>Sign Out</H1>
                </Container>
            </TouchableWrapper>
        </Container>
    )
}

const styles = StyleSheet.create({
    avatar : {
        width : Height(7),
        height : Height(7),
        backgroundColor : AppColors.grayBorder,
        borderRadius : Width(50)
    },
    button : {
        alignSelf : "center"
    }
})