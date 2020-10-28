import {Conta} from './Conta.js'
export class ContaCorrente extends Conta{
    static numeroDeContas = 0;  
    constructor(agencia, cliente){
        super(0,agencia,cliente);
        ContaCorrente.numeroDeContas += 1;
    }
    //SOBREESCREVENDO O COMPORTAMENTO DE SACAR
    sacar(valor){
        let taxa = 1.1;
        //USANDO O SUPER OU O THIS DÁ NA MESMA
        return this._sacar(valor, taxa);
        //SE NÃO ENTRAR NO IF ELE RETORNA SALDO 0
}
}