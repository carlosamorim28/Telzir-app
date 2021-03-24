import { Cores } from "./Cores"

export const DDDs = {
    ddd011:'011',
    ddd016:'016',
    ddd017:'017',
    ddd018:'018'
}

export const ListaDDDsRegistrados =({setNome=()=>{},setBgColors=()=>{}})=>([
    {nome:DDDs.ddd011,onPress:()=>{
        setNome(DDDs.ddd011)
        setBgColors([Cores.corDeFundoBotaoSelecionado, Cores.corDeFundoBotaoPadrao, Cores.corDeFundoBotaoPadrao, Cores.corDeFundoBotaoPadrao])
    }},
    {nome:DDDs.ddd016,onPress:()=>{
        setNome(DDDs.ddd016)
        setBgColors([ Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoSelecionado, Cores.corDeFundoBotaoPadrao, Cores.corDeFundoBotaoPadrao])
    }},
    {nome:DDDs.ddd017,onPress:()=>{
        setNome(DDDs.ddd017)
        setBgColors([Cores.corDeFundoBotaoPadrao, Cores.corDeFundoBotaoPadrao, Cores.corDeFundoBotaoSelecionado, Cores.corDeFundoBotaoPadrao])
    }},
    {nome:DDDs.ddd018,onPress:()=>{
        setNome(DDDs.ddd018)
        setBgColors([Cores.corDeFundoBotaoPadrao, Cores.corDeFundoBotaoPadrao, Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoSelecionado,])
    }},
])
