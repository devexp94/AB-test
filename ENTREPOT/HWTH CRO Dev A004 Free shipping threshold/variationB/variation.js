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
      document.querySelector('.minicart-wrapper .showcart').addEventListener('mousedown', function () {
        waitForElement('.minicart-wrapper .subtotal .price-wrapper .price', addItem, 50, 10000);
      });
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
      var shippingMessage, subTotal;
      var progress, shipInnerHtml;
      if (cartData)
        subTotal = cartData.cart.subtotalAmount;
      else {
        subTotal = document.querySelector('.minicart-wrapper .subtotal .price').textContent.replace('$', '');
      }
      if (subTotal < 50) {
        var diff = 50 - subTotal;
        shippingMessage = 'You are $' + parseInt(diff) + ' away from free shipping';
        progress = subTotal * 2;
        shipInnerHtml = '<p class="eg-ship">' + shippingMessage + '</p><div><span style="width:' + progress + '%"></span></div>';
      }
      else {
        shippingMessage = 'You qualify for free shipping!';
        progress = 100;
        shipInnerHtml = '<p class="eg-ship">' + shippingMessage + '</p><div><span style="width:' + progress + '%"></span></div>';
      }
      var shippingMessageHtml = '<div class="eg-main"><p class="eg-ship">' + shippingMessage + '</p><div><span style="width:' + progress + '%"></span></div></div>';
      if (document.querySelector('p.eg-ship'))
        document.querySelector('div.eg-main').innerHTML = shipInnerHtml;
      else
        document.querySelector('.minicart-wrapper .items-total').insertAdjacentHTML('beforebegin', shippingMessageHtml);
    }

    /* Initialise variation */
    waitForElement(".minicart-wrapper", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();