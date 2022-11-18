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

    var egText =''+ 
'  <div class="eg-new-section">'+ 
'      <div class="eg-new-section-inr">'+ 
'          <p class="eg-text fs40 fs48--1000 fw300 ls--small--w800 gara">✓ Reef-Friendly</p>'+ 
'          <p class="eg-text fs40 fs48--1000 fw300 ls--small--w800 gara">✓ Cruelty Free</p>'+ 
'          <p class="eg-text fs40 fs48--1000 fw300 ls--small--w800 gara">✓ Oxybenzone Free</p>'+ 
'          <p class="eg-text fs40 fs48--1000 fw300 ls--small--w800 gara">✓ Paraben Free</p>'+ 
'          <p class="eg-text fs40 fs48--1000 fw300 ls--small--w800 gara">✓ Octinoxate Free</p>'+ 
'          <p class="eg-text fs40 fs48--1000 fw300 ls--small--w800 gara">✓ Peg Free</p>'+ 
'          <p class="eg-text fs40 fs48--1000 fw300 ls--small--w800 gara">✓ Vegan</p>'+ 
'      </div>'+ 
'  </div>';


    function init() {
      
      document.querySelector('.product-lander div[data-marqy]').insertAdjacentHTML('afterend',egText )
    }

    /* Initialise variation */
    waitForElement(".product-lander div[data-marqy]", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
