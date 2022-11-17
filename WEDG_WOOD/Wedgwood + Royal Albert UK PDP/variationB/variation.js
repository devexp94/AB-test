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

         var egBlackFridaySale =''+ 
      '  <div class="eg-sale">'+ 
      '   <img class="eg-desktop-image" src="https://gbl-oned-cdn-prod.azureedge.net/-/media/wedgwood/images/wedgwood/sale/SpendSaveproductpagebannerdesktop.ashx">'+
      '   <img class="eg-mobile-image" src="https://gbl-oned-cdn-prod.azureedge.net/-/media/wedgwood/images/wedgwood/sale/SpendSaveproductpagebannermobile.ashx">'+
      '  </div>';

      
      function init() {

        document.querySelector('.c-product-description').insertAdjacentHTML('beforebegin', egBlackFridaySale);


      }
     

      /* Initialise variation */
      waitForElement(".c-product-description", init, 100, 25000);
      document.querySelector('body').insertAdjacentHTML('beforeend', '<img src="https://gbl-oned-cdn-prod.azureedge.net/-/media/wedgwood/images/wedgwood/sale/SpendSaveproductpagebannerdesktop.ashx" style="display: none;"><img src="https://gbl-oned-cdn-prod.azureedge.net/-/media/wedgwood/images/wedgwood/sale/SpendSaveproductpagebannermobile.ashx" style="display: none;">');
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();


