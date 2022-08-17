import React from 'react';
import { BackHandler, Container, H1, P } from '../../../utils/components';
import ScreenWrapper from '../../../utils/ScreenWrapper';
import TouchableWrapper from '../../../utils/TouchableWrapper';
import Ionicons from "react-native-vector-icons/Ionicons";
import AppColors from '../../../utils/colors';
import { Width } from '../../../utils/dimensions';
import { ScrollView } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import styles from './styles';
import moment from 'moment';

interface DetailsProps{
    navigation : any,
    route : any
}
export default function Details({navigation,route} : DetailsProps){
    const {article} = route.params;
    return(
        <ScreenWrapper>
            <Container direction='row' verticalAlignment='center' horizontalAlignment='space-between'>
                <BackHandler />
                <TouchableWrapper onPress={()=>null} size={8}>
                    <Ionicons name="share" color={AppColors.red} size={Width(6)}/>
                </TouchableWrapper>
            </Container>
            <ScrollView>
                <Image 
                    source={{uri : article.media}}
                    style={styles.media}
                />
                <Container width={95} alignSelf='center'>
                    <H1 marginTop={2} marginBottom={2} fontSize={5}>{article?.title}</H1>
                    <Container direction='row' horizontalAlignment='space-between' verticalAlignment='center'>
                        <Container direction='row' verticalAlignment='center' width={42}
                            horizontalAlignment='space-between'
                        >
                            <Container style={styles.avatar} />
                            <P>By {article?.author}</P>
                        </Container>
                        <P>{moment(article?.published_date).fromNow()}</P>
                    </Container>
                    <Container marginTop={2}>
                        <Container direction='row' horizontalAlignment='space-between'>
                            <TouchableWrapper isText onPress={()=>null} width={30}>
                                <Container direction='row' verticalAlignment='center'>
                                    <Ionicons name="chatbox" size={Width(5)} color={AppColors.red}/>
                                    <P marginLeft={1}>8 Comments</P>
                                </Container>
                            </TouchableWrapper>
                            <TouchableWrapper isText onPress={()=>null}>
                                <Container direction='row' verticalAlignment='center'>
                                    <Ionicons name="heart" size={Width(5)} color={AppColors.red}/>
                                    <P marginLeft={1}>25 likes</P>
                                </Container>
                            </TouchableWrapper>
                            <TouchableWrapper isText onPress={()=>null}>
                                <Container direction='row' verticalAlignment='center'>
                                    <Ionicons name="share-social" size={Width(5)} color={AppColors.red}/>
                                </Container>
                            </TouchableWrapper>
                        </Container>
                    </Container>
                    <Container marginTop={2}>
                        <P>{article?.summary}</P>
                    </Container>
                </Container>
            </ScrollView>
        </ScreenWrapper>
    )
}