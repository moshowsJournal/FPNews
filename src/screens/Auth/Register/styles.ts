import { StyleSheet } from "react-native";
import { Height, Width } from "../../../utils/dimensions";

const styles = StyleSheet.create({
    logo : {
        height : Height(20),
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
        height : Height(8),
        marginTop : Height(4),
        justifyContent : "center",
        alignItems : "center"
    }
})

export default styles