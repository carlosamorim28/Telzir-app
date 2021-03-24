import { DDDs } from "../constants/DDDs"
import { respostas } from "../constants/Resposta";
import RespostaLigacao from "./RespostaLigacao";

export default class Ligacao{
    constructor({origem = 'none',destino = 'none'}){
        this.origem = origem
        this.destino = destino
    }


    alteraValoresPorMinutoQuandoDDD11ForOrigem(retorno){
        switch (this.destino){
            case DDDs.ddd016:
                retorno.setValorSucesso({valor:1.90})
                break
            case DDDs.ddd017:
                retorno.setValorSucesso({valor:1.70})
                break
            case DDDs.ddd018: 
                retorno.setValorSucesso({valor:0.90})
                break
            default:
                retorno.setValorFalha({texto:'Não possuimos condições de calcular o preço de uma ligação de '+this.origem+' para '+this.destino})
                break
        }
        return retorno
    }

    alteraValoresPorMinutoQuandoDDD16ForOrigem(retorno){
        switch(this.destino){
            case DDDs.ddd011:
                retorno.setValorSucesso({valor:2.90})
                break
            default:
                retorno.setValorFalha({texto:'Não possuimos condições de calcular o preço de uma ligação de '+this.origem+' para '+this.destino})
                break
        }
        return retorno
    }

    alteraValoresPorMinutoQuandoDDD17ForOrigem(retorno){
        switch(this.destino){
            case DDDs.ddd011:
                retorno.setValorSucesso({valor:2.70})
                break
            default:
                retorno.setValorFalha({texto:'Não possuimos condições de calcular o preço de uma ligação de '+this.origem+' para '+this.destino})
                break
        }
        return retorno
    }

    alteraValoresPorMinutoQuandoDDD18ForOrigem(retorno){
        switch(this.destino){
            case DDDs.ddd011:
                retorno.setValorSucesso({valor:0.90})
                break
            default:
                retorno.setValorFalha({texto:'Não possuimos condições de calcular o preço de uma ligação de '+this.origem+' para '+this.destino})
        }
        return retorno
    }
    getValorLigacaoPorMinuto(){
        var retorno = new RespostaLigacao()
        switch (this.origem){
            case DDDs.ddd011:
                retorno = this.alteraValoresPorMinutoQuandoDDD11ForOrigem(retorno)
                break;
            case DDDs.ddd016:
                retorno = this.alteraValoresPorMinutoQuandoDDD16ForOrigem(retorno)
                break
            
            case DDDs.ddd017:
                retorno = this.alteraValoresPorMinutoQuandoDDD17ForOrigem(retorno)
                break
            
            case DDDs.ddd018:
                retorno = this.alteraValoresPorMinutoQuandoDDD18ForOrigem(retorno)
                break
            default:
                break;

        }
        return retorno
    }
    getValorLigacao({tempo}){
        //console.log(tempo)
        var retorno = this.getValorLigacaoPorMinuto()
        if(retorno.codigoDeResposta == respostas.sucesso){
            return retorno.valor *tempo
        }else{
            return retorno.codigoDeResposta
        }
        
    }
}