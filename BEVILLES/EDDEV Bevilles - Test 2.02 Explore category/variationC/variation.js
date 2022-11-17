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
      $('.shop-by-sale .opt-by-category .heading-group span').html('SHOP BY CATEGORY');
      $('.opt-by-category .slick-slider').slick('unslick');
    }

    onLoadJqueryLibrary(function () {
      waitForElement(".opt-by-category .slick-slider", init, 50, 15000);
    }, 50, 10000)
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();