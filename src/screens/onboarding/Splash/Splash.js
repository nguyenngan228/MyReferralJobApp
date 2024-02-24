import { Image, Text, View } from "react-native"
import MyStyle from "./MyStyle"
import { useEffect } from "react"

const Splash=({navigation})=>{
    useEffect(()=>{
        setTimeout(()=>{navigation.navigate("Login")},2000)
    },[])
    return(
        <View style={MyStyle.container}>
            <Image source={require('../../../images/logolarge.jpg')} style={MyStyle.logo}/>
            <Text style={MyStyle.name}>JobReferralApp</Text>
            <Text style={MyStyle.slogan}>Post & Find Job in One Place</Text>
        </View>
    )
}
export default Splash