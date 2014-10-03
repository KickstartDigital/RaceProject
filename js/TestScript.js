$(document).ready(function() {

$('#test').on('submit', function() {

	$b1 = $('#box1').val();
	$b2 = $('#box2').val();
	$b3 = $('#box3').val();

	alert($b1 + ' ' + $b2 + ' ' + $b3);
	//console.log(box2);
	//console.log(box3);
	//event.preventDefault();
});


});