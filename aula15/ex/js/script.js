const numero = Number(prompt('Digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada: ${(numero ** 0.5)}.<br />
                    ${numero} é inteiro: ${Number.isInteger(numero)}<br />
                    É NaN: ${Number.isNaN(numero)}.<br />
                    Arredodando para baixo: ${Math.ceil(numero)}.<br />
                    Arredondando para cima: ${Math.floor(numero)}.<br />
                    Com duas casas decimais: ${numero.toFixed(2)}.</p>`
