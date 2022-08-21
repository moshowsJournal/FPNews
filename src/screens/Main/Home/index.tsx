import React, { useEffect } from 'react';
import { Container, H1, P } from '../../../utils/components';
import Ionicons from "react-native-vector-icons/Ionicons";
import AppColors from '../../../utils/colors';
import { Width } from '../../../utils/dimensions';
import TouchableWrapper from '../../../utils/TouchableWrapper';
import ScreenWrapper from '../../../utils/ScreenWrapper';
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator, FlatList, ImageBackground } from 'react-native';
import styles from './styles';
import { getAPIs } from '../../../utils/api';
import { logUserActivities } from '../../../utils/functions';
import { useSelector } from 'react-redux';

interface HomeProps{
    navigation : any
}
export default function Home({navigation} : HomeProps){
    const primaryColor = useSelector((state : any)=>state.appThemeReducer.primaryColor)
    const tabs = ["Popular","All","Politics","Technology","Health","Science"]
    const [loading,setLoading] = React.useState(false)
    const [articles,setArticles] = React.useState([])
    const getArticles = async () => {
        try{
            setLoading(true)
            let res = await getAPIs()
            setArticles(res.articles);
            setLoading(false)
        }catch(err){
        }
    }

    const data = [
        {
            "title":"Latest Live News Updates: Elon Musk says he will buy Manchester United Football Club",
            "author":"Economic Times",
            "published_date":"2022-08-17 00:21:01",
            "published_date_precision":"full",
            "link":"https://economictimes.indiatimes.com/news/newsblogs/latest-daily-news-and-updates-august-17/liveblog/93603807.cms",
            "clean_url":"indiatimes.com",
            "summary":`Tesla Chief Executive Officer Elon Musk said on Tuesday he was buying football club Manchester United Plc. "I'm buying Manchester United ur welcome" Musk tweeted. It was unclear if Musk was serious about the deal.`,
            "rights":"Copyright:(C)2022 Bennett Coleman & Co. Ltd, http://info.indiatimes.com/terms/tou.html",
            "rank":296,
            "topic":"economics",
            "country":"IN",
            "language":"en",
            "authors":"Economic Times",
            "media":"https://img.etimg.com/thumb/msid-93603807,width-600,resizemode-4,imglength-7124/news/newsblogs/latest-daily-news-and-updates-august-17.jpg",
            "is_opinion":false,
            "twitter_account":"@EconomicTimes",
            "_score":25.828161,
            "_id":"c32c16cdbfa7d797fdb73eefe0776796"
            },
            {
                "title":"Latest Live News Updates: Elon Musk says he will buy Manchester United Football Club",
                "author":"Economic Times",
                "published_date":"2022-08-17 00:21:01",
                "published_date_precision":"full",
                "link":"https://economictimes.indiatimes.com/news/newsblogs/latest-daily-news-and-updates-august-17/liveblog/93603807.cms",
                "clean_url":"indiatimes.com",
                "summary":`Tesla Chief Executive Officer Elon Musk said on Tuesday he was buying football club Manchester United Plc. "I'm buying Manchester United ur welcome" Musk tweeted. It was unclear if Musk was serious about the deal.`,
                "rights":"Copyright:(C)2022 Bennett Coleman & Co. Ltd, http://info.indiatimes.com/terms/tou.html",
                "rank":296,
                "topic":"economics",
                "country":"IN",
                "language":"en",
                "authors":"Economic Times",
                "media":"https://img.etimg.com/thumb/msid-93603807,width-600,resizemode-4,imglength-7124/news/newsblogs/latest-daily-news-and-updates-august-17.jpg",
                "is_opinion":false,
                "twitter_account":"@EconomicTimes",
                "_score":25.828161,
                "_id":"c32c16cdbfa7d797fdb73eefe0776796"
                },
                {
                    "title":"Latest Live News Updates: Elon Musk says he will buy Manchester United Football Club",
                    "author":"Economic Times",
                    "published_date":"2022-08-17 00:21:01",
                    "published_date_precision":"full",
                    "link":"https://economictimes.indiatimes.com/news/newsblogs/latest-daily-news-and-updates-august-17/liveblog/93603807.cms",
                    "clean_url":"indiatimes.com",
                    "summary":`Tesla Chief Executive Officer Elon Musk said on Tuesday he was buying football club Manchester United Plc. "I'm buying Manchester United ur welcome" Musk tweeted. It was unclear if Musk was serious about the deal.`,
                    "rights":"Copyright:(C)2022 Bennett Coleman & Co. Ltd, http://info.indiatimes.com/terms/tou.html",
                    "rank":296,
                    "topic":"economics",
                    "country":"IN",
                    "language":"en",
                    "authors":"Economic Times",
                    "media":"https://img.etimg.com/thumb/msid-93603807,width-600,resizemode-4,imglength-7124/news/newsblogs/latest-daily-news-and-updates-august-17.jpg",
                    "is_opinion":false,
                    "twitter_account":"@EconomicTimes",
                    "_score":25.828161,
                    "_id":"c32c16cdbfa7d797fdb73eefe0776796"
                    },
                    {
                        "title":"Latest Live News Updates: Elon Musk says he will buy Manchester United Football Club",
                        "author":"Economic Times",
                        "published_date":"2022-08-17 00:21:01",
                        "published_date_precision":"full",
                        "link":"https://economictimes.indiatimes.com/news/newsblogs/latest-daily-news-and-updates-august-17/liveblog/93603807.cms",
                        "clean_url":"indiatimes.com",
                        "summary":`Tesla Chief Executive Officer Elon Musk said on Tuesday he was buying football club Manchester United Plc. "I'm buying Manchester United ur welcome" Musk tweeted. It was unclear if Musk was serious about the deal.`,
                        "rights":"Copyright:(C)2022 Bennett Coleman & Co. Ltd, http://info.indiatimes.com/terms/tou.html",
                        "rank":296,
                        "topic":"economics",
                        "country":"IN",
                        "language":"en",
                        "authors":"Economic Times",
                        "media":"https://img.etimg.com/thumb/msid-93603807,width-600,resizemode-4,imglength-7124/news/newsblogs/latest-daily-news-and-updates-august-17.jpg",
                        "is_opinion":false,
                        "twitter_account":"@EconomicTimes",
                        "_score":25.828161,
                        "_id":"c32c16cdbfa7d797fdb73eefe0776796"
                        },
                        {
                            "title":"Latest Live News Updates: Elon Musk says he will buy Manchester United Football Club",
                            "author":"Economic Times",
                            "published_date":"2022-08-17 00:21:01",
                            "published_date_precision":"full",
                            "link":"https://economictimes.indiatimes.com/news/newsblogs/latest-daily-news-and-updates-august-17/liveblog/93603807.cms",
                            "clean_url":"indiatimes.com",
                            "summary":`Tesla Chief Executive Officer Elon Musk said on Tuesday he was buying football club Manchester United Plc. "I'm buying Manchester United ur welcome" Musk tweeted. It was unclear if Musk was serious about the deal.`,
                            "rights":"Copyright:(C)2022 Bennett Coleman & Co. Ltd, http://info.indiatimes.com/terms/tou.html",
                            "rank":296,
                            "topic":"economics",
                            "country":"IN",
                            "language":"en",
                            "authors":"Economic Times",
                            "media":"https://img.etimg.com/thumb/msid-93603807,width-600,resizemode-4,imglength-7124/news/newsblogs/latest-daily-news-and-updates-august-17.jpg",
                            "is_opinion":false,
                            "twitter_account":"@EconomicTimes",
                            "_score":25.828161,
                            "_id":"c32c16cdbfa7d797fdb73eefe0776796"
                            },
                            {
                                "title":"Latest Live News Updates: Elon Musk says he will buy Manchester United Football Club",
                                "author":"Economic Times",
                                "published_date":"2022-08-17 00:21:01",
                                "published_date_precision":"full",
                                "link":"https://economictimes.indiatimes.com/news/newsblogs/latest-daily-news-and-updates-august-17/liveblog/93603807.cms",
                                "clean_url":"indiatimes.com",
                                "summary":`Tesla Chief Executive Officer Elon Musk said on Tuesday he was buying football club Manchester United Plc. "I'm buying Manchester United ur welcome" Musk tweeted. It was unclear if Musk was serious about the deal.`,
                                "rights":"Copyright:(C)2022 Bennett Coleman & Co. Ltd, http://info.indiatimes.com/terms/tou.html",
                                "rank":296,
                                "topic":"economics",
                                "country":"IN",
                                "language":"en",
                                "authors":"Economic Times",
                                "media":"https://img.etimg.com/thumb/msid-93603807,width-600,resizemode-4,imglength-7124/news/newsblogs/latest-daily-news-and-updates-august-17.jpg",
                                "is_opinion":false,
                                "twitter_account":"@EconomicTimes",
                                "_score":25.828161,
                                "_id":"c32c16cdbfa7d797fdb73eefe0776796"
                                },{
                                    "title":"Latest Live News Updates: Elon Musk says he will buy Manchester United Football Club",
                                    "author":"Economic Times",
                                    "published_date":"2022-08-17 00:21:01",
                                    "published_date_precision":"full",
                                    "link":"https://economictimes.indiatimes.com/news/newsblogs/latest-daily-news-and-updates-august-17/liveblog/93603807.cms",
                                    "clean_url":"indiatimes.com",
                                    "summary":`Tesla Chief Executive Officer Elon Musk said on Tuesday he was buying football club Manchester United Plc. "I'm buying Manchester United ur welcome" Musk tweeted. It was unclear if Musk was serious about the deal.`,
                                    "rights":"Copyright:(C)2022 Bennett Coleman & Co. Ltd, http://info.indiatimes.com/terms/tou.html",
                                    "rank":296,
                                    "topic":"economics",
                                    "country":"IN",
                                    "language":"en",
                                    "authors":"Economic Times",
                                    "media":"https://img.etimg.com/thumb/msid-93603807,width-600,resizemode-4,imglength-7124/news/newsblogs/latest-daily-news-and-updates-august-17.jpg",
                                    "is_opinion":false,
                                    "twitter_account":"@EconomicTimes",
                                    "_score":25.828161,
                                    "_id":"c32c16cdbfa7d797fdb73eefe0776796"
                                    }
    ]
    useEffect(()=>{
       // getArticles()
    },[])

    const ListEmptyComponent = () => {
        return(
            <Container flex={1} horizontalAlignment='center' verticalAlignment='center'>
                <H1>No News Today :(</H1>
            </Container>
        )
    }
    const renderItem = ({item} : any) => {
        return(
            <TouchableWrapper onPress={()=>{
                logUserActivities({content_type : "DETAILS",event_type : "DETAILS",id : item._id})
                navigation.navigate("Details",{article : item})
            }} style={styles.listItem}
                rippleColor={AppColors.transparent}
            >
                <ImageBackground style={styles.background} source={{uri : item.media}}
                    resizeMode='cover'
                    imageStyle={styles.imageStyle}
                >
                    <Container width={80} backgroundColor={AppColors.black}
                        paddingHorizontal={3}
                        paddingVertical={2}
                        style={styles.titleContainer}
                    >
                        <H1 color={AppColors.white} bold={500}>{item.title}</H1>
                    </Container>
                </ImageBackground>
            </TouchableWrapper>
        )
    }
    const [current,setCurrent] = React.useState("Popular")
    return(
        <ScreenWrapper>
            <Container direction='row' horizontalAlignment='space-between' width={90} alignSelf='center'>
                <Container direction='row' 
                    width={50}
                    verticalAlignment='center'
                >
                    <TouchableWrapper onPress={()=>navigation.openDrawer()} size={8}>
                        <Ionicons name="menu-outline" color={primaryColor} 
                            size={Width(6)}
                        />
                    </TouchableWrapper>
                    <Container direction='row' verticalAlignment='center'>
                        <Ionicons name="location-outline" size={Width(6)} color={AppColors.black} />
                        <H1 bold={600}>Lagos, Nigeria</H1>
                    </Container>
                </Container>
                <Container width={30} direction='row' verticalAlignment='center'>
                    <Container width={20} direction='row' verticalAlignment='center' horizontalAlignment='space-between'
                        borderWidth={1}
                        borderColor={AppColors.grayBorder}
                        paddingVertical={1}
                        paddingHorizontal={2}
                        borderRadius={30}
                    >
                        <Ionicons name="star" color={AppColors.warning} size={Width(6)} />
                        <H1 color={AppColors.black}>599</H1>
                    </Container>
                    <TouchableWrapper size={6} onPress={()=>null}>
                        <Ionicons name="notifications" color={primaryColor} size={Width(6)}/>
                    </TouchableWrapper>
                </Container>
            </Container>
           <Container>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        tabs.map((item,i)=><TouchableWrapper isText onPress={()=>setCurrent(item)} key={i}
                        >
                            {
                                item === current ? <H1>{item}</H1> : <P>{item}</P>
                            }
                        </TouchableWrapper>)
                    }
                </ScrollView>
           </Container>
            {
                loading ? <Container flex={1} borderTopWidth={0.5} borderColor={AppColors.grayBorder} paddingTop={1} verticalAlignment='center' horizontalAlignment='center'>
                    <ActivityIndicator size={Width(8)} color={primaryColor} />
                </Container> : <Container flex={1} borderTopWidth={0.5} borderColor={AppColors.grayBorder} paddingTop={1}>
                    <FlatList 
                        //data={articles && Array.isArray(articles) ? articles : []}
                        data={data}
                        keyExtractor={(item,i)=>i.toString()}
                        ListEmptyComponent={ListEmptyComponent}
                        renderItem={renderItem}
                        contentContainerStyle={styles.contentContainerStyle}
                    />
                </Container>
            }
           
        </ScreenWrapper>
    )
}