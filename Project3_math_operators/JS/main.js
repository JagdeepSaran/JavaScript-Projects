// Project3_math_operators Assignment
// This file defines JavaScript functions for different math operators
// Each function updates the HTML page when clicked

// Function for Addition
function addition() {
    var add = 8 + 12; // add two numbers
    document.getElementById("Add").innerHTML = "8 + 12 = " + add; // print result
}

// Function for Subtraction
function subtraction() {
    var sub = 25 - 9; // subtract two numbers
    document.getElementById("Sub").innerHTML = "25 - 9 = " + sub; // print result
}

// Function for Multiplication
function multiplication() {
    var mult = 7 * 6; // multiply two numbers
    document.getElementById("Mlt").innerHTML = "7 × 6 = " + mult; // print result
}

// Function for Division
function division() {
    var div = 56 / 8; // divide two numbers
    document.getElementById("Div").innerHTML = "56 ÷ 8 = " + div; // print result
}

// Function for Modulus (remainder)
function modulus_operator() {
    var mod = 29 % 5; // find remainder
    document.getElementById("Mod").innerHTML = "29 ÷ 5 leaves a remainder of " + mod;
}

// Function using Math.random()
function randomNumber() {
    var ran = Math.floor(Math.random() * 100); // random number 0–99
    document.getElementById("Ran").innerHTML = "Random number (0–99): " + ran;
}

// Function for Increment
function Increment() {
    var value = document.getElementById("IncrementText").innerHTML; // get current text
    value = Number(value) + 1; // add one
    document.getElementById("IncrementText").innerHTML = value; // print result
}

// Function for Decrement
function Decrement() {
    var value = document.getElementById("DecrementText").innerHTML; // get current text
    value = Number(value) - 1; // subtract one
    document.getElementById("DecrementText").innerHTML = value; // print result
}