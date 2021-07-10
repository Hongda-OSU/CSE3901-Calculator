
/*
Definition: when user click AC the display screen should display 0 and memory ...
 */
//  Edited 7/10/21 by Samuel Gernstetter
//      use name instead of class
document.getElementsByName("clear")[0].addEventListener("click", function (){
    document.getElementsByClassName("calculator_display")[0].innerHTML = "0";
}, false);


/*
Definition: when user click digit button the display screen changes.
 */

//Created on ___ by Hongda Lin
//Edited 7/9/21 by Madison Graziani
//   -Changed second parameter
//  Edited 7/10/21 by Samuel Gernstetter
//      use name instead of class
digits = document.getElementsByName("digit");
for (let i = 0; i < digits.length; i++){
    digits[i].addEventListener("click", updateDigits, false);
}



//Created on ___ by Hongda Lin
//Edited by Madison Graziani on 7/9/21
//   -Added ability to display multiple digits (up to 10)
//   -Added check for leading zero
//   -Added comma separators
//  Edited 7/10/21 by Samuel Gernstetter
//      use lets instead of vars, use innerHTML instead of value
function updateDigits(){
    let newVal;
    let currVal = document.getElementsByClassName("calculator_display")[0].innerHTML;
    if (currVal !== "0") {
        newVal = currVal + this.innerHTML;
        newVal = Array.from(newVal);
        newVal = newVal.filter(function(val) {return val !== ","})
        let index = newVal.length - 3;
        while (index > 0) {
            newVal.splice(index, 0, ",");
            index = index - 3;
        }
        document.getElementsByClassName("calculator_display")[0].innerHTML = newVal.join("");
    } else {
        document.getElementsByClassName("calculator_display")[0].innerHTML = this.innerHTML;
    }
}


/* Created 7/8/21 by Samuel Gernstetter */
var num1 = undefined;
var num2 = undefined;
var currentOperator = "none";

function process() {
    if (num1 !== undefined) {
        num2 = parseInt(document.getElementsByClassName("calculator_display")[0].innerHTML);
        let outputIsNum = true;
        switch (currentOperator) {
            case "addition":
                num1 = num1 + num2;
                break;
            case "subtraction":
                num1 = num1 - num2;
                break;
            case "multiplication":
                num1 = num1 * num2;
                break;
            case "division":
                if (num2 != 0) {
                    num1 = num1 / num2;
                } else {
                    document.getElementsByClassName("calculator_display")[0].innerHTML = "Cannot divide by zero";
                    outputIsNum = false;
                }
                break;
            default:
        }
        if (outputIsNum) {
            document.getElementsByClassName("calculator_display")[0].innerHTML = num1;
        }
        num2 = undefined;
    } else {
        num1 = parseInt(document.getElementsByClassName("calculator_display")[0].innerHTML);
        document.getElementsByClassName("calculator_display")[0].innerHTML = "0";
    }
}
function addition() {
    process();
    currentOperator = "addition";
}
function subtraction() {
    process();
    currentOperator = "subtraction";
}
function multiplication() {
    process();
    currentOperator = "multiplication";
}
function division() {
    process();
    currentOperator = "division";
}

//  Edited 7/10/21 by Samuel Gernstetter
//      use name instead of class
operators = document.getElementsByName("operator");
operators[7].addEventListener("click", addition, false);
operators[6].addEventListener("click", subtraction, false);
operators[5].addEventListener("click", multiplication, false);
operators[4].addEventListener("click", division, false);

/*Created by Drew Jackson 7/9/21*/
/*
    Object holding stored value in memory
 */
//  Edited 7/10/21 by Samuel Gernstetter
//      remove const
memory = {
    digits: 0
}

//Listeners for each memory button

//  Edited 7/10/21 by Samuel Gernstetter
//      remove lets
ms = document.getElementById("ms");
ms.addEventListener("click", memory_store(memory), false);

mr = document.getElementById('mr');
mr.addEventListener("click", memory_recall, false);

mplus = document.getElementById("mplus");
mplus.addEventListener("click", memory_add, false);

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
function memory_store(memory){
    var display = document.getElementsByClassName("calculator_display")[0].innerHTML;
    display = display.replace(/,/g, "");
    memory.digits = parseInt(display);
}

//TODO
function memory_recall(memory){

}

/*
    Add the number on display to number stored in memory and store result
 */
function memory_add(memory){
    var display = document.getElementsByClassName("calculator_display")[0].innerHTML;
    display = display.replace(/,/g, "");
    var display_digits = parseInt(display)
    memory.digits = memory.digits + display_digits;
}

/*
    Subtract number on display from number stored in memory and store result
 */
function memory_subtract(memory){
    var display = document.getElementsByClassName("calculator_display")[0].innerHTML;
    display = display.replace(/,/g, "");
    var display_digits = parseInt(display)
    memory.digits = memory.digits - display_digits;
}

/*
    Clears memory by setting to zero
 */
function memory_clear(memory){
    memory.digits = 0;
}