//If pode ser usado sozinho
//Sempre que utilizo a palavra else, preciso de um if antes

const hora = 19;

if (hora >= 0 && hora <= 11) {
  console.log("Bom dia")
} else if (hora >= 12 && hora <= 17) {
  console.log("Boa tarde")
} else {
  console.log("Boa noite")
}