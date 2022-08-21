import React, { useEffect } from 'react'
import { Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { changeRoute } from '../../../store/routeReducer'
import { changeAppSkin } from '../../../store/themeSlice'
import AppColors from '../../../utils/colors'
import { Container, H1, P } from '../../../utils/components'
import { getData } from '../../../utils/functions'
import Images from '../../../utils/images'
import RemoteConfigService from '../../../utils/remoteConfigService'
import ScreenWrapper from '../../../utils/ScreenWrapper'
import styles from './styles'

export default function Splash(){
    const dispatch = useDispatch()
    const primaryColor = useSelector((state : any)=>state.appThemeReducer.primaryColor)

    const navigationHandler = async () => {
        await RemoteConfigService.initialize()
        let primaryColor = RemoteConfigService.getRemoteValue("primaryColor")
        dispatch(changeAppSkin(primaryColor))
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
                    source={{uri : primaryColor === AppColors.defaultSkin ? Images.logo : Images.logo1}}
                    style={styles.logo}
                />
                <Container width={70}>
                    <P textAlign='center'>All type of news from all trusted sources for all kind of people</P>
                </Container>
            </Container>
        </ScreenWrapper>
    )
}