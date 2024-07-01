//Map
// Cria um novo array do mesmo tamanho do original, composto pelos elementos que foram retornados.

const numeros = [28, 46, 3, 43, 78, 2, 76, 78];

const numerosQuadrado = numeros.map((numeros) => numeros ** 2);
console.log(numerosQuadrado);

console.clear()

// exemplo 2:

const carrinho = [
    {produto: "feijão", preco: 7.98, quantidade: 3},
    {produto: "arroz", preco: 4.98, quantidade: 5},
    {produto: "leite", preco: 6.99, quantidade: 2},
];

const valorTotal =  carrinho.map((produto) =>{
    return {
        ...produto,
        total: parseFloat (produto.preco * produto.quantidade),
    }

} );

console.log(valorTotal);

// const pessoa = {
//     nome: "Alan",
//     idade: 43,
//     sexo: "masculino"
// }

// const pessoaComPeso = {
//     ...pessoa,
//     peso: "72 kg"
// }

// console.log(pessoaComPeso);

const pessoa = [
    {
        nome: 'Pessoa1',
        idade: 12,
        sexo: 'masculino',
        peso: 24,
        altura: 1.56
      },
      {
        nome: 'Pessoa2',
        idade: 34,
        sexo: 'feminino',
        peso: 68,
        altura: 1.89
      },
      {
        nome: 'Pessoa3',
        idade: 43,
        sexo: 'masculino',
        peso: 72,
        altura: 1.79
      },
      {
        nome: 'Pessoa4',
        idade: 30,
        sexo: 'feminino',
        peso: 60,
        altura: 1.8
      }
]

const pessoaImc = pessoa.map((item) =>{
    return {
        ...item,
        IMC: Math.round((item.peso / item.altura)**2),
    }
})

console.log(pessoaImc);

