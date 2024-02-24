import { useNavigation } from "@react-navigation/native"
import { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import Select from "./Select";





const SelectUser=({navigation})=>{
    const[isEmployer,setIsEmployer]=useState(false);
    const[isApplicant,setIsApplicant]=useState(false)

    const handleEmpl=()=>{
        setIsEmployer(true)
        navigation.navigate("Register",{isEmployer: true})
    }
    const handleAppl=()=>{
        setIsApplicant(true)
        navigation.navigate("Register",{isApplicant: true})
    }




    return(
        <SafeAreaView style={Select.container}>
            <Image source={require('../../../images/logo.png')} style={Select.logo}/>
            <Text style={Select.title}>Bạn là</Text>
            <TouchableOpacity style={Select.wantToHire} onPress={handleEmpl}>
                <Text style={Select.txt}>Nhà tuyển dụng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Select.wantToJob} onPress={handleAppl}>
                <Text style={Select.txt1}>Ứng cử viên</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
    
}
export default SelectUser

