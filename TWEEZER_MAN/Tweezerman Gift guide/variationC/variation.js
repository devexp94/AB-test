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

    var giftSection =''+ 
    '  <div class="eg-gift-section">'+ 
    '      <div class="eg-gift-section-inr">'+ 
    '          <h2 class="h1-correct eg-gift-heading">Gift Guide</h2>'+ 
    '          <div class="eg-gift-content">'+ 
    '              <div class="eg-gift-box">'+ 
    '                  <a href="#" class="eg-gift-box-inr">'+ 
    '                      <img src="https://editor-assets.abtasty.com/49064/617fef403a3821635774272.jpg" class="product-image-photo" loading="lazy" alt="For the Beauty Enthusiasts">'+ 
    '                      <img class="product-image-photo photo-hover" src="https://editor-assets.abtasty.com/49064/617fefa10e2fe1635774369.jpg" loading="lazy" alt="For the Beauty Enthusiasts">'+ 
    '                  </a>'+ 
    '              </div>'+ 
    '              <div class="eg-gift-box">'+ 
    '                  <a href="#" class="eg-gift-box-inr">'+ 
    '                      <img src="https://editor-assets.abtasty.com/49064/617ff0f5725b11635774709.jpg" class="product-image-photo" loading="lazy" alt="Stocking Stuffers under $16">'+ 
    '                      <img class="product-image-photo photo-hover" src="https://editor-assets.abtasty.com/49064/61800d571c7661635781975.jpg" loading="lazy" alt="Stocking Stuffers under $16">'+ 
    '                  </a>'+ 
    '              </div>'+ 
    '              <div class="eg-gift-box">'+ 
    '                  <a href="#" class="eg-gift-box-inr">'+ 
    '                      <img class="product-image-photo" src="https://editor-assets.abtasty.com/49064/61800c9a813d71635781786.jpg" loading="lazy" alt="Award Winning Classics">'+ 
    '                      <img class="product-image-photo photo-hover" src="https://editor-assets.abtasty.com/49064/617ff1400dcb71635774784.jpg" loading="lazy" alt="Award Winning Classics">'+
    '                  </a>'+ 
    '              </div>'+ 
    '              <div class="eg-gift-box">'+ 
    '                  <a href="#" class="eg-gift-box-inr">'+ 
    '                      <img class="product-image-photo" src="https://editor-assets.abtasty.com/49064/618006ec1623a1635780332.jpg" loading="lazy" alt="Must Have Holiday Sets">'+ 
    '                      <img class="product-image-photo photo-hover" src="https://editor-assets.abtasty.com/49064/618006275740c1635780135.jpg" loading="lazy" alt="Must Have Holiday Sets">'+ 
    '                  </a>'+ 
    '              </div>'+ 
    '              <div class="eg-gift-box">'+ 
    '                  <a href="#" class="eg-gift-box-inr">'+ 
    '                      <img class="product-image-photo" src="https://editor-assets.abtasty.com/49064/61800779472661635780473.jpg" loading="lazy" alt="Gifts For the Family">'+ 
    '                      <img class="product-image-photo photo-hover" src="https://editor-assets.abtasty.com/49064/61800749b7b751635780425.jpg" loading="lazy" alt="Gifts For the Family">'+ 
    '                  </a>'+ 
    '              </div>'+ 
    '              <div class="eg-gift-box">'+ 
    '                  <a href="#" class="eg-gift-box-inr">'+ 
    '                      <img class="product-image-photo" src="https://editor-assets.abtasty.com/49064/6180081a484281635780634.jpg" loading="lazy" alt="Grooming Gifts for Him">'+ 
    '                      <img class="product-image-photo photo-hover" src="https://editor-assets.abtasty.com/49064/618007aaa9b491635780522.jpg" loading="lazy" alt="Grooming Gifts for Him">'+ 
    '                  </a>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>';
    
    

    function init() {
      /* start your code here */
      document.querySelector('.block-products-list').insertAdjacentHTML('afterend', giftSection)
    }

   
    /* Initialise variation */
    waitForElement(".block-products-list", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();