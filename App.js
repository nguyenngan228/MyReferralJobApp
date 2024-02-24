import { StatusBar } from 'expo-status-bar';
import React, { useContext, useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { AuthProvider } from './src/context/AuthConText';
import MyUserReducer from './src/reducers/MyUserReducer';
import MyContext from './src/context/MyContext';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './src/screens/onboarding/Splash/Splash';
import Login from './src/screens/onboarding/Login/Login';
import Register from './src/screens/onboarding/Register/Register';
import HomeEmployer from "./src/screens/jostposting/HomeEmployer"
import HomeApplicant from './src/screens/jobsearching/HomeApplicant';
import Vertify from './src/screens/onboarding/Register/Vertify';
import SelectUser from './src/screens/onboarding/SelectUser/SelectUser';
import SearchJob from './src/screens/jobsearching/tabs/SearchJob/SearchJob';


const Stack=createStackNavigator()
export default function App() {
  
  const[user,dispatch]=useReducer(MyUserReducer,null)
  return (
    <MyContext.Provider value={[user,dispatch]}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Splash">
                <Stack.Screen name="Splash" component={Splash}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name='SelectUser' component={SelectUser}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name='Vertify' component={Vertify}/>
                <Stack.Screen name="HomeEmployer" component={HomeEmployer}/>
                <Stack.Screen name='HomeApplicant' component={HomeApplicant}/>
                
            </Stack.Navigator>
      </NavigationContainer>
    </MyContext.Provider>
    
      
  )
}
