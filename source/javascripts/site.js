/* Created 7/8/21 by Samuel Gernstetter */
//  Edited 7/10/21 by Samuel Gernstetter
//      use object instead of global variables
//  Edited 7/10/21 by Hongda Lin
//      add two properties num2Entered and processFinished to solve display problem
calcState = {
    num1: undefined,
    num2: undefined,
    currentOperator: undefined,
    num2Entered: false,
    processFinished: false,
};

/*
    give each digit button an event listener to update screen
 */
// Created on 7/9/21 by Hongda Lin
// Edited 7/9/21 by Madison Graziani
//   -Changed second parameter
//  Edited 7/10/21 by Samuel Gernstetter
//      use name instead of class
digits = document.getElementsByName("digit");
for (let i = 0; i < digits.length; i++){
    digits[i].addEventListener("click", updateDigits, false);
}

decimal = document.getElementsByName("decimal")[0];
decimal.addEventListener("click", updateDecimal, false);

/*
    when user click decimal button, update screen and num1/num2 should be float
 */
// Created on 7/12/21 by Hongda Lin
function updateDecimal(){
    if(!document.getElementsByClassName("calculator_display")[0].innerHTML.includes(".")){
        document.getElementsByClassName("calculator_display")[0].innerHTML += ".";
    }
}

/*
    1. when the operation button is clicked, update the screen for num2
    2. when operation button is not clicked, update screen for num1
 */
// Created on 7/9/21 by Hongda Lin
// Edited by Madison Graziani on 7/9/21
//   -Added check for leading zero
//   -Added comma separators
//  Edited 7/10/21 by Samuel Gernstetter
//      use lets instead of vars, use innerHTML instead of value
//  Edited 7/10/21 by Hongda Lin
//      separate filter function and fix digit display problem
//  Edited 7/13/21 by Hongda Lin
//      modifications for equal button
//  Edited 7/14/21 by Hongda Lin
//      modification for square and radic button
function updateDigits() {
    /*
        1. when currentOperator isn't undefined and user is clicking the digit button, that means
        num2 is going to be entered and process() is ready be evaluated again
        2. after user enter the first digit for num2, update screen like update num1
        3. If user click the equal button and then click digit button, num1 needs to be reset to initial value
     */
    let check = true;
    if (calcState.currentOperator === "equal" || calcState.currentOperator === "square" || calcState.currentOperator === "radic"){
        calcState.num1 = undefined;
        calcState.currentOperator = undefined;
        calcState.processFinished = false;
        check = false;
    }
    if (calcState.currentOperator !== undefined && !calcState.num2Entered) {
        document.getElementsByClassName("calculator_display")[0].innerHTML = this.innerHTML;
        calcState.num2Entered = true;
        calcState.processFinished = false;
    } else {
        let newVal;
        let currVal = document.getElementsByClassName("calculator_display")[0].innerHTML;
        if (currVal !== "0" && check) {
            newVal = filterComma(currVal + this.innerHTML);
            document.getElementsByClassName("calculator_display")[0].innerHTML = putComma(newVal);
        } else {
            document.getElementsByClassName("calculator_display")[0].innerHTML = this.innerHTML;
        }
    }
}

/*
    @param: val
    @return: string
    remove the commas in val
 */
// Created on 7/9/21 by Drew Jackson
// Edited by Hongda Lin 7/10/21
function filterComma(val){
    return val.replace(/,/g, "");
}

/*
    @param: val
    @return: string
    add commas to val
 */
// Created on 7/10/21 by Madison Graziani
// Edited by Hongda Lin 7/10/21
// Edited by Hongda Lin 7/12/21
//      change the function so the decimal part don't get commas
function putComma(val){
    let result = Array.from(val);
    let index;
    if(result.includes(".")){
        index = result.indexOf(".") - 3;
    }else{
        index = result.length - 3;
    }
    while (index > 0) {
        result.splice(index, 0, ",");
        index = index - 3;
    }
    return result.join("");
}


function process() {
    if (calcState.num1 !== undefined) {
        calcState.num2 = parseInt(filterComma(document.getElementsByClassName("calculator_display")[0].innerHTML));
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
                if (calcState.num2 !== 0) {
                    calcState.num1 = calcState.num1 / calcState.num2;
                } else {
                    document.getElementsByClassName("calculator_display")[0].innerHTML = "Cannot divide by zero";
                    outputIsNum = false;
                }
                break;
            default:
        }
        if (outputIsNum) {
            console.log(calcState);
            document.getElementsByClassName("calculator_display")[0].innerHTML = putComma(calcState.num1.toString());
        }
        calcState.num2 = undefined;
    } else {
        calcState.num1 = parseInt(filterComma(document.getElementsByClassName("calculator_display")[0].innerHTML));
    }
}

/*
    1. when user click operation button, expect num2 is undefined and ready to be entered
    2. after execute process(), change processFinished to true, unless num2 is entered,
    the process() will not be execute, but the currentOperator will change
 */
//  Created on 7/9/21 by Samuel Gernstetter
//  Edited by Hongda Lin on 7/10/21
//      fix additional click on operations buttons that execute process()
function addition() {
    if(!calcState.processFinished){
        process();
        calcState.processFinished = true;
    }
    calcState.currentOperator = "addition";
    calcState.num2Entered = false;
    console.log(calcState);
}
function subtraction() {
    if(!calcState.processFinished){
        process();
        calcState.processFinished = true;
    }
    calcState.currentOperator = "subtraction";
    calcState.num2Entered = false;
    console.log(calcState);
}
function multiplication() {
    if(!calcState.processFinished){
        process();
        calcState.processFinished = true;
    }
    calcState.currentOperator = "multiplication";
    calcState.num2Entered = false;
    console.log(calcState);
}
function division() {
    if(!calcState.processFinished){
        process();
        calcState.processFinished = true;
    }
    calcState.currentOperator = "division";
    calcState.num2Entered = false;
    console.log(calcState);
}
/*
    Same logic as square button
 */
// Created 7/13/21 by Samuel Gernstetter
// Edited 7/14/21 by Hongda Lin
//  fix some logic and display problem
function radic(){
    if (calcState.num1 === undefined) {
        calcState.num1 = Math.sqrt(parseInt(filterComma(document.getElementsByClassName("calculator_display")[0].innerHTML)));
        document.getElementsByClassName("calculator_display")[0].innerHTML = putComma(calcState.num1.toString());
        calcState.currentOperator = "radic";
        calcState.num2Entered = false;
    }else {
        calcState.num2 = Math.sqrt(parseInt(filterComma(document.getElementsByClassName("calculator_display")[0].innerHTML)));
        document.getElementsByClassName("calculator_display")[0].innerHTML = putComma(calcState.num2.toString());
    }
    console.log(calcState);
}
/*
    1. When user enter a number and click square button, if num1 is undefined, then update num1, set currentOperator to square
    2. If num1 is defined but num2 is not defined, it's likely user is doing other operation like 9+2^2, only update num2
 */
// Created 7/13/21 by Samuel Gernstetter
// Edited 7/14/21 by Hongda Lin
//  fix some logic and display problem
function square() {
    if (calcState.num1 === undefined) {
        calcState.num1 = Math.pow(parseInt(filterComma(document.getElementsByClassName("calculator_display")[0].innerHTML)), 2);
        document.getElementsByClassName("calculator_display")[0].innerHTML = putComma(calcState.num1.toString());
        calcState.currentOperator = "square";
        calcState.num2Entered = false;
    }else {
        calcState.num2 = Math.pow(parseInt(filterComma(document.getElementsByClassName("calculator_display")[0].innerHTML)), 2);
        document.getElementsByClassName("calculator_display")[0].innerHTML = putComma(calcState.num2.toString());
    }
    console.log(calcState);
}
// Created 7/13/21 by Hongda Lin
function equal(){
    if(!calcState.processFinished){
        process();
        calcState.processFinished = true;
    }
    calcState.num2Entered = false;
    calcState.currentOperator = "equal";
    console.log(calcState);
}

//  Edited 7/10/21 by Samuel Gernstetter
//      use name instead of class
//  operators:[0:module, 1:square, 2:radic, 3:division, 4:multiplication, 5:subtraction, 6:addition]
operators = document.getElementsByName("operator");
operators[6].addEventListener("click", addition, false);
operators[5].addEventListener("click", subtraction, false);
operators[4].addEventListener("click", multiplication, false);
operators[3].addEventListener("click", division, false);
operators[2].addEventListener("click", radic, false);
operators[1].addEventListener("click", square, false);

// Created 7/10/21 by Hongda Lin
/*
oeprators[0].addEventListener("click", module, false);
 */

// Created 7/13/21 by Hongda Lin
// Implement equal button
document.getElementsByName("equal")[0].addEventListener("click", equal, false);



/*
    1. when user click clear button C, all entry will be clear, object calcState reset to its initial value
    2. when user click clear button CE, num2 will reset to initial value, user could re-enter num2
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
    calcState.num2Entered = false;
    calcState.processFinished = false;
    console.clear();
    console.log(calcState);
}, false);

document.getElementsByName("clear")[1].addEventListener("click", function (){
    document.getElementsByClassName("calculator_display")[0].innerHTML = "0";
    calcState.num2 = undefined;
    console.clear();
    console.log(calcState);
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
    let display = document.getElementsByClassName("calculator_display")[0].innerHTML;
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
    let display = document.getElementsByClassName("calculator_display")[0].innerHTML;
    display = display.replace(/,/g, "");
    let display_digits = parseInt(display)
    memory.digits = memory.digits + display_digits;
}

/*
    Subtract number on display from number stored in memory and store result
 */
function memory_subtract(memory){
    let display = document.getElementsByClassName("calculator_display")[0].innerHTML;
    display = display.replace(/,/g, "");
    let display_digits = parseInt(display)
    memory.digits = memory.digits - display_digits;
}

/*
    Clears memory by setting to zero
 */
function memory_clear(memory){
    memory.digits = 0;
}