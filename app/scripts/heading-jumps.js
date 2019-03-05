/* eslint-disable */

$(document).ready(function(){
  var introHeading = $('.intro__heading-wrapper');
  var introHeadingFluid_1 = introHeading.find(':nth-child(1)');
  var introHeadingFluid_2 = introHeading.find(':nth-child(2)');
  var introHeadingHeight = introHeading.height();
  var aboutBriefHeading = $('.about-brief__heading');
  var indicesHeading = $('.indices__heading');
  var logisticsBriefHeading = $('.logistics__brief__heading-wrapper');
  var logisticsBriefHeadingFluid_1 = logisticsBriefHeading
    .find(':nth-child(1)');
  var logisticsBriefHeadingFluid_2 = logisticsBriefHeading
    .find(':nth-child(2)');
  var transportBlock = $('.transport');
  var additionalServiceHeading = $('.additional-service__heading');
  var clientsHeading = $('.clients__heading');
  var customsAgentHeading = $('.customs--agent .customs__headline');
  var customsServiceHeading = $('.customs--service .customs__headline');

  var halfWindowHeight = window.innerHeight / 2;

  var introHeadingTrigger = 100;
  var aboutBriefTrigger = halfWindowHeight;
  var indicesTrigger = halfWindowHeight;
  var logisticsBriefTrigger = 100;
  var transportTrigger = halfWindowHeight;
  var additionalServiceTrigger = halfWindowHeight;
  var clientsTrigger = halfWindowHeight;
  var customsAgentTrigger = halfWindowHeight;
  var customsServiceTrigger = halfWindowHeight;

  if (window.innerWidth >= 1200) {
    introHeadingFluid_1.css({ height: introHeadingHeight + 10 });
    introHeadingFluid_2.css({ height: introHeadingHeight + 10 });
    // aboutBriefHeading.css({ opacity: '0' });
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
        // aboutBriefHeading.css({ opacity: '1' });
      } else {
        introHeading.css({ opacity: '1' });
        // aboutBriefHeading.css({ opacity: '0' });
      }

      // if (totalOffset >= indicesHeading.offset().top - indicesTrigger) {
      //   indicesHeading.css({ opacity: '1' });
      // } else {
      //   indicesHeading.css({ opacity: '0' });
      // }

      if (totalOffset >= logisticsBriefHeading.offset().top - logisticsBriefTrigger) {
        logisticsBriefHeadingFluid_1.css({
          position: 'fixed',
          top: `${logisticsBriefTrigger}px`,
        });
        logisticsBriefHeadingFluid_2.css({
          position: 'fixed',
          top: `${logisticsBriefTrigger}px`,
        });
      } else {
        logisticsBriefHeadingFluid_1.css({
          position: 'absolute',
          top: 'auto',
        });
        logisticsBriefHeadingFluid_2.css({
          position: 'absolute',
          top: 'auto',
        });
      }

      if (totalOffset >= logisticsBriefHeading.offset().top - logisticsBriefTrigger + 300) {
        logisticsBriefHeading.css({ opacity: '0' });
      } else {
        logisticsBriefHeading.css({ opacity: '1' });
      }

    //   if (totalOffset >= additionalServiceHeading.offset().top - additionalServiceTrigger) {
    //     additionalServiceHeading.css({ opacity: '1' });
    //   } else {
    //     additionalServiceHeading.css({ opacity: '0' });
    //   }

    //   if (totalOffset >= clientsHeading.offset().top - clientsTrigger) {
    //     clientsHeading.css({ opacity: '1' });
    //   } else {
    //     clientsHeading.css({ opacity: '0' });
    //   }

    //   if (totalOffset >= customsAgentHeading.offset().top - customsAgentTrigger) {
    //     customsAgentHeading.css({ opacity: '1' });
    //   } else {
    //     customsAgentHeading.css({ opacity: '0' });
    //   }

    //   if (totalOffset >= customsServiceHeading.offset().top - customsServiceTrigger) {
    //     customsServiceHeading.css({ opacity: '1' });
    //   } else {
    //     customsServiceHeading.css({ opacity: '0' });
    //   }
    // }

    // if (window.innerWidth >= 1920) {
    //   if (totalOffset >= transportBlock.offset().top - transportTrigger) {
    //     logisticsBriefHeading.css({ opacity: '0' });
    //   } else {
    //     logisticsBriefHeading.css({ opacity: '1' });
    //   }
    }
  });
});
