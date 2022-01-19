// Create variables to hold the numbers and message
var num1 = 5;
var num2 = 7;
var total = 12;

// Create the welcome message
let message = "Welcome to my calculator";

// Create the formula by concatenating the variables
let message2 = "The sum of " + num1 + " + " + num2 + " is : " + total

// Get the element with an ID of greeting
let elGreeting = document.getElementById('greeting');

// Replace the content of the element
elGreeting.textContent = message;

// Get the element with an ID of formula
let elFormula = document.getElementById('formula');

// Replace the content of the element
elFormula.textContent = message2;