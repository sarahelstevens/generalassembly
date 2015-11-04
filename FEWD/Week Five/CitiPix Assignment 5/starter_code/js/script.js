
$(document).ready(function(){
	//define city name string variables of user input
	var newYork = ['New York', 'NYC', 'New York City'],
		sanFransicso = ['San Fransisco', 'SF', 'Bay Area'],
		losAngeles = ['LA', 'LAX', 'Los Angeles'],
		austin = ['Austin', 'ATX'],
		sydney = ['Sydney', 'SYD'];
});


	//submit user input on button click
$('.submit-btn').click(function(event){
	event.preventDefault();
	//determine input value variable	
	var city = $('#city-type').val();
	//set if statments to display different images to match input
	if (city == 'New York' || city == 'NYC' || city == 'New York City'){
		$('body').removeClass();
		$('body').addClass('nyc');	
	} else if (city == 'San Fransisco' || city == 'SF' || city == 'Bay Area'){ 
		$('body').removeClass();
		$('body').addClass('sf');
	} else if (city == 'LA' || city == 'LAX' || city == 'Los Angeles'){ 
		$('body').removeClass();
		$('body').addClass('la');
	} else if (city == 'Austin' || city == 'ATX'){ 
		$('body').removeClass();
		$('body').addClass('austin');
	} else if (city == 'Sydney' || city == 'SYD'){ 
		$('body').removeClass();
		$('body').addClass('sydney');
	} 	
});

