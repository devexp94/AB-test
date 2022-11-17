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

    var greatRate =''+ 
'  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">'+ 
'  <line x1="1.5" y1="24" x2="1.5" y2="18" stroke="black"/>'+ 
'  <line x1="6.5" y1="24" x2="6.5" y2="12" stroke="black"/>'+ 
'  <line x1="11.5" y1="24" x2="11.5" y2="8" stroke="black"/>'+ 
'  <line x1="16.5" y1="24" x2="16.5" y2="13" stroke="black"/>'+ 
'  <line x1="21.5" y1="24" x2="21.5" y2="6" stroke="black"/>'+ 
'  <circle cx="1.5" cy="14.5" r="1.5" fill="black"/>'+ 
'  <circle cx="6.5" cy="8.5" r="1.5" fill="black"/>'+ 
'  <circle cx="11.5" cy="2.5" r="1.5" fill="black"/>'+ 
'  <circle cx="16.5" cy="9.5" r="1.5" fill="black"/>'+ 
'  <circle cx="21.5" cy="1.5" r="1.5" fill="black"/>'+ 
'  <path d="M1.5 14.5L6.5 8.5L11.5 2.5L16.5 9.5L21.5 1.5" stroke="black" stroke-width="0.5"/>'+ 
'  </svg>';


var lowFees =''+ 
'  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="29" viewBox="0 0 26 29" fill="none">'+ 
'  <path d="M1.33448 15.6284C1.12923 15.4436 0.813082 15.4603 0.628353 15.6655C0.443623 15.8708 0.460263 16.1869 0.665518 16.3716L1.33448 15.6284ZM24.5 29C24.7761 29 25 28.7761 25 28.5V24C25 23.7239 24.7761 23.5 24.5 23.5C24.2239 23.5 24 23.7239 24 24V28H20C19.7239 28 19.5 28.2239 19.5 28.5C19.5 28.7761 19.7239 29 20 29H24.5ZM11.6463 24.5691L11.369 24.1531L11.6463 24.5691ZM0.665518 16.3716L10.0882 24.852L10.7571 24.1087L1.33448 15.6284L0.665518 16.3716ZM11.9237 24.9852L16.5952 21.8708L16.0405 21.0387L11.369 24.1531L11.9237 24.9852ZM17.2261 21.9332L24.1464 28.8536L24.8536 28.1464L17.9332 21.2261L17.2261 21.9332ZM16.5952 21.8708C16.7935 21.7386 17.0576 21.7647 17.2261 21.9332L17.9332 21.2261C17.4276 20.7205 16.6355 20.6421 16.0405 21.0387L16.5952 21.8708ZM10.0882 24.852C10.5977 25.3106 11.3533 25.3654 11.9237 24.9852L11.369 24.1531C11.1788 24.2799 10.927 24.2616 10.7571 24.1087L10.0882 24.852Z" fill="black"/>'+ 
'  <path d="M17.5 9.5C17.5 8.83333 17.1 7.5 15.5 7.5C13.9 7.5 13.5 8.83333 13.5 9.5C13.5 10.1667 13.9 11.5 15.5 11.5C17.1 11.5 17.5 12.8333 17.5 13.5C17.5 14.1667 17.1 15.5 15.5 15.5C13.9 15.5 13.5 14.1667 13.5 13.5" stroke="black" stroke-linecap="round"/>'+ 
'  <line x1="15.5" y1="7.5" x2="15.5" y2="6.5" stroke="black" stroke-linecap="round"/>'+ 
'  <line x1="15.5" y1="16.5" x2="15.5" y2="15.5" stroke="black" stroke-linecap="round"/>'+ 
'  <path d="M8.5 18.5996C6.35767 16.7655 5 14.0413 5 11C5 5.47715 9.47715 1 15 1C20.5228 1 25 5.47715 25 11C25 14.1548 23.5391 16.9685 21.2568 18.8012" stroke="black" stroke-linecap="round"/>'+ 
'  </svg>';

var bonus =''+ 
'  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">'+ 
'  <path d="M2.5 10.5V24C2.5 24.5523 2.94772 25 3.5 25H23.5C24.0523 25 24.5 24.5523 24.5 24V10.5M24.5 10.5H25.5C26.0523 10.5 26.5 10.0523 26.5 9.5V7C26.5 6.44772 26.0523 6 25.5 6H2C1.44772 6 1 6.44772 1 7V9.5C1 10.0523 1.44772 10.5 2 10.5H20.5M24.5 10.5H23" stroke="black"/>'+ 
'  <path d="M13.5 10.5V25" stroke="black"/>'+ 
'  <path d="M2.5 17.5H24.5" stroke="black"/>'+ 
'  <path d="M11 1C12.5635 1 13.2103 3.03717 13.4182 4.72263C13.4978 5.36831 12.8889 5.84548 12.2658 5.65847C10.86 5.23659 9.0996 4.59957 8.50002 4C7.50002 3 8.50002 1 11 1Z" stroke="black"/>'+ 
'  <path d="M16.6168 1C15.0533 1 14.4065 3.03717 14.1986 4.72263C14.119 5.36831 14.7279 5.84548 15.3511 5.65847C16.7568 5.23659 18.5172 4.59957 19.1168 4C20.1168 3 19.1168 1 16.6168 1Z" stroke="black"/>'+ 
'  </svg>';

    var heroBanner =''+ 
    '  <div class="banner home_page" aria-hidden="false" style="float: left; list-style: none; position: relative;height: auto; visibility: visible;">'+ 
    '      <div class="container">'+ 
    '          <div class="main_banner_row home_banner">'+ 
    '              <div class="col-6 banner-height">'+ 
    '                  <div id="bannerword">'+ 
    '                      <h1 class="banner_title banner_title2">Save on overseas </br>tuition fee payments</h1>'+ 
    '                  </div>'+ 
    '                  <div class="bannerDesc">'+ 
    '                      <p class="banner_desc banner_desc2">Use code STUDY to get <b>₹300* bonus</b>'+ 
    '                      </p>'+ 
    '                  </div>'+ 
    '  <div class="eg-details">'+ 
    '      <p class="eg-rate">'+ greatRate +
    '          <span>Great rates</span>'+ 
    '      </p>'+ 
    '      <p class="eg-fees">'+ lowFees +
    '          <span>Low fees</span>'+ 
    '      </p>'+ 
    '      <p class="eg-bonus">'+ bonus +
    '          <span><b>₹300* bonus</b> on first transfer</span>'+ 
    '      </p>'+ 
    '  </div>'+
    '              </div>'+ 
    '              <div class="col-6 womenJump-img">'+ 
    '                  <div class="womenJump-img-box">'+ 
    '                      <div id="women_juming1">'+ 
    '                          <img src="https://expogrowth.in/wp-content/uploads/2022/06/education_FB-ad-1200x1200-2.png" class="image3 image5 man_walking">'+ 
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
