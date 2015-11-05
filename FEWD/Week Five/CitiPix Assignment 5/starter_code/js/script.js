
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

	city = city.toLowerCase().trim();

	console.log(city);

	//set if statments to display different images to match input
	if (city == 'new york' || city == 'nyc' || city == 'new york city'){
		$('body').attr('class','nyc');	
	} else if (city == 'san fransisco' || city == 'sf' || city == 'bay area'){ 
		$('body').attr('class','sf');
	} else if (city == 'la' || city == 'lax' || city == 'los angeles'){ 
		$('body').attr('class','la');
	} else if (city == 'austin' || city == 'atx'){ 
		$('body').attr('class','austin');
	} else if (city == 'sydney' || city == 'syd'){ 
		$('body').attr('class','sydney');	
	} 
});

