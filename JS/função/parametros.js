// parámetros de função

function soma(numero1, numero2) {
    return numero1 + numero2 
}

console.log(soma(500, 600))
console.log(soma(50, 20))
console.log(soma(999, 400))

// parametros x argumento

// ordem dos parametros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome}, minha idade é ${idade}`
}

console.log(nomeIdade("caio", 16))

function multiplica(numero1, numero2){
    return numero1 * numero2
}

console.log(multiplica(soma(4, 5), soma(3,3)))