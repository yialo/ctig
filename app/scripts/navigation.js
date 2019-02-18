'use strict';

const page = document.body;
const navOpenerButton = page
  .querySelector('.navigation-toggle__button--opener');
const navCloserButton = page
  .querySelector('.navigation-toggle__button--closer');

const onNavOpenerClick = function navOpenerClickHandler() {
  page.classList.add('is-nav-shown');
  navCloserButton.focus();
};

const onNavCloserClick = function navCloserClickHandler() {
  page.classList.remove('is-nav-shown');
  navOpenerButton.focus();
};

navOpenerButton.addEventListener('click', onNavOpenerClick);

navCloserButton.addEventListener('click', onNavCloserClick);
