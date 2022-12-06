import React from "react";
import {ROUTES} from '../constants'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home,Settings, Login} from "../screens";
import HomeTab from './bottomTab'


const Stack = createNativeStackNavigator()
const AuthNavigation = () =>{
   return (
    <Stack.Navigator   initialRouteName={ROUTES.HOME}>
        <Stack.Screen  name={ROUTES.HOME} component={HomeTab}   options={{
            headerShown:false
        }}   />
        <Stack.Screen  name={ROUTES.LOGIN} component={Login}  options={{
            headerShown:false,
        }}     />
       
    </Stack.Navigator>
   )
}

export default AuthNavigation