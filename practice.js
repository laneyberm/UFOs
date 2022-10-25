// Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }
console.log(addition(4, 5));
addition(4, 5);

// Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }

// Simple JavaScript log statement
function printHello() {
    return "Hello there!";
  }

printHello = () => "Hello there!";

// Original addition function
function addition(a, b) {
    return a + b;
  }

// Converted to an arrow function
addition = (a, b) => a + b;

// Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
}
console.log(doubleAddition(3, 4));

doubleAddition = (c, d) => addition(c, d) * 2;
console.log(doubleAddition(33, 25));

// Array
let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

// create a for loop to iterate through each name
function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
}

var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}

for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
 }

 

