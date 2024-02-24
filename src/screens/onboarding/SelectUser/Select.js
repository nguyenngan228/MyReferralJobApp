import { StyleSheet } from "react-native";
import 
{ scale, verticalScale, moderateScale, moderateVerticalScale } 
from 'react-native-size-matters';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    logo:{
        width: scale(150),
        height: scale(150),
        alignSelf: "center",
        marginBottom: moderateVerticalScale(100),
    },
    title:{
        fontWeight: '600',
        fontSize: moderateScale(20),
        marginTop: moderateVerticalScale(0),
        color: "#1E90FF"

    },
    wantToHire:{
        width: 300,
        height: verticalScale(45),
        backgroundColor:"#1E90FF",
        borderRadius: moderateScale(10),
        justifyContent: "center",
        alignItems: "center",
        marginTop: moderateVerticalScale(30)
    },
    txt:{
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: "white"
    },
    wantToJob:{
        width: 300,
        height: verticalScale(45),
        backgroundColor:"#E0FFFF",
        borderRadius: moderateScale(10),
        justifyContent: "center",
        alignItems: "center",
        marginTop: moderateVerticalScale(20)
    },
    txt1:{
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: "gray"
    }
})