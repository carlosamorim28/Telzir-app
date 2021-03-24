import React, { useState } from 'react'
import { View,Text, ImageBackground } from 'react-native'
import FormValores from '../components/FormValores'
import { DDDs } from '../constants/DDDs'
import { Planos } from '../constants/Planos'
import Plano from '../model/Plano'
import User from '../model/User'
import CustomModal from '../components/CustomModal'

export default function MainScreen(){
    const [visible,setVisible]=useState(false)
    const [relatorio,setRelatorio]=useState()
    
    return(
        <ImageBackground style={{flex:1}} source={{uri: 'https://img.ibxk.com.br/2016/09/28/28105228477323.jpg?w=328'}} blurRadius={2} >
            <CustomModal params={relatorio} visible={visible} onPress={setVisible} />
            <FormValores setVisible={setVisible} setRelatorio={setRelatorio} />
        </ImageBackground>
    )
}