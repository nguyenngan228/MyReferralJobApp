import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale, verticalScale } from "react-native-size-matters";

export default StyleSheet.create({
    header:{
        flexDirection:"row",
    },
    body:{
        flex: 1,
        marginTop: moderateScale(30),
        
    },
    input:{
        width: 150,
        height: verticalScale(45),
        marginTop: moderateVerticalScale(20),
        borderRadius: moderateScale(10),
        justifyContent: "center",
        margin: moderateScale(5),
        paddingLeft: moderateScale(15),
        color:"gray"
    },
    btn:{
        width: 100,
        height: verticalScale(45),
        backgroundColor: "#1E90FF",
        marginTop: moderateVerticalScale(20),
        borderRadius: moderateScale(10),
        justifyContent: "center",
        margin: moderateScale(5),
        paddingLeft: moderateScale(15),
    },
    suggest:{
        fontSize: moderateScale(20),
        fontWeight: '500',
    },
    sub_content:{
        margin: moderateScale(5)
    },
    img:{
        width: 120,
        height: 120,
        margin: 10
    },
    title:{
        fontSize: 20,
        fontWeight: "bold",
        color: "blue"
    },
    pad:{
        padding: 10
    },
    next:{
        justifyContent:"space-between",
        flexDirection:"row"
    }
})