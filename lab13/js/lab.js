// author: Byron James
// date: 11/17/2023
// javascript file for lab 13

function numberWord() {
for (let num = 0; num < 201; num++) {
$("#output").append(num + " = ")
    if (num % 3 == 0){
        $("#output").append("Fizz")
    };
    if (num % 5 == 0){
        $("#output").append("Buzz")
    };
    if (num % 7 == 0){
        $("#output").append("Boom")
    };
$("#output").append("!<br>")
}
}

$('#button').click(numberWord())