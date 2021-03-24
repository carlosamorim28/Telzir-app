import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Plano from '../model/Plano'
import User from '../model/User'
import CustomButton from './CustomButton'
import CustomEditText from './CustomEditText'
import ListaDDDs from './ListaDDDs'
import ListaPlano from './ListaPlano'

export default function FormValores({setVisible=()=>{},setRelatorio=()=>{}}){
    const [origem,setOrigem] = useState('')
    const [destino,setDestino] = useState('')
    const [tempo,setTempo] = useState('')
    const [plano,setPlano] = useState('')

    function gerarRelatorio(){
        var duracaoLigacao = parseFloat(tempo)
        if(tempo && origem && destino && plano){
            if(origem != destino){
                var user = new User({plano:new Plano(plano)})
                var relatorio = user.getRelatorio({tempo:duracaoLigacao,origem:origem,destino:destino})
                setVisible(true)
                setRelatorio(relatorio)
            }else{
                alert('Selecione um DDD de destino diferente do DDD de origem')
            }
        }else{
            alert('preencha todos os campos')
        }

    }

    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <View style={{height:70,width:'80%'}}>
                <ListaDDDs titulo="Escolha a origem da chamada" setSelecionado={setOrigem}/>
            </View>
            <View style={{height:70,width:'80%'}}>
                <ListaDDDs titulo="Escolha o destino da Chamada" setSelecionado={setDestino}/>
            </View>
            <View style={{height:70,width:'80%'}}>
                <ListaPlano titulo='Escolha o plano' setSelecionado={setPlano} />
            </View>
            <CustomEditText placeholder='Duração da ligação' keyboardType='numeric' value={tempo} onChangeText={(text)=>{setTempo(text)}} />
            <CustomButton textobBotao='Gerar relatórios' width={'80%'} height={50} onPress={gerarRelatorio}/>
        </View>
    )
}