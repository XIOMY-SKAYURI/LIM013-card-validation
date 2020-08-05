let validator = {
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
      // si el resultado es mayor a 9  entonces sumo el residuo mas 1
         if (orden>9){
           orden1=1+(orden%10);
        // en caso contrario sólo lo multiplica por 2
         } else {
           orden2= orden*2;
         }
      }
    // sumo todos los dígitos
     suma= orden1+orden2+orden;
     if (suma%10==0){
       return true;
     } else {
       return false;
     }
    }
  },

maskify: function(numberCard){
  //se creo un variable resultado
  let resultado = '';
  // recorrer el string
  for (let i=0; i< numberCard.length;i++){
        console.log(resultado);
    if (i>=numberCard.length-4){
    resultado += numberCard[i];
  }else{
      resultado += "#"
  }
  }
  console.log(resultado);
    // console.log del elemento
    // guardar un michi en el resultado

/*let suma=0;
let fourDigit=0;
let digit=0;
//Declarar longitud del array
let longitud =0;
// Definir el número ingreado-- y convertir a array
let numberIngreso= numberCard.split("");
//CAPTURAR LOS ÚLTIMOS 4 DÍGITOS
//Invertir el array
 let arrayinv= numberIngreso.reverse();

 //obtener los últimos 4 digitos
 let newArray = arrayinv.splice(0,4,"#","#","#","#");
 newArray.reverse();

fourDigit=  newArray.join('');
        console.log(newArray);


//CAPTURAR LOS DÍGITOS - LOS ÚLTIMOS 4 digitos
//Creo un bucle que me ayude a recorrer el array
for (let i=0; i<numberCard.length;i++){
// Si la longitud de array es mayor a 4
  if (numberIngreso.length>4){
// y si el orden de array es mayor o igual a la longitud menos 4
 if (i >= numberIngreso.length-4){
//entonces extraigo todo el array
  longitud = numberIngreso.splice(0);
 longitud.reverse();
 digit =longitud.join('');
 console.log(digit);
 }

}
}
suma = (digit );
console.log(suma);*/
return resultado;
}
};

export default validator;
