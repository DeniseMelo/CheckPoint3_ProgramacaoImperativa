class alunos {
    constructor(nome, qtFaltas, notas) {
        this.nome = nome
        this.qtFaltas = qtFaltas
        this.notas = notas
        this.calcularMedia = function(){
            let soma = 0
            for (let i = 0; i < this.notas.length; i++) {
                soma = soma + this.notas[i]
            }
            const media = soma / this.notas.length
            return media
        }
        this.faltas = function() {
            this.qtFaltas ++
            return this.qtFaltas
        }
    }
}

let aluno0 = new alunos('Denise Capitaneo', 2, [10, 7, 8, 3]);
let aluno1 = new alunos('Denise Melo', 1, [8, 10, 10, 9]);
let aluno2 = new alunos('Gustavo Morais', 1, [0, 5, 0, 9]);
let aluno3 = new alunos('Tiago Santana', 0, [9, 6, 10, 9]);
let aluno4 = new alunos('Guilherme Moreira', 4, [7, 7, 9, 8]);

console.log(aluno2.calcularMedia())
console.log(aluno2.faltas())
console.log( 
             `O seguinte aluno : ${aluno1.nome} passou com louvor, com apenas ${aluno1.faltas()} faltas, 
              e recebeu as seguintes notas:${aluno1.notas}. Sua média final é de: ${aluno1.calcularMedia()}`)

let curso = {
    nomeCurso: 'Digitalhouse',
    notaAprovacao: 7,
    maximoDeFaltas: 4,
    listaAlunos: [aluno0, aluno1, aluno2, aluno3, aluno4],

    cadastrarAluno(aluno) {
        this.listaAlunos.push(aluno);
    },
    aprovado(nomeAluno) {
        
        if (nomeAluno > this.listaAlunos.length - 1) {
            return 'Aluno não cadastrado'
        }

        let aluno = this.listaAlunos[nomeAluno];
        
        if (aluno.qtFaltas < this.maximoDeFaltas && aluno.calcularMedia() >= this.notaAprovacao 
        || aluno.calcularMedia() >= this.notaAprovacao * 1.1){
            return true
        } else {
            return false
        }
    },
    alunosAprovados() {
        let aprovados = [];
        for (let i = 0; i < this.listaAlunos.length; i++) {
            aprovados.push(this.aprovado(i));
        }
        return aprovados;
    },
};


let aluno5 = new alunos('Joao Matheus', 2, [6, 8, 6, 5]);
let aluno6 = new alunos('Kelvin', 2, [6, 8, 6, 5]);
curso.cadastrarAluno(aluno5);

console.log(curso.listaAlunos[1].nome);
console.log(curso.aprovado(1));

console.log(curso.listaAlunos[4].nome);
 console.log(curso.aprovado(4));

console.log(curso.listaAlunos[5].nome);
console.log(curso.aprovado(7));

console.log(curso.alunosAprovados());