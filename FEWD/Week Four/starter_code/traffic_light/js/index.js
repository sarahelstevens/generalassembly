$('#stopButton').click(illuminateRed);
$('#slowButton').click(illuminateOrange);
$('#goButton').click(illuminateGreen);

function illuminateRed(){
	clearLights();
	$('#stopLight').addClass('on');
}

function illuminateOrange(){
	clearLights();
	$('#slowLight').addClass('on');
}

function illuminateGreen(){
	clearLights();
	$('#goLight').addClass('on');
}

function clearLights(){
	$('.bulb').removeClass('on');
}