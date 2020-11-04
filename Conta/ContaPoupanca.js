import { Conta } from '../Conta/Conta.js'; 
export class ContaPoupanca extends Conta{
    constructor(saldoInicial, agencia, cliente){
        //PRECISAMOS PASSAR O SUPER
        super(saldoInicial,agencia,cliente)
    }
    sacar(valor){
        let taxa = 1.02;
        return this._sacar(valor, taxa);
    }



}
