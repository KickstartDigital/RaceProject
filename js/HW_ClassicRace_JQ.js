//Activate JQuery object
$(document).ready(function() {

//CREATE RACER CLASS
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
		return this.distance;
		//change to update mileage counter box
		//OLD CODE: return this.name + " is at: " + this.distance;
		//});
	}
};

//INSTANTIATE RACER OBJECTS [properties via input?]
var rabbit = new Racer("Randy Rabbit", 10, 3, 3);
var tortoise = new Racer("Tommy Tortoise", 3, 10, 2);
var robot = new Racer("Rodney Robot", 7, 4, 4);


//FUNCTION TO ADVANCE RACERS


function runRace($finish) {

	while (rabbit.distance < $finish && tortoise.distance < $finish && robot.distance < $finish) {
		// setTimeout(function() {


			
			//alert("The race duration is " + $finish + " miles.");
			//$('#progRandy').html(rabbit.progressReport());

			/*function() {
				var padding = 'padding-left';
				var advance = '50';
				$('#randyTrack').css(padding, advance);
			};*/

			rabbit.advance();
			tortoise.advance();
			robot.advance(); 
 			
			$('#randyID').delay(1000).queue( function(next){ 


				$(this).css('padding-left', '+=50');

				$('#progRandy').html(rabbit.progressReport());
				$('#progTommy').html(tortoise.progressReport());
				$('#progRodney').html(robot.progressReport());

    		next();
    	});




			//Next: write progress reports to HTML container progRandy, progTommy, progRodney...
			//OLD CODE: alert(rabbit.progressReport() + "\n" + tortoise.progressReport() + "\n" + robot.progressReport());

			//Create milepost var and increment for each turn then show in HTML(?)

		// }, 2000);

	};
};




//FUNCTION TO DECLARE WINNER
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
		//alert("We have a winner! Hope you bet on " + winner.name + " who won with " + winner.distance + "!!\n");
		//Next: write to HTML container #messageArea...
};

//FUNCTION TO PAYOUT BET
var payout;

function payoutBet() {
	if (winner.name == $userBet) {
		payout = winner.odds * $betAmount;
		//alert("Nice betting, you win!\nYou bet: $" + $betAmount + "\nYou win: " + "$" + payout);
	}
	else {
		//alert("Sorry, you bet $" + $betAmount + " on " + $userBet + ". You lose.\nBetter luck next time!");
	}
};

//CAPTURE RACE PARAMETERS & LAUNCH RACE (VIA FORM)
$('#raceParams').on('submit', function(e) {
	$finish = $('#raceParams input[id=distance]').val();
	$userBet = $('#raceParams input[name=userBet]:checked').val();
	$betAmount = $('#raceParams input[id=betAmount]').val();
	//alert('The race is on! You bet $' + $betAmount + ' on ' + $userBet + ' to win in ' + $finish + ' miles. Good luck!');
	runRace($finish);
	declareWinner();
	payoutBet();
	e.preventDefault();
});

}) //Close document.ready

/* PSEUDOCODE OUTLINE+++++++++++++++++++++++++++++++++++++++

//CREATE RACER CLASS
  * name
  * speed
  * focus
  * odds
  > advance (distance + speed)
  > progressReport

//INSTANTIATE RACER OBJECTS [properties via input?]
	* randy (props)
	* tommy (props)
	* rodney (props)

//CAPTURE RACE PARAMETERS
	# raceDistance (miles)
	# betOn (racer)
	# betAmount (amount)

//RUN RACE & UPDATE DASHBOARD
	> while all racers progress < raceDistance,
			IF focused --> advance (each racer)
	> print progress (each racer)
		* write to counter (distance += speed)
		~ padding-left: '+=speed'

//DECLARE WINNER
	IF rabbit.distance > tortoise OR robot --> winner = rabbit
	ELSEIF tortoise.distance > rabbit or robot --> winner = tortoise
	ELSE robbot = winner
	* alert: we have a winner + 'winner'

//SETTLE BET
	IF betOn = winner
		calculate payout (odds * betAmount)
		alert 'you won' + payout
	ELSE alert 'sorry, you bet on' + betOn + 'you lose, better luck next time'

++++++++++++++++++++++++++++++++++++++++++PSEUDOCODE OUTLINE */


/* Retired code+++++++++++++++++++++++++++++++++++++++

var finish = prompt("How many meters should we race today? (enter a number)");
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

<script>
</script>


++++++++++++++++++++++++++++++++++End retired code */


