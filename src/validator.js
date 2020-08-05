let validator = {
// OBJETO ISVALID
  isValid: function (numberCard){
    //Convierto el string en array
    let creditCardNumber = numberCard.split("");
    let suma = 0;
    //Creo el bucle
    for(let i=0; i<creditCardNumber.length;i++){
    //Convierto el array a números enteros
      let orden=parseInt(creditCardNumber[i]);
      let orden1=0;
      let orden2=0;
    //Si el número o dígito tiene como residuo 0 entonces lo multiplico por 2
      if(i%2==0){
          orden1=orden*2;
      //Si el resultado es mayor a 9  entonces sumo el residuo mas 1
        if (orden>9){
           orden1=1+(orden%10);
        //En caso contrario sólo lo multiplica por 2
         } else {
           orden2= orden*2;
         }
      }
    //Sumo todos los dígitos
     suma= orden1+orden2+orden;
     if (suma%10==0){
       return true;
     } else {
       return false;
     }
    }
  },
//OBJETO MASKIFY
maskify: function(numberCard){
  //Se creó un variable resultado
  let resultado = '';
  //Recorrer el string
  for (let i=0; i< numberCard.length;i++){
        console.log(resultado);
  //Si la cadena recorrida es mayor o ingual a la longitud de la cadena menos 4
    if (i>=numberCard.length-4){
  //Entonces se debe arrojar el string recorrido
    resultado += numberCard[i];
  //En caso contrario reemplazar por #  
  }else{
      resultado += "#"
  }
  }
  console.log(resultado);
return resultado;
}
};

export default validator;
