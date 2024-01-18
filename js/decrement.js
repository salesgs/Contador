export  function decrement(){
  const h3 = document.querySelector(".display-1");
  let valueNumber =  parseInt(h3.innerText); /*CONVERT STRING IN NUMBER*/ 
  h3.innerText = `${valueNumber-1}`; /*REALIZANDO OPERAÇÃO*/ 
}