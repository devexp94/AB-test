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
      document.querySelector('.overlay--congrats .congrats-form > .text-center').insertAdjacentHTML('beforebegin', '<div class="eg-logo"><img class="logo" src="/src/images/logo.svg" alt="We Are Sno Logo"></div>');

      document.querySelector('.overlay--congrats .congrats-form > .text-center h3').innerHTML = 'Congratulations <span>YOU ARE ELIGIBLE!</span>';

      document.querySelector('.overlay--congrats .congrats-form > .text-center p + p').innerHTML = 'Get our instructor course brochures sent to your email now.'

      document.querySelector('.overlay--congrats .congrats-form #congratulations_submit').innerHTML = 'SEND ME BROCHURES'
    }

    /* Initialise variation */
    waitForElement(".overlay--congrats .congrats-form > .text-center", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();

