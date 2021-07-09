
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
var num1 = undefined;
var num2 = undefined;
var currentOperator = "none";

function process() {
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
            }
            break;
        default:
    }
    num2 = undefined;
}
function addition() {
    console.log(this.id);
    if (num1 !== undefined) {
        num2 = document.getElementsByClassName("calculator_display")[0].innerHTML;
        process();
    } else {
        num1 = document.getElementsByClassName("calculator_display")[0].innerHTML;
    }
    currentOperator = "addition"
}
function subtraction() {
    console.log(this.id);
    if (num1 !== undefined) {
        num2 = document.getElementsByClassName("calculator_display")[0].innerHTML;
        process();
    } else {
        num1 = document.getElementsByClassName("calculator_display")[0].innerHTML;
    }
    currentOperator = "subtraction"
}
function multiplication() {
    console.log(this.id);
    if (num1 !== undefined) {
        num2 = document.getElementsByClassName("calculator_display")[0].innerHTML;
        process();
    } else {
        num1 = document.getElementsByClassName("calculator_display")[0].innerHTML;
    }
    currentOperator = "multiplication"
}
function division() {
    console.log(this.id);
    if (num1 !== undefined) {
        num2 = document.getElementsByClassName("calculator_display")[0].innerHTML;
        process();
    } else {
        num1 = document.getElementsByClassName("calculator_display")[0].innerHTML;
    }
    currentOperator = "division"
}
operators = document.getElementsByClassName("operator");
operators.namedItem("plus").addEventListener("click", addition, false);
operators.namedItem("minus").addEventListener("click", subtraction, false);
operators.namedItem("times").addEventListener("click", multiplication, false);
operators.namedItem("divide").addEventListener("click", division, false);