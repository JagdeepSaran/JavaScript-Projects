// main.js - Project 7: Scope, Time, Function

// Assigning local and global variables
var y = 25; // global variable

function Multiply_Local() {
    var y = 5; // local variable
    document.write("Local calculation (5 * " + y + "): " + (5 * y) + "<br>");
}

function Multiply_Global() {
    document.write("Global calculation (2 * " + y + "): " + (2 * y) + "<br>");
    console.log(y); // debugging which variable is being used
}

// Call both to demonstrate difference
Multiply_Local();
Multiply_Global();


// A function that includes an if statement
function Check_Time() {
    if (new Date().getHours() < 12) {
        document.getElementById("DayMessage").innerHTML = "Good morning! It’s before noon.";
    } else {
        document.getElementById("DayMessage").innerHTML = "Good afternoon! It’s past noon.";
    }
}


// Function with intentional error to debug
function Guess_Number() {
    var num = document.getElementById("userGuess").value;

    // Intentional error: variable 'reslt' is misspelled
    if (num == 7) {
        reslt = "Lucky number 7!"; // should be 'result'
    } else {
        reslt = "Not 7, try again!";
    }

    // Debug using console.log
    console.log(reslt);

    // This will show undefined in browser because of the typo
    document.getElementById("GuessResult").innerHTML = reslt;
}


// Time_function equivalent
function Show_Clock() {
    var currentTime = new Date().toLocaleTimeString();
    document.getElementById("Clock_Result").innerHTML = "The current time is " + currentTime;
}