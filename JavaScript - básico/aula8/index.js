/*
Luiz Otavio miranda tem 30 anos, nasceu em 1989, pesa 84 kg tem 1.8 de altura e seu IMC é de 25.923923499235 
*/
const nome = 'Luiz Otavio'
const sobrenome = 'Miranda'
const idade = 30
const peso = 84
const altura = 1.8
let imc = peso / (altura * altura)
let anoNascimento = 1989
console.log(`
  ${nome}
  'tem',
  ${idade}
  'anos, nasceu em',
  anoNascimento,
  ', pesa',
  peso,
  'kg, tem altura e seu IMC é de',
  imc`)
