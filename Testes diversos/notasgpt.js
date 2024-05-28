
function media(){
    let nota1 = parseInt(document.getElementById("nota1").innerHTML);
    let nota2 = parseInt (document.getElementById("nota2").innerHTML);
    let nota3 = parseInt (document.getElementById("nota3").innerHTML);
    let media1 = (nota1+nota2+nota3)
    let media2 = Math.floor(media1 / 3)
    
    document.getElementById("media").innerHTML = media2;

    if (media2 >= 7){
        document.getElementById("status").innerHTML = "APROVADO"
        document.getElementById("status").style.backgroundColor= "blue"
        document.getElementById("status").style.color= "white"
    } else{
        document.getElementById("status").innerHTML = "REC"
        document.getElementById("status").style.backgroundColor= "red"
        document.getElementById("status").style.color= "white"
    }

    //nota da recuperação
    let notarec = parseInt(document.getElementById("notarec").innerHTML);
    
    if (notarec >= 7 || " " ){
        document.getElementById("status").innerHTML = "APROVADO"
        document.getElementById("status").style.backgroundColor= "blue"
        document.getElementById("status").style.color= "white"
    } else{
        document.getElementById("status").innerHTML = "REC"
        document.getElementById("status").style.backgroundColor= "red"
        document.getElementById("status").style.color= "white"
    }

    //nota do exame final
    let notaexame = parseInt(document.getElementById("notaexame").innerHTML);
    let notafinal = notaexame+notarec;
    let notafinal2 = notafinal/2
        
    if (notafinal2 >=5 ||" " ){
        document.getElementById("status").innerHTML = "APROVADO"
        document.getElementById("status").style.backgroundColor= "blue"
        document.getElementById("status").style.color= "white"
    } else{
        document.getElementById("status").innerHTML = "REC"
        document.getElementById("status").style.backgroundColor= "red"
        document.getElementById("status").style.color= "white"
}
}


function outroAluno(){
    
}






