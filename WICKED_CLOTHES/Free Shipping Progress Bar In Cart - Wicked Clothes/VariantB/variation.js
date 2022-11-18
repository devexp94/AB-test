(function () {
  try {

    var debug = 0;
    var variation_name = "";

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

    var egProgressBar = '<div class="eg-free-shipping">'+
    '           <div class="eg-progress-background">'+
    '             <div class="eg-progress-bar" style="width: 60%;"></div>'+
    '           </div>'+
    '       </div>';

    function init() {

      document.querySelector('.inline-cart__contents .inline-cart__promo').insertAdjacentHTML('afterend', egProgressBar);

    }

    
    waitForElement(".inline-cart__contents .inline-cart__promo", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
