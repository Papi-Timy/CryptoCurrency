import React from 'react'
import {TouchableOpacity, View,Image,Text} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLORS,FONTS,icons,ROUTES, SIZES } from '../constants'

const CurrencyLabel = ({icon,currency ,code}) =>{
    const navigation = useNavigation()




    return(
        <View  style={{flexDirection:'row'}}>
            <Image 
            source={icon}
            resizeMode='cover'
            style={{
                width:25,
                height:25,
                marginTop:5
            }}
            />
            <View  style={{marginLeft:SIZES.base}}>
                <Text style={{...FONTS.h3}}>{currency}</Text>
                <Text style={{color:COLORS.gray,...FONTS.body3}}>{code}</Text>

            </View>

        </View>
       
    )

}
export default CurrencyLabel