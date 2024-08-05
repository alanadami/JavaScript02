

const frm = document.querySelector("Form")
const answear = document.querySelector("h3")

frm.addEventListener("submit", (e)=> {
    const nome = frm.inNome.value;
    answear.innerText = "Olá " + nome+"!"
    e.preventDefault()

    
})