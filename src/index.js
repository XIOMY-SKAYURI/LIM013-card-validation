import validator from './validator.js';
console.log(validator);
let validarnumber = document.getElementById("validarNumber");
validarnumber.addEventListener("click", validarCard);
if(validarnumber=="")
//Preguntar por el número de la tarjeta
function validarCard() {
  let numberCard = document.getElementById("numberCard").value;
  console.log(numberCard);
  let creditCardNumber = numberCard.split("");
  console.log(creditCardNumber);
}
