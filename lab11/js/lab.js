// Author: Byron James
// Date: 11/19/2023
// Javascript file for lab 11

// sort the characters of a string in alphabetical order
function sortString(inputString) {
    // convert the string to an array and back again in order to sort
    return inputString.split('').sort().join('');
}

// event listener for button
$("#submit").click(function(){
    //get value of input field
    const username = $("#username").val();
    //sort the name
    usernameSorted = sortString(username);
    //append a new div to the output
    $("#output").html('<div class="text"><p>' + "Here, we fixed it for you: " + usernameSorted + '</p></div>');
});
