import { ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import User from "./User"
import MyContext from "../../../context/MyContext"
import API, { authAPI, endpoints } from "../../../configs/API"
import Styles from "../Register/Styles"
import SysModal from "./SysModal"
import AsyncStorage from "@react-native-async-storage/async-storage"
const Login=({navigation})=>{
    const [username, setUsername]=useState('')
    const [badUsername, setBadUsername]=useState('')
    const [password, setPassword]=useState('')
    const [badPassword, setBadPassword]=useState('')
    const [showModal,setShowModal]=useState(false)
    const [errorMessage,setErroMessage]=useState('')
    const [user,dispatch]=useContext(MyContext)
    const [loading,setLoading]=useState(false)


    useEffect(()=>{
        checkLoginStatus()
    },[])
    const checkLoginStatus= async()=>{
        try {
            const accessToken = await AsyncStorage.getItem('access-token');
            if (accessToken) {
                // Nếu tồn tại access-token, chuyển hướng đến màn hình chính hoặc màn hình tương ứng
                const isEmployer = await AsyncStorage.getItem('isEmployer');
                const isApplicant = await AsyncStorage.getItem('isApplicant');

                if (isEmployer === 'true') {
                    navigation.navigate("HomeEmployer");
                } else if (isApplicant === 'true') {
                    navigation.navigate("HomeApplicant");
                }
            }
        } catch (error) {
            console.error('Error checking login status:', error);
        }
    }


    
    const hideModal=()=>{
        setShowModal(false)
    }


    const validate=()=>{
        let validUsername=true
        let validPassword=true
        if(username==''){
            validUsername=false
            setBadUsername('Vui lòng nhập tên người dùng')
           
            
        }else{
            validUsername=true
            setBadUsername('')
        } 
        if(password==''){
            validPassword=false
            setBadPassword('Vui lòng nhập mật khẩu')
        }else{
            validPassword=true
            setBadPassword('')
        } 
    }

    const login=async()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },4000)
        try{
            let res=await API.post(endpoints['login'],{
            'username': username,
            'password': password,
            'client_id':"6exlz3JDWY7LrgUXswFUXt8sS7tAn7Pazos8X8HW",
            'client_secret':"0omrCI4xKwdgkUwyLXirLMGslBVBdesJt5vWFyGTQMmR5itnkPgQz5VLUmNXgeUAysUIWEcPh8PYrPjL3JQFN8dJuDWAoRqQnkznvl68xnNIG3Avi4pAWoj3LO5RvLLn",
            'grant_type': 'password'
            })
            console.info(res.data)
            await AsyncStorage.setItem('access-token',res.data.access_token)

            let user = await authAPI(res.data.access_token).get(endpoints['current_user']);
            const isEmployer=user.data.user.is_employer
            const isApplicant=user.data.user.is_applicant
            console.info("======LOGIN=======")
            console.info(user.data.id)
            AsyncStorage.setItem("id",user.data.id.toString())
            AsyncStorage.setItem("first_name",user.data.user.first_name)
            AsyncStorage.setItem("last_name",user.data.user.last_name)
            if(isEmployer)
                navigation.navigate("HomeEmployer")
            else if(isApplicant)
                navigation.navigate("HomeApplicant")
            dispatch({
                "type": "login",
                "payload": user.data
            });

        }catch{
            setShowModal(true)
        }
        
    }

    return(
        <SafeAreaView style={User.container}>
            <Image source={require('../../../images/logo.png')} style={User.logo}/>
            <TextInput value={username} onChangeText={t=>setUsername(t)} placeholder="Nhập username" style={User.input}/>
            {badUsername!=''&&<Text style={Styles.erroMess}>{badUsername}</Text>}
            <TextInput value={password} onChangeText={t=>setPassword(t)} placeholder="Nhập password" style={User.input} secureTextEntry={true}/>
            {badPassword!=''&&<Text style={Styles.erroMess}>{badPassword}</Text>}
            <TouchableOpacity style={User.forgotPass}>
                <Text>Quên mật khẩu?</Text>
            </TouchableOpacity>
            {loading?(<ActivityIndicator size="large" color="gray"/>):(
                <TouchableOpacity style={User.btn} onPress={login}>
                    <Text style={{fontSize: 16, color: "white"}}>ĐĂNG NHẬP</Text>
                </TouchableOpacity>
            )}
            <SysModal visible={showModal} message={"Không tìm thấy tài khoản"} onHide={hideModal}/>
            
            <TouchableOpacity onPress={{}} style={User.btn1}>
                <Text style={{fontSize: 16}}>ĐĂNG NHẬP VỚI GOOGLE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={User.btn1}>
                <Text style={{fontSize: 16}}>ĐĂNG NHẬP VỚI FACEBOOK</Text>
            </TouchableOpacity>
            <View style={User.loginw}>
            <Text>Bạn chưa có tài khoản?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("SelectUser")}>
                <Text style={{color: "#1E90FF"}}> Đăng ký</Text>
            </TouchableOpacity></View>
        </SafeAreaView>
        
    )
}
export default Login
