import { Financiamento } from "./financiamento.js";
import { FinanciamentoCarencia } from "./financiamentoCarencia.js";

const comCarencia = document.querySelector("#carencia");
const listaSuspensa = document.querySelector("#listaSuspensa");
const limpar = document.querySelector("#limpar");
const corpoTabela = document.querySelector("#corpoTabela");
const botaoCalcular = document.querySelector("#botaoCalcular");
const valor = document.querySelector("#valor");
const entrada = document.querySelector("#entrada");
const taxaJuros = document.querySelector("#taxaJuros");
const prazo = document.querySelector("#prazo");

comCarencia.addEventListener("change", function () {
    if (this.checked) {
        listaSuspensa.removeAttribute("hidden");
    } else {
        listaSuspensa.setAttribute("hidden", "hidden");
    }
});

function limpaTabela() {
    while (corpoTabela.firstChild) {
        corpoTabela.removeChild(corpoTabela.firstChild);
    }
}

limpar.addEventListener("click", function () {
    limpaTabela();
    listaSuspensa.setAttribute("hidden", "hidden");
});

botaoCalcular.addEventListener("click", function () {
    limpaTabela();
    const valorF = parseFloat(valor.value);
    const entradaF = parseFloat(entrada.value);
    const taxaJurosF = parseFloat(taxaJuros.value);
    const prazoF = parseFloat(prazo.value);
    let simulacao;
    if (comCarencia.checked) {
        const carencia = parseInt(listaSuspensa.value);
        simulacao = new FinanciamentoCarencia(
            valorF,
            entradaF,
            taxaJurosF,
            prazoF,
            carencia
        );
    } else {
        simulacao = new Financiamento(valorF, entradaF, taxaJurosF, prazoF);
    }
    simulacao.calcParcelasMensais();
    simulacao.exibeParcelas();
});
