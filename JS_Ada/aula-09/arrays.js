

const numero = [2, 4, 5, 43, 44, 56]

for (let i = 0; i <=9; i+=2){
    console.log(i);
}




for (const indice in numero) {
    console.log(indice, typeof(indice));
    console.log(numero[0]);
}


for (const elemento of numero) {
    console.log(elemento);
}

// percorre o array, mostra os elementos e a posição.
for(let i = 0; i<numero.length; i++){
    console.log(i, numero[i]);
}


console.log(numero.lastIndexOf(44)); // procura o último número do array.
console.log(numero.indexOf(56)); // procura o primeiro elemento indicado nos parenteses;
numero.includes(2);

//shift -> remove elementos do ínicio
//pop - remove elemento no final
//unshift(-1) -> adiciona no inicío, com -1 pois é antes do 0

//Usando Push para adicionar ao final
numero.push(69)
console.log(numero);


//Usando Slice
//console.log(numero.length);
// console.log(numero);

// console.log(numero.slice(3,5))
