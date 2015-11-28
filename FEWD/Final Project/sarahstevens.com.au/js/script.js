//Push footer to bottom of page if page is shorter than window height

var h = window.innerHeight;
	body = $('section').height();
	nav =$('nav').height();

console.log(body);

if (body < h){
	$('section').css('height', h-600);
} else if (body > h || body === h){
	//do nothing
}

//Mobile Menu Slide Down

function toggleMobileNav(){
    $('nav, .mobile-nav').toggleClass('open');
    $('.mobile-nav').text('Close').css('color', '#FDB2B5');
    $('nav.open').css('height', h);

    if ($('.mobile-nav').hasClass('open') === false) {
    	$('.mobile-nav').text('Menu').css('color', '#333');
    	$('nav').css('height', nav);
    }

  }

$(document).ready(function(){
  $('.mobile-nav').click(toggleMobileNav);
});


//