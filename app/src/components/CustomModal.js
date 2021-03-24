import React,{useState,useEffect} from 'react'
import {Modal,View,Text,TouchableOpacity, ToastAndroid} from 'react-native'
import CustomEditText from './CustomEditText'
import CustomButton from './CustomButton'
import User from '../model/User'
import Relatorio from '../model/Relatorio'
import { respostas } from '../constants/Resposta'



export default function CustomModal({visible=false,onPress=()=>{},params=new Relatorio({destino:'',origem:'',plano:'',tempo:0,valorComPlano:0,valorSemPlano:0})}){


    function retorno(){
        if(params.valorSemPlano == respostas.falha){
            return(
            <Modal animationType='fade' style={{}} visible={visible} transparent={true}>
                <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',marginTop: 22}} >
                    <View style={{margin: 20,backgroundColor: 'white',borderRadius: 20,padding: 35,alignItems: 'center',shadowColor: '#000',shadowOffset: {width: 0,height: 2,}}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text>Origem: {params.origem}   </Text>
                            <Text>   Destino: {params.destino}</Text>
                        </View>
                        <Text>{params.valorComPlano}</Text>
                        <CustomButton textobBotao='Voltar' onPress={()=>{onPress(!visible)}} width={100} />
                    </View>
                </View>
            </Modal>
            )
        }else{
            return(
            <Modal animationType='fade' style={{}} visible={visible} transparent={true}>
                <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',marginTop: 22}} >
                    <View style={{margin: 20,backgroundColor: 'white',borderRadius: 20,padding: 35,alignItems: 'center',shadowColor: '#000',shadowOffset: {width: 0,height: 2,}}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text>Origem: {params.origem}   </Text>
                            <Text>   Destino: {params.destino}</Text>
                        </View>
                        <Text style={{}}>O custo com o plano "{params.plano.nome}" é R$: {params.valorComPlano}</Text>
                        <Text style={{}}>O custo sem o plano "{params.plano.nome}" é R$: {params.valorSemPlano}</Text>
                        <CustomButton textobBotao='Voltar' onPress={()=>{onPress(!visible)}} width={100} />
                    </View>
                </View>
            </Modal>
            )
        }
    }

    return(
        retorno()
    )
}