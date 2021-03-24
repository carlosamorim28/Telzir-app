import { respostas } from "../constants/Resposta";
import Ligacao from "./Ligacao";
import Plano from "./Plano";
import Relatorio from "./Relatorio";

export default class User{
    constructor({plano = new Plano({nome:'nenhum',tempoIsencao:0})}){
        this.plano  = plano
    }

    getValorLigacaoComPlano({tempo,origem,destino}){
        var ligacao = new Ligacao({origem,destino})
        var valor =''
        if(ligacao.getValorLigacaoPorMinuto().codigoDeResposta == respostas.sucesso){
            valor = ligacao.getValorLigacao({tempo:tempo-this.plano.tempoIsencao})
            valor = valor + valor*0.1
            if(valor<=0){
                valor = 'Gatuito'
            }
        }else{
            valor = ligacao.getValorLigacaoPorMinuto().valor
        }
        return valor
    }

    getValorLigacaoSemPlano({tempo,origem,destino}){
        var ligacao = new Ligacao({origem,destino})
        var valor 
        if(ligacao.getValorLigacaoPorMinuto().codigoDeResposta == respostas.sucesso){
            valor = ligacao.getValorLigacao({tempo})
        }else{
            valor = ligacao.getValorLigacaoPorMinuto().codigoDeResposta
        }
        return valor
    }

    getRelatorio({tempo,origem,destino}){
        var relatorio = new Relatorio({origem,destino,tempo,plano:this.plano,valorComPlano:this.getValorLigacaoComPlano({tempo,origem,destino}),valorSemPlano:this.getValorLigacaoSemPlano({tempo,origem,destino})})
        return relatorio
    }
}