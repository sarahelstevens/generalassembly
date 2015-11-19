

$(document).ready(function(){
var game = ['Rock', 'Paper', 'Scissors']
console.log(game);
});



$('.submit-btn').click(function(event){
	event.preventDefault();	
	var game = $('#submit-btn').val();


GET user input on click
GET random input from computer

COMPARE user input vs computer input

IF user input == computer input then display same result

IF user input = paper 
	& computer = rock then computer wins
	& computer = scissors then user wins

IF user input = rock 
	& computer = paper then computer wins
	& computer = scissors then user wins

IF user input = scissors 
	& computer = rock then computer wins
	& computer = paper then user wins

RESULT to output score

SUM score 
OUTPUT score
DISPLAY message based on result