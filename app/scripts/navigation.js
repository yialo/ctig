'use strict';

const page = document.body;
const navOpenerButton = page
  .querySelector('.navigation-toggle__button--opener');
const navCloserButton = page
  .querySelector('.navigation-toggle__button--closer');

const onNavOpenerClick = function navOpenerClickHandler() {
  page.classList.add('nav-is-shown');
  navCloserButton.focus();
};

const onNavCloserClick = function navCloserClickHandler() {
  page.classList.remove('nav-is-shown');
  navOpenerButton.focus();
};

navOpenerButton.addEventListener('click', onNavOpenerClick);

navCloserButton.addEventListener('click', onNavCloserClick);
