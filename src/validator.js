const validator = {
// OBJETO ISVALID
  isValid: function (numberCard){
    //Convierto el string en array
    let creditCardNumber = numberCard.split("");
    //Invierto el array
    let numberReverse = creditCardNumber.reverse();
   //Declaro la variable suma
  let suma=0;
    //Creo el bucle donse se va a recorrer el array
  for(let i=0; i<numberReverse.length;i++){
    //Se declara una variable y se parsea un argumento de tipo cadena devolviendo un entero de la base }
    let  orden=parseInt(numberReverse[i]);
    //Obtengo número de posición par
      if(i % 2 != 0){
    //Si el número está en posición par lo multiplico por 2
      orden = orden * 2;
    //Si el resultado de la multiplicación muestra un número con 2 dígitos
        if (orden > 9){
    //Se tiene que sacar el residuo de ese número y sumarle + 1 (es como sumar lo 2 dígitos)
       orden =  1 + (orden%10);
         }
      }
    //Sumo todos los números y los nuevos
           suma += orden;
   }
     if (suma%10==0){
       return true;
     } else {
       return false;
     }
  },
//OBJETO MASKIFY
maskify: function(numberCard){
  //Se creó un variable resultado
  let resultado = '';
  //Recorrer el string
  for (let i=0; i< numberCard.length;i++){
      //  console.log(resultado);
  //Si la cadena recorrida es mayor o ingual a la longitud de la cadena menos 4
    if (i>=numberCard.length-4){
  //Entonces se debe arrojar el string recorrido
    resultado += numberCard[i];
  //En caso contrario reemplazar por #
  }else{
      resultado += "#"
  }
  }
//  console.log(resultado);
return resultado;
}
};

export default validator;
