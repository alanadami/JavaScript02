


let dia = document.write(Date());

alert(dia)

function verificaCor(){

    let cor = document.getElementById("cor").value;

        switch (cor) {

            case "azul":
                document.body.style.backgroundColor = "blue";
                break;

                case "vermelho":
                document.body.style.backgroundColor = "red";          
                break;

                case "amarelo":
                document.body.style.backgroundColor = "yellow"; 
                break;
                
                default:
                    document.getElementById("texto").innerHTML = "Escolha uma cor válida!"


        }




}







/*
function verificaCor(){
    let cor = document.getElementById("cor").value;

    switch (cor) {
        case "azul":
            document.body.style.backgroundColor = "blue";
            break;
        
        case "amarelo":
            document.body.style.backgroundColor = "yellow";
            break;

        case "vermelho":
            document.body.style.backgroundColor = "red";
            break:

        default:
            document.getElementById(informacao).innerHTML = ("Você não escolheu uma cor válida!")
        
    }
*/