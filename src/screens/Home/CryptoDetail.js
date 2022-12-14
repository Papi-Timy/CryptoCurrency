import React from "react";
 import { Button, Text,TouchableOpacity,View,StyleSheet ,SafeAreaView, ScrollView, Animated} from "react-native";
import { COLORS, dummyData, FONTS, ROUTES, SIZES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { HeaderBar,CurrencyLabel ,TextButton} from "../../components";
import { VictoryScatter,VictoryLine,VictoryChart,VictoryAxis}from 'victory-native'
import {VictoryCustomTheme} from '../../styles'


 const CryptoDetail = ({route,navigation})=>{
    const scrollX = new Animated.Value(0)
    const numberOfCharts = [1,2,3]

    const [selectedCurrency,setSelectedCurrency] =React.useState(null)
    const[chartOptions ,setChartOptions] =  React.useState(dummyData.chartOptions)
    const [selectedOption,setSelectedOption] = React.useState(chartOptions[0])
    
    
    
    React.useEffect(()=>{

        const{currency} = route.params
        setSelectedCurrency(currency)
    },[])
    function optionOnClickHandler(option){
        setSelectedOption(option)
    }

 

    function renderChart(){
        return(
            <View  style={{
                marginTop:SIZES.padding,
                marginHorizontal:SIZES.radius,
                alignItems:'center',
                borderRadius:SIZES.radius,
                backgroundColor:COLORS.white
             }}>
                {/* Header */}
                <View style={{
                    flexDirection:'row',
                    marginTop:SIZES.padding,
                    paddingHorizontal:SIZES.padding
                }}  >
                    <View style={{flex:1}} > 
                    <CurrencyLabel
                    icon={selectedCurrency?.image}
                    currency={selectedCurrency?.currency}
                    code ={selectedCurrency?.code}
                    
                    />
                    </View>
                    <View>
                        <Text  style={{...FONTS.h3}}> ${selectedCurrency?.amount}</Text>
                        <Text  style={{color: selectedCurrency?.item == "I" ? COLORS.green : COLORS.red, ...FONTS.body3}}>{selectedCurrency?.changes}</Text>



                    </View>

                </View>
                {/* Chart */}
                <Animated.ScrollView 
                horizontal
                pagingEnabled
                scrollEventThrottle={16}  
                snapToAlignment='center' 
                snapToInterval={SIZES.width -40 }
                showsHorizontalScrollIndicator={false}
                decelerationRate={0}
                onScroll={Animated.event([{
                    nativeEvent:{contentOffset:{x:scrollX}}
                }],{useNativeDriver:false})}>
                    {numberOfCharts.map((item,index)=>(


                            <View
                            key={`chart-${index}`}
                            style={{
                                marginLeft:index == 0 ? SIZES.base: 0
                            }}
                            
                            >
                        <View style={{marginTop:-25}}  >
                        <VictoryChart
                        theme={VictoryCustomTheme}  
                        height={220}
                        width={SIZES.width- 40}
                        >
                            <VictoryLine
    
                            style={{
                                data:{
                                    stroke:COLORS.secondary
                                },
                                parent:{
                                    border:"1px solid #ccc"
                                }
                            }}
                            data={selectedCurrency?.chartData}
                            categories={{
                                x: ["15 MIN", "30 MIN","45 MIN","60 MIN"],
                                y:["15", "30", "45"]
                            }}
                            />
                            <VictoryScatter
                                data={selectedCurrency?.chartData}
                                size={7}
                                style={{
                                    data:{
                                        fill:COLORS.secondary
                                    }
                                }}
                                            
                            />
                            <VictoryAxis 
                            style={{
                                grid:{
                                    stroke:'transparent'
                                }
                            }}
                            
                            />
                            <VictoryAxis 
                            dependentAxis
                            style={{
                                axis:{
                                    stroke :'transparent'
                                },
                                grid:{
                                    stroke:'grey'
                                }
                            }}
                            
                            />
    
    
                          
    
                        </VictoryChart>
    
                    </View>
                    </View>

                    ))}


                
                </Animated.ScrollView>




                {/* Options */}
                <View style={{width:'100%',
            paddingHorizontal:SIZES.padding,flexDirection:'row',justifyContent:'space-between'}}>

                            {chartOptions.map((option)=>{
                                return(
                                    <TextButton
                                    key={`option-${option.id}`}
                                    label={option.label}
                                    customContainerStyle={{
                                        height:30,
                                        width:60,
                                        borderRadius:15,
                                        backgroundColor:selectedOption.id ==option.id? COLORS.primary: COLORS.lightGray
                                    }}
                                    customLabelStyle={{
                                        color:selectedOption.id == option.id? COLORS.white:COLORS.gray,...FONTS.body5
                                    }}
                                    onPress={()=>optionOnClickHandler(option) }
                                    />
                                )
                            })}

            </View>
                {/* Dots */}


            </View>
        )

    }


    return(
      <SafeAreaView
      
      style={{
        flex:1,
        backgroundColor:COLORS.lightGray1
      }}>
        <HeaderBar   right={true}/>
        <ScrollView>
            <View style={{flex:1,paddingBottom:SIZES.padding}}>
                {renderChart()}
            </View>

        </ScrollView>

      </SafeAreaView>
    )

 }

 export default CryptoDetail;
 const style = StyleSheet.create(
    {
        centerView :{
            alignItems: 'center',
            justifyContent:'center',
            alignContent:'center'
        }


    }
)

