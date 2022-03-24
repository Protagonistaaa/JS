const cliente2 = {
    nome:'Caio',
    idade:36,
    CPF:'15225486996',
    email:'caio@gmail.com' 
}

const chaves = ['nome', 'idade', 'CPF', 'email']

// console.log(cliente2[chaves[0]])

chaves.forEach(info=>console.log(cliente2[info]))