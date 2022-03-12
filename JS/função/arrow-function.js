function apresentar(nome) {
    return `olá meu nome é ${nome}`
}

console.log(apresentar("caio"))

// Arrow Function

const apresentarArrow = nome => `olá meu nome é ${nome}`
const soma = (num1, num2) => num1 + num2;

// Arrow Function com + de 1 linha de instrução

const numerosPequenos = (num1 + num2) => {
    if (num3 || num4 > 10){
        return "somente numero de 1 a 9"
    }else {
        return num1 + num2; 
    }
}

// Hoisting; arrow function se comporta como expressão

// operador maior ou igual que é >=