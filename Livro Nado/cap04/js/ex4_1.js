const frm = document.querySelector("form")

const mediaNota = document.querySelector("h3");
let resultado = document.querySelector("h2");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const nomeAluno = frm.inAluno.value;

    const nota1 = Number(frm.inNota1.value);
    const nota2 = Number(frm.inNota2.value);

    const media = (nota1 + nota2) / 2;
    

    let resultadoFinal;
    if (media >= 7) {
        resultadoFinal = "Parabéns " +nomeAluno+", você foi aprovado!"
        resultado.style.backgroundColor = "blue";       
    } else {
        resultadoFinal = "Que pena " +nomeAluno+", você foi reprovado!"
        resultado.style.backgroundColor = "red";  
    }

    mediaNota.innerText = "Sua média foi de "+media;
    resultado.innerText = resultadoFinal
    
    
})