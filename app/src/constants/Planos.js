import { Cores } from "./Cores"

export const Planos ={
    FaleMais30Min:{
        nome:'Fale Mais 30',
        tempoIsencao:30
    },
    FaleMais60Min:{
        nome:'Fale Mais 60',
        tempoIsencao:60
    },
    FaleMais120Min:{
        nome:'Fale Mais 120',
        tempoIsencao:120
    },Nenhum:{
        nome:'Nenhum',
        tempoIsencao:0
    }
}

export const ListaPlanosRegistrados=({setValue,setBgColors})=>([
    {
        nome:Planos.FaleMais30Min.nome,
        onPress:()=>{
            setValue(Planos.FaleMais30Min)
            setBgColors([Cores.corDeFundoBotaoSelecionado,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao])
        }
    },
    {
        nome:Planos.FaleMais60Min.nome,
        onPress:()=>{
            setValue(Planos.FaleMais60Min)
            setBgColors([Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoSelecionado,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao])
        }
    },
    {
        nome: Planos.FaleMais120Min.nome,
        onPress:()=>{
            setValue(Planos.FaleMais120Min)
            setBgColors([Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoSelecionado,Cores.corDeFundoBotaoPadrao])
        }
    },
    {
        nome: Planos.Nenhum.nome,
        onPress:()=>{
            setValue(Planos.Nenhum)
            setBgColors([Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoSelecionado])
        }
    }
])