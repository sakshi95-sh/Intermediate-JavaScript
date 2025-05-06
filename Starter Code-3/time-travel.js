/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.

let destination = "Ancient Egypt";

console.log(destination);

/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.

destination = "Medieval Europe";
console.log(destination);

/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.
/*
 * Observations:
    Error received:
 * Uncaught TypeError: Assignment to constant variable.
 */
const travelDate = "2024-03-15";
// travelDate="2025-03-15"

/* Task 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.
/*
 * Observations:
 * time-travel.js:31 Uncaught ReferenceError: timeMachineModel is not defined
    at time-travel.js:31:13
    After declaring timeMachineModel with var its showing us as undefined
 */

console.log(timeMachineModel);
var timeMachineModel = "T-800";
