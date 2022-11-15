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

    var tooltip = ` 
        <div class="product-bottom-table">
        <div class="prod-text">
            <img src="https://editor-assets.abtasty.com/49064/62570bcc406901649871820.jpg" width="25px" height="25px">Sustainable Product
            <div class="tooltip-detail"><span class="tooltip-icon"><img src="https://editor-assets.abtasty.com/49064/62579ee94ad961649909481.png"></span>
            <span class="tooltip-text">We make best in class, high quality to ensure your purchase will stand the test of time. we fully believe in buying better,wasting less.</span>
            </div>
        </div>
    </div>`;

    function init() {

        document.querySelector('.product-features > .product-features__item').insertAdjacentHTML('afterend', tooltip);
    }

    /* Initialise variation */
    waitForElement(".product-features > .product-features__item", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();