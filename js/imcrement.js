let colors = ['red','blue','green','yellow','black'];

export  function increment(){
 const  numberColor = Math.floor(Math.random()*5);
 
 const h3 = document.querySelector(".display-1");
 let numberValue = parseInt(h3.innerText);
 h3.style.color = colors[numberColor];
 h3.innerText=`${numberValue  + 1 }`;
 
}