import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import StyleSearchJob from "./StyleSearchJob"
import { useState } from "react"
import API, { endpoints } from "../../../../configs/API"

const SearchJob=()=>{
    const[search,setSearch]=useState("")
    const[job,setJob]=useState(null)
    const searchJob=async()=>{
        try{
            
            let res=await API.get(endpoints['searchJob'](search))
            console.info(res.data.results);
            setJob(res.data.results)
        }catch(ex)
        {
            console.ex(ex)
        }
    }
    return(
        <SafeAreaView style={StyleSearchJob.body}>
            <View style={StyleSearchJob.header}>
                <TouchableOpacity>
                    <TextInput value={search} onChangeText={t=>setSearch(t)} style={StyleSearchJob.input} placeholder="Nhập Địa điểm - Kĩ năng - Tên công ty"></TextInput>
                </TouchableOpacity>
                <TouchableOpacity onPress={searchJob} style={StyleSearchJob.btn}>
                    <Text>Tìm kiếm</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                {job===null?<View>
                    <Text>Loadinggg</Text>
                </View>:<>
                {job.map(c=><View style={{flexDirection:"row"}}key={c.id}>
                <Image style={StyleSearchJob.img} source={require('../../../../images/logo.png')}/>
                    <View style={StyleSearchJob.pad} >
                        <Text style={StyleSearchJob.title}>{c.title}</Text>
                        <Text>{c.expirationDate}</Text>
                        <Text>{c.workingForm}</Text>
                        <Text>{c.wage}</Text>
                    </View>
                </View>)}
                </>}
            </ScrollView>
        
        </SafeAreaView>
    )
    
}
export default SearchJob