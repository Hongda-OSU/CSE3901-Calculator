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
