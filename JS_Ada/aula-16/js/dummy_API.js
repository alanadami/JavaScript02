
// É preciso logar na API, se necessário, e gerar o ID código para ser informado no headers

async function getUsers() {
    const resposta = await fetch("link da API", {
        headers: {
            //formato do valor          // código gerado pela API
           'ver documentacao do api': "inserir o código para acessar a API",
        }
    });
    const users = await resposta.json();

    console.log(users);
}

getUsers();

async function creatUser() {
    const userData = {
        // ver requisitos da API com os campos necessários para criação de usuário:
        firstName: "Alan",
        lastName: "Alves",
        email: "aaa@gmail.com"
    };

    try {
        
    await fetch("Link da API para criar usuário", {
        // POST é para mandar informação e não requisitar, GET.
        // como é POST, não preciso esperar uma resposta, pois se der certo, é porque deu certo! kkk
        method: "POST",
            headers: {
                //formato do valor          // código gerado pela API
               'ver documentacao do api': "inserir o código para acessar a API",
               "Content-Type": "aplication/json"
            },
        
        // É preciso transformar o objeto do JS em String, o objeto userData, foi transformado em String, com o Stringfy.
        body: JSON.stringify(userData),
        
    });
    }catch{
        console.log("Não foi possível criar o usuário!");
    }

}

    creatUser();