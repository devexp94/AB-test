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


      document.querySelector('.foreign-exchange.page_section').insertAdjacentElement('beforebegin', document.querySelector('.calculator'));

      document.querySelector('.banner h1').innerHTML = 'Send money simply.'

      document.querySelector('html body .tranfer-paid .tranfer-paid-text + p').innerHTML= '<span>Monito</span> and <span>Instarem</span> bring to you </br> the best way to send money overseas.';

      var couponValue = document.querySelector('.tranfer-paid .margin-30 .banner_subheading #monito-coupon-value').innerHTML;

      document.querySelector('.tranfer-paid .margin-30 .banner_subheading').innerHTML = '<b>Get</b> <span id="monito-coupon-value">'+ couponValue +'</span> off you first two transactions using the code';

      setTimeout(function(){
        document.querySelector('html body .tranfer-paid .margin-30 p:last-of-type').innerHTML = 'Use Code: <span class="monito-coupon-code">MONITO</span>';

      },5000)


      document.querySelector('html body .tranfer-paid .margin-30 p:last-of-type').insertAdjacentHTML('afterend', '<span class="eg-referral">*Use as referral code in the form</span>');

    }

    /* Initialise variation */
    waitForElement(".calculator", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
