import React,{useState} from "react";

import {Text,View,StyleSheet, Image,ImageBackground, ScrollView, TouchableOpacity, FlatList} from 'react-native'
import { FONTS,images,SIZES,icons,COLORS,dummyData } from "../../constants";

const Home =({navigation}) =>{
    const [trending,setTrending] = React.useState(dummyData.trendingCurrencies)
const renderItem = ({item,index}) => {
    <TouchableOpacity 
    style={
    {
        
        marginLeft:index==0 ? SIZES.padding: 0
        ,...styles.trendingItem}}>
        {/* currency */}
        <View style={{flexDirection:"row"}}>
            <View>
                <Image 
                source={item.image}
                resizeMode="cover"
                style={styles.TrendingItemImage}
                />
            </View>
            <View  style={{marginLeft:SIZES.base}}>
                <Text style={{...FONTS.h2}}>{item.curreny}</Text>
                <Text  style={{color: COLORS.gray, ...FONTS.body3}}>{item.code}</Text>

            </View>

        </View>

        {/* value */}

        <View  style={{marginTop:SIZES.radius}}>

            <Text>${item.amount}</Text>
            <Text
            style={{color: item.type =="I" ? COLORS.green : COLORS.red, ...FONTS.h3}}>{item.changes}</Text>
        </View>

    </TouchableOpacity>
}
    function renderHeader(){

        return(
        <View style={styles.shadow}  >
            <ImageBackground 
            source={images.banner}
            resizeMode="cover"
            style={styles.imageBack}
             >

              {/* Header banner */}
             <View   style={styles.header}>
                <TouchableOpacity style={styles.headerButton}
                onPress={()=>console.log("Notification Button")}
                
                >
                    <Image 
                    source={icons.notification_white}
                    resizeMode="contain"
                    style={{flex:1}}
                    />
                </TouchableOpacity>
             </View>
              {/* Balance section */}
              <View  style={styles.center}>
              <Text  style={{
                          ...FONTS.h3,
                            color:COLORS.white
                        }}> Your Portifolio Balance</Text>
                        <Text  style={{
                           ...FONTS.h1,
                            color:COLORS.white
                        }}   >${dummyData.portfolio.balance}</Text>
                        <Text  style={{
                            ...FONTS.body5,
                            color:COLORS.white
                        }}>{dummyData.portfolio.changes} Last 24 hours </Text>

              </View>


              {/* Trending Session */}
              <View  style={styles.trending}>
                <Text  style={styles.trendingText}> Trending</Text>
                <FlatList
                contentContainerStyle={{marginTop:SIZES.base}}
                data={trending}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}/>
              </View>


            </ImageBackground>

        </View>

        )
    }
    return(
       <ScrollView>
        <View>
            {renderHeader()}
        </View>
       </ScrollView>
    )
}

export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    center:{
        alignItems:"center",
        justifyContent:"center"
    },
    imageBack:{
      flex:1,
      alignItems:"center"
       },
       header:{
        marginTop:24,
        width:"100%",
        alignItems:"flex-end",
        paddingHorizontal:SIZES.padding,


       },
       headerButton:{
        width:35,
        height:35,
        alignItems:"center",
        justifyContent:"center"
       },
       trending:{
        // position:"absolute",
        // bottom:"-50%"
       },trendingText:{
        marginLeft:SIZES.padding,
        color:COLORS.white,
        ...FONTS.h2
       },
       trendingItem:{
        width:180,
        paddingVertical:SIZES.padding,
        paddingHorizontal:SIZES.padding,
       
        marginRight:SIZES.radius,
        borderRadius:10,
        backgroundColor:COLORS.white
       }, 
       TrendingItemImage:{
        marginTop:5,
        width:25,
        height:25

       },
    shadow: {
        width:'100%',
        height:290,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})