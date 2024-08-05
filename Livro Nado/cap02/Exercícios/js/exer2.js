
const frm = document.querySelector("form")
const valorTotal = document.querySelector("h2")



frm.addEventListener("submit", (e) => {
    
    const valor15min = Number(frm.inPreco.value);
    const tempoUsuario = Number(frm.inTempo.value);
    
    let tempoUso = Math.floor(tempoUsuario / 15)
    const tempoUso2 = tempoUsuario % 15

    if (tempoUso2 != 0) {
        tempoUso ++        
    }

    valorTotal.innerText = "O valor a ser pago é de R$ " + (tempoUso * valor15min).toFixed(2);
        
    
    

    
    







    
    

    e.preventDefault()
})