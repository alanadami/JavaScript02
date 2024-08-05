const frm = document.querySelector("form");
const resultadoFinal = document.querySelector("h4");


frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const nome = frm.inNome.value;
    const sexo = frm.inMasculino.checked;
    const altura = Number((frm.inAltura.value)**2);

    let resultado;  

    
    
    
    if ( sexo == true) {
        resultado = 22 * altura;
    } else {
        resultado = 21 * altura;
        
    }
    resultadoFinal.innerText = nome+": Seu peso ideal é de: "+ resultado.toFixed(2);
 

})



// Em um deles, há a indicação de que o peso ideal de um adulto
// pode ser calculado a partir das fórmulas: 22 * altura2 (para homens); e 21
// * altura2 (para mulheres).