Class é oq eu preciso ter:
New Cliente ,   é um novo cliente
const cliente1   é uma instancia do new Cliente()

ATRIBUTOS PRIVADO OU PUBLIC
#saldo   Usar o # antes ele deixa privado  a propriedade apartir do nod v13
_saldo   podemos usar tb
   //_saldo  é deixar a propriedade privada
    //#saldo é nas novas versões do node ainda nao está oficializado.

CRIANDO UMA CLASS
Arquivo novo com a primeira Letra maiuscula 

MODULOS NO JAVASCRIPT
Precisa está com a versão do nodejs v13 acima


RODANDO NO TERMINAL COM NODE

comando abaixo mostra o console.log no mesmo terminal
node ./index.js

Metodo dentro da class - Precisa retorna(return) sempre o return se nao ele traz o undefined;


"early return" (ou "retorno antecipado", em tradução livre). 
    depositar(valor) {
    if(valor <= 0) {
        return;
    }
    this._saldo += valor;
    }

    ou assim

    depositar(valor) {
     if(valor <= 0) return;
    this._saldo += valor;
    }


CRIANDO O PACKGE.JSON
Com perguntas:

npm init 

ou sem perguntas, pulando as perguntas

npm init -y

PRA DEIXAR COMO MODULO O PRIMEIRO ARQUIVO QUE 
IREMOS RODAS

Depois do npm init

colocaremos dentro do package.json alinha abaixo
com o ( type:module)
},
  "author": "Silas",
  "license": "ISC",
  "type": "module"
}


ES5 PARA TRÁS
module export e require


ES5 PRA FRENTE( ES6 )
Import e Export

OBS=> Para rodar em ES5 O BABEL faz a função!


CONSULTAR NA NET
Diferenca parte de modulos es5 para o es6


CRIAR NOVO ATRIBUTO PARA A CLASS DENTRO DO METODO ( Criamos o atributo cidade )
transferir (valor, conta) {
    conta.cidade = "São Paulo";
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);

}

DICA SOBRE 
Caso você queira ver em detalhes como essa operação de alocação de memória é feita pode ler esse artigo sobe o modelo de gerenciamento de memória do JS.
https://medium.com/@ethannam/javascripts-memory-model-7c972cd2c239


ATRIBUIT O VALOR NULL
Também obteremos o mesmo resultado se explicitamente atribuirmos o valor null à propriedade conta2.cliente.
const conta2 = new ContaCorrente();
conta2.cliente = null;


GETERS E SETTERS ( GET e SET ) Encapsular 

FAZER A ATRIBUIÇÃO ( isntanceof )
set cliente(novoValor){
    if(novoValor instanceof Cliente){
        this._cliente = novoValor;
    }
}

STATIC
 A ideia é trabalharmos com um atributo estático, do tipo que reflete as alterações em todos os objetos daquela classe. Para isso usaremos a palavra reservada static.

 export class ContaCorrente {
    static numeroDeContas = 0;
 }

 constructor(agencia, cliente) {
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas += 1
    }

Com isso, toda vez que o construtor de ContaCorrente for chamado, somaremos 1 ao atributo numeroDeContas da classe ContaCorrente como um todo, e não de um objeto específico. Inclusive, se executarmos nosso código nesse ponto, repare que não mais receberemos os valores de numeroDeContas:

Para obtermos esse valor, precisaremos imprimir ContaCorrente.numeroDeContas:

console.log(ContaCorrente.numeroDeContas);  
2
===================================================================================================
===================================================================================================
CURSO => JavaScript: Interfaces e Herança em Orientação a Objetos

extends oq vc tem da class conta para a class ContaCorrente

export class ContaCorrente extends Conta{

}

Precisa chamar o super constructor antes de chamar o this

 constructor(saldoInicial, cliente, agencia){
        //PRECISAMOS PASSAR O SUPER
        super(saldoInicial,cliente,agencia)
    }


Para pegar duas funções ao mesmo tempo:
uma no arquivo conta.js
e outro arquivo contaCorrente.js

No arquico que tem extends precisa colocar o super, para chamar o arquivo extends
export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
  
    constructor(agencia, cliente){
        super(0,agencia,cliente);
        ContaCorrente.numeroDeContas += 1;
    }
    teste(){
        super.teste();
        console.log('teste na class conta corrente')
    }
}

já no arquivo conta.js que está sendo extends

   teste(){
        console.log('conta')
    }

será executado depois!

=> CLASS ABSTRADA ( Método sobscrito )
Nunca extanciada e sempre herdada, não pode chamar ela diretamente.

=> OPERADOR in ( verificar se autenticar está dentro do autenticavel )

"autenticar" in autenticavel

=> VERIFICAR SE É UMA ESTANCIA DENTRO DE UMA FUNÇÃO
 && autencicavel.autenticar instaceof Function

=> DUCK TYPE E POLIMORFISMO , não importa o tipo, indepedente do tipo ele vai usar! se ele tiver a propriedade que eu vou usar, ele vai usar de x forma!
Utilizando codigos e reutilizando codigos

Encapsulamento  é muito importante, com os acessores get e set, metodos 









