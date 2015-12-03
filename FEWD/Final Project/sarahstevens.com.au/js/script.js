
$(document).ready(function(){

//Mobile Menu Slide Down


var h = window.innerHeight;
	nav = $('nav').height();

function toggleMobileNav(){
    $('nav, .mobile-nav').toggleClass('open');
    $('.mobile-nav').text('Close').css('color', '#FDB2B5');
    $('nav.open').css('height', h);

    if ($('.mobile-nav').hasClass('open') === false) {
    	$('.mobile-nav').text('Menu').css('color', '#333');
    	$('nav').css('height', nav);
    }
  }

  $('.mobile-nav').click(toggleMobileNav);

});




//Push footer to bottom of page if page is shorter than window height

// 	var h = window.innerHeight;
// 	body = $('section').height();
// 	nav = $('nav').height();
//  	header = $('header').height();
//  	footer = $('footer').height();

// if (body < h){
// 	$('section').css('height', h - (header + footer));
// } else if (body > h || body === h){
// 	//do nothing
// }
