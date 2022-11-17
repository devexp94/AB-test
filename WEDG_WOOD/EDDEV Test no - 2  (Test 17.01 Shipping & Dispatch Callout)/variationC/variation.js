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


    function init() {
      
      document.querySelector('.c-summary-details .c-summary_continue').insertAdjacentHTML('beforebegin', '<div class="eg-shipping-days"><span class="eg-shipping-text">Estimated delivery time </span><span class="eg-shipping-time">2 - 3 Business days</span></div>')

    }

    /* Initialise variation */
    waitForElement(".main-container.cart-container #cart-overview .c-cart-redirect", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
