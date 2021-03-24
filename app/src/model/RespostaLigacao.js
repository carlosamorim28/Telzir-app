import { respostas } from '../constants/Resposta'
export default class RespostaLigacao{
    constructor(){
        this.codigoDeResposta = respostas.falha
        this.valor = 0
    }
    setValorSucesso({valor}){
        this.codigoDeResposta = respostas.sucesso
        this.valor = valor
    }
    setValorFalha({texto}){
        this.codigoDeResposta=respostas.falha
        this.valor=texto
    }
}