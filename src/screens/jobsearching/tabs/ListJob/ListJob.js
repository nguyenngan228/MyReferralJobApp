import { ActivityIndicator, Button, FlatList, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import StyleListJob from "./StyleListJob"
import { useEffect, useRef, useState } from "react"
import API, { endpoints } from "../../../../configs/API"
import Pagination from "react-native-pagination"
import moment from "moment"

const ListJob=({navigation})=>{
    const [job,setJob]=useState([])
    const [page,setPage]=useState(1)

    const process=(next)=>{
        if(next===true)
            setPage(prev=>prev+1)
        else
            setPage(prev=>prev-1)
    }


    useEffect(()=>{
        const loadJob=async()=>{
            try{
                let res= await API.get(endpoints['load_job'](page));
                let newJob=res.data.results.sort((a,b)=>{
                    return moment(b.created_date).diff(moment(a.created_date))
                })
                setJob(newJob)
            }catch(ex){
                console.error(ex)
            }
        }
        loadJob()
    },[page])
    
    return(
        <SafeAreaView style={StyleListJob.body}>
            <View style={StyleListJob.header}>
                <TouchableOpacity style={StyleListJob.input} onPress={()=>navigation.navigate("SearchJob")}>
                    <Text>Nhập Địa điểm - Kĩ năng - Tên công ty</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("SearchJob")} style={StyleListJob.btn}>
                    <Text>Tìm kiếm</Text>
                </TouchableOpacity>
            </View>
            <View style={StyleListJob.next}>
                <Button onPress={()=>process(false)} title="Pre"></Button>
                <Button onPress={()=>process(true)} title="Next"></Button>
            </View>
            <ScrollView >
                {job===null?<ActivityIndicator/>:<>
                {job.map(c=><View style={{flexDirection:"row"}} key={c.id}>
                    <Image style={StyleListJob.img} source={require('../../../../images/logo.png')}/>
                    <View style={StyleListJob.pad} >
                        <Text style={StyleListJob.title}>{c.title}</Text>
                        <Text>{c.expirationDate}</Text>
                    </View>
                </View>)}
                </>}
            </ScrollView>
          
        </SafeAreaView>
    )
}
export default ListJob