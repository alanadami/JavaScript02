"use strict";
// Aula 19 - POO
class Pessoa {
    constructor(nome, idade, altura, cpf) {
        this.nome = nome,
            this.idade = idade,
            this.altura = altura;
        this.cpf = cpf;
    }
    dormir() {
        console.log("Dormindo");
    }
}
const pessoa1 = new Pessoa("Alan", 43, 1.78, "001.002.003-01");
console.log(pessoa1);
