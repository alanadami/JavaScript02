"use strict";
// Aula 19 - POO
class Pessoa {
    constructor(nome, idade, altura, cpf) {
        this.nome = nome,
            this.idade = idade,
            this.altura = altura;
        this._cpf = cpf;
    }
    dormir() {
        console.log("Dormindo");
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(newCpf) {
        if (newCpf.length !== 14) {
            throw new Error("CPF lenght is incorrect!");
        }
        this._cpf = newCpf;
    }
}
class Professor extends Pessoa {
    constructor(nome, idade, altura, cpf, codigo) {
        super(nome, idade, altura, cpf);
        this.codigo = codigo;
    }
    ensinar() {
        console.log("Ensinando...");
    }
}
const pessoa1 = new Pessoa("Alan", 43, 1.78, "001.002.003-01");
console.log(pessoa1);
const profFilosofia = new Professor("Alan", 43, 1.78, "123.456.789-09", "filo001");
console.log(profFilosofia);
profFilosofia.dormir();
profFilosofia.ensinar();
