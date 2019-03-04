/* eslint-disable */

$(document).ready(function(){
  var introHeading = $('.intro__heading-wrapper');
  var introHeadingFluid_1 = introHeading.find(':nth-child(1)');
  var introHeadingFluid_2 = introHeading.find(':nth-child(2)');
  var introHeadingHeight = introHeading.height();


  var aboutBriefHeading = $('.about-brief__heading');
  var aboutBriefHeadingFluid = aboutBriefHeading.find(':first-child');

  var introHeadingTrigger = 100;
  var aboutBriefTrigger = 500;

  if (window.innerWidth >= 1200) {
    introHeadingFluid_1.css({ height: introHeadingHeight });
    introHeadingFluid_2.css({ height: introHeadingHeight });
    aboutBriefHeading.css({ opacity: '0' });
  }

  $(window).scroll(function(){
    if (window.innerWidth >= 1200) {
      var totalOffset = $(document).scrollTop();

      if (totalOffset >= introHeading.offset().top - introHeadingTrigger) {
        introHeadingFluid_1.css({
          position: 'fixed',
          top: `${introHeadingTrigger}px`,
        });
        introHeadingFluid_2.css({
          position: 'fixed',
          top: `${introHeadingTrigger}px`,
        });
      } else {
        introHeadingFluid_1.css({
          position: 'absolute',
          top: 'auto',
        });
        introHeadingFluid_2.css({
          position: 'absolute',
          top: 'auto',
        });
      }

      if (totalOffset >= aboutBriefHeading.offset().top - aboutBriefTrigger) {
        introHeading.css({ opacity: '0' });
        aboutBriefHeading.css({ opacity: '1' });
      } else {
        introHeading.css({ opacity: '1' });
        aboutBriefHeading.css({ opacity: '0' });
      }
    }
  });
});
