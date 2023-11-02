// Author - Byron James
// Date - 11/1/2023
// Lab 7 JavaScript file

function sortUsername() {
    // get input from user
    var username = window.prompt("Input name for improvement.");
    // split input into an array
    var usernameArray = username.split("");
    // sort the array
    var sortedArray= usernameArray.sort();
    // turn array back into a string
    var sortedUsername = sortedArray.join("");
    // return result
    return sortedUsername;
}

//output
document.writeln("New and improved name: " + sortUsername(), "<br>");