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


    var egPromotionalBanner =''+ 
    '  <div class="eg-promotional-banner">'+ 
    '      <div class="eg-banner-inr">'+ 
    '          <div class="eg-option">'+ 
    '              <img class="eg-option-img" src="https://drive.google.com/thumbnail?id=1DvH-r97LV5J5gYpFuTrCQIMSnpWXdrb0" alt="Free Shipping">'+ 
    '              <p class="eg-option-text">FREE SHIPPING </br>OVER $50</p>'+ 
    '          </div>'+ 
    '          <div class="eg-option">'+ 
    '              <img class="eg-option-img" src="https://drive.google.com/thumbnail?id=16SH1pwyj8UJuQP34HenfC1ar9srmxNeq" alt="Free Return">'+ 
    '              <p class="eg-option-text">FREE </br>RETURNS</p>'+ 
    '          </div>'+ 
    '          <div class="eg-option">'+ 
    '              <img class="eg-option-img" src="https://drive.google.com/thumbnail?id=18gaOGK4Z_vaY-k-uxXjCJGCVQGQ2adOU" alt="Free Sharpening">'+ 
    '              <p class="eg-option-text">FREE </br>SHARPENING</p>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>';

    function init() {
      document.querySelector('.hero-banner-wrapper').insertAdjacentHTML('afterend', egPromotionalBanner);

    }


    /* Initialise variation */
    waitForElement(".hero-banner-wrapper", init, 50, 15000);
    document.querySelector('body').insertAdjacentHTML('beforeend', '<img class="eg-option-img" src="https://drive.google.com/thumbnail?id=1DvH-r97LV5J5gYpFuTrCQIMSnpWXdrb0" alt="Free Shipping" style="display: none;"><img class="eg-option-img" src="https://drive.google.com/thumbnail?id=16SH1pwyj8UJuQP34HenfC1ar9srmxNeq" alt="Free Return" style="display: none;"><img class="eg-option-img" src="https://drive.google.com/thumbnail?id=18gaOGK4Z_vaY-k-uxXjCJGCVQGQ2adOU" alt="Free Sharpening" style="display: none;">')
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();