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

    var egReview =''+ 
    '  <div class="eg-review">'+ 
    '      <div class="eg-review-inr">'+ 
    '          <div class="eg-review-star">'+ 
    '              <span class="r--star-grade my"><span'+ 
    '                      class="r--stars-icon r-icon--star1"'+ 
    '                      ></span><span class="r--stars-icon r-icon--star1" ></span><span class="r--stars-icon r-icon--star1"'+ 
    '                  ></span><span class="r--stars-icon r-icon--star1" ></span><span class="r--stars-icon r-icon--star1 last" ></span></span>'+ 
    '          </div>'+ 
    '          <div class="eg-review-text">(1297 Avis)</div>'+ 
    '      </div>'+ 
    '  </div>';

    function init() {
    
      document.querySelector('#shopify-section-1595674034588 article.module-inner').insertAdjacentHTML('beforebegin', egReview);

    }


    waitForElement("#shopify-section-1595674034588 article.module-inner", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
