# Project 5
### JavaScript Calculator

### Roles
* Overall Project Manager: Drew Jackson
* Coding Manager: Hongda Lin
* Testing Manager: Sam Gernstetter
* Documentation: Madison Graziani

### Contributions
Please list who did what for each part of the project.
Also list if people worked together (pair programmed) on a particular section.

### Calculator object visible properties
* num1 for first input
* num2 is needed for operations to proceed expect Square and Radic
* currentOperator records the current operation

### Calculator object hidden properties
* num2Entered checks whether num2 is entered
* processFinished checks whether current operation is finished
* sign 

### Display

### Some tips for Operations!
* num2 is needed for operations except for Square and Radic. If num1 is defined but num2 is undefined, the addition operation will not proceed until num2 is entered.  
    * For example: User enters 10 for num1 and hits addition button, if user hits addition button again, the addition operation won't proceed.

* Continue from above, user could change operation if num2 is undefined, the currentOperator will be the last operator button user hits.
    * For example: User enters 10 and hits addition button, if user then hits subtraction button, the currentOperator will change to subtraction and num2 is expected to be entered.

* When num1 and num2 are both entered and user wants to continue addition or subtraction, user can just hit the corresponding operator button and result of previous operation will be displayed.
    * For example: 9 + 9, (num1: 9, num2: 9, currentOperator: addtion)
    * If user hit subtraction button, num1 and display will update to 18 and currentOperator will change to subtraction. num2 is expected to be entered to continue subtraction. Same with other operator buttons. 

* When equal button is hit, the result of previous operation will be displayed. User could continue operations or hit digit button. Different processes will happen.
    * For example: 9 + 9 = 18, (num1: 18, num2: 9, currentOperator: equal) 
    * 1. If user hit the adddtion button, num2 is expected to continue addtion operation. 
    * 2. If user hit digit button, for example 3, then num1 will be updated to 3 and new opeartion and num2 is expected to be entered. 



### Operator buttons
* Addition: click Addition button will update num1 to num1+num2 and display num1 to screen.
* Subtraction: click Subtraction button will update num1 to num1-num2 and display num1 to screen.
* Multiplication: click Multiplication button will update num1 to num1*num2 and display num1 to screen.
* Division: click MultiplicDivisionation button will update num1 to num1/num2 and display num1 to screen. Note: if num2 is 0 then a window alert will pop up and clear function will execute. The precision is set to 15.
* Module: click Module button will update num1 to num1%num2 and display num1 to screen.
* Square: click Square button will update current displayed number to ^2, the number will keep updating when user click multiple times.
* Radic: click Radic button will update current displayed number to sqrt, the number will keep updating when user click multiple times. Note: if num1 or num2 is negative then a window alert will pop up and clear function will execute.

### Clear buttons
* C: when user click clear button C, all entry will be clear, object calcState reset to its initial value
* CE: when user click clear button CE, num2 will reset to initial value, user could re-enter num2 to continue previous operation.