const notas = [10, 6.5, 8, 7.5]

let somaDaNota = 0

for(let i = 0; i < notas.length; i++){
    somaDaNota += notas[i]
}

let media = somaDaNota/notas.length

console.log(media)