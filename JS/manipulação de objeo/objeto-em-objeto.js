const cliente2 = {
    nome:'Caio',
    idade:36,
    CPF:'15225486996',
    email:'caio@gmail.com' ,
    fones:['55666224423', '558954211568']
}

cliente2.dependente = {
    nome: 'Lais',
    parentesco: 'pretendente',
    dataNacimento: '15/02/2004'
}

//console.log(cliente2)

cliente2.dependente.nome = 'Lais Caitano'

console.log(cliente2)