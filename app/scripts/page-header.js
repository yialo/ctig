/* eslint-disable */

$(document).ready(function(){
  var KEYCODE_ESC = 27;
  var KEYCODE_SPACE = 32;
  var navOpenTimer = 1000;
  var page = $('.page');
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

  /* Event handlers */

  var openNavigation = function () {
    page.addClass('is-nav-shown');
    navCloser.focus();
  };

  var closeNavigation = function () {
    page.removeClass('is-nav-shown is-certificates-shown');
    navOpener.focus();
  };

  var openCertificates = function () {
    page.addClass('is-certificates-shown');
  };

  var closeCertificates = function () {
    page.removeClass('is-certificates-shown');
  };

  var openCalculator = function () {
    page.addClass('is-modal-shown');
    calcCloser.focus();
  };

  var closeCalculator = function () {
    page.removeClass('is-modal-shown is-product-list-shown');
  };

  var openProductList = function () {
    page.addClass('is-product-list-shown');
    $('.product-list__link--current').focus();
  };

  var closeProductList = function () {
    page.removeClass('is-product-list-shown');
    calcCloser.focus();
  };

  /* Event listeners */

  navOpener.click(function(){
    openNavigation();
  });

  navCloser.click(function(){
    closeNavigation();
  });

  certsOpener.click(function(evt){
    evt.preventDefault();
    openCertificates();
  });
  certsCloser.click(function(evt){
    evt.preventDefault();
    closeCertificates();
  });

  calcOpener.click(function(evt){
    evt.preventDefault();
    openCalculator();
  });
  calcOpener.keydown(function(evt){
    if (evt.keyCode === KEYCODE_SPACE) {
      evt.preventDefault();
      openCalculator();
    }
  });
  calcCloser.click(function(){
    if (page.hasClass('is-modal-shown')) {
      closeCalculator();
    }
  });
  calcOverlay.click(function(){
    if (page.hasClass('is-modal-shown')) {
      closeCalculator();
    }
  });

  productListOpener.click(function(evt){
    evt.preventDefault();
    openProductList();
  });

  productListCloser.click(function(evt){
    evt.preventDefault();
    closeProductList();
  });

  var currentProductValue = '';

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
        closeProductList();
      } else if (page.hasClass('is-modal-shown')) {
        evt.preventDefault();
        page.removeClass('is-modal-shown');
      } else if (page.hasClass('is-certificates-shown')) {
        evt.preventDefault();
        closeCertificates();
      } else if (page.hasClass('is-nav-shown')) {
        evt.preventDefault();
        page.removeClass('is-nav-shown');
      }
    }
  });
});

