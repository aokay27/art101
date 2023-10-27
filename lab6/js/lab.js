// Lab 6 - Arrays and Objects
// Author: Byron James
// Date: 10/27/2023

// Define variables
var myTransport = ["legs", "bus"];

var myMainRide = {
    make: "Tesla",
    model: "Model 3",
    color: "white",
    year: 2019,
    age: function() {return 2023 - this.year;
    }
}

// output
document.writeln("Transport I use: " + myTransport[0] + ", " + myTransport[1] + "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

document.writeln("I mainly take the " + myTransport[1] + " to get to school, but I ride around other places in my " + myMainRide.make + " " + myMainRide.model + ".")