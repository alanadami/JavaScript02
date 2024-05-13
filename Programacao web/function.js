function verificacao(){
    let nome = document.getElementById("inome").valeu;
    
    if  (nome=="" || nome== null) {
        let p = document.getElementById("informacao");
        p.innerHTML = "O campo não pode ser vazio!"; 
        p.style.color = "red"
        
    } else {

        let p = document.getElementById("informacao");
        p.innerHTML = "Parabéns, o campo foi preenchido!"; 
        p.style.color = "green"
        
        
        
        //let p = document.getElementById("informacao");
        //p.innerHTML = "Muito obrigado pela sua resposta!"
        //p.style.color = "white"
        //p.fontSize = "20px"
    }
}

