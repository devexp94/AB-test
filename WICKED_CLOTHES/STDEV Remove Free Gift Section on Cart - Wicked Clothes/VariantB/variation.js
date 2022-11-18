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

      document.querySelector('.inline-cart .inline-cart-gwp .inline-cart-gwp__content').insertAdjacentHTML('beforebegin', '<input type="checkbox" checked id="toggle">');
    }

    /* Initialise variation */
    waitForElement(".inline-cart .inline-cart-gwp .inline-cart-gwp__content", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
