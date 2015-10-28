var total= 0;

function zero(){
	total = 0;
	$('#result').text(total);
}

function add5(){
	total = total + 5;
	$('#result').text(total);
}

function add10(){
	total = total + 10;
	$('#result').text(total);
}

function sub1(){
	total = total - 1;
	$('#result').text(total);
}


$('#zero').click(zero);
$('#add5').click(add5);
$('#add10').click(add10);
$('#sub1').click(sub1);