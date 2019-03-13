/* eslint-disable */

$(document).ready(function(){
  $('.product-list__wrapper').mCustomScrollbar({
    axis: 'y',
    alwaysShowScrollbar: '1',
  });
});

$(document).ready(function(){
  if (window.innerWidth >= 1200) {
    $('.navigation__list-wrapper').mCustomScrollbar({
      axis: 'y',
      alwaysShowScrollbar: '0',
    });
  }
});
