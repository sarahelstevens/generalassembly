//Push footer to bottom of page if page is shorter than window height

$(document).ready(function(){

var h = window.innerHeight;
	body = $('section').height();

if (body < h){
	$('section').css('height', h-250);
} else if (body > h){
	$('section').css('none');
}

});

//Mobile Menu Slide Down
