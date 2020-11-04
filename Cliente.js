

export class Cliente {
    constructor(nome,cpf,rg,senha){
        this.nome = nome;
        this._cpf = cpf;
        this.rg = rg;
        this._senha = senha;
    }

    get cpf(){
        return this._cpf;
    }


}