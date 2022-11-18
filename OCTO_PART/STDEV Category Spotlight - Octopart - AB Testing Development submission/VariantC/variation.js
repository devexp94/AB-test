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

    var egProduct =''+ 
    '  <h2 class="eg-heading">Product Spotlight</h2>'+ 
    ' <div class="eg-product-container">'+
    '  <div class="eg-image-section">'+ 
    '      <div class="eg-image-inr">'+ 
    '          <img src="https://cdn.optimizely.com/img/8453775962/54a803ed63f642c8a6259d67d80a4fdb.svg">'+ 
    '      </div>'+ 
    '  </div>'+ 
    '  <div class="eg-content-section">'+ 
    '      <div class="eg-content-inr">'+ 
    '          <h3 class="eg-content-heading">Communication Modules</h3>'+ 
    '          <p class="eg-para">Communication modules typically include a microcontroller, RF front-end (e.g. WiFi, Bluetooth, 2G/3G/5G, NB-IoT, LoRaWan), plus all required peripherals and memory to provide spec-compliant, certified connectivity functionality. These modules are ideal for designing IoT and Cloud connected products, and applicable through all phases of development from prototyping to mass production. Octopart offers a wide range of communication modules from industry leading distributors such as Mouser, Digi-key, Arrow Electronics, Avnet and several more.</p>'+ 
    '          <div class="eg-button">'+ 
    '              <a class="eg-button-link" href="https://octopart.com/search?category_id=6298&case_package=Module">Explore More</a>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '      </div>'+ 
    '  </div>';

    function init() {

      document.querySelector('.tool-list-and-tab-box .container').innerHTML = egProduct;

    }

    /* Initialise variation */
    waitForElement(".tool-list-and-tab-box .container", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
