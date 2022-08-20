import React from 'react'
import { Image, Keyboard } from 'react-native'
import { TextInput } from 'react-native-paper'
import Button from '../../../utils/Button'
import { BackHandler, Container, H1, P } from '../../../utils/components'
import Images from '../../../utils/images'
import Input from '../../../utils/Input'
import ScreenWrapper from '../../../utils/ScreenWrapper'
import TouchableWrapper from '../../../utils/TouchableWrapper'
import styles from './styles';
import AppColors from '../../../utils/colors'
import { Width } from '../../../utils/dimensions'
import Ionicons from "react-native-vector-icons/Ionicons"
import { useDispatch } from 'react-redux'
import { changeRoute } from '../../../store/routeReducer'
import { storeData, ToastError, ToastSuccess } from '../../../utils/functions'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';



interface RegisterTwoProps{
    navigation : any,
    route : any
}

export default function RegisterTwo({navigation,route} : RegisterTwoProps){
    const dispatch = useDispatch()
    const {email_address,phone_number,full_name} = route.params
    const[loading,setLoading] = React.useState(false)
    const [show,setShow] = React.useState(false)
    const [data,setData] = React.useState({
        password : "",
        username : ""
    })
    const submitHandler = async () => {
       try{
            Keyboard.dismiss()
            const required = ["username","password"]
            let msg = ""
            for(const req of required){
                if(data[req].toString().trim() === "") msg = `Please provide your ${req.replace("_"," ")}`
            }
            if(msg.trim() !== "") return ToastError(msg)
            setLoading(true)
            let res =  await auth().createUserWithEmailAndPassword(email_address,data.password)
            const userData = {
                id : res.user.uid,
                email_address,
                phone_number,
                username : data.username,
                full_name
            }
            await firestore().collection('Users').doc(res.user.uid).set(userData)
            setLoading(false)
            ToastSuccess("Your account has been created")
            await storeData("user",userData)
            dispatch(changeRoute("Main"))
       }catch(err : any){
            setLoading(false)
            if (err?.code === 'auth/email-already-in-use') {
                return ToastError('That email address is already in use!');
            }
        
            if (err?.code === 'auth/invalid-email') {
                return ToastError('That email address is invalid!');
            }
            ToastError("Something went wrong. Please retry")
       }
    }
    return(
        <ScreenWrapper>
            <BackHandler />
            <Container width={90} horizontalAlignment='center' alignSelf='center'>
                <Container horizontalAlignment='center' verticalAlignment='center'>
                    <Image 
                        source={{uri : Images.logo}}
                        style={styles.logo}
                    />
                </Container>
                <H1>You are almost done ):</H1>
                <Container>
                    <Input label='Username' placeholder='Enter Username'
                            value={data?.username}
                            onChangeText={(value : string)=>setData({...data, username : value})}
                    />
                </Container>
                <Container marginBottom={4}>
                    <Input 
                        label='Password' 
                        placeholder='********' 
                        value={data?.password}
                        onChangeText={(value : string)=>setData({...data, password : value})}
                        right={<TextInput.Icon name={show ? "eye-off" : "eye"}
                            color={"success"}
                            onPress={()=>setShow(!show)}
                            style={styles.icon}
                        />}
                        secureTextEntry={!show}
                    />
                </Container>
                <Button loading={loading} text={"Continue"} onPress={submitHandler}/>
            </Container>
        </ScreenWrapper>
    )
}