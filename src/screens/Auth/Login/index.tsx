import React from 'react'
import { Image, Keyboard } from 'react-native'
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
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { storeData, ToastError, validateEmail } from '../../../utils/functions'


interface LoginProps{
    navigation : any
}

export default function Login({navigation} : LoginProps){
    const dispatch = useDispatch()
    const [data,setData] = React.useState({
        email : "",
        password : ""
    })
    const [show,setShow] = React.useState(false)
    const [loading,setLoading] = React.useState(false)

    const registerNow = () => {
        navigation.navigate("Register")
    }
    const submitHanlder = async () => {
        try{
            Keyboard.dismiss()
            const required = ["email","password"]
            let msg = ""
            for(const req of required){
                if(data[req].toString().trim() === "") msg = `Please provide your ${req.replace("_"," ")}`
                break;
            }
            if(msg.trim() !== "") return ToastError(msg)
            if(!validateEmail(data.email.toString().trim())) return ToastError("Please provide a valid email address")
            setLoading(true)
            let res = await auth()
            .signInWithEmailAndPassword(data.email.toString().trim(), data.password)
            const useRef = await firestore().collection('Users').doc(res.user.uid).get()
            console.log("RESPONSE",useRef)
            setLoading(false)
            await storeData("user",useRef._data)
            dispatch(changeRoute("Main"))
        }catch(err){
            setLoading(false)
            ToastError("Invalid email address or password")
        }
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
                    <Input label='Email Address' placeholder='Enter Email Address'
                        onChangeText={(value : string)=>setData({...data,email : value})} 
                        value={data?.email}
                        keyboardType='email-address'
                    />
                </Container>
                <Container>
                    <Input label='Password' placeholder='********' right={<TextInput.Icon name={show ? "eye-off" : "eye"}
                            color={"success"}
                            onPress={()=>setShow(!show)}
                            style={styles.icon}
                        />}
                        secureTextEntry={!show}
                        onChangeText={(value : string)=>setData({...data,password : value})} 
                        value={data?.password}
                    />
                </Container>
                <TouchableWrapper onPress={()=>null} isText width={40} style={styles.forgot}>
                    <H1 color={AppColors.red} bold={600}>Forgot Password?</H1>
                </TouchableWrapper>
                <Button loading={loading} text={"Sign In"} onPress={submitHanlder} />
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