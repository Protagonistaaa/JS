//Tipos null e undefined

let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

//Qual é a diferencia

let input3 = null;
let input2;

console.log(input3); // null
console.log(input2); // undefined

//Os operadores de comparação do JavaScript podem ou não diferenciá-los

console.log(null == undefined); // true
console.log(null === undefined); // false
