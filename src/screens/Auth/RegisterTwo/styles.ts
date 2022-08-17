import { StyleSheet } from "react-native";
import { Height, Width } from "../../../utils/dimensions";

const styles = StyleSheet.create({
    logo : {
        height : Height(30),
        width : Width(30),
        resizeMode : "contain"
    },
    icon : {
        marginTop : Height(2)
    },
    forgot : {
        alignSelf : "flex-end",
        marginTop : Height(2)
    },
    social : {
        marginTop : Height(4),
        alignSelf : "center",
        width : Width(70)
    },
    register : {
        width : Width(70),
        marginTop : Height(4)
    }
})

export default styles