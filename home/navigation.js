  $('.dropdown').mouseover(function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

  $('.dropdown').mouseleave(function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });