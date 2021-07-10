
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
//  Edited 7/10/21 by Samuel Gernstetter
//      use object instead of global variables
calcState = {
    num1: undefined,
    num2: undefined,
    currentOperator: undefined
};

function process() {
    if (calcState.num1 != undefined) {
        calcState.num2 = parseInt(document.getElementsByClassName("calculator_display")[0].innerHTML);
        console.log("num2: " + calcState.num2)
        let outputIsNum = true;
        switch (calcState.currentOperator) {
            case "addition":
                calcState.num1 = calcState.num1 + calcState.num2;
                break;
            case "subtraction":
                calcState.num1 = calcState.num1 - calcState.num2;
                break;
            case "multiplication":
                calcState.num1 = calcState.num1 * calcState.num2;
                break;
            case "division":
                if (calcState.num2 != 0) {
                    calcState.num1 = calcState.num1 / calcState.num2;
                } else {
                    document.getElementsByClassName("calculator_display")[0].innerHTML = "Cannot divide by zero";
                    outputIsNum = false;
                }
                break;
            default:
        }
        if (outputIsNum) {
            document.getElementsByClassName("calculator_display")[0].innerHTML = calcState.num1;
        }
        calcState.num2 = undefined;
    } else {
        calcState.num1 = parseInt(document.getElementsByClassName("calculator_display")[0].innerHTML);
        document.getElementsByClassName("calculator_display")[0].innerHTML = "0";
        console.log("num1: " + calcState.num1)
    }
}
function addition() {
    process();
    calcState.currentOperator = "addition";
}
function subtraction() {
    process();
    calcState.currentOperator = "subtraction";
}
function multiplication() {
    process();
    calcState.currentOperator = "multiplication";
}
function division() {
    process();
    calcState.currentOperator = "division";
}

//  Edited 7/10/21 by Samuel Gernstetter
//      use name instead of class
operators = document.getElementsByName("operator");
operators[7].addEventListener("click", addition, false);
operators[6].addEventListener("click", subtraction, false);
operators[5].addEventListener("click", multiplication, false);
operators[4].addEventListener("click", division, false);

// Created 7/10/21 by Hongda Lin
/*
operators[2].addEventListener("click", radic, false);
operators[1].addEventListener("click", square, false);
oeprators[0].addEventListener("click", module, false);
equal = document.getElementsByName("equal");
*/

/*
    when user click clear button C, all entry will be clear, object calcState reset to its initial value
    when user click clear button CE, the last digit entered will be cleared, property num2 will reset to inital value
 */
//  Edited 7/10/21 by Samuel Gernstetter
//      use name instead of class
//  Edited 7/10/21 by Hongda Lin
//      finish implementing clear buttons
document.getElementsByName("clear")[0].addEventListener("click", function (){
    document.getElementsByClassName("calculator_display")[0].innerHTML = "0";
    calcState.num1 = undefined;
    calcState.num2 = undefined;
    calcState.currentOperator = undefined;
    console.log("num1: " + calcState.num1);
    console.log("num2: " + calcState.num2);
    console.log("currentOperator: " + calcState.currentOperator);
}, false);

document.getElementsByName("clear")[1].addEventListener("click", function (){
    document.getElementsByClassName("calculator_display")[0].innerHTML = "0";
    calcState.num2 = undefined;
    console.log("num1: " + calcState.num1);
    console.log("num2: " + calcState.num2);
    console.log("currentOperator: " + calcState.currentOperator);
}, false);



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