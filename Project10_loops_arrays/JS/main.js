// main.js

// A function using a WHILE loop: count by 2s from 2 to 20
function countByTwos() {
  let output = ""; // holds the text we'll show on the page
  let n = 2; // starting number
  while (n <= 20) { // loop runs while condition is true
    output += n + (n < 20 ? " • " : "");
    n += 2; // increase by 2 each time
  }
  document.getElementById("Count_By_Twos").innerHTML = output;
}

// Data for our FOR loop
const cities = ["Toronto", "Brampton", "Windsor", "Hamilton", "Ottawa", "Detroit"];

// A function using a FOR loop: list each city on a new line
function showCities() {
  let list = "";
  for (let i = 0; i < cities.length; i++) {
    list += (i + 1) + ". " + cities[i] + "<br>";
  }
  document.getElementById("City_List").innerHTML = list;
}

// A function that utilizes an ARRAY: pick one snack and show it
function snackTime() {
  let snacks = []; // create an empty array
  snacks[0] = "Chips";
  snacks[1] = "Trail mix";
  snacks[2] = "Granola bar";
  snacks[3] = "Fruit";

  document.getElementById("Snack").innerHTML =
    "Today's snack is: " + snacks[2] + "."; // uses element at index 2
}

// Creating an OBJECT using the let keyword
function truckInfo() {
  let truck = {
    make: "Volvo",
    model: "VNL 760",
    year: 2020,
    color: "White",
  };

  document.getElementById("Truck").innerHTML =
    `My ${truck.color} ${truck.make} ${truck.model} (${truck.year}).`;
}