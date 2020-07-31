import validator from './validator.js';
//Preguntar por el número de la tarjeta
let numberCardt = document.getElementById("numberCard").value;
console.log(numberCardt);

//Vincular al botón
let validarnumber = document.getElementById("validarNumber");
validarnumber.addEventListener("click", validator);



 //resultados de validación
/* let result = validator.isValid;

if (result==true){
  alert("LA TARJETA ES VÁLIDAD");
}else{
  alert("LA TARJETA ES INVÁLIDAD");
}*/
