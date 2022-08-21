import { StyleSheet } from "react-native";
import AppColors from "../../../utils/colors";
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
    },
    notification  : {
        left : Width(23),
        bottom : Height(4),
        backgroundColor : AppColors.black,
        minWidth : Width(4),
        zIndex : 1000,
        borderRadius : Width(50),
        height : Height(3),
        width : Height(3),
        justifyContent : "center",
        alignItems : "center"
    },
})

export default styles;