// Hoisting example
/* Hoisting is a concept that all declarations are executed before other lines of codes i.e. variables declared using var and functions

Using Var
 This code will work but return undefined because var supports hoisting
 Therefore it will read the declaration first then the console then the assignment
 so the this results to undefined as in not assigned value
*/
console.log(test);
var test = "test";
/*
  Using Let
  main.js:7 Uncaught ReferenceError: Cannot access 'test' before initialization
  As seen let does not support hoisting
*/
// console.log(test2);
// let test2 = "test";

/*
  Using Const
  same issue as let since it does not support hoisting
  ReferenceError: Cannot access 'test3' before initialization
*/
// console.log(test3);
// let test3 = "test3";

/*
  Function
  functions can be executed even before declaring. Since the whole declaration of the function is executed
*/
testf();

function testf() {
  console.log("I am a function");
}

// Function Scope
/*
function testScope() {
  var nice = "nice";
}

console.log(nice);
*/

/* The above will cause error since variable nice is inside test and not accessible from outside the function
main.js:37 Uncaught ReferenceError: Scope is not defined
    at main.js:37:1
*/

//Block Scope i.e. IF, while and for loops
//var option
if (true) {
  var testing = "testing";
}
console.log(testing);
// This actually works because it can read variable in block scope declared using var since var is not block scoped

// let and const
/*
if (true) {
  // let tester = "tester";
  const tester = "tester";
}
console.log(tester);
*/
// for let and const they are block scope is
/*
for (var i = 0; i < 3; i++) {
  alert(i);
}
*/
//For the above it works fine but what if we setTimeout to delay the alert
/*
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    alert(i);
  }, 500);
}
*/
// It will only print out 3 since the for loop will complete in less time than the 500ms
// This is caused by var being not block scoped
// solution use const or let which is block scoped
/*
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    alert(i);
  }, 500);
}
*/

// Another solution is using a function factory
//This is due to the fact that var is function scoped
for (var i = 0; i < 3; i++) {
  (function test3(i) {
    setTimeout(() => {
      alert(i);
    }, 500);
  })(i);
}
