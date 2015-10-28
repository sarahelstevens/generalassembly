$( document ).ready(function(){

    $( ".newsletter-signup .button" ).on( "click", function() {
        alert( "We're Not Ready For Sign-Ups...Yet." );
    });

    // Example Solution 1:
    // Added all the following classes and id's just for this example
    // This solution can only be used once on the page
    // For this example the .readless could be hidden with css, but we'll hide it
    // here so it's visible in Example 2.

    $('.readless').hide();

    //Your solution may have looked a lot like this:

    $('.readmore').click(function(){
        $('#show-on-click').slideDown();
        $('.readmore').hide();
        $('.readless').show();
        event.preventDefault();
    });
    $('.readless').click(function(){
        $('#show-on-click').slideUp();
        $('.readless').hide();
        $('.readmore').show();
        event.preventDefault();
    });
    $('.learnmore').click(function(){
        $('#learnmoretext').slideDown();
        $('.learnmore').hide();
        event.preventDefault();
    });

////////////////////////////////////////////////////////////////

    // More advanced solutions below for interest sake //

////////////////////////////////////////////////////////////////

    //Example Solution 2: One way of making the show/hide usable multiple times on the page

    // $(".toggle").click(function() {

    //     // If there is a hidden element above
    //     if ( $(this).prev().hasClass('hidden') ){

    //         // Show it
    //         $(this).prev().slideDown();

    //         // Hide clicked element
    //         $(this).hide();
    //     }

    //     // Else if toggle is within (now visible) hidden parent element
    //     // Could just be else, but else if ensures a condition is met
    //     else if ( $(this).parent().hasClass('hidden') ){

    //         //Hide parent
    //         $(this).parent().slideUp();

    //         //Show initial clicked .toggle
    //         $(this).parent().next().show();

    //     }

    //     // prevent default click action
    //     event.preventDefault();

    // });

////////////////////////////////////////////////////////////////

    // // Example Solution 3: with toggle and slideToggle

    // // The .readlink anchor inside the .hidden element isn't needed for this example,
    // // so will hide it (alternatively, it could be removed from the html)
    // $('.hidden .readlink').hide();


    // $('.toggle').click(function() {
    //     $(this).prev().slideToggle();
    //     if( $(this).hasClass('readlink') ){
    //         $(this).html() == 'Read Less &lt;' ? $(this).html('Read More &gt;') : $(this).html('Read Less &lt;');
    //     }
    //     else{
    //         $(this).toggle();
    //     }
    //     event.preventDefault();
    // });


});