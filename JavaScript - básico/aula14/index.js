let num1 = 0.7; // Number
let num2 = 0.1; // Number

num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.7
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

num1 = Number(num1.toFixed(2)); // para imprecisao de decimais

console.log(num1);

// console.log(num1.toString() + num2);
// num1 = num1.toString(); //Converte para binário
// console.log(num1.toFixed(2)); //Conta casas decimais
// console.log(Number.isInteger(num1)); //Verifica se é inteiro
// console.log(Number.IsNaN(temp)); //verifica se está incorreto a expressao
// let temp = num1 + '5';
