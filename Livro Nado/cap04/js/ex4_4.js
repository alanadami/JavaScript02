const frm = document.querySelector("form")

const resutadoRaiz = document.querySelector("h4")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const numero = frm.inNumero.value;

    const raiz = Math.sqrt(numero);
    let numeral = String(raiz);

    if (numeral.length > 2) {
        resutadoRaiz.innerText = "Não há raiz exata para "+numero;    
    }else {
        resutadoRaiz.innerText = "Raiz: "+raiz
    }
        
   
})