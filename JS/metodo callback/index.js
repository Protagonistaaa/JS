const arrayNums = [1, 2, 3, 4]

function mutiplicarPorDez(num){
    return num * 10
}

const arraySomada = arrayNums.map(mutiplicarPorDez)

console.log(arraySomada)