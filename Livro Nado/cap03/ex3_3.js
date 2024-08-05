// b) Elaborar um programa para uma veterinária, que leia o peso de uma
// ração em kg e o quanto um gato consome por dia da ração, em gramas.
// Informe quantos dias irá durar a ração e o quanto sobra da ração (em
// gramas).

const prompt = require("prompt-sync")()

const pesoPacote = Number(prompt("Informe o peso da ração em Kg:"));
const comidaGato = Number(prompt("Quantas gramas de ração o seu gato come por dia?"))

const diasDeRacao = pesoPacote / (comidaGato * 0.001);
const sobra = pesoPacote % (comidaGato * 0.001);

console.log("Você tem ração para alimentar o seu gato por " +diasDeRacao.toFixed(2)+" dias.\nE sobrará "+(sobra / 0.001).toFixed(0)+"gr");
