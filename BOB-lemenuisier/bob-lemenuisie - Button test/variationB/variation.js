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
var buttonSection = ''+
'    <div class="eg-button-container">'+
'       <a class="eg-button standard active" data-target= "" href="https://www.bob-lemenuisier.fr/portail-battant-aluminium-millau-2021-standard">standard</a>'+
'       <span class="separator">OU</span>'+
'       <a class="eg-button sur-mesure" data-target= "" href="https://www.bob-lemenuisier.fr/portail-battant-aluminium-millau">sur-mesure</a>'+
'    </div>';

    function init() {
        
        document.querySelector('.product-info-right .product-info-main-buttons').insertAdjacentHTML('afterend', buttonSection);
    }

    /* Initialise variation */
    waitForElement(".product-info-right .product-info-main-buttons", init, 50, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
