import { useEffect } from "react"
import { Image, Linking, StyleSheet, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { moderateScale, moderateVerticalScale } from "react-native-size-matters"

const Vertify=({navigation})=>{
    useEffect(()=>{
        setTimeout(()=>{navigation.navigate("Login")},2000)
    },[])
    // const openGmail=()=>{
    //     Linking.openURL('mailto: support@expo.io')
    // }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Chờ kích hoạt tài khoản</Text>
            <Text style={styles.content}>Chúng tôi vừa gửi yêu cầu kích hoạt tài khoản của bạn đến quản trị viên</Text>
            {/* <View style={styles.gr}>
                <Image source={require('../../../images/gmail.png')}></Image>
                <TouchableOpacity onPress={openGmail}>
                    <Text style={styles.open}>Mở Gmail</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.check}>Không nhận được email? Kiểm tra thư mục spam</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate("Register")}}>
                <Text style={styles.re_enter}>Nhập lại email và thử lại lần nữa</Text>
            </TouchableOpacity> */}

        
        </View>
    )
    
}
export default Vertify
const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
        
    },
    title:{
        fontSize: moderateScale(25),
        fontWeight: '600',
    },
    content:{

        marginTop: moderateScale(50),
        marginLeft: moderateScale(20)
    
    },
    gr:{
        justifyContent: "center",
        flexDirection: "row",
    },
    open:{
        marginTop: moderateScale(30),
        color: "#1E90FF",
        textDecorationLine:"underline"
    },
    check:{
        marginTop: moderateScale(100),
    },
    re_enter:{
        marginTop: moderateScale(30),
        //marginBottom: moderateScale(100),
        color: "#1E90FF",
        textDecorationLine:"underline"
    }
})