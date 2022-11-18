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

    var egSize =''+ 
    '  <span class="eg-size-label">Size</span>'+ 
    '  <span class="eg-size-option">Size Guide</span>'+ 
    '  <div class="eg-fit-option">Not sure what size to get? Click here to try ou<span>FIT ASSISTANT!</span></div>';

    function init() {

      document.querySelector('.pdp-fieldset-header-wrap').innerHTML = egSize;

      document.querySelector('.pdp-fieldset-header-wrap .eg-size-option').addEventListener('click', function(){
        document.querySelector('#pdp-size-chart-toggle').click();
      });

      document.querySelector('.eg-fit-option span').addEventListener('click', function(){
        document.querySelector('#pdp-fit-assist').click();
      });
    }

    /* Initialise variation */
    waitForElement(".pdp-fieldset-header-wrap", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
