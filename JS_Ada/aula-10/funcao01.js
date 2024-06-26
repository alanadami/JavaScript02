function saudacao(nomeDoEstudante, curso = "Front-End"){
    return "Olá " + nomeDoEstudante + "! Bem vindo ao curso de " + curso + "!";
}
// É sempre interessante usar o return, pois esse resultado pode ser armazendo numa variável.

const mensagem = saudacao("Alan", "Filosofia");

console.log(mensagem);  