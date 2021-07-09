
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