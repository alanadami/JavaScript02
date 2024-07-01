const fs = require('fs')

// 1º método. Callback

//Exemplo 1

// Função assíncrona - Ler arquivo leva um tempo.
// fs.readFile("JS_Ada/aula-13/arquivo.txt", (erro, conteudoDoArquivo) => {
//     if (erro){
//         console.log("Não foi possível carregar o arquivo");
//     }else {
//         console.log(String(conteudoDoArquivo));
//     }
// })


// Exemplo 2

//setTimeout (função que cria um timer)
// Com setTimeout eu posso definir uma função para ser realizada posteriormente ao carregamento do código, onde eu posso definir o tempo que demorará para sua execução.

// setTimeout(() => {
//     console.log("Isso vai ser executado em dois segundos");
// }, 2 * 1000)


//2º método = Promises (Estados: Pending, Fullfilled, Rejected)

// function lerArquivo() {
//     return new Promise((resolve, reject) =>{
//     fs.readFile("JS_Ada/aula-13/arquivo.txt", (erro, conteudoDoArquivo) => {
//         if (erro){
//             reject("Não foi possível carregar o arquivo");
//         }else {
//             resolve(String(conteudoDoArquivo));
//         }
//     })

// });
// }

//Foco a partir daqui:

// lerArquivo()
//        .then((retornoDoResolveDaPromise) => {
//     console.log("Deu certo:", retornoDoResolveDaPromise);
// }).catch((erro) => {
//     console.log("Deu ruim!", erro);
// }).finally(() => {
//     console.log("Dando certo, ou errado, isso aqui vai aparecer.");
// })


// 3º métodos = async/await

async function leituraDeDados(){
console.log("isso acontece antes da promessa");

await lerAquivo();
// // lerArquivo().then().catch().finally()

console.log("Isso aconteceria depois, se não fosse o await");
}



