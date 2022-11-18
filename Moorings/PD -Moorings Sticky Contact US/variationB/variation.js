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

    var egStickyBanner =''+ 
    '  <div class="eg-StickyBanner" data-component="eg-StickyBanner">'+ 
    '      <p class="banner-heading">Contact Us <i class="icon fa fa-caret-down" aria-hidden="true"></i></p>'+ 
    '      <div class="eg-StickyBanner_inner container">'+ 
    '          <a href="https://www.quarkexpeditions.com/subscribe-to-our-newsletter"  target="_blank" class="eg-StickyBanner_btn icon-signin">'+ 
    '              <div class="eg-StickyBanner_icon"><span>Newsletter Signup</span></div>'+ 
    '          </a>'+ 
    '          <a href="" class="eg-StickyBanner_btn eg-call icon-quote">'+ 
    '              <div class="eg-StickyBanner_icon"><span></span></div>'+ 
    '          </a>'+ 
    '          <a href="https://www.quarkexpeditions.com/request-quote" target="_blank" class="eg-StickyBanner_btn icon-request-brochure">'+ 
    '              <div class="eg-StickyBanner_icon"><span>Request a quote</span></div>'+ 
    '          </a>'+ 
    '      </div>'+ 
    '  </div>';

    function init() {

      document.querySelector('body').insertAdjacentHTML('beforeend', egStickyBanner);

      document.querySelector('.eg-StickyBanner .banner-heading').addEventListener('click', function(){
        document.querySelector('.eg-StickyBanner').classList.toggle('active');
      })

      var callNumber = document.querySelector('.navbar-header .phone a').getAttribute('href');
      var callText = document.querySelector('.navbar-header .phone a').textContent;

      document.querySelector('.eg-call').setAttribute('href', callNumber);
      document.querySelector('.eg-call span').innerHTML = callText;
    }

    waitForElement(".navbar-header .phone a", init, 100, 35000);

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
