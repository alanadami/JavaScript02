

const frm = document.querySelector("form");
const remedioNome = document.querySelector("h2");
const valorPromocao = document.querySelector("h3")


frm.addEventListener("submit", (e) => {
    const nomeRemedio = frm.inNome.value
    const valorMedicamento = Number(frm.inPreco.value);
    const valorDescontado = Math.floor(valorMedicamento);


    remedioNome.innerText = "Promoção de " + nomeRemedio;
    valorPromocao.innerText = "Leve dois por apenas R$ " + (valorDescontado * 2).toFixed(2);

    e.preventDefault();
})


// <!-- Uma farmácia está com uma promoção – Na compra de duas unidades de um
// mesmo medicamento, o cliente recebe como desconto os centavos do
// valor total. Elaborar um programa que leia descrição e preço de um
// medicamento. Informe o valor do produto na promoção. A Figura 2.9
// apresenta a tela com um exemplo de dados de entrada e saída do
// programa. -->