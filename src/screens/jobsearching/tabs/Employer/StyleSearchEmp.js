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
        width: '60%',
        height: verticalScale(45),
        borderWidth: 0.4,
        marginTop: moderateVerticalScale(20),
        justifyContent: "center",
        paddingLeft: moderateScale(15),
        paddingRight: moderateScale(15),
        borderRadius: moderateScale(10),
        margin: moderateScale(5)
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
    }
})