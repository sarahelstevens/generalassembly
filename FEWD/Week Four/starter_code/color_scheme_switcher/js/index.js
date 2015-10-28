
$('#grayButton').click(function(){
    switchGray();
});

$('#whiteButton').click(function(){
    switchWhite();
});

function switchGray() {
    $('body').attr('class','gray');
}

function switchWhite() {
    $('body').attr('class','white');
}