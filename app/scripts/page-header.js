/* eslint-disable */

$(document).ready(function(){
  var KEYCODE_ESC = 27;
  var KEYCODE_SPACE = 32;
  var navOpenTimer = 1000;
  var page = $('.page');
  var headerPopup = page.find('.header-popup');
  var navOpener = page.find('.navigation-toggle__button--opener');
  var navCloser = page.find('.navigation-toggle__button--closer');
  var certsOpener = page.find('.navigation__link--certificates');
  var certsCloser = page.find('.certificates__return-button');
  var calcOpener = page.find('.calculator-toggle__button');
  var calcCloser = page.find('.modal__close-button');
  var calcOverlay = page.find('.modal__overlay');
  var productList = page.find('.modal__product-list');
  var productListItems = productList.find('.product-list__items');
  var products = productListItems.find('.product-list__link').toArray();
  var productListOpener = page.find('.request-text-formgroup__field--readonly');
  var productListCloser = productList.find('.product-list__return-link');
  var productListChecker = productList.find('.product-list__select-button');

  var productClickHandler = function (element) {
    element.addEventListener('click', function(evt) {
      evt.preventDefault();
      for (var i = 0; i < products.length; i++) {
        products[i].classList.remove('product-list__link--current');
        products[i].parentElement.classList
          .remove('product-list__item--current');
      }
      evt.target.classList.add('product-list__link--current');
      evt.target.parentElement.classList
        .add('product-list__item--current');
    });
  };

  for (var i = 0; i < products.length; i++) {
    productClickHandler(products[i]);
  }

  navOpener.click(function(){
    page.addClass('is-nav-shown');
    navCloser.focus();
  });

  navCloser.click(function(){
    page.removeClass('is-nav-shown is-certificates-shown');
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
    calcCloser.focus();
  });
  calcOpener.keydown(function(evt){
    if (evt.keyCode === KEYCODE_SPACE) {
      evt.preventDefault();
      page.addClass('is-modal-shown');
      calcCloser.focus();
    }
  });
  calcCloser.click(function(){
    if (page.hasClass('is-modal-shown')) {
      page.removeClass('is-modal-shown is-product-list-shown');
    }
  });
  calcOverlay.click(function(){
    if (page.hasClass('is-modal-shown')) {
      page.removeClass('is-modal-shown is-product-list-shown');
    }
  });

  productListOpener.click(function(evt){
    evt.preventDefault();
    page.addClass('is-product-list-shown');
    $('.product-list__link--current').focus();
  });

  var currentProductValue = '';

  productListCloser.click(function(evt){
    evt.preventDefault();
    page.removeClass('is-product-list-shown');
    calcCloser.focus();
  });

  productListChecker.click(function(evt){
    currentProductValue = productListItems
    .find('.product-list__link--current').text();
    page.removeClass('is-product-list-shown');
    productListOpener.val(currentProductValue);
  });

  $(window).keydown(function(evt){
    if (evt.keyCode === KEYCODE_ESC) {
      if (page.hasClass('is-product-list-shown')) {
        evt.preventDefault();
        page.removeClass('is-product-list-shown');
        calcCloser.focus();
      } else if (page.hasClass('is-modal-shown')) {
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

