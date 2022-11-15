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
    function onLoadJqueryLibrary(trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (window.jQuery && window.jQuery.fn) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }

    function init() {
      var $ = window.jQuery

      $('.global-footer__nav-links .global-footer__nav_link-list').addClass('active');
      
      $('body').on('click','.global-footer__nav-links .global-footer__nav_link-list', function(){
        $(this).toggleClass("active");
      });
    }

    onLoadJqueryLibrary(function () {
      waitForElement(".global-footer__nav-links .global-footer__nav_link-list", init, 100, 25000);
    }, 50, 10000)
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();