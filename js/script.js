import { decrement } from "./decrement.js" ;
import {resetNumber} from "./reset.js";
import { increment } from "./imcrement.js";
// DECREMENTAR
const btnDecrement = document.querySelector(".decrement");
btnDecrement.addEventListener("click",decrement);
// RESETAR
const btnReset = document.querySelector(".reset");
btnReset.addEventListener("click",resetNumber);
// INCREMENTAR
const bntIncrement = document.querySelector(".increment");
bntIncrement.addEventListener("click",increment);