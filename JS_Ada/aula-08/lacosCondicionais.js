const prompt = require('readline-sync');

// let notaAluno = Number(prompt.question("Digita a nota:"))
// let somaNota = 0;
// let contadorDeNotas = 0;

// while (notaAluno > 0){
//     somaNota = somaNota + notaAluno;
//     contadorDeNotas += + 1;
//     console.log(contadorDeNotas);
//     notaAluno = Number((prompt.question("Digita a nota:"))); 
// }
// console.log("A media das notas é" , somaNota / contadorDeNotas);

// Acerte o número!

let numeroSorteado = parseInt(Math.random() * 10);
console.log("Esse é o número sorteado:" , numeroSorteado);
let contadorTentativas = 1;

let numeroDigitado = Number(prompt.question("Tente acertar o numero entre 0 e 10:"))

while (numeroDigitado !== numeroSorteado){
    contadorTentativas++;
    if(contadorTentativas == 3){
        console.log("Suas tentativas acabaram");
        break;
    }
    //console.log("Você errou o número, digite novamente:");
    numeroDigitado = Number(prompt.question("Tente acertar o numero entre 0 e 10:"))
}

console.log("Parabéns, você acertou o número em", contadorTentativas, "tentativas!");