import { ActivityIndicator, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import Styles from "./Styles"
import { useDebugValue, useEffect, useState } from "react"
import * as ImagePicker from 'expo-image-picker';
import API, { endpoints } from "../../../configs/API";
import axios from "axios";



const Register=({route,navigation})=>{
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const[img,setImg]=useState('')
    const[sex,setSex]=useState('')
    const[isEmployer,setIsEmployer]=useState(false)
    const[isApplicant,setIsApplicant]=useState(false)
    const[badFirstName,setBadFirstName]=useState('')
    const [loading,setLoading]=useState(false)




    const picker= async()=>{
        let {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(status!=='granted')
            alert("Từ chối truy cập")
        else{
            let res = await ImagePicker.launchImageLibraryAsync()
            if(!res.canceled)
                change('avatar',res.assets[0])
        }
    }

    useEffect(() => {
        const { isEmployer, isApplicant } = route.params ?? {};
        if (isEmployer !== undefined) setIsEmployer(isEmployer);
        if (isApplicant !== undefined) setIsApplicant(isApplicant);
    }, [route.params])
    const register=async()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
        try{
            let form=new FormData()
            form.append('first_name', firstName);
            form.append('last_name', lastName);
            form.append('username', username);
            form.append('password', password);
            form.append('email', email);
            form.append('phoneNumber', phone);
            form.append('is_employer',isEmployer);
            form.append('is_applicant',isApplicant)
            form.append('sex',sex)
            if(img&&img.uri){
                form.append('avatar', {
                    uri: img.uri,
                    name: img.firstName,
                    type: img.uri.type
                })
            }
            
            let res=await API.post(endpoints['register'],form,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            });
            console.info(res.data)
            if(isEmployer)
                navigation.navigate('Vertify')
            else
                navigation.navigate('Login')
        }catch(ex)
            {console.error(ex)}
        
    }

    const validate=()=>{
        let validFirstName=true
        let validLastName=true
        let validUsername=true
        let validPassword=true
        let validEmail=true
        if(firstName==''){
            validFirstName=false
            setBadFirstName('Please enter firstname')
        }else{
            validFirstName=true
            setBadFirstName('')
        } 
    }
    
    return(
        <ScrollView>
            <SafeAreaView style={Styles.container}>
                <Image source={require('../../../images/logo.png')} style={Styles.logo}/>
                <TextInput value={firstName} onChangeText={t=>setFirstName(t)} placeholder="Nhập tên" style={Styles.input}/>
                {badFirstName!=''&&<Text style={Styles.erroMess}>{badFirstName}</Text>}
                <TextInput value={lastName} onChangeText={t=>setLastName(t)} placeholder="Nhập họ" style={Styles.input}/>
                <TextInput value={username} onChangeText={t=>setUsername(t)} placeholder="Nhập tên người dùng" style={Styles.input}/>
                <TextInput value={password} onChangeText={t=>setPassword(t)} placeholder="Nhập mật khẩu" style={Styles.input} secureTextEntry={true}/>
                <TextInput value={email} onChangeText={t=>setEmail(t)} placeholder="Nhập email" style={Styles.input} />
                <TextInput value={phone} onChangeText={t=>setPhone(t)} placeholder="Nhập số điện thoại" style={Styles.input}/>
                <TextInput value={sex} onChangeText={t=>setSex(t)} placeholder="Nhập giới tính" style={Styles.input}/>
                <TouchableOpacity style={Styles.btnavt} onPress={picker}>
                    <Text style={{color: "gray"}}>Chọn ảnh</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.btnavt} onPress={picker}>
                    <Text style={{color: "gray"}}>Chọn ảnh đại diện</Text>
                </TouchableOpacity>
                {avt?<Image style={Styles.img} source={{uri: avt.uri}}/>:""}
                <TouchableOpacity onPress={register} style={Styles.btn}>
                    <Text style={{fontSize: 16, color: "white"}}>ĐĂNG KÝ</Text>
                </TouchableOpacity>
                {loading && <ActivityIndicator size="large" color="#0000ff" />}
                <TouchableOpacity onPress={{}} style={Styles.btn1}>
                    <Text style={{fontSize: 16}}>ĐĂNG KÝ VỚI GOOGLE</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={{}} style={Styles.btn1}>
                    <Text style={{fontSize: 16}}>ĐĂNG KÝ VỚI FACEBOOK</Text>
                </TouchableOpacity>
                <View style={Styles.loginw}>
                <Text>Bạn đã có tài khoản?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                    <Text style={{color: "#1E90FF"}}> Đăng nhập</Text>
                </TouchableOpacity></View>
            </SafeAreaView>
        </ScrollView>
        
    )
}
export default Register
