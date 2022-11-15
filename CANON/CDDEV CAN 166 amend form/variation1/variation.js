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

    /* Variation functions */

    /* Variation Init */
    function init() {

      document.querySelector('.pl-m-b2b-click2connect-formTab__intro > p:nth-child(2)').innerHTML = "Enter your details and one of our experts will call you back.";
      document.querySelector('.pl-m-b2b-click2connect-formTab__intro #ctasupport_new').innerHTML = "Click here for technical support";
      document.querySelector('#callback-first-name').setAttribute('placeholder', 'First name');
      document.querySelector('#callback-last-name').setAttribute('placeholder', 'Last name');
      document.querySelector('#callback-email').setAttribute('placeholder', 'Email address');

//      document.querySelector('.ppContainer a[href="/terms_and_conditions/"]').insertAdjacentHTML('beforebegin', '<a class="col-xs-10 col-xs-offset-1 pl-btn--large eg-button">CALL ME</a>')
    }

    /* Initialise variation */
    waitForElement("#callback-email", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
