/**
* In JavaScript, there is an initial stack where all function calls are placed.
* It is not possible to process more than one thing in JavaScript.
* JavaScript can work with asynchrony through the event queue.
* If a function within the normal stack has a setTimeout, this function is sent to the example queue.
* JavaScript cannot execute two things at the same time.
 */

// Example 1: Synchronous Execution
function syncFunction() {
    console.log("Synchronous function");
  }
  
  console.log("Start");
  syncFunction();
  console.log("End");
  
  // Output:
  // Start
  // Synchronous function
  // End
  
  // Example 2: Asynchronous Execution with setTimeout
  function asyncFunction() {
    setTimeout(function () {
      console.log("Asynchronous function");
    }, 1000);
  }
  
  console.log("Start");
  asyncFunction();
  console.log("End");
  
  // Output:
  // Start
  // End
  // (After a 1-second delay)
  // Asynchronous function
1  