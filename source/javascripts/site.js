/*
Definition: when user click AC the display screen should display 0 and memory ...
 */
document.getElementById("clear").addEventListener("click", function (){
    document.getElementsByClassName("calculator_display")[0].innerHTML = 0;
}, false);






/*
Definition: when user click digit button the display screen changes.
 */
var digits = document.getElementsByClassName("digit");
for(var i=0; digits.length; i++){
    digits[i].addEventListener("click",function (){
        document.getElementsByClassName("calculator_display")[0].innerHTML = this.value;
    }, false);
}
/*
function updateScreen(){
    document.getElementsByClassName("calculator_display")[0].innerHTML = this.value;
}
*/

/* Created 7/8/21 by Samuel Gernstetter */
function process(num1, num2 = 0, currentOperator, nextOperator) {
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
                // print "Cannot divide by zero" into display
            }
            break;
        default:
    }
    return nextOperator;
}

function addition() {

}
function subtraction() {

}
function multiplication() {

}
function division() {

}
let plus = document.getElementById("plus")
plus.addEventListener("click", addition, false)
let minus = document.getElementById("minus")
minus.addEventListener("click", subtraction, false)
let times = document.getElementById("times")
times.addEventListener("click", multiplication, false)
let divide = document.getElementById("divide")
divide.addEventListener("click", division, false)