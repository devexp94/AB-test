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

    function init() {
      document.querySelector('.StickyBanner_btn.icon-signin .StickyBanner_icon').innerHTML = "<span>Subscribe</span>";
      document.querySelector('.StickyBanner_btn.icon-quote .StickyBanner_icon').innerHTML = "<span>Ask for Quote</span>";
      document.querySelector('.StickyBanner_btn.icon-request-brochure .StickyBanner_icon').innerHTML = "<span>Order Brochure</span>";

      document.querySelector('.StickyBanner .StickyBanner_inner').insertAdjacentHTML('beforebegin', '<p class="banner-heading">Contact Us</p>');

      document.querySelector('.StickyBanner .banner-heading').addEventListener('click', function(){
        document.querySelector('.StickyBanner').classList.toggle('active');
      })

    }

    waitForElement(".StickyBanner_btn.icon-request-brochure .StickyBanner_icon", init, 100, 35000);

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
