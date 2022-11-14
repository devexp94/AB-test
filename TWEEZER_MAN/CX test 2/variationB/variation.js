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


var cartData;

function init() {
      /* start your code here */
      checkAjax();
    }

    function checkAjax() {
      //check ajax complete
      var send = XMLHttpRequest.prototype.send;
      XMLHttpRequest.prototype.send = function () {
        this.addEventListener('load', function () {
          if (this.responseURL.indexOf('https://www.tweezerman.com/customer/section/load/?sections=cart') != -1) {
           //trigger mini cart popup 
           cartData = JSON.parse(this.responseText);
           waitForElement('.minicart-wrapper .subtotal .price-wrapper .price', addItem, 50, 10000);    
          }
        });
        return send.apply(this, arguments)
      }
    }
    function addItem() {
       var egPrice = document.querySelector('.minicart-wrapper .subtotal .price-wrapper .price').innerText;
      var egPriceSplit1 = egPrice.trim().split('$');
      var egPriceSplit2 = egPriceSplit1[1].split('.');
        if(egPriceSplit2[0] >= 50){
          if(!document.querySelector('.eg-ship')){
            document.querySelector('.minicart-wrapper .items-total').insertAdjacentHTML('beforebegin', '<p class="eg-ship">FREE GROUND SHIPPING OVER $50. FREE RETURNS.</p>')
          }
        }
    }
   
    /* Initialise variation */
    waitForElement(".minicart-wrapper", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();