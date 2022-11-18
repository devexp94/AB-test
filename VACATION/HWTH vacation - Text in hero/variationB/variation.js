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
'  <div class="eg-review-container">'+ 
'      <p class="eg-text eg-text-desktop">“The World\'s Most Best-Smelling Sunscreen”</p>'+ 
'      <p class="eg-text eg-text-mobile">“The World\'s Best-Smelling Sunscreen”</p>'+ 
'      <div class="eg-review">'+ 
'      <p class="eg-text">4.94 / 5</p>'+ 
'          <div class="eg-star">'+ 
'              <svg viewBox="0 0 51 48" class="widget-svg" style="width: 14px; height: 14px; transition: transform 0.2s ease-in-out 0s;"><path class="star" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" style="fill: rgb(241, 210, 122); transition: fill 0.2s ease-in-out 0s;"></path></svg>'+ 
'              <svg viewBox="0 0 51 48" class="widget-svg" style="width: 14px; height: 14px; transition: transform 0.2s ease-in-out 0s;"><path class="star" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" style="fill: rgb(241, 210, 122); transition: fill 0.2s ease-in-out 0s;"></path></svg>'+ 
'              <svg viewBox="0 0 51 48" class="widget-svg" style="width: 14px; height: 14px; transition: transform 0.2s ease-in-out 0s;"><path class="star" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" style="fill: rgb(241, 210, 122); transition: fill 0.2s ease-in-out 0s;"></path></svg>'+ 
'              <svg viewBox="0 0 51 48" class="widget-svg" style="width: 14px; height: 14px; transition: transform 0.2s ease-in-out 0s;"><path class="star" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" style="fill: rgb(241, 210, 122); transition: fill 0.2s ease-in-out 0s;"></path></svg>'+ 
'              <svg viewBox="0 0 51 48" class="widget-svg" style="width: 14px; height: 14px; transition: transform 0.2s ease-in-out 0s;"><path class="star" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" style="fill: rgb(241, 210, 122); transition: fill 0.2s ease-in-out 0s;"></path></svg>'+ 
'          </div>'+ 
'          <p class="eg-review-text">1196 Reviews</p>'+ 
'      </div>'+ 
'<a class="eg-shop-button button mt2 mb2 fs22--1000 bg--yellow dib optima ls--small--w800 caps color--black italic bold" title="Shop the collection" href="/collections/store"><span>Shop the collection</span></a>'+
'  </div>';

    function init() {
      if(!document.querySelector('.eg-review-container'))
        document.querySelector('img.hero__logo').insertAdjacentHTML('afterend', egReview);
     

    }

    /* Initialise variation */
    waitForElement("img.hero__logo", init, 100, 10000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();