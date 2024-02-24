import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale, verticalScale } from "react-native-size-matters"

export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    name:{
        marginTop: moderateScale(50),
        alignSelf: "center",
        color:"#1E90FF",
        fontSize: moderateScale(30),
        fontWeight: '600',
    },
})