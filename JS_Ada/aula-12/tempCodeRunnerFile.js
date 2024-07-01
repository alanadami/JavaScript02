const pessoa = {
    nome: "Alan",
    idade: 43,
    sexo: "masculino"
}

const pessoaComPeso = {
    ...pessoa,
    peso: "72 kg"
}

console.log(pessoaComPeso);