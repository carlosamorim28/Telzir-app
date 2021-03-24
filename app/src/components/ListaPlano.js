import React,{useState} from 'react'
import {View,Text,FlatList} from 'react-native'
import { ListaPlanosRegistrados, Planos } from '../constants/Planos'
import CustomButton from './CustomButton'
import {Cores} from '../constants/Cores'

export default function ListaPlano({titulo,setSelecionado}){
    const [bgbotoes,setBgBotoes] = useState([Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao, Cores.corDeFundoBotaoPadrao, Cores.corDeFundoBotaoPadrao])


    return(
       <View>
           <Text style={{marginLeft:'3%',fontWeight:'bold'}}>{titulo}</Text>
            <FlatList 
            data = {ListaPlanosRegistrados({setValue:setSelecionado,setBgColors:setBgBotoes})}
            horizontal
            keyExtractor={(item,index)=>{
                return(item.nome)
                }}
                key={(item)=>{return item.nome}}
                renderItem={({item,index})=>{
                return(
                    <CustomButton  width={100} bgColor={bgbotoes[index]}  textobBotao={item.nome} onPress={item.onPress}/>
                )
            }}
        />
       </View>
    )
}