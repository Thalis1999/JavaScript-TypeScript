/*
&& -> false && true -> false
|| -> true || false -> true
*/

function falaOi() {
  return 'Oi'
}
const vaiExecutar = false

console.log(vaiExecutar && falaOi())

const corUsuario = null
const corPadrao = corUsuario || 'preto' //preto escolhido
