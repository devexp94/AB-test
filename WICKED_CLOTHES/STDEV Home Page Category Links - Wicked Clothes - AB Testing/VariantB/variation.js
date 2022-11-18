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

    var egShopCollection =''+ 
    '  <div class="eg-collection-section">'+ 
    '      <div class="eg-collection-section-inr">'+ 
    '          <h2 class="eg-collection-heading">Shop Collections</h2>'+ 
    '      <div class="eg-collection-section-container">'+ 
    '          <div class="eg-collection">'+ 
    '              <a href="https://www.wickedclothes.com/collections/black-and-white" class="eg-link">'+ 
    '                  <img src="https://cdn.shopify.com/s/files/1/0251/5984/files/black-and-white-collection.png?v=1657902526" alt="">'+ 
    '                  <p class="eg-link-heading">Black and white</p>'+ 
    '              </a>'+ 
    '          </div>'+ 
    '          <div class="eg-collection">'+ 
    '              <a href="https://www.wickedclothes.com/collections/cryptids" class="eg-link">'+ 
    '                  <img src="https://cdn.shopify.com/s/files/1/0251/5984/files/cryptids-collection.png?v=1657902526" alt="">'+ 
    '                  <p class="eg-link-heading">Cryptids</p>'+ 
    '              </a>'+ 
    '          </div>'+ 
    '          <div class="eg-collection">'+ 
    '              <a href="https://www.wickedclothes.com/collections/cats" class="eg-link">'+ 
    '                  <img src="https://cdn.shopify.com/s/files/1/0251/5984/files/cats-collection.png?v=1657902526" alt="">'+ 
    '                  <p class="eg-link-heading">Cats</p>'+ 
    '              </a>'+ 
    '          </div>'+ 
    '          <div class="eg-collection">'+ 
    '              <a href="https://www.wickedclothes.com/collections/bonesParanormal" class="eg-link">'+ 
    '                  <img src="https://cdn.shopify.com/s/files/1/0251/5984/files/bones-collection.png?v=1657902526" alt="">'+ 
    '                  <p class="eg-link-heading">Bones</p>'+ 
    '              </a>'+ 
    '          </div>'+ 
    '          <div class="eg-collection">'+ 
    '              <a href="https://www.wickedclothes.com/collections/paranormal" class="eg-link">'+ 
    '                  <img src="https://cdn.shopify.com/s/files/1/0251/5984/files/paranormal-collection.png?v=1657902526" alt="">'+ 
    '                  <p class="eg-link-heading">Paranormal</p>'+ 
    '              </a>'+ 
    '          </div>'+ 
    '          <div class="eg-collection">'+ 
    '              <a href="https://www.wickedclothes.com/collections/plants" class="eg-link">'+ 
    '                  <img src="https://cdn.shopify.com/s/files/1/0251/5984/files/plants-collection.png?v=1657902526" alt="">'+ 
    '                  <p class="eg-link-heading">Plants</p>'+ 
    '              </a>'+ 
    '          </div>'+ 
    '          <div class="eg-collection">'+ 
    '              <a href="https://www.wickedclothes.com/collections/satanism" class="eg-link">'+ 
    '                  <img src="https://cdn.shopify.com/s/files/1/0251/5984/files/satanism-collection.png?v=1657902526" alt="">'+ 
    '                  <p class="eg-link-heading">Satanism</p>'+ 
    '              </a>'+ 
    '          </div>'+ 
    '          <div class="eg-collection">'+ 
    '              <a href="https://www.wickedclothes.com/collections/uplifting" class="eg-link">'+ 
    '                  <img src="https://cdn.shopify.com/s/files/1/0251/5984/files/uplifting-collection.png?v=1657902526" alt="">'+ 
    '                  <p class="eg-link-heading">Uplifting</p>'+ 
    '              </a>'+ 
    '          </div>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>';

    function init() {
      
      document.querySelector('.bg-noise__contents > .shopify-section:first-of-type').insertAdjacentHTML('afterend', egShopCollection)

    }

    /* Initialise variation */
    waitForElement(".bg-noise__contents > .shopify-section:first-of-type", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
