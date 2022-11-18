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

    /* Variation functions */

    /* Variation Init */
    function init() {
      
      document.querySelector('.gated-article-popup__container .gated-article-popup__trial-link').insertAdjacentHTML('beforebegin', '<h2 class="eg-offer">First month for <strike>$4.99</strike> FREE</h2>')
      document.querySelector('.gated-article-popup__container .gated-article-popup__trial-link').textContent="GET OFFER";

      document.querySelector('.gated-article-popup__container .gated-article-popup__features').innerHTML = '<li>Unlock premium sports stories you won\'t find anywhere else</li><li>Engage with the writers you love</li>';

    }

    /* Initialise variation */
    waitForElement(".gated-article-popup__container .gated-article-popup__features", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
