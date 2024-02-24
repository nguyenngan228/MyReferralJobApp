import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import StyleMyJobPost from "./StyleMyJobPost"
import { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { authAPI, endpoints } from "../../../../configs/API"
import { createStackNavigator } from "@react-navigation/stack"


const MyJobPost=()=>{
    const [userId,setUserId]=useState("")
    const [myjob,setMyJob]=useState([])
    useEffect(()=>{
        //get user id
        AsyncStorage.getItem('id').then(result=>{
            setUserId(result)
        })
    },[])
    useEffect(()=>{
        const loadJob=async()=>{
            try{
                let accessToken = await AsyncStorage.getItem("access-token")
                let res=await authAPI(accessToken).get(endpoints['myjobpost'](userId))
                setMyJob(res.data)
                
            }catch(ex){
                console.error(ex)
            }
        }
        loadJob()
    },[userId])

    return(
        <View>
            <Text style={StyleMyJobPost.name}>Việc làm đã đăng</Text>
            <ScrollView>
                {myjob.map(c=>(
                <View key={c.id}>
                    <TouchableOpacity>
                        <Text>{c.title}</Text>
                    </TouchableOpacity>
                    
                </View>
                ))}
            </ScrollView>
            
        </View>
    )
}
export default MyJobPost