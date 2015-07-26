
// var main = function() 
// {
// 	$('.up_arrow').click(function()
// 	{
// 		$('body').animate({left: "500px"},200);

// 	});
	
// };

// $(document).ready(main);

var main = function() {
  /* Push the body and the nav over by 285px over */

 	$('.up_arrow').mouseenter(function(){
 		$(this).animate({bottom:"+=40px"},600);
 		$("#watch").animate({top:"-10px"},6);

 	});
  // var centers = $('body').width()/10-75;
 	$('.up_arrow').mouseleave(function(){
 		$(this).animate({bottom:"-=40px"},200);
 		$("#watch").animate({top:"100px"},500);

 	});

  $('.up_arrow').click(function() {
    $('.Title').fadeOut(600);
    $(' #page_cover').fadeOut(1200);
    // $('#navigation_container').animate({top:'-100px'});
    $('#navigation_container').fadeOut(600);
    $('.up_arrow').fadeOut(600, function(){
    	// $('#down_arrow').animate({bottom:"0px",left:$(window).width() / 2 -20,});
    	$('#down_arrow').animate({top:"0px",left:"10px"});
    });
   
    // $('.Title h1').animate({top:'-100px'});
  });
  
$('#down_arrow').click(function(){

	$('.Title').fadeIn(600);
    $(' #page_cover').fadeIn(1200);
    // $('#navigation_container').animate({top:'-100px'});
    $('#navigation_container').fadeIn(600);
    $('.up_arrow').fadeIn(600);
     $('#down_arrow').animate({left:"-100px"},"fast");


});
};


$(document).ready(main);