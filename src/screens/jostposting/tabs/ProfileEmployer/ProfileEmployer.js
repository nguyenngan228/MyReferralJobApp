import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/EvilIcons';
import { ActivityIndicator, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { moderateVerticalScale } from "react-native-size-matters";
import StyleProfileEmpl from "./StyleProfileEmpl";
import { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MyContext from "../../../../context/MyContext";
import { authAPI, endpoints } from "../../../../configs/API";


const ProfileEmployer=({navigation})=>{
    const [user,dispatch]=useContext(MyContext)
    const [userId,setUserId]=useState("")
    const [userFirstName,setUserFirstName]=useState("")
    const [userLastName,setUserLatsName]=useState("")
    const [companyName,setCompanyName]=useState("")
    const [position,setPosition]=useState("")
    const [information,setInformation]=useState("")
    const [address,setAddress]=useState("")
    const [mediaLink,setMediaLink]=useState("")
    const [companySize,setCompanySize]=useState("")
    const [loading,setLoading]=useState(false)
    
    useEffect(()=>{
        //get user id
        AsyncStorage.getItem('id').then(result=>{
            setUserId(result)
        })
        //get user firstname
        AsyncStorage.getItem('first_name').then(result=>{
            setUserFirstName(result)
        })
        //get user lastname
        AsyncStorage.getItem('last_name').then(result=>{
            setUserLatsName(result)
        })
    },[])
    const name=`${userFirstName} ${userLastName}`
    const updateEmployer=async()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
        try{
            let accessToken = await AsyncStorage.getItem("access-token")
            let res=await authAPI(accessToken).patch(endpoints['update_employers'](userId),{
                'companyName':companyName,
                'position':position,
                'information':information,
                'address':address,
                'mediaLink':mediaLink,
                'companySize':companySize
            })
            console.info(res.data)
        }catch(ex)
           { console.error(ex)}
    }



    const Logout=()=>{
        dispatch({
            "type":"logout"
        })
        AsyncStorage.removeItem('id');
        AsyncStorage.removeItem('first_name')
        AsyncStorage.removeItem('last_name')
        AsyncStorage.removeItem("access-token")
        navigation.replace("Login")

    }

    return(
        <SafeAreaView style={StyleProfileEmpl.container}>
            <ScrollView>
                <TouchableOpacity>
                    <Image style={StyleProfileEmpl.img} source={require("../../../../images/profile.png")}></Image>
                </TouchableOpacity>
                <Text style={StyleProfileEmpl.name}>{userFirstName} {userLastName}
                </Text>
                <Text style={StyleProfileEmpl.title}>Nhập tên công ty</Text>
                <TextInput value={companyName} onChangeText={t=>setCompanyName(t)} style={StyleProfileEmpl.input}/>
                <Text style={StyleProfileEmpl.title}>Nhập vị trí</Text>
                <TextInput value={position} onChangeText={t=>setPosition(t)} style={StyleProfileEmpl.input}/>
                <Text style={StyleProfileEmpl.title}>Nhập thông tin</Text>
                <TextInput value={information} onChangeText={t=>setInformation(t)} style={StyleProfileEmpl.input}/>
                <Text style={StyleProfileEmpl.title}>Nhập địa chỉ</Text>
                <TextInput value={address} onChangeText={t=>setAddress(t)} style={StyleProfileEmpl.input}/>
                <Text style={StyleProfileEmpl.title}>Nhập media link</Text>
                <TextInput value={mediaLink} onChangeText={t=>setMediaLink(t)} style={StyleProfileEmpl.input}/>
                <Text style={StyleProfileEmpl.title}>Nhập số lượng nhân viên</Text>
                <TextInput value={companySize} onChangeText={t=>setCompanySize(t)} style={StyleProfileEmpl.input}/>
                <TouchableOpacity style={StyleProfileEmpl.btn} onPress={updateEmployer}>
                    <Text style={{fontSize: 16, color: "white"}}>ĐĂNG KÝ</Text>
                </TouchableOpacity>
                {loading && <ActivityIndicator size="large" color="#0000ff" />}
                <TouchableOpacity style={StyleProfileEmpl.btn} onPress={Logout}>
                    <Text style={{fontSize: 16, color: "white"}}>ĐĂNG XUẤT</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>

    )
}
export default ProfileEmployer

