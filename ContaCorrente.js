import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    // #saldo = 0;
    _saldo = 0;
    _cliente



    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }



    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }



    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor
            // console.log("Saldo após o saque:", this._saldo);
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor
        // console.log("Saldo após o depósito:", this._saldo);
        // return valor;
    }

    transferir(valor, conta) {
        // conta.cidade = "São Paulo";
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}