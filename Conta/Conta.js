export class Conta{
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        //BLOQUEANDO A CONSTRUCAO DE UMA nova NEW CONTA
        if(this.constructor == Conta){
            // console.error("Voçê não deveria instancias um objeto do tipo conta");
            throw new ErrorEvent('Você nao deveria isntanciar um objeto do tipo conta');
        }
    }    

    //MÉTODO ABSTRATO
    sacar(valor){
        throw new Error('O método Sacar da conta é abstrato')
    }
        //METODO SACAR PUBLICO
    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        //SE NÃO ENTRAR NO IF ELE RETORNA SALDO 0
        return 0;
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}