let validarnumber = document.getElementById("validarNumber");
validarnumber.addEventListener("click", validarCard);
//Preguntar por el número de la tarjeta
function validarCard() {
  let numberCard = document.getElementById("numberCard").value;
  console.log(numberCard)
  let arraynumber = numberCard.split("");
  console.log(arraynumber);
  let reversedcard = arraynumber.reverse();
  console.log(reversedcard);
}
