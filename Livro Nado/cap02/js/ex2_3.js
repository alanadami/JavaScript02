const frm = document.querySelector("form");

const resp1Veiculo = document.getElementById("outResp1");
const resp2Entrada = document.getElementById("outResp2");
const resp3Parcela = document.getElementById("outResp3");


frm.addEventListener("submit", (e)=>{
    const modelo = frm.inVeiculo.value;
    const preco = frm.inPreco.value;
    const metade = preco /2;
    const metade12x = metade / 12;

    resp1Veiculo.innerText = modelo;
    resp2Entrada.innerText = "O valor da entrada de 50% é de R$ "+ metade;
    resp3Parcela.innerText = "O valor restante, em 12x é de R$ "+ metade12x.toFixed(2);

    e.preventDefault();

})