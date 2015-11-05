//error thrown example
$('body').append('<h1>Hi world!</h1>');


//console.log variable example
var stringOfNames='';
['Bob','Joe'].forEach(function(element){
    stringOfNames+=element+',';
    console.log(stringOfNames);
});

//console.log example, log each of the pies and the index before the switch
var pies=['Cherry','Pumpkin','Banana','a','Rhubarb'];
$('body').append('There are '+pies.length+' total pies.<br>');

pies.forEach(function(element,index){
    console.log(element, index); //insert breakpoint on line number with chrome, play
    switch(element){
        case 'Cherry': 
            content = index+1+') '+element+': Yum!<br>';
            break;
        case 'Rhubarb': 
            content = index+1+') '+element+': Yuck<br>';
            break;
        case 'Banana':
        case 'Pumpkin': 
            content = index+1+') '+element+': meh<br>';
            break;
    }
    
    $('body').append(content);
});

//breakpoint example, put inside the function
function doSomething(){
    $('body').append('<p>Paragraph</p>');
    debugger;
    //console.log(myThing);
}
doSomething();

