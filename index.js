import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import { Conta } from './Conta.js';

const cliente1 = new Cliente("Ricardo", 11122233309, 44444);
const cliente2= new Cliente("Alice", 88822233309 , 55555);
new ContaCorrente();

const contaCorrenteRicardo = new ContaCorrente(cliente1,1001 );
const contaPoupanca = new ContaPoupanca(50,cliente1,1001);
// const conta = new Conta(0, cliente1, 1002);

contaCorrenteRicardo.depositar(400);

const conta2 = new ContaCorrente(102, cliente2);

contaCorrenteRicardo.transferir(200, conta2);


console.log(contaCorrenteRicardo);
// console.log(conta);