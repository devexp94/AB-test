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
      
      document.querySelector('.field.fb-checkbox.field-category.amform-layout-one').insertAdjacentHTML('afterend', '<div class="eg-text field fb-div"><div class="control"><div type="div" class="eg-number2" layout="one" parent-type="other">Je renseigne mes informations : </div><textarea rows="4" aria-invalid="false"></textarea></div></div>');
    }

    /* Initialise variation */
    waitForElement(".field-category.amform-layout-one", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
