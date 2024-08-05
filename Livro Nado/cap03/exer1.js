const prompt = require("prompt-sync")()

const tempoDeTrabalho = Number(prompt("Informe a quantidade de anos:"));
const salarioEmpregado = Number(prompt("Qual o salário?"))

const numeroQuadrienio = Math.floor(tempoDeTrabalho / 4)
const salarioAtualizado = ((salarioEmpregado /100) * numeroQuadrienio) + salarioEmpregado;
console.log("Você tem direito a " + numeroQuadrienio + " quadriênios.\nE o seu salário é de: " + salarioAtualizado);