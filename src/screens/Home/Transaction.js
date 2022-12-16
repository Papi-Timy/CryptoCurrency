import React from "react";
 import { Button, Text,TouchableOpacity,View,StyleSheet,SafeAreaView,ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";
import {  HeaderBar,CurrencyLabel ,TransactionHistory,TextButton,PriceAlert} from "../../components";
import { COLORS, dummyData, FONTS, ROUTES,icons, SIZES } from "../../constants";

 const Transaction = ({route,navigation})=>{

    const [selectedCurrency,setSelectedCurrency] =React.useState(null)

    React.useEffect(()=>{
        const {currency} =route.params
        setSelectedCurrency(currency)

    })

    function renderTrade(){
        return(
            <View  style={{
                marginTop:SIZES.padding,
                marginHorizontal:SIZES.padding,
                padding:SIZES.padding,
                borderRadius:SIZES.radius,
                backgroundColor:COLORS.white

            }}>
                <CurrencyLabel
                icon={selectedCurrency?.image}
                code={selectedCurrency?.code}
                currency={selectedCurrency?.currency}
                />

                <View  style={{
                    marginTop:SIZES.padding,
                    marginBottom:SIZES.padding*1.5,
                    alignItems:'center',
                    justifyContent:'center'
                }}>

                    <Text style={{
                        ...FONTS.h2,
                        color:COLORS.black,
                        

                    }}>{selectedCurrency?.wallet.crypto}   {selectedCurrency?.code}</Text>
                    <Text  sty4={{
                        ...FONTS.body3
                    }}   >${selectedCurrency.wallet.value}</Text>
                </View>
                <TextButton
                label='Trace'
                onPress={()=>console.log('trace')}
                   />


            </View>
        )
    }
    function renderTransactionHistory(){
        return(
            <TransactionHistory
           customContainerStyle={{

           }}
           history={selectedCurrency?.transactionHistory}
            />
        )
    }


    return(
       <SafeAreaView style={{
        flex:1
       }}>
        <HeaderBar right={false}/>
        <ScrollView>
            <View  style={{flex:1,
            paddingBottom:SIZES.padding}}   >  
            {renderTrade()}
            {renderTransactionHistory()}

            </View>
        </ScrollView>

       </SafeAreaView>
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

