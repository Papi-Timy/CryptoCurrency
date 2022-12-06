import React from "react";
 import { Button, Text,TouchableOpacity,View,StyleSheet } from "react-native";
import { ROUTES } from "../../constants";
import { useNavigation } from "@react-navigation/native";


 const Register = props=>{

    const navigation = useNavigation()


    return(
        <View  style={style.centerView}>
         <Text>Register Page</Text>
         <TouchableOpacity
                onPress={() => navigation.navigate(ROUTES.HOME)}
                activeOpacity={0.7}

              
                >
                <Text >navigate to Home</Text>
              </TouchableOpacity>
        </View>
    )

 }


 const style = StyleSheet.create(
    {
        centerView :{
            alignItems: 'center',
            justifyContent:'center',
            alignContent:'center'
        }


    }
)

 export default Register;