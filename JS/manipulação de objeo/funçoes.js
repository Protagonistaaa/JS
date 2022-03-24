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
    },
    {
        nome: 'Cletinho',
        parentesco: 'filho',
        dataNacimento: '02/12/2010'
      }
    ], 
      saldo:100,
      
      depositar:function(valor)
      {
          this.saldo += valor
        }
    }
        
console.log(cliente2.saldo)
cliente2.depositar(30)
console.log(cliente2.saldo)