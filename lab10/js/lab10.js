// Author: Byron James
// Date: 11/16/2023
// Javascript file for lab 10

//create random text generation function

function generateRandomText() {
    const text = "Hi, I'm SpongeBob.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    return text.slice(randStart, randStart + randLen);
}

//add button that adds the text to the results section
$("#make-convo").click(function(){
    const newText = generateRandomText();
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});

