const cliente2 = {
    nome: 'Caio',
    idade: 36,
    CPF: '15225486996',
    email: 'caio@gmail.com',
    fones: [ '55666224423', '558954211568' ],
    dependente: [{
      nome: 'Lais Caitano',
      parentesco: 'pretendente',
      dataNacimento: '15/02/2008'
    }] 
  }

  cliente2.dependente.push({
      nome: 'Cletinho',
      parentesco: 'filho',
    dataNacimento: '02/12/2010'
  })

  //console.log(cliente2)

  const filhoMaisNovo = cliente2.dependente.filter(dependente => dependente.dataNacimento ==='02/12/2010')

  console.log(filhoMaisNovo)

