// Function that creates a dictionary (object) and displays a value
function my_dictionary() {
    // Create an object named car with key/value pairs
    var car = {
        Make: "Toyota",
        Model: "Camry",
        Year: "2009",
        Color: "Silver",
        Fuel: "Gasoline"
    };

    // Delete statement removes the "Fuel" key/value pair
    delete car.Fuel;

    // Output the value of the deleted key to HTML (will return 'undefined')
    document.getElementById("dictionary").innerHTML = car.Fuel;
}
