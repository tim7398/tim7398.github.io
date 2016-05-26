var main = function() {
  /* Push the body and the nav over by 285px over */

  $('.icon-menu').click(function() 
  {
    
    $('#navigation_container').animate({
      left: "10em"
    }, 200);
    
    $('#nav_bar').animate(
    {left:"-7em"}, 200);
    $('.close').show();

    $(this).hide();
  
  });

  /* Then push them back */
 
  $('.close').click(function() {
    
    $('#navigation_container').animate({
      left: "0em"
    }, 200);

    $(this).hide();
    $('.icon-menu').show();
    $('#nav_bar').animate({
      left: "-800px"
    }, 200);

  });
 

};


$(document).ready(main);