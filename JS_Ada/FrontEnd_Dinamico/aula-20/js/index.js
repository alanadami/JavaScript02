//Selecionar elementos da página utilizando o document.

document.getElementsByTagName("h1");
document.getElementsByClassName("nome da classe");
document.getElementById("???")


//QuerySelector
const imagem = document.querySelector("body > div > h1"); //comom se faz no CSS
 console.log(imagem);

 const paragrafos = document.querySelector("p");
 console.log(paragrafos);


 const texto02 = document.querySelector("#texto02").textContent;
 console.log(texto02);

 const texto01 = document.querySelector("div.texto01").textContent;
 console.log(texto01);

 texto01.innerHTML = "<strong>Só sei que nada sei</strong>"

 //innerHTML considera as tags do html, já o textContent reconhece tudo como texto.

 const formulario = document.getElementsByName("email");
 console.log(formulario);

 formulario[0].value = "alan@email.com"

 //criando elementos na página Html

const ulLista = document.querySelector("#lista");


 const novaTagLi = document.createElement("li");
 novaTagLi.textContent = "Segundo ítem"
 const novaTagLi3 = document.createElement("li")
 novaTagLi3.textContent = "quarto ítem"


//appendChild() é uma função que cria um elemento dentro do html.
// ulLista.appendChild(novaTagLi);
ulLista.appendChild(novaTagLi3);


console.clear();

const ul_li = document.querySelectorAll("ul > li");

 

ulLista.insertBefore(novaTagLi, ul_li[1])

const removerH2 = document.querySelectorAll(".container > h2")
console.log(removerH2);

console.log(ulLista);
ulLista.removeChild("???")

//removerH2.removeChild("h2")

// Não consegui remover elementos!!!