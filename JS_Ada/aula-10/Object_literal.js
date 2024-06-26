const pessoa = {
    nome: "Alan", 
    idade: "43", 
    sexo: "Masculino", 
    profissao: "professor", 
    hobby: ["musico, dançarino, atleta"],
    saudacao: function(){
        console.log("Olá, meu nome é " + this.nome);
    }
    
}
console.clear();
const {nome, idade, sexo} = pessoa;
const coisas = pessoa.hobby;

console.log(nome, idade);
console.log(coisas);

