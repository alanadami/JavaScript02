var suma = 9 + 1;


console.log("suma")





/*

function obterDiaDaSemana() {
    const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const dataAtual = new Date();
    const diaDaSemana = dataAtual.getDay();
    return diasDaSemana[diaDaSemana];
  }
  
  console.log(obterDiaDaSemana()); // Irá imprimir o dia da semana atual
  



// forma de arredondar números
function parImpar(){
    let numeroAleatorio = Math.random()
    
    let multiplicado = numeroAleatorio * 10

    let arredondado = Math.floor(multiplicado);

    alert(arredondado)
}

Math.random()

Math.floor()




//função para chamar os dias da semana, mas não deu certo, pois aparece o dia do mês.

const dia = new Date().getDay()


switch (dia){
    case 0:
        console.log("Hoje é domindo!")
        break

    case 1:
        console.log("Bom começo de semana!")
        break
    
    case 2:
        console.log("Hoje é terça!")
        break
    
    case 3:
        console.log("Chemaos ao meio da semana!")
        break

    case 4:
        console.log("Quintou!")
        break

    case 5:
        console.log("Até que enfim!")
}


/*
// Uso do for para montar uma tabuada (Não entendi)
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      const resultado = i * j 
      console.log(i + ' x ' + j + ' = ' + resultado)
    }
  }



// Uso do For

for (let i= 0; i< 10; i++) {
    const esPar = i%2 ===0
    if (esPar) {
        continue
    }
    console.log(i)

    if (i ===7){
        break
    }
}


    //valor inicial     se true, então contagem --
for (let contagem = 10; contagem >=0; contagem --){
    if (contagem === 0){
        alert("Decolar!!")
    } else {
        alert("Ainda falta " + contagem + " Segundos!")
    }
}


for (let numero = 1; numero <=10; numero ++) {
    alert(numero)
}



// colocar um string em maiúsculo
function parImpar(){
    let valor = document.getElementById("itexto").value;
    let palavra = valor
    
    alert(palavra.toUpperCase());     
}



var numeros = [1,2,3,4,5,6,7,8,9]
var index = numeros.indexOf(1);

console.log(index)



const lista =["homem", "branco", "gremista", "olhos esverdiados"]

lista.push("43 anos")
lista.unshift("Professor")
lista.splice(4, 0, "cantor")

delete lista[3]

alert(lista)
console.log(lista)




alert("Seja bem vindo!")


function parImpar(){
    let numero = document.getElementById("inumero").value;
    let total = numero%2;
    if (total == 0){
        document.getElementById("texto").innerHTML = "Esse número é par!"

    }else{
        document.getElementById("texto").innerHTML = "Esse número é ímpar!"
    }

    console.log(total)
}
*/


