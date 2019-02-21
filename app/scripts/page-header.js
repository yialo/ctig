/* eslint-disable */

$(document).ready(function(){
  var page = $('.page');
  var navOpener = $('.navigation-toggle__button--opener');
  var navCloser = $('.navigation-toggle__button--closer');
  var certsOpener = $('.navigation__link--certificates');
  var certsCloser = $('.certificates__return-button');
  var calcOpener = $('.calculator-toggle__button');
  var calcCloser = $('.modal__close-button');

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
});
