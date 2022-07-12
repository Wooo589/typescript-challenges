export {}

enum Profissao {
    Atriz,
    Padeiro
}

type Pessoa = {
    nome: string,
    idade: number,
    profissao: Profissao
}

const pessoa1: Pessoa = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Atriz
};
const pessoa3: Pessoa = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.Padeiro
};

const pessoa4: Pessoa = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.Atriz
};

const pessoa6: Pessoa = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }
