import { StyleSheet } from "react-native"
import { moderateScale, moderateVerticalScale, verticalScale } from "react-native-size-matters"

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    // gr1:{
    //     flexDirection: "row",
    //     justifyContent: "center"
    // },
    img:{
        marginTop: moderateScale(30),
        alignSelf: "center",
        
    },
    name:{
        alignSelf: "center",
        fontSize: moderateScale(30),
        fontWeight: '700',
       
    },
    title:{
        marginTop: moderateScale(20),
        paddingLeft: moderateScale(20),
        fontSize: moderateScale(15),
        fontWeight: '600'
    },
    input:{
        width: '90%',
        height: verticalScale(45),
        alignSelf: "center",
        borderWidth: 0.4,
        marginTop: moderateVerticalScale(15),
        justifyContent: "center",
        paddingLeft: moderateScale(15),
        paddingRight: moderateScale(15),
        borderRadius: moderateScale(10)
    },
    select:{
        width: '90%',
        height: verticalScale(45),
        marginTop: moderateVerticalScale(15),
        borderRadius: moderateScale(10),
        paddingLeft: moderateScale(15),
        paddingRight: moderateScale(15),
        alignSelf: "center"
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
    update:{
        color:"#1E90FF",
        alignSelf: "center"
    },
})