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
import Ionicons from "react-native-vector-icons/Ionicons"
import { useDispatch } from 'react-redux'
import { changeRoute } from '../../../store/routeReducer'


interface RegisterTwoProps{
    navigation : any
}

export default function RegisterTwo({navigation} : RegisterTwoProps){
    const dispatch = useDispatch()
    const submitHandler = () => {
        dispatch(changeRoute("main"))
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
                    <Input label='Username' placeholder='Enter Username'/>
                </Container>
                <Container marginBottom={4}>
                    <Input label='Password' placeholder='********' right={<TextInput.Icon name="eye"
                            color={"success"}
                          onPress={()=>null}
                          style={styles.icon}
                        />}
                        secureTextEntry={true}
                    />
                </Container>
                <Button loading={false} text={"Continue"} onPress={submitHandler}/>
            </Container>
        </ScreenWrapper>
    )
}