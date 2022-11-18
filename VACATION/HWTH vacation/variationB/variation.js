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
      // setTimeout(function(){
        document.querySelector('.site__wrapper > .hero__ticker-height').insertAdjacentHTML('afterend', '<p class="eg-text">"Stay protected from the sun all year round"</p>');
      // }, 1000);

    }

    /* Initialise variation */
    waitForElement(".site__wrapper > .hero__ticker-height", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
