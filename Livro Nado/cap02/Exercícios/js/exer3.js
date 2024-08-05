const frm = document.querySelector("form");

const promocao = document.querySelector("h2")
const valor3Produto = document.querySelector("h3")


frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const nomeProduto = frm.inProduto.value;
    const precoProduto = Number(frm.inPreco.value);

    const desconto = precoProduto * 2 + (precoProduto / 2)

    promocao.innerText = nomeProduto +" - Promoção: Leve 3 und. por R$ " + desconto.toFixed(2)
    valor3Produto.innerText = "O terceiro produto sai por R$ " + (precoProduto / 2).toFixed(2);

})




// <!-- Um supermercado está com uma promoção – Para aumentar suas vendas no
// setor de higiene, cada etiqueta de produto deve exibir uma mensagem
// anunciando 50% de desconto (para um item) na compra de três
// unidades do produto. Elaborar um programa que leia descrição e
// preço de um produto. Após, apresente as mensagens indicando a
// promoção -->