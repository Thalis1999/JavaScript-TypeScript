/*
Primitivos (imutáveis) - string, number, boolean, undefined, null, (bigint e symbol)
Valores copiados

Referencia ( mutável) - array, objeto, funcao - passados por referencia
*/
const a = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
}; 
const b = a;

b.nome = 'Joao';
console.log(a);
console.log(b);