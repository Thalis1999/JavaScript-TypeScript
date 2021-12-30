function saudacao(nome) {
    return `Bom dia ${nome}`;
}
const variavel = saudacao('Luiz');
console.log(variavel)

function soma(x = 1, y = 1) { //Se o método nao conter parametros, os da funcao respectiva serã substituidos.
    const resultado = x + y;
    return resultado;
}
const resultado = soma(4, 2);

const raiz = (n) => {  //arrow function : const raiz = n => n ** 0.5;
    return n ** 0.5;
};
console.log(raiz(9));

