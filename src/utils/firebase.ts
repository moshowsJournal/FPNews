import firebase from "@react-native-firebase/app"

const reactNativeFirebaseConfig = {
    apiKey: "AIzaSyCmipLgsKccQYSx44LNCFAfcwuVZhNk9RU",
    authDomain: "",
    databaseURL: "",
    projectId: "fpnews-e245b",
    storageBucket: "",
    messagingSenderId: "631795731887",
    appId: "1:631795731887:android:7ab7e250b271b9c421335a",
};


const firebaseConfig = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(reactNativeFirebaseConfig);
    }
}

export default firebaseConfig;
