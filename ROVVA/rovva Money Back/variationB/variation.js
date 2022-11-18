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

    var popup =''+ 
    '  <div class="popup">'+ 
    '      <div class="popup-overlay"></div>'+ 
    '      <div class="popup-content">'+ 
    '          <span class="cross"><img src="https://www.rovva.com/assets/images/icon-cross.svg"></span>'+ 
    '          <h2>How our money back guarantee works</h2>'+ 
    '          <p>Our 30-day money back guarantee is a straightforward way to get started with confidence. If you change your mind for any reason, let us know within your first 30 days and we’ll refund your first month’s charge and any set-up costs.</p>'+ 
    '          <ul class="list-unstyled">'+ 
    '              <li data-count="1">The Rovva 30-day money back guarantee is valid for 30 days from your start date.</li>'+ 
    '              <li data-count="2">The guarantee covers your first month’s charge and any set-up costs.'+ 
    '              </li>'+ 
    '              <li data-count="3">The guarantee does not cover additional services you may incur at your Virtual Office. These include things like postage for mail forwarding, photocopying or admin services.'+ 
    '              </li>'+ 
    '              <li data-count="4">To claim a refund under the 30-day money back guarantee, email refunds@rovva.com'+ 
    '              </li>'+ 
    '              <li data-count="5">After you confirm your refund request, we’ll cancel your Virtual Office and process your refund within ten days.</li>'+ 
    '          </ul>'+ 
    '          <div><span>To request a refund please contact Rovva customer services team at: </span><a target="_blank" href="mailto:refunds@rovva.com">refunds@rovva.com</a></div>'+ 
    '      </div>'+ 
    '  </div>';
        
    function init() {
      document.querySelector('body').insertAdjacentHTML('beforeend', popup);

      document.querySelector('body').addEventListener('click', function(){
        document.querySelector('body').classList.add('popup-show');
      });

      document.querySelector('.popup .popup-overlay').addEventListener('click', function(){
        document.querySelector('body').classList.remove('popup-show');
      });
    
      document.querySelector('.popup .cross').addEventListener('click', function(){
        document.querySelector('body').classList.remove('popup-show');
      });
    }


    /* Initialise variation */
    waitForElement("body", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
