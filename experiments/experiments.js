$("#namequestion").append("<button id='my-button'>What's your name?</button>");

$("#my-button").click(function(){
    var name = prompt("Name please:")
    $('#title').html('Hello, ' + name + "!")
});