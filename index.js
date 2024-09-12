import { Financiamento } from "./financiamento.js";

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

limpar.addEventListener("click", function () {
    listaSuspensa.setAttribute("hidden", "hidden");
});

botaoCalcular.addEventListener("click", function () {
    const valorF = parseFloat(valor.value);
    const entradaF = parseFloat(entrada.value);
    const taxaJurosF = parseFloat(taxaJuros.value);
    const prazoF = parseFloat(prazo.value);

    let simulacao;
    simulacao = new Financiamento(valorF, entradaF, taxaJurosF, prazoF);
    simulacao.calcParcelasMensais();
    simulacao.exibeParcelas();
});
