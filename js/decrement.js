let colors = ['red','blue','green','yellow','black'];

export  function decrement(){
  const  numberColor = Math.floor(Math.random()*5);
  // CONST H3
  const h3 = document.querySelector(".display-1");
  let valueNumber =  parseInt(h3.innerText); /*CONVERT STRING IN NUMBER*/ 
 
  h3.style.color = colors[numberColor]; 
 
  // DECREMENTO NO DOM 
  h3.innerText = `${valueNumber-1}`; /*REALIZANDO OPERAÇÃO*/ 
}