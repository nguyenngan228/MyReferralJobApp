import { FlatList, Text, TextInput, TouchableOpacity } from "react-native"
import { View } from "react-native"
import { SafeAreaView, ScrollView } from "react-native"

import { MultipleSelectList, SelectList } from "react-native-dropdown-select-list"
import { useEffect, useState } from "react"
import API, { authAPI, endpoints } from "../../../../configs/API"
import AsyncStorage from "@react-native-async-storage/async-storage"
import StyleSearchEmp from "./StyleSearchEmp"

const SearchEmployer=()=>{ 
    const [search,setSearch]=useState("")
    const [result,setResult]=useState([])
    
    const searchEmployer=async()=>{
        try{
            let accessToken = await AsyncStorage.getItem("access-token")
            let res=await authAPI(accessToken).get(endpoints['searchEmployer'](search))
            console.info(res.data)

            setResult(res.data)
        }catch(ex){
            console.error(ex)
        }
    }
    const renderItem=({item})=>{
        return(
            <View>
                <Text>{item.first_name} {item.last_name}</Text>
            </View>
        )
    }
    return(
        <SafeAreaView>
            <ScrollView>
                <View style={StyleSearchEmp.body}>
                    <View style={StyleSearchEmp.header}>
                        <TextInput value={search} onChangeText={t=>setSearch(t)} style={StyleSearchEmp.input} placeholder="Vị trí tuyển dụng"></TextInput>
                        <TouchableOpacity style={StyleSearchEmp.btn} onPress={searchEmployer}>
                            <Text style={{color:"white"}}>Tìm kiếm</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={StyleSearchEmp.sub_content}>
                        <Text style={StyleSearchEmp.suggest}>Kết quả tìm kiếm</Text>
                        {/* <FlatList data={result} renderItem={renderItem} keyExtractor={item=>item.id.toString()}/> */}

                    </View>
                    
                </View>
                
            </ScrollView>
        </SafeAreaView>
    )
}
export default SearchEmployer