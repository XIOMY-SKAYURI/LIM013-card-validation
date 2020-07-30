
const validator = {
  isValid: function (creditCardNumber){
    let suma = 0;
    let orden=0;
    let orden1=0;
    let orden2=0;
     for (let i=0; i<creditCardNumber.length;i++){
      let orden=parseInt(creditCardNumber[i]);
      if (i%2==0){
        orden=orden*2;
        if (orden>9){
          orden1=1+ (orden%10);
        }else { orden2= orden*2;
          suma=orden+orden1+orden2;}
     if (suma%10==0){
        return alert("LA TARJETA ES VÁLIDA");
      }else{
        return alert("LA TARJETA ES INVÁLIDA");

      }

    }
    }
    }








  /*---miskyfy: function(creditCardNumber){
    let longitud=creditCardNumber.length;
    let resultado="";
    if(longitud>4){
      for(let i=0;i<creditCardNumber.length; i++){
        if(i>=creditCardNumber.length-4){
          resultado+=creditCardNumber[i];

        }else {
          resultado+="#"
        }
      }
    }else {
      resultado=creditCardNumber
    }
return resultado
  }

};

export default validator;*/
