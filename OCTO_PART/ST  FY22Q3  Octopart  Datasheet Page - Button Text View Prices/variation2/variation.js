(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    var $;
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

   
    /* Variation Init */
    function init() {
      /* start your code here */

      if (window.location.href.indexOf("/datasheet") != -1) {
        document.querySelector(".pdp-icon +  span.label").innerText = "Go to Pricing";   
      }
    };

    /* Initialize variation */
    waitForElement('.pdp-icon + span.label', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


