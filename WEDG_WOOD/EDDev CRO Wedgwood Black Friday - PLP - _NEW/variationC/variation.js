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
        document.querySelector('.c-c-pl_products .c-c-product-card:nth-child(4)').addEventListener('click', function(e){
          e.preventDefault();
          e.stopImmediatePropagation();
          window.open("https://www.wedgwood.com/en-gb/sale/sale/sale", "_blank");
        })

      }
     
      /* Initialise variation */
      waitForElement(".c-c-pl_products .c-c-product-card:nth-child(4)", init, 100, 25000);
      document.querySelector('body').insertAdjacentHTML('beforeend', '<img src="https://gbl-oned-cdn-prod.azureedge.net/-/media/wedgwood/images/wedgwood/sale/winter%20sale%20plp%20banner.ashx" style="display: none;">');
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();


