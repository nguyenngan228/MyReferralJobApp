import { FlatList, Text, TextInput, TouchableOpacity } from "react-native"
import { View } from "react-native"
import { SafeAreaView, ScrollView } from "react-native"
import StyleSearchApp from "./StyleSearchApp"
import { MultipleSelectList, SelectList } from "react-native-dropdown-select-list"
import { useEffect, useState } from "react"
import API, { authAPI, endpoints } from "../../../../configs/API"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Icon from 'react-native-vector-icons/Feather';

const SearchApplicant=()=>{
    const [userId,setUserId]=useState("")
    const [career,setCareer]=useState([])
    const [selectCareer,setSelectCareer]=useState("")
    const [skill,setSkill]=useState([])
    const [selectSkill,setSelectSkill]=useState([])
    const [areas,setAreas]=useState([])
    const [selectAreas,setSelectAreas]=useState([])
    const [listApp,setListApp]=useState([])
    const [search,setSearch]=useState("")
    const [result,setResult]=useState([])

    useEffect(()=>{
        AsyncStorage.getItem('id').then(result=>{
            setUserId(result)
        })
    },[])
    useEffect(()=>{
        const loadCareer=async()=>{
            try{
                let res= await API.get(endpoints['load_career']);
                console.info(res.data)
                setCareer(res.data)
            }catch(ex){
                console.error(ex)
            }
        }
        loadCareer()
    },[])
    useEffect(()=>{
        const loadSkill=async()=>{
            try{
                let res= await API.get(endpoints['load_skills']);
                console.info(res.data)
                setSkill(res.data)
            }catch(ex){
                console.error(ex)
            }
        }
        loadSkill()
    },[])
    useEffect(()=>{
        const loadAreas=async()=>{
            try{
                let res= await API.get(endpoints['load_areas']);
                console.info(res.data)
                setAreas(res.data)
            }catch(ex){
                console.error(ex)
            }
        }
        loadAreas()
    },[])



    const searchApplicant=async()=>{
        try{
            let accessToken = await AsyncStorage.getItem("access-token")
            let res=await authAPI(accessToken).get(endpoints['searchApp'](search))
            console.info(res.data)
            setResult(res.data)
        }catch(ex){
            console.error(ex)
        }
    }
    const filterApplicant=async()=>{
        try{
            let accessToken = await AsyncStorage.getItem("access-token");
            let res = await authAPI(accessToken).get(endpoints['filterApp'](urlParams));
            console.info('==================================')
            console.info(res.data);
        }catch(ex){
            console.error(ex)}}
    return(
        <SafeAreaView>
            <ScrollView>
                <View style={StyleSearchApp.body}>
                    <View style={StyleSearchApp.header}>
                        <TextInput value={search} onChangeText={t=>setSearch(t)} style={StyleSearchApp.input} placeholder="Vị trí tuyển dụng"></TextInput>
                        <TouchableOpacity style={StyleSearchApp.btn} onPress={searchApplicant}>
                            <Text style={{color:"white"}}>Tìm kiếm</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={StyleSearchApp.header}>
                        <MultipleSelectList boxStyles={StyleSearchApp.select}
                        data={areas.map(item => ({ value: item.name, label: item.id }))}
                        setSelected={setSelectAreas}
                        save="value"
                        />
                        <MultipleSelectList boxStyles={StyleSearchApp.select}
                        data={skill.map(item => ({ value: item.name, label: item.id }))}
                        setSelected={setSelectSkill}
                        save="value"/>
                        <SelectList boxStyles={StyleSearchApp.select}
                        data={career.map(item => ({ value: item.name, label: item.id }))}
                        setSelected={setSelectCareer}
                        save="value"/>
                    </View>
                    <TouchableOpacity style={StyleSearchApp.btn} onPress={filterApplicant}>
                            <Text style={{color:"white"}}>Lọc</Text>
                    </TouchableOpacity>
                    <View style={StyleSearchApp.sub_content}>
                        <Text style={StyleSearchApp.suggest}>Kết quả tìm kiếm</Text>
                        <ScrollView>
                            {result.map(c=>(
                                <View key={c.user.id}>
                                    <Text>{c.user.username}</Text>
                                </View>
                            ))}
                        </ScrollView>

                    </View>
                    
                </View>
                
            </ScrollView>
        </SafeAreaView>
    )}
export default SearchApplicant