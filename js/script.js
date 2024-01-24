import { decrement } from "./decrement.js" ;
import {resetNumber} from "./reset.js";
import { increment } from "./imcrement.js";


const btnDecrement = document.querySelector(".decrement");
btnDecrement.addEventListener("click",decrement);

const btnReset = document.querySelector(".reset");
btnReset.addEventListener("click",resetNumber);

const bntIncrement = document.querySelector(".increment");
bntIncrement.addEventListener("click",increment);