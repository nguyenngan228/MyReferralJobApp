import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/EvilIcons';
import { ActivityIndicator, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { moderateVerticalScale } from "react-native-size-matters";
import StyleProfileEmpl from "../ProfileEmployer/StyleProfileEmpl";
import { SelectList } from "react-native-dropdown-select-list";
import API, { authAPI, endpoints } from "../../../../configs/API";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PostJob=()=>{
    const [career,setCareer]=useState([])
    const [title,setTitle]=useState("")
    const [experience,setExperience]=useState("")
    const [description,setDescription]=useState("")
    const [quantity,setQuantity]=useState("")
    const [sex,setSex]=useState("")
    const [workingForm,setWorkingForm]=useState("")
    const [area,setArea]=useState("")
    const [wage,setWage]=useState("")
    const [position,setPosition]=useState("")
    const [day,setDay]=useState("")
    const [month,setMonth]=useState("")
    const [year,setYear]=useState("")
    const expirationDate=`${year}-${month}-${day}`
    const [loading,setLoading]=useState(false)
    const [selectCareer, setSelectCareer]=useState("")
    useEffect(()=>{
        const loadCareer=async()=>{
            try{
                let res= await API.get(endpoints['load_career']);
                setCareer(res.data)
                
            }catch(ex){
                console.error(ex)
            }
        }
        loadCareer()
    },[])
    console.info(career)
    const postJob=async()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
        console.info('=====Post job=====')
        console.info(selectCareer)
        try{
            let accessToken = await AsyncStorage.getItem("access-token")
            let res=await authAPI(accessToken).post(endpoints['post_job'],{
                "title":title,
                "experience":experience,
                "expirationDate": expirationDate,
                "description":description,
                "quantity":quantity,
                "sex":sex,
                "workingForm":workingForm,
                "area":area,
                "wage":wage,
                "position":position,
                "career":selectCareer
            })
            console.info(res.data)
        }catch(ex)
           { console.error(ex)}
    }
    
        
    return(
        <SafeAreaView style={StyleProfileEmpl.container}>
            <ScrollView>
                <Text style={StyleProfileEmpl.sub}>ĐĂNG TIN VIỆC LÀM</Text>
                <Text style={StyleProfileEmpl.title}>Tiêu đề</Text>
                <TextInput value={title} onChangeText={t=>setTitle(t)} style={StyleProfileEmpl.input}/>
                <Text style={StyleProfileEmpl.title}>Kinh nghiệm </Text>
                <TextInput value={experience} onChangeText={t=>setExperience(t)} style={StyleProfileEmpl.input}/>
                <Text style={StyleProfileEmpl.title}>Ngày hết hạn</Text>
                <View style={StyleProfileEmpl.gr1}>
                    <TextInput value={day} onChangeText={t=>setDay(t)} style={StyleProfileEmpl.inputDate} placeholder="Ngày"></TextInput>
                    <TextInput value={month} onChangeText={t=>{
                        if(t.length===1){
                            setMonth(`0${t}`)
                        }else{
                            setMonth(t)
                        }
                    }}  style={StyleProfileEmpl.inputDate} placeholder="Tháng"></TextInput>
                    <TextInput value={year} onChangeText={t=>setYear(t)} style={StyleProfileEmpl.inputDate} placeholder="Năm"></TextInput>
                </View>
                <Text value={description} onChangeText={t=>setDescription(t)} style={StyleProfileEmpl.title}>Mô tả công việc</Text>
                <TextInput value={description} onChangeText={t=>setDescription(t)} style={StyleProfileEmpl.input}/>
                <Text style={StyleProfileEmpl.title}>Số lượng</Text>
                <TextInput value={quantity} onChangeText={t=>setQuantity(t)} style={StyleProfileEmpl.input}/>
                <Text style={StyleProfileEmpl.title}>Giới tính</Text>
                <TextInput value={sex} onChangeText={t=>setSex(t)} style={StyleProfileEmpl.input}/>
                <Text style={StyleProfileEmpl.title}>Hình thức làm việc</Text>
                <TextInput value={workingForm} onChangeText={t=>setWorkingForm(t)} style={StyleProfileEmpl.input}/>
                <Text style={StyleProfileEmpl.title}>Khu vực</Text>
                <TextInput value={area} onChangeText={t=>setArea(t)} style={StyleProfileEmpl.input}/>
                <Text style={StyleProfileEmpl.title}>Mức lương</Text>
                <TextInput value={wage} onChangeText={t=>setWage(t)} style={StyleProfileEmpl.input}/>
                <Text style={StyleProfileEmpl.title}>Vị trí</Text>
                <TextInput value={position} onChangeText={t=>setPosition(t)} style={StyleProfileEmpl.input}/>
                <Text style={StyleProfileEmpl.title}>Lĩnh vực</Text> 
                <SelectList 
                    data={career.map(item => ({ value: item.name}))}
                    setSelected={setSelectCareer}
                    save="value"
                />
                
                

                {loading && <ActivityIndicator size="large" color="#0000ff" />}
                <TouchableOpacity style={StyleProfileEmpl.btn} onPress={postJob}>
                    <Text style={{fontSize: 16, color: "white"}}>ĐĂNG TIN</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>

    )
}
export default PostJob

