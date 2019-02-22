/* eslint-disable */

$(document).ready(function(){
  var crumbsListEurope = $('.logistics-crumbs__list--europe');
  var crumbsListAsia = $('.logistics-crumbs__list--asia');
  var crumbsListAmerica = $('.logistics-crumbs__list--america');

  crumbsListEurope.slick({
    arrows: false,
    infinite: false,
    slidesToScroll: 2,
    variableWidth: true,
  });
  crumbsListAsia.slick({
    arrows: false,
    infinite: false,
    slidesToScroll: 2,
    variableWidth: true,
  });
  crumbsListAmerica.slick({
    arrows: false,
    infinite: false,
    slidesToScroll: 1,
    variableWidth: true,
  });
});
