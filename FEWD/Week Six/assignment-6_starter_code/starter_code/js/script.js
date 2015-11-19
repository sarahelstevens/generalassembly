
$(document).ready(function(){
	// create array of city names  
	var cities = ['NYC','SF','LA','ATX','SYD'];
	// create for loop to iterate through cities array
	var text = '';
	var i;
	for (i = 0; i < cities.length; i++)
	//add option elements to dropdown menu
	{	var option = document.createElement('option');
		option.text = cities[i];
	//append city names to dropdown options
		$('#city-type').append(option);
	}
});

	//determine input selected and create event on menu change
	$('select').change(function(event){
	event.preventDefault();
	//create variable of user input	
	var cities = $('#city-type').val();

	//change background image depending on input value	
	if (cities == 'NYC'){
		$('body').attr('class','nyc');	
	} else if (cities == 'SF'){ 
		$('body').attr('class','sf');
	} else if (cities == 'LA'){ 
		$('body').attr('class','la');
	} else if (cities == 'ATX'){ 
		$('body').attr('class','austin');
	} else if (cities == 'SYD'){ 
		$('body').attr('class','sydney');	

	}

	//single line refactored version
	// $('body').attr('class', cities.toLowerCase());

		


});
