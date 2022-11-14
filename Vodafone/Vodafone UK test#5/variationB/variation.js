(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    /* all Pure helper functions */
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

    var egQuickEasySection =''+ 
    '  <div class="eg-life-easier-option">'+ 
    '      <div class="eg-life-easier-option-inr">'+ 
    '          <h2 class="eg-life-easier-heading">Making life easier</h2>'+ 
    '          <div class="eg-life-easier-section">'+ 
    '              <div class="eg-quick-option">'+ 
    '                  <div class="eg-life-easier-inr">'+ 
    '                      <p class="eg-life-easier--heading">UK\'s Unbeatable Network</p>'+ 
    '                      <p class="eg-life-easier--description">UK\'s unbeatable network for reliability, </br> as awarded by RootMetrics</p>'+ 
    '                      <a href="#">Discover more</a>'+
    '                  </div>'+ 
    '              </div>'+ 
    '              <div class="eg-quick-option">'+ 
    '                  <div class="eg-life-easier-inr">'+ 
    '                      <p class="eg-life-easier--heading">Online assistance</p>'+ 
    '                      <p class="eg-life-easier--description">Our virtual chat assistant </br> is available to help you 24/7</p>'+ 
    '                      <a href="#">Chat now</a>'+
    '                  </div>'+ 
    '              </div>'+ 
    '              <div class="eg-quick-option">'+ 
    '                  <div class="eg-life-easier-inr">'+ 
    '                      <p class="eg-life-easier--heading">Free home delivery</p>'+ 
    '                      <p class="eg-life-easier--description">Paid for same day </br> delivery options</p>'+ 
    '                      <a href="#">Delivery options</a>'+
    '                  </div>'+ 
    '              </div>'+ 
    '              <div class="eg-quick-option">'+ 
    '                  <div class="eg-life-easier-inr">'+ 
    '                      <p class="eg-life-easier--heading">14-day returns</p>'+ 
    '                      <p class="eg-life-easier--description">Hassle-free returns with no </br> cancellation fee</p>'+ 
    '                      <a href="#">Returns info</a>'+
    '                  </div>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>'+
    '  <div class="eg-life-easier-option eg-mobile-slider">'+ 
    '      <div class="eg-life-easier-option-inr">'+ 
    '          <div class="eg-life-easier-section">'+ 
    '              <div class="eg-quick-option">'+ 
    '                  <div class="eg-life-easier-inr">'+ 
    '                      <p class="eg-life-easier--heading">UK\'s Unbeatable Network</p>'+ 
    '                      <p class="eg-life-easier--description">UK\'s unbeatable network for reliability, </br> as awarded by RootMetrics</p>'+ 
    '                      <a href="#">Discover more</a>'+
    '                  </div>'+ 
    '              </div>'+ 
    '              <div class="eg-quick-option">'+ 
    '                  <div class="eg-life-easier-inr">'+ 
    '                      <p class="eg-life-easier--heading">Online assistance</p>'+ 
    '                      <p class="eg-life-easier--description">Our virtual chat assistant </br> is available to help you 24/7</p>'+ 
    '                      <a href="#">Chat now</a>'+
    '                  </div>'+ 
    '              </div>'+ 
    '              <div class="eg-quick-option">'+ 
    '                  <div class="eg-life-easier-inr">'+ 
    '                      <p class="eg-life-easier--heading">Free home delivery</p>'+ 
    '                      <p class="eg-life-easier--description">Paid for same day </br> delivery options</p>'+ 
    '                      <a href="#">Delivery options</a>'+
    '                  </div>'+ 
    '              </div>'+ 
    '              <div class="eg-quick-option">'+ 
    '                  <div class="eg-life-easier-inr">'+ 
    '                      <p class="eg-life-easier--heading">14-day returns</p>'+ 
    '                      <p class="eg-life-easier--description">Hassle-free returns with no </br> cancellation fee</p>'+ 
    '                      <a href="#">Returns info</a>'+
    '                  </div>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>';

    /* Variation Init */
    function init() {
      document.querySelector('section#webchat').insertAdjacentHTML('beforebegin', egQuickEasySection)

      waitForFlickity(function() {
        new Flickity(document.querySelector('.eg-mobile-slider .eg-life-easier-section'), {
          wrapAround: true,
          pageDots: true,
          initialIndex: 1,
          accessibility: true,
          autoPlay: false 
        });
      });
     
    }

    function addScript() {
      var style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = 'https://unpkg.com/flickity@2/dist/flickity.min.css';
      document.getElementsByTagName('head')[0].appendChild(style);
      var script = document.createElement('script');
      script.src ='https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js';
      document.getElementsByTagName('head')[0].appendChild(script);
    }

    function waitForFlickity(trigger) {
      var interval = setInterval(function () {
        if (
          window.Flickity
        ) {
          clearInterval(interval);
          trigger();
        }
      }, 50);
      setTimeout(function () {
        clearInterval(interval);
      }, 10000);
    }
    addScript();
    /* Initialise variation */
    waitForElement("section#webchat", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();