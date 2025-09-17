// Project5 — Comparisons & Type Coercion

// variable with a Number data type
var x = 42;

// printing the data type of the variable x
document.write(typeof x);
document.write("<br>");

// an expression combining a string and a number
document.write("20" + 7); // coerces into string "207"
document.write("<br>");

// utilizing the == operator
document.write(15 == "15"); // true, value equal after coercion
document.write("<br>");

// utilizing the === operator
let a = 8;
let b = "8";
document.write(a === b); // false, number !== string
document.write("<br>");

// utilizing the > and && operators
document.write(12 > 6 && 5 > 2); // true && true → true
document.write("<br>");

// utilizing the < and || operators
document.write(3 < 1 || 9 < 20); // false || true → true
document.write("<br>");

// utilizing the ! operator
function not_Function() {
  document.getElementById("Result").innerHTML = !(100 === 200); // true
}