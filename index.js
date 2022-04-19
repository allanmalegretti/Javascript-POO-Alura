import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
// cliente1.nome = "Ricardo";
// cliente1.cpf = 11122233309;
console.log(cliente1);

const cliente2 = new Cliente("Alice", 88822233309);
// cliente2.nome = "Alice";
// cliente2.cpf = 88822233309;
console.log(cliente2);

// Abertura de Conta Corrente
const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
// contaCorrenteRicardo.agencia = 1001;
// contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente(101, cliente2);
// conta2.cliente = cliente1;
// conta2.agencia = 102;

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

// Depósito na Conta Corrente
// contaCorrenteRicardo.depositar(100);

// Saque da Conta Corrente
// const valorSacado = contaCorrenteRicardo.sacar(50);
// console.log("Valor sacado:", valorSacado);

console.log(contaCorrenteRicardo);

console.log("Número de contas:",ContaCorrente.numeroDeContas);