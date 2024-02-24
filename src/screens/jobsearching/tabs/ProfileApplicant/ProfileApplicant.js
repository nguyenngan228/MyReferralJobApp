import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/EvilIcons';
import { ActivityIndicator, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import ProfileStyle from "./ProfileStyle";
import { MultipleSelectList, SelectList } from "react-native-dropdown-select-list";
import { useContext, useEffect, useState } from "react";
import MyContext from "../../../../context/MyContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import API, { authAPI, endpoints } from "../../../../configs/API";


const ProfileApplicant=({navigation})=>{
    const [career,setCareer]=useState([])
    const[selectAreas,setSelectAreas]=useState([])
    const[selectSkills,setSelectSkills]=useState([])
    const[selectCareer,setSelectCareer]=useState("")
    const [user,dispatch]=useContext(MyContext)
    const [userId,setUserId]=useState("")
    const [userFirstName,setUserFirstName]=useState("")
    const [userLastName,setUserLatsName]=useState("")
    const [wage,setWage]=useState("")
    const [position,setPosition]=useState("")
    const [experience,setExperience]=useState("")
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
    const updateApplicant=async()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
        try{
            let accessToken = await AsyncStorage.getItem("access-token")
            let res=await authAPI(accessToken).patch(endpoints['update_applicants'](userId),{
                'career':"IT",
                // 'wage': wage,

                // 'skills': selectSkills,
                // 'areas':selectAreas,
                // 'position':position,
                // 'experience':experience
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
    const dataAreas=[
        {key:'1',value:'TPHCM'},
        {key:'2',value:'HN'},
        {key:'3',value:'DN'}
    ]
    const dataSkills=[
        {key:'1',value:'C#'},
        {key:'2',value:'Java'},
        {key:'3',value:'C++'}
    ]
    // const dataCareer=[
    //     {key:'1',value:'IT'},
    //     {key:'2',value:'Bank'},
    //     {key:'3',value:'Education'}
    // ]
    return(
        <SafeAreaView style={ProfileStyle.container}>
            <ScrollView>
                <TouchableOpacity>
                    <Image style={ProfileStyle.img} source={require("../../../../images/profile.png")}></Image>
                </TouchableOpacity>
                <Text style={ProfileStyle.name}>
                    {name}
                </Text>
                <Text style={ProfileStyle.update}>Cập nhật thông tin</Text>
                <Text style={ProfileStyle.title}>Chọn ngành nghề</Text>
                {/* <SelectList 
                    data={career.map(item => ({ value: item.name, label: item.id }))}
                    setSelected={setSelectCareer}
                    save="value"
                    keyExtractor={(item) => item.label.toString()}/> */}
                <Text style={ProfileStyle.title} >Nhập vị trí</Text>
                <TextInput value={position} onChangeText={t=>setPosition(t)} style={ProfileStyle.input}/>
                <Text style={ProfileStyle.title} >Nhập kinh nghiệm</Text>
                <TextInput value={experience} onChangeText={t=>setExperience(t)} style={ProfileStyle.input}/>
                <Text style={ProfileStyle.title}>Nhập mức lương mong muốn</Text>
                <TextInput value={wage} onChangeText={t=>setWage(t)} style={ProfileStyle.input}/>
                <Text style={ProfileStyle.title}>Chọn khu vực</Text>
                <MultipleSelectList boxStyles={ProfileStyle.select} data={dataAreas} setSelected={(t)=>setSelectAreas(t)} save="value"/>
                <Text style={ProfileStyle.title}>Chọn kỹ năng</Text>
                <MultipleSelectList boxStyles={ProfileStyle.select} data={dataSkills} setSelected={(t)=>setSelectSkills(t)} save="value"/>
                {loading && <ActivityIndicator size="large" color="#0000ff" />}
                <TouchableOpacity style={ProfileStyle.btn} onPress={updateApplicant}>
                    <Text style={{fontSize: 16, color: "white"}}>CẬP NHẬT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ProfileStyle.btn} onPress={Logout}>
                    <Text style={{fontSize: 16, color: "white"}}>ĐĂNG XUẤT</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>

    )
}
export default ProfileApplicant

