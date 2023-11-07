// Author - Byron James
// Date - 11/5/2023
// Lab 8 JavaScript file

//create an array of numbers
var numArray = [1, 2, 3, 4, 5];

//create a function that squares the inputed number
function squareNum(x) {
  var result = x * x
  return result;
};

//map the numbers in the array through the squareNum function, and use an anonymous function to take the numbers and add 27
console.log(numArray)

console.log(numArray.map(squareNum));

console.log(numArray.map(function(x){
	var result = x + 27
  return result;
}));