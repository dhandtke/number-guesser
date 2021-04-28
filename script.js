var button = document.getElementById("enter");
var random = (Math.ceil(Math.random()* 10));
var answer = document.getElementById("userInput");

console.log(random);

	function randomNumber(){
	if (answer.value > 10) {
		alert("Your answer is too high!")
	} else if (answer.value < 1) {
		alert("Your answer is too low!")
	} else if (answer.value == random) { 
	 document.getElementById("result").innerHTML = "You Guessed Correctly!";
	 document.getElementById("picture").style.backgroundImage="url('winner.jpg')";
} else {
	 document.getElementById("result").innerHTML = "You Didn't Guess Correctly Loser!"; 
   	 document.getElementById("picture").style.backgroundImage="url('loser.png')"; 
}
}

function outOfRange() {
	if (answer.value > 10) {
		alert("Your answer is too high!")
	} else if (answer.value < 1){
		alert("Your answer is too low!")
	}
}

button.addEventListener('click', randomNumber,)