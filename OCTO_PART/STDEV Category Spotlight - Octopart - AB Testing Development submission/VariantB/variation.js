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
    '          <div class="eg-img-box">'+ 
    '              <img src="https://media.digikey.com/Photos/Telegesis%20Ltd/ETRX357HR-LRS.jpg" alt="ETRX357HR-LRS">'+ 
    '          </div>'+ 
    '          <div class="eg-img-box">'+ 
    '              <img src="https://connectivity-staging.s3.us-east-2.amazonaws.com/2019-04/BL652-SA-RightLabel_0.png" alt="BL652-SA-RightLabel_0">'+ 
    '          </div>'+ 
    '          <div class="eg-img-box">'+ 
    '              <img src="https://media.digikey.com/photos/Microchip%20Tech%20Photos/WLR089U0-I-RM.jpg" alt="WLR089U0-I-RM">'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>'+ 
    '  <div class="eg-content-section">'+ 
    '      <div class="eg-content-inr">'+ 
    '          <h3 class="eg-content-heading">Communication Modules</h3>'+ 
    '          <p class="eg-para">Communication modules typically include a microcontroller, RF front-end (e.g. WiFi, Bluetooth, 2G/3G/5G, NB-IoT, LoRaWan), plus all required peripherals and memory to provide spec-compliant, certified connectivity functionality. These modules'+ 
    '              are ideal for designing IoT and Cloud connected products, and applicable through all phases of development from prototyping to mass production. Octopart offers a wide range of communication modules from industry leading distributors such as'+ 
    '              Mouser, Digi-key, Arrow Electronics, Avnet and several more.</p>'+ 
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
