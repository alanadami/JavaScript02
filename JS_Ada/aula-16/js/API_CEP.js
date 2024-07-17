
//then / catch

// fetch("https://viacep.com.br/ws/90230241/json/").then((response) => {
//     response.json().then((dados) => console.log(dados));
// }).catch((erro) =>{
//     console.log(erro);
// })

//async / await

// async function obterCep(){
//     const resposta = await fetch("https://viacep.com.br/ws/90230241/json/")
//     const dados = await resposta.json();

//     console.log(dados);

// }
// obterCep();


// como lidar com o erro, forma mais completa:

// async function obterCep(){
//     try{
//     const resposta = await fetch("https://viacep.com.br/ws/90230241v/json/")
//     const dados = await resposta.json();

//     console.log(dados);
//     }catch(erro){
//         console.log("Algo deu errado!", erro);
//     }finally{
//         console.log("Fim da requisição");
//     }
// }
//obterCep();

async function acharLivro(){
    try{
        const busca = await fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings");
        const resultado = await busca.json();

        console.log(resultado);
    }catch(erro){
        console.log("Algo deu errado!", erro);
    }
}

acharLivro();
