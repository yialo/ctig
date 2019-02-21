/* eslint-disable */

$(document).ready(function(){
  var KEYCODE_ESC = 27;
  var page = $('.page');
  var navOpener = $('.navigation-toggle__button--opener');
  var navCloser = $('.navigation-toggle__button--closer');
  var certsOpener = $('.navigation__link--certificates');
  var certsCloser = $('.certificates__return-button');
  var calcOpener = $('.calculator-toggle__button');
  var calcCloser = $('.modal__close-button');
  var calcOverlay = $('.modal__overlay');

  navOpener.click(function(){
    page.addClass('is-nav-shown');
    navCloser.focus();
  });
  navCloser.click(function(){
    page.removeClass('is-nav-shown is-certificates-shown');
    navOpener.focus();
  });

  certsOpener.click(function(evt){
    evt.preventDefault();
    page.addClass('is-certificates-shown');
  });
  certsCloser.click(function(evt){
    evt.preventDefault();
    page.removeClass('is-certificates-shown');
  });

  calcOpener.click(function(evt){
    evt.preventDefault();
    page.addClass('is-modal-shown');
  });
  calcCloser.click(function(){
    page.removeClass('is-modal-shown');
  });
  calcOverlay.click(function(){
    if (page.hasClass('is-modal-shown')) {
      page.removeClass('is-modal-shown');
    }
  });

  $(window).keydown(function(evt){
    if (evt.keyCode === KEYCODE_ESC) {
      if (page.hasClass('is-modal-shown')) {
        evt.preventDefault();
        page.removeClass('is-modal-shown');
      } else if (page.hasClass('is-certificates-shown')) {
        evt.preventDefault();
        page.removeClass('is-certificates-shown');
      } else if (page.hasClass('is-nav-shown')) {
        evt.preventDefault();
        page.removeClass('is-nav-shown');
      }
    }
  });
});
