
function mensagem(){
        alert("Você ganhou a primeira mensagem");
}

function qualNome(){
    let nome = prompt("Qual o seu nome?")
    alert("Muito prazer "+nome)
}

function noDom(){
    let nome = prompt("Qual o seu nome?")
    let lugarTexto = document.getElementById("itexto").innerText = "Bem vindo ao jogo "+nome+", lhe desejo boa sorte."    
}

