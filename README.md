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

* Drew Jackson: Implemented all memory buttons, delete buttons and functionality. Created parser function(filterCommas) to convert string with commas to float. Help trouble shoot, suggested fix for pos/neg button bug.
* Samuel Gernstetter: Created first set of event listeners, created first iteration of process function and operation functions, reworked HTML and JS to use some names instead of values, created object to hold calculator state, created square and percent functions
* Madison Graziani: Implemented pi, sign change, and mod buttons. Implemented basic updateDigits before operators were added. Changed around/added HTML buttons.

### Calculator object visible properties
* num1 is for the first input
* num2 is needed for operations to proceed except for Square and Radic
* currentOperator records the current operation

### Calculator object hidden properties
* num2Entered checks whether num2 is entered
* processFinished checks whether current operation is finished
* piPressed checks whether the pi button has been clicked
* percentPressed checks whether the percent button was pressed to evaluate the operation

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

* When percent button is hit, num2 will be set equal to (num1 * (num2 / 100)), then operations will proceed as if the user hit equals.
    * For example: 50 + 20% = 60, (num1: 60, num2: 10, currentOperator: percent)


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
* Delete: removes the trailing digit from the displayed number, updates stored value, sets value to zero if deleting last digit.

### Memory buttons
* MS: Clicking button stores the value presented on calculator display in a memory object.
* MC: Clicking button clears the stored memory, sets it to zero.
* MR: Presents stored value on calculator display and assigns value to appropriate operand.
* M+: Adds the currently displayed value to the value stored in memory. Does not change display.
* M-: Subtracts the currently displayed value to the value stored in memory. Does not change display.

### Other buttons
* Sign(+/-): Clicking the button switches the sign of the number on display to its opposite.
* Pi: Clicking this button inserts the value pi to the display.
* Equal: Clicking this button will evaluate the current expression if applicable.
* Decimal point: Clicking this button adds a decimal point for a float number.
