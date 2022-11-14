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
    
    var socialSection =''+ 
    '  <section class="eg-social-section">'+ 
    '      <div class="container">'+ 
    '          <div class="eg-social-inr">'+ 
    '              <div class="item social-stat">'+ 
    '                  <img src="https://cfactory-img.s3.amazonaws.com/UNY/2.38/icon3.svg" alt="Royalty">'+ 
    '                  <div>'+ 
    '                      <p>All plans are <strong>royalty-free.</strong> You keep what you earn.</p>'+ 
    '                  </div>'+ 
    '              </div>'+ 
    '              <div class="item social-stat">'+ 
    '                  <img src="https://cfactory-img.s3.amazonaws.com/UNY/2.38/icon1.svg" alt="Assets">'+ 
    '                  <div>'+ 
    '                      <p>All plans include access to the <strong>Unity Asset Store,</strong> a marketplace of assets for your projects.</p>'+ 
    '                  </div>'+ 
    '              </div>'+ 
    '              <div class="item social-stat">'+ 
    '                  <img src="https://cfactory-img.s3.amazonaws.com/UNY/2.38/icon2.svg" alt="Learn">'+ 
    '                  <div>'+ 
    '                      <p>All plans include access to <strong>Unity Learn.</strong> Support your team’s expertise at every level.</p>'+ 
    '                  </div>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </section>';    

    /* Variation Init */
    function init() {
    
      document.querySelector('.landing-hero').insertAdjacentHTML('afterend', socialSection);

    }
    /* Initialise variation */
    waitForElement(".landing-hero", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
