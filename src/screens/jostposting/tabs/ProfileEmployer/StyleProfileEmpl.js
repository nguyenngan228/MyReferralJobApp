import { StyleSheet } from "react-native"
import { moderateScale, moderateVerticalScale, verticalScale } from "react-native-size-matters"

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    sub:{
        marginTop: moderateScale(50),
        alignSelf: "center",
        fontSize: moderateScale(30),
        fontWeight: '700',
        color:"#1E90FF"
    },
    gr1:{
        flexDirection: "row",
        alignSelf: "center"
    },
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
        fontWeight: '600',
        color:"#1E90FF"
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
    inputDate:{
        width: '20%',
        height: verticalScale(20),
        alignSelf: "center",
        borderWidth: 0.4,
        marginTop: moderateVerticalScale(15),
        paddingLeft: moderateScale(15),
        justifyContent: "center",
        borderRadius: moderateScale(5),
        marginRight: moderateScale(20)
    },
    selectArea:{
        width: '90%',
        height: verticalScale(45),
    },
    btn:{
        
        width: "90%",
        height: verticalScale(45),
        alignSelf: "center",
        backgroundColor: "#1E90FF",
        marginTop: moderateVerticalScale(30),
        borderRadius: moderateScale(10),
        justifyContent: "center",
        alignItems: "center",
        marginBottom: moderateScale(50)
    },
})