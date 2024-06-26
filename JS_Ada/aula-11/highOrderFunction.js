// High order functions

// * 1. Função que retorna outra função como parâmetro.

function welcome(courseName, ){
    return (studentName) => {
    console.log("Olá, " + studentName+"! Seja bem vindo ao curso de "+ courseName);
}
}
const displayWelcomToJavaCourse = welcome("Java");

displayWelcomToJavaCourse("Alan")

console.clear();

// * 2. Função que recebe outra função como parâmetro.

const somar = (num1, num2) => num1+num2;
const subtrair = (num1, num2) => num1-num2;
const dividir = (num1, num2) => num1/num2;
const multiplicar = (num1, num2) => num1*num2;

//const calcular = (num1, num2, funcao) => funcaoDaOperacao(num1, num2);


// (num1 * num2) + (2 * num1 * num2)

const primeiraMultiplicacao = (num1, num2, funcaoDaOperacao) => funcaoDaOperacao(num1, num2);
const segundaMultiplicacao = (num1, num2, funcaoDaOperacao) => funcaoDaOperacao(num1, num2);
const somaMultiplicacao = (num1, num2, funcaoDaOperacao) => funcaoDaOperacao(num1, num2)

console.log(primeiraMultiplicacao(2, 3, multiplicar));
console.log(segundaMultiplicacao(3,3, multiplicar));
console.log(somaMultiplicacao(primeiraMultiplicacao, segundaMultiplicacao, somar));

