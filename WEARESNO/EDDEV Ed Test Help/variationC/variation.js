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

    var egBottomSection =''+ 
    '  <div class="eg-bottom-review">'+ 
    '      <div class="eg-bottom-review-inr">'+ 
    '          <div class="img-box">'+ 
    '              <img src="https://wearesno.com/wp-content/uploads/2022/07/DNew.jpg" alt="Image-1">'+ 
    '          </div>'+ 
    '          <div class="img-box">'+ 
    '              <img src="https://wearesno.com/wp-content/uploads/2022/07/Desktop3.jpg" alt="Image-2">'+ 
    '          </div>'+ 
    '          <div class="eg-review">'+ 
    '              <p class="eg-para">"I never thought being a ski instructor was possible, but here I am living abroad and working a really rewarding job which aligns with my passions!"</p>'+ 
    '              <p class="eg-author"><span class="eg-author-name">Emily James</span><span class="eg-detail">WE ARE SNO Instructor</span></p>'+ 
    '              <img class="eg-trust-logo" src="https://wearesno.com/wp-content/uploads/2022/07/trustpilot-logo.png" alt="Trustpilot Logo">'+ 
    '          </div>'+ 
    '          <div class="img-box">'+ 
    '              <img src="https://wearesno.com/wp-content/uploads/2022/07/Desktop1.jpg" alt="Image-3">'+ 
    '          </div>'+ 
    '          <div class="img-box">'+ 
    '              <img src="https://wearesno.com/wp-content/uploads/2022/07/DNew2.jpg" alt="Image-4">'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>';

    function init() {
      document.querySelector('.overlay--congrats .congrats-form').insertAdjacentHTML('beforebegin', '<div class="eg-logo"><img class="logo" src="/src/images/logo.svg" alt="We Are Sno Logo"></div><div class="eg-form-container"></div>');

      document.querySelector('.overlay--congrats .congrats-form').insertAdjacentHTML('afterend', egBottomSection);

      document.querySelector('.overlay--congrats .congrats-form > .text-center h3 + p').innerHTML = 'YOU ARE ELIGIBLE TO BECOME AN INSTRUCTOR';

      document.querySelector('.overlay--congrats .congrats-form > .text-center p + p').innerHTML = 'Complete this form to receive our instructor programme brochues and information on applying for a position.';

      document.querySelector('.overlay--congrats .congrats-form #congratulations_submit').innerHTML = 'EMAIL INFO PACK';
    }

    /* Initialise variation */
    waitForElement(".overlay--congrats .congrats-form > .text-center", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();

