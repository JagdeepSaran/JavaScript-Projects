// Project 2 - Functions & Operators

// Function Assignment part
function showMessage() {
  // Assign two variables
  let part1 = "Hello from Project 2";
  let part2 = " — functions in JavaScript are fun!";

  // Concatenate
  let full = part1 + part2;

  // Display in paragraph with id="Message"
  document.getElementById("Message").innerHTML = full;
  document.getElementById("Message").style.fontWeight = "600";
}

// Operator Assignment part
function showOperator() {
  // Two strings to concatenate
  let str1 = "Operators allow us to ";
  let str2 = "combine strings easily!";

  // Use + operator
  let result = str1 + str2;

  // Display in paragraph with id="OperatorResult"
  document.getElementById("OperatorResult").innerHTML = result;
  document.getElementById("OperatorResult").style.color = "blue";
}