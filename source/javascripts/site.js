/* For debugging maybe
let tags = document.getElementsByTagName("button");
for (var i=0; i<tags.length; i++){
    switch(tags[i].className){
        case "memory": console.log("It's a memory button."); break;
        case "operator": console.log("It's a operator button."); break;
        case "digit": console.log("It's a digit button."); break;
        default: break;
    }
}
*/

/*
Definition: when user click AC the display screen should display 0 and memory ...
 */
document.getElementById("clear").addEventListener("click", function (){
    document.getElementsByClassName("calculator_display")[0].innerHTML = 0;
}, false);


/*
Definition: when user click digit button the display screen changes.
 */
let digits = document.getElementsByClassName("digit");
for(var i=0; i<digits.length; i++){
    digits[i].addEventListener("click",updateScreen, false);
}

function updateScreen(){
    let current = document.getElementsByClassName("calculator_display")[0].innerHTML;
    if(current == 0){
        document.getElementsByClassName("calculator_display")[0].innerHTML = this.value;
    }else{
        document.getElementsByClassName("calculator_display")[0].innerHTML = current + this.value;
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