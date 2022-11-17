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

    var heroBanner =''+ 
    '  <div class="banner home_page" aria-hidden="false" style="float: left; list-style: none; position: relative;height: auto; visibility: visible;">'+ 
    '      <div class="container">'+ 
    '          <div class="main_banner_row home_banner">'+ 
    '              <div class="col-6 banner-height">'+ 
    '                  <div id="bannerword">'+ 
    '                      <h1 class="banner_title banner_title2">Safe & Reliable.</h1>'+ 
    '                  </div>'+ 
    '                  <div class="bannerDesc">'+ 
    '                      <p class="banner_desc banner_desc2">Industry leading technology that moves $4 billion annually. </br>'+ 
    '                          </br> Download the Instarem app, use the code 3FREE and enjoy zero fees on your first 3 transfers.'+ 
    '                      </p>'+ 
    '                  </div>'+ 
    '                  <div class="qr-image"><img src="https://www.instarem.com/blog/wp-content/uploads/2022/05/appcro_qr_code.png" alt="QR Image MY APP"><h3 class="code-text">Use Code*<span>3FREE</span></h3></div>'+ 
    '                  <div class="on_phone">'+ 
    '                      <div class="getapp-right-button">'+ 
    '                          <a href="https://play.google.com/store/apps/details?id=com.instarem.mobileapp&hl=en" target="_blank" class="getappbg " rel="noopener">'+ 
    '                              <img src="../images1/icon/Button/Google-Play.svg" alt="InstaReam Goggle play"> </a>'+ 
    '                          <a href="https://itunes.apple.com/in/app/id1190075959" target="_blank" class="getappbg second" rel="noopener">'+ 
    '                              <img src="../images1/icon/Button/Apple-Store.svg" alt="InstaReam Apple App"> </a>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '                   <p class="terms">*Terms and conditions apply</p>'+ 
    '              </div>'+ 
    '              <div class="col-6 womenJump-img">'+ 
    '                  <div class="womenJump-img-box">'+ 
    '                      <img src="../images1/home/Logomark.svg" class="logomark_dot">'+ 
    '                      <div id="women_juming1">'+ 
    '                          <img src="../images1/home/image5.png" class="image3 image5 man_walking">'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '  '+ 
    '      </div>'+ 
    '  </div>';

    function init() {

document.querySelector('.banner_box .bx-wrapper .bx-viewport').innerHTML = heroBanner        

    }
    
      waitForElement('.banner_box .bx-wrapper', init, 50, 25000);
    
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
