import React from 'react'
import { Image } from 'react-native'
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
//import Icon from 'react-native-ionicons'
import Ionicons from "react-native-vector-icons/Ionicons"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


interface RegisterProps{
    navigation : any
}

export default function Register({navigation} : RegisterProps){
    const submitHandler = () => {
        navigation.navigate("RegisterTwo")
    }
    return(
        <ScreenWrapper>
            <BackHandler />
            <KeyboardAwareScrollView>
                <Container width={90} horizontalAlignment='center' alignSelf='center'>
                    <Container horizontalAlignment='center' verticalAlignment='center'>
                        <Image 
                            source={{uri : Images.logo}}
                            style={styles.logo}
                        />
                    </Container>
                    <Container>
                        <Input label='Full Name' placeholder='Enter Full Name'/>
                    </Container>
                    <Container>
                        <Input label='Email Address' placeholder='Enter Email Address'
                            keyboardType={"email-address"}
                        />
                    </Container>
                    <Container>
                        <Input label='Phone Number' placeholder='+234000008900' 
                            keyboardType={"number-pad"}
                        />
                    </Container>
                    <TouchableWrapper onPress={()=>navigation.goBack()} isText width={40} style={styles.forgot}>
                        <H1 color={AppColors.red} bold={600}>Go back to sign in?</H1>
                    </TouchableWrapper>
                    <Button loading={false} text={"Register"} onPress={submitHandler}/>
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
                                <H1 marginLeft={2} color={AppColors.red}>Sign up with Google</H1>
                            </Container>
                        </TouchableWrapper>
                    </Container>
                    <TouchableWrapper onPress={()=>null} isText style={styles.register}>
                        <Container verticalAlignment='center' horizontalAlignment='center'>
                            <P>By signing up, you are agreeing to our</P>
                            <H1 color={AppColors.red} marginLeft={1}>Terms and Conditions</H1>
                        </Container>
                    </TouchableWrapper>
                </Container>
            </KeyboardAwareScrollView>
        </ScreenWrapper>
    )
}