var main = function() {
  /* Push the body and the nav over by 285px over */
 var counter = 0;
  $('.icon-menu').click(function() 
  {
    counter = counter +1;
    $('#navigation_container').animate({
      left: "10em"
    }, 200);
    
    $('#nav_bar').animate(
    {left:"-7em"}, 200);
  
  });

  /* Then push them back */
 
  $('#navigation_container').click(function() {
    if( counter == 2)
  {
    $(this).animate({
      left: "0em"
    }, 200);

    $('#nav_bar').animate({
      left: "-800px"
    }, 200);
counter = 0;
}
  });
 

};


$(document).ready(main);