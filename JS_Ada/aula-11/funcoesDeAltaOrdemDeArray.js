
const numeros = [2, 45,67,29,43,98, 49 ];

// numeros.forEach((elemento, index, array) => {
//     console.log(index, elemento, numeros[3]);
// });

// console.clear();

// let procurado = numeros.find((numero) => {
//     return numero > 29 && numero < 44
// })

// console.log(procurado);

const pessoa = [
    {
        nome: "Pessoa1",
        idade: 12,
        sexo: "masculino"
    },
    {
        nome: "Pessoa2",
        idade: 34,
        sexo: "feminino"
    },
    {
        nome: "Pessoa3",
        idade: 56,
        sexo: "masculino"
    },
    {
        nome: "Pessoa4",
        idade: 30,
        sexo: "feminino"
    },
]

let qualSexo = pessoa.find((pessoa) => pessoa.idade > 30)
console.log(qualSexo);