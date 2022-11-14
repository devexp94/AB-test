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

var egButton = '<p class="eg-button"><a href="https://fazup.fr/products/patch-fazup?variant=35415967858854">Commander</a></p>';

    function init() {
      document.querySelector('#shopify-section-1595863677474 .module-inner').insertAdjacentHTML('beforeend', egButton);
   document.querySelector('div.shopify-section + div#shopify-section-1595673871144.shopify-section').insertAdjacentHTML('beforebegin', egButton);
  document.querySelector('div.shopify-section .feature-title:nth-child(3)').insertAdjacentHTML('beforebegin', egButton);
  document.querySelector('p#beneflegal').insertAdjacentHTML('beforebegin', egButton);
  document.querySelector('#shopify-section-1604066435765345f2').insertAdjacentHTML('beforebegin', egButton);

      document.querySelector('#shopify-section-1603892153e9cd724f .rmvpadd > p:nth-child(3)').insertAdjacentHTML('afterend', egButton);

      document.querySelector('#shopify-section-1603892153e9cd724f .rmvpadd').insertAdjacentHTML('beforeend', egButton);


      document.querySelector('#shopify-section-1595858611251 .module-inner .rte blockquote').insertAdjacentHTML('beforebegin', egButton);

      document.querySelector('#medias').insertAdjacentHTML('beforeend', egButton);

      document.querySelector('#shopify-section-1595675069445 .module-inner').insertAdjacentHTML('beforeend', egButton);
    }

    /* Initialise variation */
    waitForElement("#medias", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();