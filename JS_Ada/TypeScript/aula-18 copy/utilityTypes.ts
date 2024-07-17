//Os mais usados, por indicação do professor:

//Utility Types - servem para criar novos tipos a partir de outros tipos. 


//Partial
// Todos os parâmetros de um tipo indicado, passam a ser opcionais.

type Person = {
    nome: string,
    idade: number,
    sexo: string
}

type PersonPartial = Partial<Person>;

//Required
// Todos os parâmetros de um type passam a ser obrigatórios, incluindo os opcionais.

type PersonRequired = Required<Person>;

//Pick
// Com o Pick vc escolhe os atributos que vc quiser.
type PersonPick = Pick<Person, "nome" | "sexo">;

//Omit - Permite omitir da interface selecionada alguns parâmetros.

//Exclud

//Record

type Pessoas = Record<string, Person>;

const pessoas: Pessoas = {
    "001.030.040-02": {
    nome: "Alex",
    idade: 45,
    sexo: "masculino",
},
    "001.002.003-02": {
    nome: "Fulano",
    idade: 65,
    sexo: "feminino"
    }
}

