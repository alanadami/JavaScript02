"use strict";
// interface
const alisson = {
    nome: "Alisson",
    idade: 38,
    sexo: "masculino",
    brasileiro: true,
};
// Type ou interface? Interface está associada a objetos, enquanto a type é uma declaração genérica. Ambos possuem funções associadas distintas.
const pessoa = {
    nome: "Alan",
    idade: 43,
    sexo: "Masculino",
    brasileiro: true
};
function chooseNumber(num1, num2, criterio) {
    switch (criterio) {
        case "greater":
            return num1 > num2 ? num1 : num2;
        case "lower":
            return num1 < num2 ? num1 : num2;
        default:
            const aleatorioNumero = Math.random();
            if (aleatorioNumero >= 0.5) {
                return num2;
            }
            else {
                return num1;
            }
    }
}
console.log(chooseNumber(10, 20, "greater"));
