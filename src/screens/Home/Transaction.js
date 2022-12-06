import React from "react";
 import { Button, Text,TouchableOpacity,View,StyleSheet } from "react-native";
import { ROUTES } from "../../constants";
import { useNavigation } from "@react-navigation/native";


 const Transaction = props=>{

    const navigation = useNavigation()


    return(
        <View  style={style.centerView}>
         <Text>Transaction Page</Text>
         <TouchableOpacity
                onPress={() => navigation.navigate(ROUTES.HOME)}
                activeOpacity={0.7}

                style={{
                    backgroundColor:"#000",
                    
                }}
                >
                <Text >navigate to Home</Text>
              </TouchableOpacity>
        </View>
    )

 }
 export default Transaction;

 const style = StyleSheet.create(
    {
        centerView :{
            alignItems: 'center',
            justifyContent:'center',
            alignContent:'center'
        }


    }
)

