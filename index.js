import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import { Conta } from './Conta.js';

const cliente1 = new Cliente("Ricardo", 11122233309, 44444);
const cliente2= new Cliente("Alice", 88822233309 , 55555);
new ContaCorrente();
// cliente1.nome = "Ricardo";
// cliente1.cpf = 11122233309;
// cliente1.rg = 44444;


// cliente2.nome = "Alice";
// cliente2.cpf = 88822233309;
// cliente2.rg = 55555;
const contaCorrenteRicardo = new Conta(0, cliente1,1001 );
const contaPoupanca = new Conta(50, cliente1,1001)



// contaCorrenteRicardo.agencia = 1001;
// contaCorrenteRicardo.cliente = cliente1;

contaCorrenteRicardo.depositar(400);
// contaCorrenteRicardo.sacar(200);
// const valorSacado = contaCorrenteRicardo.sacar(100);

// console.log(contaCorrenteRicardo);



const conta2 = new ContaCorrente(102, cliente2);
// conta2.cliente = cliente2;
// conta2.agencia = 102;



contaCorrenteRicardo.transferir(200, conta2);
// console.log(conta2);
// console.log(conta2.cliente);
// console.log(conta2.saldo);
// console.log(cliente2.cpf);


console.log(ContaCorrente.numeroDeContas);

console.log(contaCorrenteRicardo);
console.log(contaPoupanca);