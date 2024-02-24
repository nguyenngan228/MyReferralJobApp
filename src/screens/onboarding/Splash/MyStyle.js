import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale, scale, verticalScale } from "react-native-size-matters";

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center"
    },
    logo:{
        width: scale(200),
        height: verticalScale(200)
    },
    name:{
        fontSize: moderateScale(35),
        fontWeight: '600',
        marginTop: moderateVerticalScale(10),
        color: "#1E90FF"
    },
    slogan:{
        fontSize: moderateScale(16),
        fontStyle: "italic",
        position: "absolute",
        bottom: moderateVerticalScale(30),
        color: "#1E90FF"
    }
})