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
      
      document.querySelector('.nm-module-summary-engine .nm-summary-tech-icons').insertAdjacentElement('afterend', document.querySelector('.nm-module-summary-engine ~ feature-app > div'));
    }

    /* Initialise variation */
    waitForElement(".nm-module-summary-engine ~ feature-app >  div", init, 500, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();