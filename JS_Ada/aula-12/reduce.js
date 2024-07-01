//Reduce

const numeros = [6,  12, 33, 2, 47]

const somatorio = numeros.reduce((somatorio, elemento, _, arrayCompleto) => {
      if(elemento % 2 === 0){
        return elemento + somatorio;
      }else{
        return somatorio;
      }
    
},0)

console.log(somatorio);
console.clear();

const carrinho = [
    {produto: "feijão", preco: 7.98, quantidade: 3},
    {produto: "arroz", preco: 4.98, quantidade: 5},
    {produto: "leite", preco: 6.99, quantidade: 2},
];

const total = carrinho.reduce((somar, elemento) =>{
    return (elemento.preco * elemento.quantidade) + somar;
}, 0 )

console.log(total);

