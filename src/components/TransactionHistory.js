import React from "react";
import { View,FlatList,TouchableOpacity,Image,StyleSheet,Text } from "react-native";
import { COLORS,icons,SIZES,FONTS } from "../constants";

const TransactionHistory = ({customContainerStyle,history}) =>{

    const renderItem = ({item}) =>{
        return(
            <TouchableOpacity 
            style={styels.renderItem}
            onPress={()=>console.log(item)}
            
            >
                <Image
                source={icons.transaction}
                style={{
                    width:30,
                    height:30,
                    tintColor:COLORS.primary
                }}

                
                />
                <View  style={{
                    flex:1,
                    marginLeft:SIZES.radius
                }}>

                    <Text  style={{...FONTS.h3,}}   >{item.description}</Text>
                    <Text  style={{color:COLORS.gray,...FONTS.body4}}>{item.date}</Text>

                </View>
                <View style={{flexDirection:'row',
            height:'100%'}}>
                    <Text>{item.amount}    {item.currency}</Text>
                    <Image
                    source={icons.right_arrow}
                    style={{
                        width:20,
                        height:20,
                        tintColor:COLORS.gray
                    }}
                    />
                </View>
            </TouchableOpacity>
        )
    }

    return(
        <View  style={{...styels.transHistory}}>
            <Text style={{...FONTS.h2}}>
                TransactionHistory
            </Text>
            <FlatList
                contentContainerStyle={{marginTop:SIZES.padding}}
                data={history}
                key={item=> `${item.id}`}
                renderItem={renderItem}
                ItemSeparatorComponent={()=>{
                    return(
                        <View  style={{backgroundColor:COLORS.gray,width:"100%",height:1}}></View>
                    )
                }}
            
            />

        </View>
    )

}
export default TransactionHistory

const styels = StyleSheet.create({
    transHistory:{
        marginTop:SIZES.padding,
        marginHorizontal:SIZES.padding,
       
        backgroundColor:COLORS.white,
        borderRadius:SIZES.radius,
        padding:20,
    
    },
    renderItem:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:SIZES.base
    }
    
})