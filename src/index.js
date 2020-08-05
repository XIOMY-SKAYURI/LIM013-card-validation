import validator from './validator.js';
//Seleccionar el fomrulario del documento por medio del valor del atributo id
let form = document.getElementById("formulario")
//Seleccionar la tarjeta -visa- por medio del valor del atributo id
let imgTarjetaVisa = document.getElementById("visa")
//Seleccionar la tarjeta - mastercard- por medio del valor del atributo id
let imgTarjetaMastercard = document.getElementById("mastercard")
//Seleccionar el boton de validación del documento por medio del valor del atributo id
let validarnumber = document.getElementById("validarNumber");
//Generar un evento para mostar monbres
  validarnumber.addEventListener("click", () => {
//Seleccionar el nombre del usuario por medio del valor del atributo id
let nombres = document.getElementById("nombrespaciente").value
//Declaro una variable que contendrá msm
let nombresAp = 'HOLA ' + nombres + '!🙋‍♀️';
//Colocar el mensaje que se muestra al Usuario llamando su nombre
  document.getElementById("mostrarnombre").innerHTML= nombresAp
  return nombresAp
  })
//Generar un evento para la validación
  validarnumber.addEventListener("click", () => {
//Cancelar el evento pero sin dejar de ejecutar la función
  event.preventDefault();
//Seleccionar el número ingresado por medio del valor del atributo id
let numberCard = document.getElementById("numberCard").value;
//Importar el objeto isValid
let result = validator.isValid(numberCard);
  console.log(result);
//Importar el objeto maskify
let mascara = validator.maskify(numberCard);
//Colocar el mensaje que se debe mostrar al usuario del HTML contenido en <p> por medio del valor del id
  document.getElementById("mascara").innerHTML= ' *SU '+' TARJETA '+  mascara   +" ES: ";
//Declaro una nueva variable que será igual al mensaje mostrado al usuario sobre la declaración de la variable
let texto;
//Creo una condicional donde se mostrará el mensaje si es true o false
if (result==true){
    texto = "<span style = 'color:green;'> VÁLIDA 😉</span>";
    document.getElementById("valiNum").innerHTML = texto;
    return false;
    }else {
    texto = "<span style = 'color:red;'>INVÁLIDA 😖</span>";
    document.getElementById("valiNum").innerHTML = texto;
    return false;
    }
  })
//Seleccionar el mes de expiración por medio del valor del atributo id
let mesIngresado = document.getElementById("mesexpiracion")
//Seleccionar el año de expiración por medio del valor del atributo id
let añoIngresado = document.getElementById("añoexpiracion")
//Seleccionar el cvv  por medio del valor del atributo id
let cvvIngresado = document.getElementById("cvv")
