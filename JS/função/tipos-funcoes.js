// função com string

function cumprimenta(){
    return 'ola gente!'
}

function cumprimentarPessoa(nomePessoa) {
    console.log(`${cumprimenta()} Meu nome é ${nomePessoa}`)
}
cumprimentarPessoa("caio")

// função com Number

function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
}

console.log(operacaoMatematica(15, 30, 45))