var lights = 'on';

function switchLights(){
	if(lights == 'on'){    				//condition goes inside brackets, has double equals
		$('body').addClass('dark');
		lights = 'off';
	} else{
		$('body').removeClass('dark');
		lights = 'on';
	}
}

$('#light_switch').click(switchLights);