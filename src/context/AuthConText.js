// import axios, { Axios } from "axios";
// import { createContext, useState } from "react";
// import { BASE_URL } from "../configs/API";

// export const AuthConText=createContext()
// export const AuthProvider=({chidlren})=>{
//     const [userInfo, setUserInfo]=useState({})

//     const login=(email, password)=>{
//         axios.post(`${BASE_URL}/login`,{
//             email, password
//         }).then(res =>{
//             let userInfo=res.data
//             console.log(userInfo)
//             setUserInfo(userInfo)
//         }).catch(e=>{
//             console.log(`login error ${e}`)
//         })
//     }

//     return(
//         <AuthConText.Provider
//          value={{
//             userInfo,
//             login
//          }}>{chidlren}
//         </AuthConText.Provider>
//     )
// }