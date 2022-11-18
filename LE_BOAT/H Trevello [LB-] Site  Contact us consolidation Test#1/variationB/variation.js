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

    var StickyBanner =''+ 
    '  <div class="StickyBanner" data-component="StickyBanner">'+ 
    '      <p class="banner-heading">Contact Us <i class="lbt-icon-down"></i></p>'+ 
    '      <div class="StickyBanner_inner container">'+ 
    '          <a href="#portalid=6781017&formid=0773606d-9ee6-4fd8-a7da-1ae6c2e82b65" class="StickyBanner_btn icon-signin">'+ 
    '              <div class="StickyBanner_icon"><span>Subscribe</span></div>'+ 
    '          </a>'+ 
    '          <a href="#portalid=6781017&formid=d83ea43d-885d-4025-bdce-377be60dba67" class="StickyBanner_btn icon-quote">'+ 
    '              <div class="StickyBanner_icon"><span>Ask for Quote</span></div>'+ 
    '          </a>'+ 
    '          <a href="#portalid=6781017&formid=441dc194-2964-478d-87e9-8bd35cdec373" class="StickyBanner_btn icon-request-brochure">'+ 
    '              <div class="StickyBanner_icon"><span>Order Brochure</span></div>'+ 
    '          </a>'+ 
    '      </div>'+ 
    '  </div>';

    function init() {

      document.querySelector('body').insertAdjacentHTML('beforeend', StickyBanner);

      document.querySelector('.StickyBanner .banner-heading').addEventListener('click', function(){
        document.querySelector('.StickyBanner').classList.toggle('active');
      })

    }

    waitForElement("body", init, 100, 35000);

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
