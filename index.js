import { Cliente } from "./Cliente.js";

import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";

// const cliente1 = new Cliente("Ricardo", 11122233309);

// const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
// contaCorrenteRicardo.depositar(500);
// contaCorrenteRicardo.sacar(100);

// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
// contaPoupanca.sacar(10);

// const contaSalario = new ContaSalario (cliente1);
// contaSalario.depositar(100);
// contaSalario.sacar(10);

// console.log(contaSalario);
// console.log(contaPoupanca);
// console.log(contaCorrenteRicardo);

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456789")
const gerente = new Gerente("Ricardo", 5000, 12378945601);
gerente.cadastrarSenha("12345");
const cliente = new Cliente("Lais", 78945612379, "456");
// cliente.cadastrarSenha("456");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "12345");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log("Diretor está logado:",diretorEstaLogado);
console.log("Gerente está logado:",gerenteEstaLogado);
console.log("Cliente está logado:",clienteEstaLogado);