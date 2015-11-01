var input = $('input'),
	button = $('button'),
	span = $('span');



	button.click(function(){

		var celsius = input.val();
		// celsius = parseInt(celsius, 10)
		console.log(celsius);

		var fahrenheit = celsius*1.8 + 32;
		console.log(fahrenheit);

		console.log('button clicked');
		span.html(fahrenheit);
		var redness = 'rgb(' + celsius*10 + ',0,0)';
		console.log(redness);
		if (celsius >= 0){
			$('body').css('background-color',redness);
		};
	});

