// const numeros = [28, 46, 3, 43, 78, 2, 76, 78];

// const pares = numeros.filter((numero) => numero % 2 === 0);

// console.log(pares);


const produtos = [
    {produto: "leite", tipo: "bebida", valor: 4.5},
    {produto: "cerveja", tipo: "bebida", valor: 3.5},
    {produto: "pão", tipo: "comida", valor: 1.5},
    {produto: "chocolate", tipo: "doce", valor: 6.5},
    {produto: "café", tipo: "bebida", valor: 9.5},
    {produto: "tomate", tipo: "legume", valor: 9.5},
]

const bebidas = produtos.filter((item) => item.tipo === "bebida" && item.valor <= 3.5);

console.log(bebidas);

// A, B, C, D   .map()          -> E, F, G, H - acrescenta itens ao array e se quiser, mantem os mesmos.
// A, A, C, D   .filter(A)      -> A, A       - seleciona itens especificados, ou seja, filtra.
// A, B, C, D   .find(C)        -> C          - Devolve o primeiro item que atenda aos parametros solicitados.  
// A, B, C, D   .findIndex(D)   -> 3          - Devolve o índice no qual se encontra o elemento.  
// A, B, C, D   .indexOf(C)     -> 2          - Informa a posição do elemento.
// A, B, C, D
// A, B, C, D
// A, B, C, D