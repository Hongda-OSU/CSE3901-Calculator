// Created 7/8/21 by Samuel Gernstetter
//  Edited 7/10/21 by Samuel Gernstetter
//      use object instead of global variables
//  Edited 7/10/21 by Hongda Lin
//      add two properties num2Entered and processFinished to solve display problem
// Edited 7/15/21 by Hongda Lin
//      create Calculator constructor function and Condition constructor function to generate object calcState using prototype chaining
//Edited 7/15/21 by Madison Graziani
//      added piPressed boolean to Condition()
//  Edited 7/15/21 by Samuel Gernstetter
//      add percentPressed boolean to Condition()
function Calculator(){
    this.num1 = undefined;
    this.num2 = undefined;
    this.currentOperator = undefined;
}
function Condition(){
    this.num2Entered = false;
    this.processFinished = false;
    this.piPressed = false;
    this.percentPressed = false;
    // this.sign = "positive";
}
// Use prototype chaining generate object calcState
Calculator.prototype = new Condition();
Calculator.prototype.constructor = Calculator;
calcState = new Calculator();


/*
    Created by Drew Jackson 7/15
    Object to store mathematical constants
 */
constants = {
    pi: 3.14,
    e:  2.71828
}

/*
    give each digit button an event listener to update screen
 */
//Created on ___ by Hongda Lin
//Edited 7/9/21 by Madison Graziani
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

//Created 7/15/21 by Madison Graziani
//      Adds listener to pi button
pi = document.getElementsByName("special")[0];
pi.addEventListener("click", updatePi, false);

//Created 7/15/21 by Madison Graziani
//      Sets piPressed to true then calls updateDigits() to display pi
function updatePi(){
    calcState.piPressed = true;
    updateDigits();
}

//Created 7/15/21 by Madison Graziani
//      Sets piPressed to false after any operator button is pushed
function resetPi(){
    calcState.piPressed = false;
}

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
//  Edited 7/15/21 by Madison Graziani
//     -Added functionality for pi button
//  Edited 7/15/21 by Samuel Gernstetter
//     add functionality for percent button
function updateDigits() {
    /*
        1. when currentOperator isn't undefined and user is clicking the digit button, that means
        num2 is going to be entered and process() is ready be evaluated again
        2. after user enter the first digit for num2, update screen like update num1
        3. If user click the equal button and then click digit button, num1 needs to be reset to initial value
        4. The same logic for rule3 is also applied to square, radic and percent button
     */
    let check = true;
    if (calcState.currentOperator === "equal" || calcState.currentOperator === "square" || calcState.currentOperator === "radic" || calcState.currentOperator === "percent"){
        calcState.num1 = undefined;
        calcState.currentOperator = undefined;
        calcState.processFinished = false;
        calcState.percentPressed = false;
        check = false;
    }
    if (calcState.currentOperator !== undefined && !calcState.num2Entered) {
        //Sets display to pi for second number if pi button has been pressed after operator
        if(calcState.piPressed){
            document.getElementsByClassName("calculator_display")[0].innerHTML = constants.pi;
        }
        else{
            document.getElementsByClassName("calculator_display")[0].innerHTML = this.innerHTML;
        }
        calcState.num2Entered = true;
        calcState.processFinished = false;
    } else {
        let newVal;
        let currVal = document.getElementsByClassName("calculator_display")[0].innerHTML;
        if (currVal !== "0" && check && !calcState.piPressed) {
            newVal = filterComma(currVal + this.innerHTML);
            document.getElementsByClassName("calculator_display")[0].innerHTML = putComma(newVal);
        }
        //After pi is pressed, keeps it as pi until operator is pressed
        else if(calcState.piPressed){
            document.getElementsByClassName("calculator_display")[0].innerHTML = constants.pi;
        }
        else {
            document.getElementsByClassName("calculator_display")[0].innerHTML = this.innerHTML;
        }
    }
}

/* Created by Drew Jackson 7/10/21
    Convert string of number on display to numeric value
 */
function display_to_float() {
    let display = document.getElementsByClassName("calculator_display")[0].innerHTML;
    display = display.replace(/,/g, "");
    return parseFloat(display);
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

/*
    1. When num1 is undefined, user should enter the digit for num1 and hit the operation button, update num1
    2. When num1 is defined and process() is executed, it means user have enter digit for num2, update num2 and update num1 base on currentOperator
    3. After update the display screen by num1, reset num2 to default value
    4. For division, if num2 is 0, pop a window alert message.
 */
//  Created on 7/9/21 by Samuel Gernstetter
//  Edited by Hongda Lin on 7/10/21
//      some modifications base on the updates in operation functions
//  Edited 7/15/21 by Samuel Gernstetter
//      add percent functionality
function process() {
    if (calcState.num1 !== undefined) {
        calcState.num2 = parseFloat(filterComma(document.getElementsByClassName("calculator_display")[0].innerHTML));
        if (calcState.percentPressed) {
            calcState.num2 = calcState.num1 * (calcState.num2 / 100);
        }
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
                    window.alert("Cannot divide by zero!");
                    C_clear();
                    outputIsNum = false;
                }
                break;
            default:
        }
        if (outputIsNum) {
            calcState.num1 = Number(calcState.num1.toPrecision(15))
            console.log(calcState);
            document.getElementsByClassName("calculator_display")[0].innerHTML = putComma(calcState.num1.toString());
        }
        calcState.num2 = undefined;
    } else {
        calcState.num1 = Number(parseFloat(filterComma(document.getElementsByClassName("calculator_display")[0].innerHTML)).toPrecision(15));
    }
}

/*
    1. when user click operation button, expect num2 is undefined and ready to be entered
    2. after execute process(), change processFinished to true, unless num2 is entered,
    the process() will not be execute, but the currentOperator will change
    3. The logic is applied to addition, subtraction, multiplication and division function
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
    1. When user enter a number and click radic button, if num1 is undefined, then update num1, set currentOperator to radic
    2. If num1 is defined but num2 is not defined, it's likely user is doing other operation like 9+sqrt(2), only update num2
    3. If user enter negative for radic, pop a window alert message.
 */
// Created 7/13/21 by Samuel Gernstetter
// Edited 7/14/21 by Hongda Lin
//  fix some logic and display problem
function radic(){
    if (calcState.num1 === undefined || calcState.processFinished) {
        if (parseFloat(filterComma(document.getElementsByClassName("calculator_display")[0].innerHTML)) < 0){
            window.alert("Cannot square root negative number!");
            C_clear();
        }
        calcState.num1 = Math.sqrt(parseFloat(filterComma(document.getElementsByClassName("calculator_display")[0].innerHTML)));
        document.getElementsByClassName("calculator_display")[0].innerHTML = putComma(calcState.num1.toString());
        calcState.currentOperator = "radic";
        calcState.num2Entered = false;
    } else {
        if (parseFloat(filterComma(document.getElementsByClassName("calculator_display")[0].innerHTML)) < 0){
            window.alert("Cannot square root negative number!");
            C_clear();
        }
        calcState.num2 = Math.sqrt(parseFloat(filterComma(document.getElementsByClassName("calculator_display")[0].innerHTML)));
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
    if (calcState.num1 === undefined || calcState.processFinished) {
        calcState.num1 = Math.pow(parseFloat(filterComma(document.getElementsByClassName("calculator_display")[0].innerHTML)), 2);
        document.getElementsByClassName("calculator_display")[0].innerHTML = putComma(calcState.num1.toString());
        calcState.currentOperator = "square";
        calcState.num2Entered = false;
    }else {
        calcState.num2 = Math.pow(parseFloat(filterComma(document.getElementsByClassName("calculator_display")[0].innerHTML)), 2);
        document.getElementsByClassName("calculator_display")[0].innerHTML = putComma(calcState.num2.toString());
    }
    console.log(calcState);
}
// Created 7/15/21 by Samuel Gernstetter
function percent() {
    calcState.percentPressed = true;
    if (!calcState.processFinished) {
        process();
        calcState.processFinished = true;
    }
    calcState.currentOperator = "percent";
    calcState.num2Entered = false;
    console.log(calcState);
}

/*
    when user click equal button, execute process function with currentOperator and display result.
 */
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
//  Edited 7/15/21 by Madison Graziani
//      -Added listener to reset pi boolean
//  Edited 7/15/21 by Samuel Gernstetter
//      add modulo button
operators = document.getElementsByName("operator");
for (let i = 0; i < operators.length; i++){
    operators[i].addEventListener("click", resetPi, false);
}
operators[6].addEventListener("click", addition, false);
operators[5].addEventListener("click", subtraction, false);
operators[4].addEventListener("click", multiplication, false);
operators[3].addEventListener("click", division, false);
operators[2].addEventListener("click", radic, false);
operators[1].addEventListener("click", square, false);
operators[0].addEventListener("click", percent, false);


// Created 7/13/21 by Hongda Lin
// Implement equal button
//  Edited 7/15/21 by Madison Graziani
//      -Added listener to reset pi boolean
document.getElementsByName("equal")[0].addEventListener("click", resetPi, false);
document.getElementsByName("equal")[0].addEventListener("click", equal, false);

/*
    1. when user click clear button C, all entry will be clear, object calcState reset to its initial value
    2. when user click clear button CE, num2 will reset to initial value, user could re-enter num2
 */
//  Edited 7/10/21 by Samuel Gernstetter
//      use name instead of class
//  Edited 7/10/21 by Hongda Lin
//      finish implementing clear
//  Edited 7/15/21 by Madison Graziani
//      -Added listener to reset pi boolean
document.getElementsByName("clear")[0].addEventListener("click", resetPi, false);
document.getElementsByName("clear")[0].addEventListener("click", C_clear, false);

function C_clear(){
    document.getElementsByClassName("calculator_display")[0].innerHTML = "0";
    calcState.num1 = undefined;
    calcState.num2 = undefined;
    calcState.currentOperator = undefined;
    calcState.num2Entered = false;
    calcState.processFinished = false;
    console.clear();
    console.log(calcState);
}

//  Edited 7/15/21 by Madison Graziani
//      -Added listener to reset pi boolean 
document.getElementsByName("clear")[1].addEventListener("click", resetPi, false);
document.getElementsByName("clear")[1].addEventListener("click", CE_clear, false);

function CE_clear(){
    document.getElementsByClassName("calculator_display")[0].innerHTML = "0";
    calcState.num2 = undefined;
    console.clear();
    console.log(calcState);
}


/*Created by Drew Jackson 7/9/21
    Object holding stored value in memory
 */
memory = {
    digits: 0.0
}

/*Created by Drew Jackson 7/9/21
  Edited by Drew Jackson on 7/14/21 to use a loop
    Create listeners for each memory button
 */
memoryButtons = document.getElementsByName("memory");
for (let i = 0; i < memoryButtons.length; i++){
    memoryButtons[i].addEventListener("click", function(){ accessMemory(memoryButtons[i].value); }, false);
}

/*Created by Drew Jackson 7/14/21
    Choose the right function from memory button pressed.
 */
function accessMemory(button){
    console.log("accessMemory")
    switch (button) {
        case "MC":
            memory_clear();
            break;
        case "MR":
            memory_recall();
            break;
        case "M+":
            memory_add();
            break;
        case "M-":
            memory_subtract();
            break;
        case "MS":
            memory_store();
            break;
        default:
            console.log("No match: " + button);
        }
}

//Functions for memory listeners

/*Created by Drew Jackson 7/9/21
    Store the number displayed on screen to memory
 */
function memory_store(){
        memory.digits = display_to_float()
        console.log(memory.digits)
}

/*Created by Drew Jackson 7/9/21
    Recalls value stored in memory, shows on calculator display,
    updates appropriate calcState num with stored value.
 */

function memory_recall(){
    if (calcState.num1 === undefined) {
        calcState.num1 = memory.digits;
    }
    else {
        calcState.num2 = memory.digits;
        //allows operation to continue
        calcState.num2Entered = true;
    }
    //update display
    document.getElementsByName("display")[0].innerHTML = putComma(memory.digits.toString());

    //Debugging outputs
    //console.log("MR")
    //console.log("num1 = " + calcState.num1 + " num2 = " + calcState.num2)
}

/*Created by Drew Jackson 7/9/21
    Add the number on display to number stored in memory and store result
 */
function memory_add(){
    memory.digits = memory.digits + display_to_float();
    //Debugging output
    //console.log("M+")
}

/*Created by Drew Jackson 7/9/21
    Subtract number on display from number stored in memory and store result
 */
function memory_subtract(){
    memory.digits = memory.digits - display_to_float();
    //Debugging output
    //console.log("M-")
}

/*Created by Drew Jackson 7/9/21
    Clears memory by setting to zero
 */
function memory_clear(){
    memory.digits = 0.0;
    //Debugging output
    //console.log("MC")
}

//create listener for delete button
document.getElementsByName("display")[1].addEventListener("click", deleteAction, false);

/*Created by Drew Jackson 7/15/21
    Deletes the trailing number on the display, and removes trailing commas
 */
function deleteAction(){
    let display = document.getElementsByName("display")[0].innerHTML;

    if(display.length == 1){
        display = "0";
    }
    else {
        //delete trailing number from display value
        display = display.substring(0, display.length - 1);

        //format new display value with appropriate commas
        display = putComma(parseFloat(filterComma(display)).toString());
    }

    //update values
    document.getElementsByName("display")[0].innerHTML = display
    if (calcState.currentOperator === undefined || (calcState.currentOperator == "equal" && calcState.processFinished)){
         calcState.num1 = display_to_float();
     }
    else{
        calcState.num2 = display_to_float();
        calcState.num2Entered = true;
        calcState.processFinished = false;
        //Debug
        //console.log("num2 " + calcState.num2 + calcState.num2Entered)
    }
}
