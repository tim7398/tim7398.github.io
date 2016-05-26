var main = function() {
  /* Push the body and the nav over by 285px over */

  $('.icon-menu').click(function() 
  {
    
    $('#nav_bar').show();
    $('.close').show();

    $(this).hide();
  
  });

  /* Then push them back */
 
  $('.close').click(function() {

    $(this).hide();
    $('.icon-menu').show();
    $('#nav_bar').hide();

  });
 

};


$(document).ready(main);