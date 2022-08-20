import React, { useEffect } from 'react'
import { Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { changeRoute } from '../../../store/routeReducer'
import { Container, H1, P } from '../../../utils/components'
import { getData } from '../../../utils/functions'
import Images from '../../../utils/images'
import ScreenWrapper from '../../../utils/ScreenWrapper'
import styles from './styles'

export default function Splash(){
const dispatch = useDispatch()
    const navigationHandler = async () => {
        let userDetails = await getData("user")
        if(userDetails) return dispatch(changeRoute("Main"))
        dispatch(changeRoute("Auth"))
    }
    
    useEffect(()=>{
        setTimeout(()=>{
            navigationHandler()
        },500)
    },[])

    return(
        <ScreenWrapper>
            <Container verticalAlignment='center' horizontalAlignment='center' flex={1}>
                <Image 
                    source={{uri : Images.logo}}
                    style={styles.logo}
                />
                <Container width={70}>
                    <P textAlign='center'>All type of news from all trusted sources for all kind of people</P>
                </Container>
            </Container>
        </ScreenWrapper>
    )
}