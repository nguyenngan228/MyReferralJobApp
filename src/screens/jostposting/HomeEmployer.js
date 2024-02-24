import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Feather';
import PostJob from "./tabs/PostJob/PostJob";
import ProfileEmployer from "./tabs/ProfileEmployer/ProfileEmployer";
import SearchApplicant from "./tabs/SearchApplicant/SearchApplicant";
import MyJobPost from "./tabs/MyJobPost/MyJobPost";
import { createStackNavigator } from "@react-navigation/stack";
import JobDetail from "./tabs/JobDetail/JobDetail";



const HomeEmployer=()=>{
    const Stack=createStackNavigator()
    const Tab=createBottomTabNavigator()
    return(
        <Tab.Navigator initialRouteName="MyJobPost" screenOptions={{tabBarActiveTintColor:"#1E90FF",headerShown:false}}>
            <Tab.Screen options={{tabBarIcon:({color,size})=><Icon name="plus-circle" size={20} color={color}/> ,}} name="MyJobPost" component={MyJobPost}/>
            <Tab.Screen options={{tabBarIcon:({color,size})=><Icon name="plus-circle" size={20} color={color}/> ,}} name="PostJob" component={PostJob}/>
            <Tab.Screen options={{tabBarIcon:({color,size})=><Icon name="search" size={20} color={color}/>,}} name="SearchApplicant" component={SearchApplicant}/>
            <Tab.Screen options={{tabBarIcon:({color,size})=><Icon name="user" size={20} color={color}/>,}} name="ProfileEmployer" component={ProfileEmployer}/>
            
        </Tab.Navigator>
        
    )
}
export default HomeEmployer

