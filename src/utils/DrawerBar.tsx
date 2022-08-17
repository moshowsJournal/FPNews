
import React from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import AppColors from './colors';
import { Container, H1, P } from './components';
import { Height, Width } from './dimensions';
import TouchableWrapper from './TouchableWrapper';
import Ionicons from "react-native-vector-icons/Ionicons"
import { useDispatch } from 'react-redux';
import { changeRoute } from '../store/routeReducer';

interface DrawerBarProps{
    navigation : any
}

export default function DrawerBar({navigation} : DrawerBarProps){
    const dispatch = useDispatch()
    const signOut = () => {
        navigation.closeDrawer()
        dispatch(changeRoute("Auth"))
    }
    return(
        <Container verticalAlignment='space-between' flex={1} paddingVertical={5}>
            <Container>
                <Container 
                    style={styles.avatar}
                    alignSelf='center'
                />
                <H1 textAlign='center' marginTop={2} numberOfLines={1}>Hello, Moshood Oseni</H1>
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