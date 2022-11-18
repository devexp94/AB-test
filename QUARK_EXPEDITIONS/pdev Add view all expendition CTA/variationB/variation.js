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


    function init() {

       document.querySelector('#item-content .cta-item-container').insertAdjacentHTML('beforeend','<div class="ym_cta"><a href="https://www.quarkexpeditions.com/expeditions" target="_self">View All Expeditions</a></div>');
    }

    
    waitForElement("#item-content .cta-item-container", init, 50, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();