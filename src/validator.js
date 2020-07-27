
const validator = {
  isValid: function(creditCardNumber){
    let suma=0;
    for(let i=0;i < creditCardNumber.length;i++){
      if (i%2==0){
        if (creditCardNumber*2>9){
let creditCardNumberpar=1+(creditCardNumber%10);
}else        }creditCardNumber=creditCardNumber*2
      }
    }
    suma= creditCardNumber+creditCardNumberpar;
  }
  if (suma%10===0);^{
    return alert("LA TARJETA ES VALIDA");
  }else{
    return alert("LA TARJETA ES INV{ALIDA")
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
