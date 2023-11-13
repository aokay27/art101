// Author - Byron James
// Date - 11/12/2023
// Lab 9 Javascript file

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
    $("#challenge").toggleClass("special");
});