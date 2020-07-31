let validator = {
  isValid: function validator (){
    let creditCardNumber = numberCard.split("");
    console.log(creditCardNumber);
    let suma = 0;
    let orden1=0;
     for(let i=0; i<creditCardNumber.length;i++){
    console.log(validator)
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

};*/

export default validator;
