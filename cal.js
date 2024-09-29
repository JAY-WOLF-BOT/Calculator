function clearscreen(){
    document.getElementById("result").value = "";
}
function setscreenvalue(value){
    document.getElementById("result").value =+ value;
}
function calculateResult(){
     const resultElement = document.getElementById("result");
     const expression  = resultElement.value.trim();

     if(expression === ''){
      resultElement.value = 'Enter an expression';
      return;
     }

     try{
        resultElement.value = eval(expression);
     }
     catch(e){
        resultElement.value = 'Invaled expression';
     }
}