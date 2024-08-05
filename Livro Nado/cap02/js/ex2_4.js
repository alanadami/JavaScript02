// c) Elaborar um programa para um restaurante que leia o preço por kg e o
// consumo (em gramas) de um cliente. Exiba o valor a ser pago, conforme
// ilustra a Figura 2.8.


const frm = document.querySelector("form");
const resp1 = document.querySelector("h3")


frm.addEventListener("submit", (e) => {
    const precoKilo = Number(frm.inQuilo.value);
    const consumo = Number(frm.inConsumo.value);

    const precoGrama = precoKilo / 1000;
    const precoConsumo = precoGrama * consumo;

    resp1.innerText = "O valor a ser pago é de R$ "+precoConsumo.toFixed(2);
    
    
    e.preventDefault()
})