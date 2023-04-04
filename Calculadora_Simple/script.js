
function validarViejo(){
    let element = document.getElementById('num1').value;
    let element2 = document.getElementById('num2').value;
     if(element.length ==0 || element2.length==0){
         alert("Error, una de las celdas esta vacia. Porfavor ingrese un numero");
         return false;}
    return true;
}
function validar(){
   let element = document.getElementById('num1').value;
   let element2 = document.getElementById('num2').value;

   document.getElementById('num2').input
    if(element =="" || element2==""){
       alert("Error, una de las celdas esta vacia. Porfavor ingrese un numero");
       return false;}
  return true;

}

function suma(){
                //hacemos parseo pq devuelve string, el .value devuelve el valor del ID
                //que obtuvimos, ahi lo pasamos a variables para poder usarlo..
    let value1 = parseInt(document.getElementById('num1').value);
    let value2 =  parseInt(document.getElementById('num2').value)
    let resulta = value1+value2;
    if(validar()) 
      document.getElementById("result").innerHTML= resulta;
}
function resta(){
    let value1 = parseInt(document.getElementById('num1').value);
    let value2 = parseInt(document.getElementById('num2').value);
    let resulta = value1-value2;
    if(validar()) 
      document.getElementById("result").innerHTML= resulta;
    
}
function multiplicacion(){
    let value1 = parseInt(document.getElementById('num1').value);
    let value2 = parseInt(document.getElementById('num2').value) ;
    let resulta = value1*value2;

    if(validar()) 
      document.getElementById("result").innerHTML= resulta;
}
function elevacion(){
    let value1 = parseInt(document.getElementById('num1').value);
    let value2 = parseInt(document.getElementById('num2').value) ;
    let resulta = Math.pow(value1,value2)
    if(validar()) 
    document.getElementById("result").innerHTML= resulta;
}
function division(){
    let value1 = parseInt(document.getElementById('num1').value);
    let value2 = parseInt(document.getElementById('num2').value) ;
    let resulta = value1/value2;
    if(validar()) 
      document.getElementById("result").innerHTML= resulta;
 
}





