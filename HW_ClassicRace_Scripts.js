<script>

//Define Racer object class
function Racer(name, speed, focus, odds) {
	this.name = name;
	this.speed = speed;
	this.focus = focus;
	this.odds = odds;
	this.distance = 0;
	this.isFocused = function() {
		return (Math.floor(Math.random() * 10) + 1) < this.focus;
	};
	this.advance = function() {
		if (this.isFocused()) {
			this.distance += this.speed;
		}
	};
	this.progressReport = function() {
		return this.name + " is at: " + this.distance;
	}
};

//Instantiate racer objects
var rabbit = new Racer("Randy Rabbit", 10, 3, 3);
var tortoise = new Racer("Tommy Tortoise", 3, 10, 2);
var robot = new Racer("Rodney Robot", 7, 4, 4);

//Get user to set race duration
var finish = prompt("How many meters should we race today? (enter a number)");


//Take user bet
var userBet;
var betAmount;

function placeBet() {
	var betOn = prompt("Welcome to today's race! Who will win? (enter number)\n1. Randy Rabbit (3:1 odds)\n2. Tommy Tortoise (2:1 odds)\n3. Rodney Robot (4:1 odds)");
	switch(betOn) {
		case '1':
			userBet = rabbit.name;
			betAmount = prompt("You like Randy Rabbit at 3:1. How much you wanna bet (enter number of dollars)?");
			break;
		case '2':
			userBet = tortoise.name;
			betAmount = prompt("You like Tommy Tortoise at 2:1. How much you wanna bet (enter number of dollars)?");			
			break;
		case '3':
			userBet = robot.name;
			betAmount = prompt("You like Rodney Robot at 4:1. How much you wanna bet (enter number of dollars)?");
			break;
		default:
			userBet = tortoise.name;
			betAmount = 50;
			alert("You will bet on Tommy Tortoise, as the fable advises. You have bet $50. Still glad you came?");
			break;
	}
};
placeBet();

//Run race
function runRace() {
	while (rabbit.distance < finish && tortoise.distance < finish && robot.distance < finish) {
		rabbit.advance();
		tortoise.advance();
		robot.advance();
		alert(rabbit.progressReport() + "\n" + tortoise.progressReport() + "\n" + robot.progressReport());
	}
};
runRace();

//Conclude race business
var winner;

function declareWinner() {
	if (rabbit.distance > (tortoise.distance || robot.distance)) {
		winner = rabbit;
		}
		else if (tortoise.distance > (rabbit.distance || robot.distance)) {
			winner = tortoise;
		} 
		else {
			winner = robot;
		}
		alert("We have a winner! Hope you bet on " + winner.name + " who won with " + winner.distance + "!!\n");
};
declareWinner();

var payoff;

function payoffBet() {
	if (winner.name == userBet) {
		payoff = winner.odds * betAmount;
		alert("Nice betting, you win!\nYou bet: $" + betAmount + "\nYou win: " + "$" + payoff);
	}
	else {
		alert("Sorry, you bet on " + userBet + ". You lose.\nBetter luck next time!");
	}
};
payoffBet();


</script>