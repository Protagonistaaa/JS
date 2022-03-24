const salaJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaSala(notasDaSala) {
    const somaDaNotas = notasDaSala.reduce((acum, atual) => atual + acum,0)
    return somaDaNotas/notasDaSala.length
}

console.log('Media da sala de JavaScript: ' + mediaSala(salaJs))
console.log('Media da sala de Java: ' + mediaSala(salaJava))
console.log('Media da sala de Python: ' +  mediaSala(salaPython))

const nota = [10, 6.5, 8, 7.5]

const media = nota.reduce((acum, atual) => atual + acum, 0) / nota.length

console.log(media)