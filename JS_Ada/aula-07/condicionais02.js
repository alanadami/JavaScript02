const prompt = require('readline-sync')

const permissioes = prompt.question("Vc é aluno, professor ou administrador?");
//const idade = Number(prompt.question("Qual eh a sua idade?"));

switch (permissioes) {
    case "aluno":
        console.log("Você pode visualizar as aulas");
        break;
    case "professor":
        console.log("Você pode alterar o conteúdo!");
        break;
    case "admin":
        console.log("Vc pode inserir ou remover usuários!");
        break;

    default:
        console.log("Usuário não identificado no sistema.");
        break;
}