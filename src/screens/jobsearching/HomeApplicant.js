import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Feather';
import ProfileApplicant from "./tabs/ProfileApplicant/ProfileApplicant";
import ListJob from "./tabs/ListJob/ListJob";
import SearchEmployer from "./tabs/Employer/SearchEmployer";
import SearchJob from "./tabs/SearchJob/SearchJob";


const HomeApplicant=()=>{
    const Tab=createBottomTabNavigator()
    return(
        <Tab.Navigator initialRouteName="ListJob" screenOptions={{headerShown:false,tabBarActiveTintColor:"#1E90FF"}}>
            <Tab.Screen options={{ tabBarIcon:({color,size})=><Icon name="compass" size={20} color={color}/>,}} name="ListJob" component={ListJob} />
            <Tab.Screen options={{ tabBarIcon:({color,size})=><Icon name="users" size={20} color={color}/>,}} name="SearchEmployer" component={SearchEmployer} />
            <Tab.Screen options={{ tabBarIcon:({color,size})=><Icon name="user" size={20} color={color}/>,}} name="ProfileApplicant" component={ProfileApplicant} />
            <Tab.Screen options={()=>({
                tabBarButton:()=>null
            })} name="SearchJob" component={SearchJob} />
            
            

            
        </Tab.Navigator>
    )
}
export default HomeApplicant

