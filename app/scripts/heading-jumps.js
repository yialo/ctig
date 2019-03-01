/* eslint-disable */

// document.documentElement.scrollTop

$(document).ready(function(){
  var page_header = $('.page__header');
  var introHeading = $('.intro__heading-wrapper');
  var introHeadingWidth = introHeading.find(':first-child').width();
  var introHeadingHeight = introHeading.find(':first-child').height() + 10;

  var aboutBriefHeading = $('.about-brief__heading');
  var aboutBriefHeadingWidth = aboutBriefHeading.find(':first-child').width();
  var aboutBriefHeadingHeight = aboutBriefHeading
    .find(':first-child').height() + 10;

  var blendingBlockTrigger = 100;
  var regularBlockTrigger = 500;

  if (window.innerWidth >= 1200) {
    introHeading.children().css({
      width: introHeadingWidth,
      height: introHeadingHeight,
    });
    aboutBriefHeading.children().css({
      width: aboutBriefHeadingWidth,
      height: 0,
    });
  }

  $(window).scroll(function(){
    if (window.innerWidth >= 1200) {
      var totalOffset = $(document).scrollTop();

      if (totalOffset >= introHeading.offset().top - blendingBlockTrigger) {
        introHeading.children().css({
          position: 'fixed',
          top: `${blendingBlockTrigger}px`,
          width: introHeadingWidth,
        });
      } else {
        introHeading.children().css({
          position: 'absolute',
          top: 'auto',
          width: 'auto',
        });
      }

      if (totalOffset >= aboutBriefHeading.offset().top - regularBlockTrigger) {
        introHeading.children().css({ height: 0 });
        aboutBriefHeading.children().css({ height: aboutBriefHeadingHeight });
      } else {
        introHeading.children().css({ height: introHeadingHeight });
        aboutBriefHeading.children().css({ height: 0 });
      }
    }
  });
});
