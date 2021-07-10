
/*
Definition: when user click AC the display screen should display 0 and memory ...
 */
document.getElementById("clear").addEventListener("click", function (){
    document.getElementsByClassName("calculator_display")[0].innerHTML = 0;
}, false);


/*
Definition: when user click digit button the display screen changes.
 */

//Created on ___ by Hongda Lin
//Edited 7/9/21 by Madison Graziani
//   -Changed second parameter
var digits = document.getElementsByClassName("digit");
for(var i=0; i < digits.length; i++){
    digits[i].addEventListener("click", updateDigits, false);
}

let operator = document.getElementsByClassName("operator");
for(var i=0; i<operator.length; i++){
    operator[i].addEventListener("click", updateOperators, false);
}

function updateOperators(){

}

//Created on ___ by Hongda Lin
//Edited by Madison Graziani on 7/9/21
//   -Added ability to display multiple digits (up to 10)
//   -Added check for leading zero
//   -Added comma separators
function updateDigits(){
    var newVal;
    var currVal = document.getElementsByClassName("calculator_display")[0].innerHTML;
        if(currVal !== "0") {
            newVal = currVal + this.value;
            newVal = Array.from(newVal);
            newVal = newVal.filter(function(val) {return val !== ","})
            var index = newVal.length - 3;
            while(index > 0){
                newVal.splice(index, 0, ",");
                index = index - 3;
            }
            document.getElementsByClassName("calculator_display")[0].innerHTML = newVal.join("");
        }
        else{
            document.getElementsByClassName("calculator_display")[0].innerHTML = this.value;
        }
}


/* Created 7/8/21 by Samuel Gernstetter */
var num1 = 0;
var num2 = undefined;
var currentOperator = "none";

function process(nextOperator) {
    let result = 0;
    switch (currentOperator) {
        case "addition":
            result = num1 + num2;
            break;
        case "subtraction":
            result = num1 - num2;
            break;
        case "multiplication":
            result = num1 * num2;
            break;
        case "division":
            if (num2 != 0) {
                result = num1 / num2;
            } else {
                document.getElementsByClassName("calculator_display")[0].innerHTML = "Cannot divide by zero";
            }
            break;
        default:
    }
    currentOperator = nextOperator;
}
function addition() {
    console.log(this.id);
    process("addition");
}
function subtraction() {
    console.log(this.id);
    process("subtraction");
}
function multiplication() {
    console.log(this.id);
    process("multiplication");
}
function division() {
    console.log(this.id);
    process("division");
}

let plus = document.getElementById("plus")
plus.addEventListener("click", addition, false)
let minus = document.getElementById("minus")
minus.addEventListener("click", subtraction, false)
let times = document.getElementById("times")
times.addEventListener("click", multiplication, false)
let divide = document.getElementById("divide")
divide.addEventListener("click", division, false)


operators = document.getElementsByClassName("operator");
operators.namedItem("plus").addEventListener("click", addition, false);
operators.namedItem("minus").addEventListener("click", subtraction, false);
operators.namedItem("times").addEventListener("click", multiplication, false);
operators.namedItem("divide").addEventListener("click", division, false);

/*Created by Drew Jackson 7/9/21*/
/*
    Object holding stored value in memory
 */
 memory = {
    digits: 0
}

//Listeners for each memory button

document.getElementById("ms").addEventListener("click", memory_store, false);

document.getElementById('mr').addEventListener("click", memory_recall, false);

document.getElementById("mplus").addEventListener("click", memory_add, false);

//TODO add buttons

/* Not yet on calculator
let msub = document.getElementById("msub");
msub.addEventListener("click", memory_subtract, false);

let mc = document.getElementById("mc");
mc.addEventListener("click", memory_clear, false);
*/

//Functions for memory listeners

/*
    Store the number displayed on screen to memory
 */
function memory_store(){
    var display = document.getElementsByClassName("calculator_display")[0].innerHTML;
    display = display.replace(/,/g, "");
    memory.digits = parseInt(display);
}

//TODO
function memory_recall(){

}

/*
    Add the number on display to number stored in memory and store result
 */
function memory_add(){
    var display = document.getElementsByClassName("calculator_display")[0].innerHTML;
    display = display.replace(/,/g, "");
    var display_digits = parseInt(display)
    memory.digits = memory.digits + display_digits;
}

/*
    Subtract number on display from number stored in memory and store result
 */
function memory_subtract(){
    var display = document.getElementsByClassName("calculator_display")[0].innerHTML;
    display = display.replace(/,/g, "");
    var display_digits = parseInt(display)
    memory.digits = memory.digits - display_digits;
}

/*
    Clears memory by setting to zero
 */
function memory_clear(){
    memory.digits = 0;
}