$(document).ready(function(){
	$("#signup").on("click", function(){
	alert("We're not ready for sign ups...yet.");	
	});


function readMore(){
	$('.hidden').slideDown();
	$('#read-less').show();
	$('#read-more').hide();
	event.preventDefault();
}

function readLess(){
	$('.hidden').slideUp();
	$('#read-more').show();
	$('#read-less').hide();
	event.preventDefault();
}

function learnMore(){
	$('#learn-more-text').slideDown();
	$('.learn-more').hide();
	event.preventDefault();
}

$('#read-more').click(readMore);
$('#read-less').click(readLess);
$('.learn-more').click(learnMore);

