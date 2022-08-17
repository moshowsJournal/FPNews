import { StyleSheet } from "react-native";
import AppColors from "../../../utils/colors";
import { Height, Width } from "../../../utils/dimensions";

const styles = StyleSheet.create({
    media : {
        height : Height(40),
        width : Width(100),
        resizeMode : "cover"
    },
    avatar : {
        width : Height(5),
        height : Height(5),
        backgroundColor : AppColors.grayBorder,
        borderRadius : Width(50)
    }
})

export default styles;