
const frm = document.querySelector("form")
const horaFranca = document.querySelector("h4")


frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const horaBrasil = Number(frm.inHora.value);
    let horaFranca2 = horaBrasil + 5

    if (horaFranca2 > 24){
        horaFranca2 = horaFranca2 -24
    }
   
   
    // let fuso = Number(horaBrasil + 5);
    
    // if (fuso > 19){
    //     fuso = fuso - 24
    // }
    
    
    
    
    horaFranca.innerText = ("Hora na França: "+horaFranca2+" horas");

})