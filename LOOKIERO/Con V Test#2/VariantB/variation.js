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
    
    var egNewSection =''+ 
    '  <div class="eg-section">'+ 
    '      <div class="eg-section-inr">'+ 
    '          <div class="eg-banner">'+ 
    '          <div class="eg-banner-inr">'+ 
    '              <h2 class="eg-banner-heading">Give £10,</br> Earn £10</h2>'+ 
    '              <div class="eg-banner-left">'+ 
    '                  <div class="eg-banner-left-inr">'+ 
    '                      <div class="eg-content">'+ 
    '                          <img src="https://cfactory-img.s3.amazonaws.com/LOR/4.1/anne-peres-plsF6obTgms-unsplash%201.png">'+ 
    '                          <p class="eg-para">Ruth accepted offer </br> and mage a purchase</p>'+ 
    '                      </div>'+ 
    '                      <div class="eg-float-content">'+ 
    '                          <p>+£10</p>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '              </div>'+ 
    '              <div class="eg-banner-right">'+ 
    '                  <div class="eg-banner-right-inr">'+ 
    '                      <div class="eg-content">'+ 
    '                          <img src="https://cfactory-img.s3.amazonaws.com/LOR/4.1/victoria-volkova-ayvBHeYBjpQ-unsplash%201.png">'+ 
    '                          <p class="eg-para">Nastaly accepted offer </br> and mage a purchase</p>'+ 
    '                      </div>'+ 
    '                      <div class="eg-float-content">'+ 
    '                          <p>+£10</p>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '                  </div>'+   
    '              </div>'+ 
    '          </div>'+ 
    '          <div class="eg-social-section">'+ 
    '              <h2 class="eg-social-heading">Bring a friend to Lookiero. </br>You get £10 for her and £10 for you!</h2>'+ 
    '              <div class="eg-social-details">'+ 
    '                  <div class="eg-social-box">'+ 
    '                          <div class="eg-img-box"><img src="https://cfactory-img.s3.amazonaws.com/LOR/4.1/icon.png"></div>'+ 
    '                          <p>Whatsapp</p>'+ 
    '                  </div>'+ 
    '                  <div class="eg-social-box">'+ 
    '                          <div class="eg-img-box"><img src="https://cfactory-img.s3.amazonaws.com/LOR/4.1/Icon-Copy.svg"></div>'+ 
    '                          <p>Copy Link</p>'+ 
    '                  </div>'+ 
    '                  <div class="eg-social-box">'+ 
    '                          <div class="eg-img-box"><img src="https://cfactory-img.s3.amazonaws.com/LOR/4.1/Icon-Social-facebook.svg"></div>'+ 
    '                          <p>Fackbook</p>'+ 
    '                  </div>'+ 
    '                  <div class="eg-social-box">'+ 
    '                          <div class="eg-img-box"><img src="https://cfactory-img.s3.amazonaws.com/LOR/4.1/Vector%2076%20%28Stroke%29.svg"></div>'+ 
    '                          <p>Email</p>'+ 
    '                  </div>'+ 
    '              </div>'+ 
    '              <a href="#" class="eg-work" target="_blank">HOW IT WORKS</a>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>';    

    /* Variation Init */
    function init() {
      /* start your code here */
      console.log('init1');
      document.querySelector('.motion.expand.wide .view.wide:not(.layout) button').insertAdjacentHTML('afterend', egNewSection);
    
      console.log('init2');
    }
    /* Initialise variation */
    waitForElement(".motion.expand.wide .view.wide:not(.layout) button", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
