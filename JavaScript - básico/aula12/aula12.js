let varA = 'A';
const a = varA;
let varB = 'B';
let varC = 'C';

varA = varB;
varB = varC;
varC = a;

console.log(varA, varB, varC);