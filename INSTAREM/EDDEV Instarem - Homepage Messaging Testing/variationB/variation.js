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

    var heroBanner =''+ 
    '  <div class="banner home_page">'+ 
    '      <div class="container">'+ 
    '          <div class="main_banner_row home_banner aos-init aos-animate" data-aos="fade-up" data-aos-duration="5000" data-aos-easing="ease-in-sine">'+ 
    '              <div class="col-6 banner-height">'+ 
    '                  <div id="bannerword">'+ 
    '                      <h1 class="banner_title banner_title0">Send money </br>overseas at </br>great rates.</h1>'+ 
    '                  </div>'+ 
    '                  <div class="banner-quote-container">'+ 
    '                      <p class="banner-quote">Fast. Secure. Simple.</p>'+ 
    '                  </div>'+ 
    '              </div>'+ 
    '              <div class="col-6 womenJump-img">'+ 
    '                  <div class="womenJump-img-box">'+ 
    '                      <div id="women_juming">'+ 
    '                          <img src="../images1/plain-us-banner.png" class="image1 plain-img">'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>';


    function init() {

      document.querySelector('.banner_box').innerHTML = heroBanner;


    }

    waitForElement(".banner_box", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
