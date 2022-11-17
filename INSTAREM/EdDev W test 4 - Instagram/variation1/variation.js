(function () {
    try {
      var debug = 0;
      var variation_name = "";
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
  

      var egReferral = '<div class="eg-referral"><div class="eg-referral-inr"><img src="https://cfactory-img.s3.amazonaws.com/LOR/7.2/Tick.png" alt="tick">Referral Code Added: 7HK2A2</div></div>';

      function init() {

        document.querySelector('.main-content .auth_container .auth_container_logo img').setAttribute('src', 'https://www.instarem.com/static/media/New_Instarem_logo.dedaf835.svg');

        document.querySelector('.main-content .auth_container .auth_container_form h1').innerHTML = 'Sign up to claim your free referrl bonus';

        document.querySelector('.main-content .auth_container .auth_container_form img').insertAdjacentHTML('beforebegin', egReferral);
      
      if(window.innerWidth < 426){
        document.querySelector('.main-content .auth_container .auth_container_form').insertAdjacentHTML('beforebegin', egReferral);
      }
      }
      
        waitForElement('.main-content .auth_container .auth_container_form h1', init, 50, 15000);
      
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();