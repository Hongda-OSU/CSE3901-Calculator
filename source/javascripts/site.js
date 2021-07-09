
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
for(var i=0; i < digits.length; i++){
    digits[i].addEventListener("click", updateDigits, false);
}

function updateDigits(){
    var currVal = document.getElementsByClassName("calculator_display")[0].innerHTML;
    if (currVal.length < 10){
        if(currVal !== "0") {
            document.getElementsByClassName("calculator_display")[0].innerHTML = currVal + this.value;
        }
        else{
            document.getElementsByClassName("calculator_display")[0].innerHTML = this.value;
        }
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

/*Created by Drew Jackson 7/9/21*/

