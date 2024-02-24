import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"

export const endpoints ={
    'login':'/o/token/',
    'current_user':'/users/current_user/',
    'register': '/users/',
    'update_applicants':(applicantsId)=>`applicants/${applicantsId}/`,
    'update_employers':(employersId)=>`employers/${employersId}/`,
    'load_career':'/careers/',
    'post_job':'/recruitments_post/create_post/',
    'load_job':(page)=>`/recruitments_post/?page=${page}`,
    'myjobpost':(empId)=>`employers/${empId}/get_posts/`,
    'loadListApp':'/applicants/',
    'searchApp':(kw)=>`/applicants/search_applicant/?q=${kw}`,
    'load_skills':'/skills/',
    'load_areas':'/areas/',
    'filterApp':(kwApp)=>`/applicants/?${kwApp}`,
    'searchEmployer':(kwEm)=>`employers/search_employer/?q=${kwEm}`,
    'searchJob':(kwJob)=>`/recruitments_post/?q=${kwJob}`
}
export const authAPI = (accessToken)=> axios.create({
    baseURL: "https://thaodoan.pythonanywhere.com",
    headers:{
        Authorization: `bearer ${accessToken?accessToken:AsyncStorage.getItem("access-token")}`
    }
})



export default axios.create({
    baseURL: "https://thaodoan.pythonanywhere.com"
})