const alunos = ['joão', 'caio' , 'vini', 'Lai']

const mediaDosAlunos = [10, 7, 9, 6]

let listasNotasAlunos = [alunos, mediaDosAlunos]

const exibeNomeNotas = (nomeDoAluno) => {
    if(listasNotasAlunos[0].includes(nomeDoAluno)){
        indice = listasNotasAlunos[0].indexOf(nomeDoAluno)
        return listasNotasAlunos[0][indice] + ', sua media é '
         + listasNotasAlunos[1][indice]
    }else{
        return "aluno n Está cadastrado"
    }
}

console.log(exibeNomeNotas('caio'))