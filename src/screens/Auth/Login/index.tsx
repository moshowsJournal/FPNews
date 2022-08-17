import React from 'react'
import { Image } from 'react-native'
import { TextInput } from 'react-native-paper'
import Button from '../../../utils/Button'
import { Container, H1, P } from '../../../utils/components'
import Images from '../../../utils/images'
import Input from '../../../utils/Input'
import ScreenWrapper from '../../../utils/ScreenWrapper'
import TouchableWrapper from '../../../utils/TouchableWrapper'
import styles from './styles';
import AppColors from '../../../utils/colors'
import { Width } from '../../../utils/dimensions'
//import Icon from 'react-native-ionicons'
import Ionicons from "react-native-vector-icons/Ionicons"
import { useDispatch } from 'react-redux'
import { changeRoute } from '../../../store/routeReducer'


interface LoginProps{
    navigation : any
}

export default function Login({navigation} : LoginProps){
    const dispatch = useDispatch()
    const registerNow = () => {
        navigation.navigate("Register")
    }
    const submitHanlder = () => {
        dispatch(changeRoute("Main"))
    }
    return(
        <ScreenWrapper>
            <Container width={90} horizontalAlignment='center' alignSelf='center'>
                <Container horizontalAlignment='center' verticalAlignment='center'>
                    <Image 
                        source={{uri : Images.logo}}
                        style={styles.logo}
                    />
                </Container>
                <Container>
                    <Input label='Email Address' placeholder='Enter Email Address'/>
                </Container>
                <Container>
                    <Input label='Password' placeholder='********' right={<TextInput.Icon name="eye"
                            color={"success"}
                          onPress={()=>null}
                          style={styles.icon}
                        />} />
                </Container>
                <TouchableWrapper onPress={()=>null} isText width={40} style={styles.forgot}>
                    <H1 color={AppColors.red} bold={600}>Forgot Password?</H1>
                </TouchableWrapper>
                <Button loading={false} text={"Sign In"} onPress={submitHanlder}/>
                <Container marginTop={4}>
                    <Container direction='row' verticalAlignment='center' horizontalAlignment='space-between'
                        width={70}
                    >
                        <Container width={28} height={0.2} backgroundColor={AppColors.red} />
                            <H1 fontSize={4} color={AppColors.red}>OR</H1>
                        <Container width={28} height={0.2} backgroundColor={AppColors.red} />
                    </Container>
                    <TouchableWrapper onPress={()=>null} style={styles.social} isText>
                        <Container direction='row' verticalAlignment='center'
                            horizontalAlignment='center'
                        >
                            <Ionicons name="logo-google" size={Width(6)} color='red' />
                            <H1 marginLeft={2} color={AppColors.red}>Sign in with Google</H1>
                        </Container>
                    </TouchableWrapper>
                </Container>
                <TouchableWrapper onPress={registerNow} isText style={styles.register}>
                    <Container direction='row' verticalAlignment='center'>
                        <P>Do not have an account?</P>
                        <H1 color={AppColors.red} marginLeft={1}>Register</H1>
                    </Container>
                </TouchableWrapper>
            </Container>
        </ScreenWrapper>
    )
}