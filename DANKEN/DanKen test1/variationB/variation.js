(function () {
  try {
    var debug = 0;
    var variation_name = "";
    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (
          document &&
          document.querySelector(selector) &&
          document.querySelectorAll(selector).length > 0
        ) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }
    function onLoadJqueryLibrary(trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (window.jQuery && window.jQuery.fn) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }
    function waitForHubSpot(trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (window && window.hbspt && window.hbspt.forms) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }

    var egPop = '' +
      '  <div class="eg-popup-model">' +
      '      <div class="eg-pop-overlay"></div>' +
      '      <div class="eg-content">' +
      '          <span class="eg-cross">' +
      '  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 489 489" style="enable-background:new 0 0 489 489;" xml:space="preserve">' +
      '  <g>' +
      '  	<g>		' +
      '  		<path d="M354.8,134.2c-8.3-8.3-20.8-8.3-29.1,0l-81.2,81.2l-81.1-81.1c-8.3-8.3-20.8-8.3-29.1,0s-8.3,20.8,0,29.1l81.1,81.1    l-81.1,81.1c-8.3,8.3-8.6,21.1,0,29.1c6.5,6,18.8,10.4,29.1,0l81.1-81.1l81.1,81.1c12.4,11.7,25,4.2,29.1,0    c8.3-8.3,8.3-20.8,0-29.1l-81.1-81.1l81.1-81.1C363.1,155,363.1,142.5,354.8,134.2z"/>' +
      '  	</g>' +
      '  </g>' +
      '  ' +
      '  </svg></span>' +
      '          <div class="eg-content-inr">' +
      '              <div class="eg-logo"><img src="https://assets.website-files.com/60c73449c7229c6e93375546/60c781e2686a421e5f878011_Group%201379.svg" loading="lazy" height="50" alt=""></div>' +
      '              <h2 class="eg-pop-heading">Looking for a sneak-peak?</h2>' +
      '              <p class="eg-pop-para">The real magic of Learnerbly can\'t be expressed in a minute and a half but we know that sometimes seeing is believing. Enter your details below to see a brief tour of our platform. </p>' +
      '          </div>' +
      '      </div>' +
      '  </div>';

    var egDemoButton = '<a class="button buttonmarginright w-button eg-watch-demo">Watch Demo (1:30)</a>';
    var egDemoButtonPrice = '<div class="eg-button-container"><a class="packagebutton w-button" href="/book-a-demo">Book a Demo</a><a class="eg-watch-demo1">Watch Demo (1:30)</a></div>';

    function init() {
      var $ = window.jQuery;
      $('.nav-menu-wrapper .nav-functions .bookdemo').before(egDemoButton);
      $('.tabs .tabs-content .w-tab-pane .packagebutton').after(egDemoButtonPrice);
     //load form
      waitForHubSpot(modelPop,50,5000);
      $('body').append(egPop);
     
      $('body').on('click', '.eg-watch-demo, .eg-watch-demo1', function () {
        $('body').addClass('eg-model-show');
      });

      $('body').on('click', '.eg-popup-model .eg-pop-overlay, .eg-popup-model .eg-cross', function () {
        $('body').removeClass('eg-model-show');
      });
      }
    function modelPop() {
      hbspt.forms.create({
        region: "na1",
        portalId: "3051669",
        formId: "1f7a965c-adfc-4188-a5ec-46ee1177c37b",
        onFormSubmit: function($form) {
         window.location.href = "https://pages.learnerbly.com/90-second-demo"; 
        }
      });
      $('body >.hbspt-form').insertAfter($('.eg-popup-model .eg-pop-para'));
    }
    onLoadJqueryLibrary(function () {
      waitForElement('body .navbar', init, 50, 15000);
    }, 50, 10000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();