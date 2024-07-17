
// interface

interface Pessoa1 {
    nome: string,
    idade: number,
    sexo: string,
    brasileiro?: boolean // interrogação deixa o parametro opcional.
}

const alisson: Pessoa1 = {
    nome: "Alisson",
    idade: 38,
    sexo: "masculino",
    brasileiro: true,
}

// type
type pessoa2 = {
    nome: string,
    idade: number,
    sexo: string,
    brasileiro?: boolean // interrogação deixa o parametro opcional.
}


// Type ou interface? Interface está associada a objetos, enquanto a type é uma declaração genérica. Ambos possuem funções associadas distintas.


const pessoa: pessoa2 = {
    nome: "Alan",
    idade: 43,
    sexo: "Masculino",
    brasileiro: true
}


type Criterio = "maior" | "menor"; // posso criar um tipo ou descrever diretamente nos parametros da função os critérios.


function chooseNumber(num1: number, num2: number, criterio?: Criterio){
    switch(criterio){
        case "maior":
            return num1 > num2 ? num1 : num2;
        case "menor":
            return num1 < num2 ? num1 : num2;
        
        default:
            const aleatorioNumero = Math.random();
    if(aleatorioNumero >= 0.5){
        return num2
    }else{
        return num1
    }
    }

    
    
}

console.log(chooseNumber(10, 20, "greater"));