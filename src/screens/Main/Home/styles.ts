import { StyleSheet } from "react-native";
import { Height, Width } from "../../../utils/dimensions";

const styles = StyleSheet.create({
    background : {
        height : Height(30),
        borderRadius : Width(5),
        justifyContent : "flex-end",
    },
    imageStyle : {
        borderRadius : Width(5)
    },
    contentContainerStyle : {
        alignItems : "center"
    },
    listItem : {
        width : Width(90),
       borderRadius : Width(5),
       marginBottom : Height(2)
    },
    titleContainer : {
        borderTopRightRadius : Width(3)
    }
})

export default styles;