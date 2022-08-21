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
import { useDispatch, useSelector } from 'react-redux'
import { changeRoute } from '../../../store/routeReducer'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { logUserActivities, storeData, ToastError, validateEmail } from '../../../utils/functions'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import perf from '@react-native-firebase/perf';



interface LoginProps{
    navigation : any
}

export default function Login({navigation} : LoginProps){
    const primaryColor = useSelector((state : any)=>state.appThemeReducer.primaryColor)
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
    

    const onGoogleButtonPress = async () => {
        try{
            const trace = await perf().startTrace('LOGIN_TRACE');
            const { idToken } = await GoogleSignin.signIn();
           const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            setLoading(true)
            let res = await auth().signInWithCredential(googleCredential);
            const userRef = await firestore().collection('Users').doc(res.user.uid).get()
            if(!userRef._exists){
                setLoading(false)
                GoogleSignin.signOut()
                return ToastError("Invalid login information provided.")
            }
            setLoading(false)
            await storeData("user",userRef._data)
            await trace.stop();
            logUserActivities({event_type : "LOGIN",method : "Google"})
            dispatch(changeRoute("Main"))
        }catch(err : any){
            if(JSON.stringify(err).includes('Sign in action cancelled')) return
            setLoading(false)
            GoogleSignin.signOut()
            ToastError(JSON.stringify(err))
        }
    }

    const submitHanlder = async () => {
        try{
            Keyboard.dismiss()
            const required = ["email","password"]
            let msg = ""
            for(const req of required){
                if(data[req].toString().trim() === ""){
                    msg = `Please provide your ${req.replace("_"," ")}`
                    break;
                }
            }
            if(msg.trim() !== "") return ToastError(msg)
            if(!validateEmail(data.email.toString().trim())) return ToastError("Please provide a valid email address")
            setLoading(true)
            let res = await auth()
            .signInWithEmailAndPassword(data.email.toString().trim(), data.password)
            const userRef = await firestore().collection('Users').doc(res.user.uid).get()
            setLoading(false)
            await storeData("user",userRef._data)
            logUserActivities({event_type : "LOGIN",method : "Email"})
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
                         source={{uri : primaryColor === AppColors.defaultSkin ? Images.logo : Images.logo1}}
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
                    <H1 color={primaryColor} bold={600}>Forgot Password?</H1>
                </TouchableWrapper>
                <Button loading={loading} text={"Sign In"} onPress={submitHanlder} primaryColor={primaryColor} />
                <Container marginTop={4}>
                    <Container direction='row' verticalAlignment='center' horizontalAlignment='space-between'
                        width={70}
                    >
                        <Container width={28} height={0.2} backgroundColor={primaryColor} />
                            <H1 fontSize={4} color={primaryColor}>OR</H1>
                        <Container width={28} height={0.2} backgroundColor={primaryColor} />
                    </Container>
                    <TouchableWrapper disabled={loading} onPress={onGoogleButtonPress} style={styles.social} isText>
                        <Container direction='row' verticalAlignment='center'
                            horizontalAlignment='center'
                        >
                            <Ionicons name="logo-google" size={Width(6)} color='red' />
                            <H1 marginLeft={2} color={primaryColor}>Sign in with Google</H1>
                        </Container>
                    </TouchableWrapper>
                </Container>
                <TouchableWrapper onPress={registerNow} isText style={styles.register}>
                    <Container direction='row' verticalAlignment='center'>
                        <P>Do not have an account?</P>
                        <H1 color={primaryColor} marginLeft={1}>Register</H1>
                    </Container>
                </TouchableWrapper>
            </Container>
        </ScreenWrapper>
    )
}