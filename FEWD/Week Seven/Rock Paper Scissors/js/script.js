

// $(document).ready(function(){
// });




$("#rock").on('click', playRock);


function playRock(){
	play('rock');
}

function play(humanPlay){
	// console.log(humanPlay);
	computerPlay = getComputerPlay();
	// console.log(computerPlay);

}

function getComputerPlay(){

	var plays = ["Rock", "Paper", "Scissors"];
	plays = plays[Math.floor((Math.random() * plays.length))];
	return plays;

}


// $("#rock").click(function(){
// 	event.preventDefault();
// 	var userPlay = event.target.value;

// if (userPlay = play){
// 	$(".result").append("tie.");
// 	// $(".output-you") += 1;
//  console.log(play);
// }
// else if (userPlay = "Rock"){ 
// 	// && play = "Paper"
// 	// $(".result").append("lose."),
// 	// || play = "Scissors"
// 	// $(".result").append("win!)
// };	

// else if userPlay == "Rock" && play == "Scissors"
// 	$('.result').append('win!');

// else if userPlay = "Paper" && play = "Rock"
// 	$('.result').append('win!');

// else if userPlay = "Scissors" && play = "Paper"
// 	$('.result').append('lose.');

// else if userPlay = "Paper" && play = "Rock"
// 	$('.result').append('win!');

// });




// GET user input on click
// GET random input from computer

// COMPARE user input vs computer input

// IF user input == computer input then display same result

// IF user input = paper 
// 	& computer = rock then computer wins
// 	& computer = scissors then user wins

// IF user input = rock 
// 	& computer = paper then computer wins
// 	& computer = scissors then user wins

// IF user input = scissors 
// 	& computer = rock then computer wins
// 	& computer = paper then user wins

// RESULT to output score

// SUM score 
// OUTPUT score
// DISPLAY message based on result