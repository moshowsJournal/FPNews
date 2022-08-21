import remoteConfig from '@react-native-firebase/remote-config';
const appColor = remoteConfig().getValue('primaryColor').asString();
const Images = {
    logo : "https://securesustain.org/wp-content/uploads/2021/01/FP.png",
    logo1 : "https://cdn.dribbble.com/users/1171903/screenshots/6119678/media/2596560a9de1b470baffab6160d116d4.png?compress=1&resize=400x300&vertical=top"
}

export default Images;