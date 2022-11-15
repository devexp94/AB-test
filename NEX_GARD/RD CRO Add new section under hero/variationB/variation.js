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


    var egBanner =''+ 
    '  <div class="eg-promotion-banner">'+ 
    '      <div class="eg-banner-inr container">'+ 
    '          <div class="eg-text-section"><p class="eg-text">Why Choose </br> NexGard </br> Spectra?</p></div>'+ 
    '          <div class="eg-image-section">'+ 
    '              <div class="eg-box">'+ 
    '                  <div class="eg-box-inr">'+ 
    '                      <img src="https://nexgard.com.au/sites/nexgardfordogs_au/files/Pet_Circle_logo2_0.png" alt="Parasite" class="eg-image">'+ 
    '                      <p class="eg-content">PARASITE </br> PROTECTION </br> FOR DOGS</p>'+
    '                  </div>'+ 
    '              </div>'+ 
    '              <div class="eg-box">'+ 
    '                  <div class="eg-box-inr">'+ 
    '                      <img src="https://nexgard.com.au/sites/nexgardfordogs_au/files/Pet_Circle_logo2_0.png" alt="Worldwide" class="eg-image">'+ 
    '                      <p class="eg-content">MORE THAN 120 MILLION CHEWS SOLD WORLDWIDE</p>'+
    '                  </div>'+ 
    '              </div>'+ 
    '              <div class="eg-box">'+ 
    '                  <div class="eg-box-inr">'+ 
    '                      <img src="https://nexgard.com.au/sites/nexgardfordogs_au/files/Pet_Circle_logo2_0.png" alt="Guide" class="eg-image">'+ 
    '                      <p class="eg-content">PROUDLY SUPPORTING GUIDE DOGS AUSTRALIA</p>'+
    '                  </div>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>';


    function init() {

      document.querySelector('.content-area__hero-banner').insertAdjacentHTML('afterend', egBanner)

    }

    /* Initialise variation */
    waitForElement(".content-area__hero-banner", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();