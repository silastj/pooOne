import { Conta } from './Conta.js'; 
export class ContaPoupanca extends Conta{
    constructor(saldoInicial, agencia, cliente){
        //PRECISAMOS PASSAR O SUPER
        super(saldoInicial,agencia,cliente)
    }
}
