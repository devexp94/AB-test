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
      var interval = setInterval(function() {
        if (window.jQuery && window.jQuery.fn) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function() {
        clearInterval(interval);
      }, delayTimeout);
    }
    
    var callIcon =''+ 
    '  <span class="eg-call-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">'+ 
    '  <path d="M22.0448 17.52C21.3892 16.9703 17.5448 14.5358 16.9058 14.6475C16.6058 14.7008 16.3763 14.9565 15.762 15.6893C15.4779 16.0499 15.166 16.3877 14.829 16.6995C14.2116 16.5504 13.6139 16.3288 13.0485 16.0395C10.831 14.9599 9.03947 13.1679 7.9605 10.95C7.67118 10.3846 7.44964 9.78691 7.3005 9.1695C7.6123 8.83252 7.95009 8.52056 8.31075 8.2365C9.04275 7.62225 9.29925 7.39425 9.3525 7.09275C9.46425 6.45225 7.0275 2.60925 6.48 1.95375C6.2505 1.68225 6.042 1.5 5.775 1.5C5.001 1.5 1.5 5.829 1.5 6.39C1.5 6.43575 1.575 10.9425 7.26675 16.7333C13.0575 22.425 17.5643 22.5 17.61 22.5C18.171 22.5 22.5 18.999 22.5 18.225C22.5 17.958 22.3178 17.7495 22.0448 17.52Z" fill="white"/>'+ 
    '  <path d="M17.25 11.25H18.75C18.7482 9.65925 18.1155 8.13416 16.9907 7.00933C15.8658 5.8845 14.3408 5.25179 12.75 5.25V6.75C13.9431 6.75119 15.087 7.22568 15.9307 8.06933C16.7743 8.91299 17.2488 10.0569 17.25 11.25Z" fill="white"/>'+ 
    '  <path d="M21 11.25H22.5C22.497 8.66505 21.4688 6.18683 19.641 4.359C17.8132 2.53116 15.3349 1.50298 12.75 1.5V3C14.9372 3.00258 17.0342 3.8726 18.5808 5.41922C20.1274 6.96584 20.9974 9.06276 21 11.25Z" fill="white"/>'+ 
    '  </svg></span>';

    function init() {
      var $ = window.jQuery;

      $('.header-action_cta .h-hide--mobile .h-button-small').after(callIcon);
   }
    /* Initialise variation */
    onLoadJqueryLibrary(function() {
        waitForElement('.header-action_cta .h-hide--mobile .h-button-small', init, 50, 20000);
    }, 50, 10000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();