const frm = document.querySelector("form");

const h3Ranking = document.querySelector("h3")

const rankingNotebooks = []


frm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const marca = frm.inMarca.value;
    const processador = Number(frm.inProcessador.value);
    const geracao = Number(frm.inGeracao.value);
    const ram = Number(frm.inMemoria.value);
    const ssd = Number(frm.inSSD.value);
    const tela = Number(frm.inTela.value);
    const valor = Number(frm.inValor.value);

    const notebook = {
        marca: marca,
        processador: processador,
        geracao: geracao,
        ram: ram,
        ssd: ssd,
        tela: tela,
        valor: valor
    };

    rankingNotebooks.push(notebook);
    console.log(rankingNotebooks);


    



    // console.log(marca, processador, geracao, ram, ssd, tela, valor);
    

})