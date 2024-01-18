export  function increment(){
 const h3 = document.querySelector(".display-1");
 let numberValue = parseInt(h3.innerText);

 h3.innerText=`${numberValue  + 1 }`;
}