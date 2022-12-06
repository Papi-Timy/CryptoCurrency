import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View} from 'react-native'
import {COLORS, ROUTES} from '../constants'
import {Home,Settings,Transation,CryptoDetail,Prices} from '../screens'
// import Ionicons from 'react-native-vector-icons/Ionicons';

import Icon from 'react-native-vector-icons/Ionicons'
const TabStack = createBottomTabNavigator();

const HomeTab = () => {
    return (

       <TabStack.Navigator screenOptions={ ({route}) =>  ({
        headerShown:false,
        tabBarActiveTintColor:COLORS.primary,

        tabBarIcon:({ focused, color, size }) => {
            let iconName;

            if (route.name === ROUTES.HOME_TAB) {
              iconName = focused
                ? 'ios-home'
                
                : 'ios-home-outline';
            } else if (route.name === ROUTES.SETTINGS) {
              iconName = focused ? 'ios-settings' : 'ios-settings-outline';
            }
            else if (route.name === ROUTES.TRANSACTION) {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
              }
              else if (route.name === ROUTES.CRYPTO_DETAIL) {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
              }
              else if (route.name === ROUTES.PRICES) {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
              }
  

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },

       })}>
        <TabStack.Screen name={ROUTES.HOME_TAB}  component={Home}  />
        <TabStack.Screen name={ROUTES.CRYPTO_DETAIL}  component={CryptoDetail}/>
        <TabStack.Screen name={ROUTES.TRANSACTION}  component={Transation}/>
       
        <TabStack.Screen name={ROUTES.PRICES}  component={Prices}/>
        <TabStack.Screen name={ROUTES.SETTINGS}  component={Settings}/>
        
        

       </TabStack.Navigator>
        
    )
}

export default HomeTab