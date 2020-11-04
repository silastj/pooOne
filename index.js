import { Cliente } from '../ProjetoOne/Cliente.js';
import { Gerente } from '../ProjetoOne/Funcionario/Gerente.js';
import { Diretor } from '../ProjetoOne/Funcionario/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenciacao.js';

const diretor = new Diretor('Rodrigo', 10000, 12345678900);
const gerente = new Gerente('Ricardo', 5000, 12345678999);

diretor.cadastrarSenha('123456')
gerente.cadastrarSenha('123')

const estaLogado = SistemaAutenticacao.login(diretor, "123456");
const estaLogadoNovo= SistemaAutenticacao.login(gerente, '123');

//verificar se logou
console.log('diretor '+estaLogado);
console.log('gerente '+estaLogadoNovo);





















// import { ContaCorrente } from '../ProjetoOne/Conta/ContaCorrente.js';
// import { ContaPoupanca } from '../ProjetoOne/Conta/ContaPoupanca.js';
// import { ContaSalario } from './ProjetoOne/Conta/ContaSalario.js';

// const cliente1 = new Cliente("Ricardo", 11122233309, 44444);
// const cliente2= new Cliente("Alice", 88822233309 , 55555);
// new ContaCorrente();

// const contaCorrenteRicardo = new ContaCorrente(cliente1,1001 );
// const contaPoupanca = new ContaPoupanca(50,cliente1,1001);

// contaCorrenteRicardo.depositar(400);

// const conta2 = new ContaCorrente(102, cliente2);

// contaCorrenteRicardo.transferir(200, conta2);

// const contaSalario = new ContaSalario(cliente1);


// console.log(contaCorrenteRicardo);
// console.log(contaSalario)

