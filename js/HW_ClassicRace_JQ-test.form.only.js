$(document).ready(function() {


//HANDLE FORM INPUTS: CAPTURE RACE PARAMETERS & LAUNCH RACE
$('#raceParams').on('submit', function() {
	var $finish = $('#raceParams input[id=distance]').val();
	var $userBet = $('#raceParams input[id=userBet]').val();
	var $betAmount = $('#raceParams input[id=betAmount]').val();
	alert('The race is on! ' + $finish + ' ' + $userBet + ' ' + $betAmount);
});




}) //Close document.ready


/*
<script>
//Activate JQuery object
</script>
*/