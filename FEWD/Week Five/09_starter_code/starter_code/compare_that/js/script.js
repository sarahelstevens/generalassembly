$('#submit').click(compare);

function compare(){								
	var comparison;						//define variables
	var a = $('#a').val();
	var b = $('#b').val();

	if (a < b){							//define conditions
		comparison = '<';
	} else if (a > b){
		comparison = '>';
	} else if (a === b){
		comparison = '===';
	} else {
		comparison = 'N/A';
	}

	$('#comparison').html(comparison);	//return value


}
