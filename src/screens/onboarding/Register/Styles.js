import { StyleSheet } from "react-native";
import 
{ moderateScale, moderateVerticalScale, scale, verticalScale } 
from "react-native-size-matters";

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white"
    },
    logo:{
        width: scale(150),
        height: scale(150),
        alignSelf: "center",
        marginTop: moderateVerticalScale(40),
    },
    forgotPass:{
        alignSelf: "flex-end",
        marginRight: 20,
        marginTop: 10
    },
    input:{
        width: '90%',
        height: verticalScale(45),
        alignSelf: "center",
        borderWidth: 0.4,
        marginTop: moderateVerticalScale(20),
        justifyContent: "center",
        paddingLeft: moderateScale(15),
        paddingRight: moderateScale(15),
        borderRadius: moderateScale(10)
    },
    btn:{
        
        width: "90%",
        height: verticalScale(45),
        alignSelf: "center",
        backgroundColor: "#1E90FF",
        marginTop: moderateVerticalScale(20),
        borderRadius: moderateScale(10),
        justifyContent: "center",
        alignItems: "center"
    },
    btn1:{
        width: "90%",
        height: verticalScale(45),
        alignSelf: "center",
        backgroundColor: "#E0FFFF",
        marginTop: moderateVerticalScale(20),
        borderRadius: moderateScale(10),
        justifyContent: "center",
        alignItems: "center"
    },
    btnavt:{
        width: "40%",
        height: verticalScale(70),
        marginLeft: "5%",
        //alignSelf: "center",
        marginTop: moderateVerticalScale(20),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: moderateScale(10),
        borderWidth: moderateScale(0.5)
    },
    loginw:{
        flexDirection:"row",
        alignSelf:"center",
        marginTop: moderateScale(20),
        marginBottom: moderateScale(100)
    },
    erroMess:{
        marginLeft: moderateScale(20),
        color: 'red',
    },
    img:{
        marginLeft: moderateScale(20),
        width: 100,
        height: 100
    }
})