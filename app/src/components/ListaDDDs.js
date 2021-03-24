import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { DDDs, ListaDDDsRegistrados } from '../constants/DDDs'
import CustomButton from './CustomButton'
import {Cores} from '../constants/Cores'

export default function ListaDDDs({titulo,setSelecionado}){
    const [bgtoes,setBgBotoes] = useState([Cores.corDeFundoBotaoPadrao, Cores.corDeFundoBotaoPadrao, Cores.corDeFundoBotaoPadrao, Cores.corDeFundoBotaoPadrao])


    return(
       <View>
           <Text style={{marginLeft:'3%',fontWeight:'bold'}}>{titulo}</Text>
            <FlatList 
            data = {ListaDDDsRegistrados({setNome:setSelecionado,setBgColors:setBgBotoes})}
            horizontal
            keyExtractor={(item,index)=>{
                return(item.nome)
                }}
                key={(item)=>{return item.nome}}
                renderItem={({item,index})=>{
                return(
                    <CustomButton  width={100}  bgColor={bgtoes[index]} textobBotao={item.nome} onPress={()=>{
                        item.onPress()
                    }}/>
                )
            }}
        />
       </View>
    )
}