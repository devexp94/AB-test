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

      document.querySelector('h1 + div > div:nth-child(2)> p:nth-child(1)').insertAdjacentHTML('afterend', '<p class="eg-button"><a href="https://www.mediastorehouse.com/dmcs-checkout.html">Login&nbsp;&nbsp;&nbsp;❱</a></p>')
    }

    /* Initialise variation */
    waitForElement("h1 + div > div:nth-child(2)> p:nth-child(1)", init, 50, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
