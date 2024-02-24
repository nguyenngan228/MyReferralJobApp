// import { useNavigation } from "@react-navigation/native"
// import { useState } from "react";
// import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native"
// import { TouchableOpacity } from "react-native-gesture-handler"
// import 
// { scale, verticalScale, moderateScale, moderateVerticalScale } 
// from 'react-native-size-matters';




// const SelectUser=({navigation})=>{
//     const[isEmployer,setIsEmployer]=useState(false);
//     const[isApplicant,setIsApplicant]=useState(false)

//     const handleEmpl=()=>{
//         setIsEmployer(true)
//         navigation.navigate("Register",{isEmployer: true})
//     }
//     const handleAppl=()=>{
//         setIsApplicant(true)
//         navigation.navigate("Register",{isApplicant: true})
//     }




//     return(
//         <SafeAreaView style={styles.container}>
//             <Image source={require('../../images/logo.png')} style={styles.logo}/>
//             <Text style={styles.title}>Bạn là</Text>
//             <TouchableOpacity style={styles.wantToHire} onPress={handleEmpl}>
//                 <Text style={styles.txt}>Nhà tuyển dụng</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.wantToJob} onPress={handleAppl}>
//                 <Text style={styles.txt1}>Ứng cử viên</Text>
//             </TouchableOpacity>
//         </SafeAreaView>
//     )
    
// }
// export default SelectUser

// const styles=StyleSheet.create({
//     container:{
//         flex: 1,
//         backgroundColor: "white",
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     logo:{
//         width: scale(150),
//         height: scale(150),
//         alignSelf: "center",
//         marginBottom: moderateVerticalScale(100),
//     },
//     title:{
//         fontWeight: '600',
//         fontSize: moderateScale(20),
//         marginTop: moderateVerticalScale(0),
//         color: "#1E90FF"

//     },
//     wantToHire:{
//         width: 300,
//         height: verticalScale(45),
//         backgroundColor:"#1E90FF",
//         borderRadius: moderateScale(10),
//         justifyContent: "center",
//         alignItems: "center",
//         marginTop: moderateVerticalScale(30)
//     },
//     txt:{
//         fontSize: moderateScale(16),
//         fontWeight: '500',
//         color: "white"
//     },
//     wantToJob:{
//         width: 300,
//         height: verticalScale(45),
//         backgroundColor:"#E0FFFF",
//         borderRadius: moderateScale(10),
//         justifyContent: "center",
//         alignItems: "center",
//         marginTop: moderateVerticalScale(20)
//     },
//     txt1:{
//         fontSize: moderateScale(16),
//         fontWeight: '500',
//         color: "gray"
//     }
// })