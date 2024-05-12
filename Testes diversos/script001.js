

function chamaFoto(){
    let foto = document.getElementById("minhafoto");
    foto.style.display = "block"
}



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

function corBody(){
    let body = document.getElementById("corpo");
    body.style.backgroundColor = "grey"
}

function duploClick(){
    let div = document.getElementById("cordiv")
    div.style.border= "4px solid blue"
    div.style.width= "80%"
   
}
