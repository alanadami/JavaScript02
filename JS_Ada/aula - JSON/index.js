const fs = require('fs');

//Lendo um arquivo Json

fs.readFile('.eslint.json', (erro, dados) => {
    if (erro) {
        console.log("Erro: ", erro);
    }else{
        // dados: é um buffer com os arquivos Json
        const dadosDoObjetoJson = JSON.parse(dados);
       
        console.log(dadosDoObjetoJson.rules);
    }

}) 

console.clear();


const pessoa = {
    nome: "Alan Alves",
    atividade: "professor"
}


// convertendo objeto para arquivo JSON
console.log(pessoa);

console.log(JSON.stringify(pessoa));