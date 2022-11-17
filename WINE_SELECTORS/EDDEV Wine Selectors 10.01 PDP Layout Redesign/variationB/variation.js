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

    function live(selector, event, callback, context) {
      /****Helper Functions****/
      // helper for enabling IE 8 event bindings
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent('on' + type, handler);
        else el.addEventListener(type, handler);
      }
      // matches polyfill
      this.Element && function (ElementPrototype) {
        ElementPrototype.matches = ElementPrototype.matches ||
          ElementPrototype.matchesSelector ||
          ElementPrototype.webkitMatchesSelector ||
          ElementPrototype.msMatchesSelector ||
          function (selector) {
            var node = this,
              nodes = (node.parentNode || node.document).querySelectorAll(selector),
              i = -1;
            while (nodes[++i] && nodes[i] != node);
            return !!nodes[i];
          };
      }(Element.prototype);
      // live binding helper using matchesSelector
      function live(selector, event, callback, context) {
        addEvent(context || document, event, function (e) {
          var found, el = e.target || e.srcElement;
          while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
          if (found) callback.call(el, e);
        });
      }
      live(selector, event, callback, context);
    }

    /* Variation functions */
    var htmlString =''+ 
    '  <div class="eg-overlayofadd eg-overlayshow ">'+ 
    '      <div class="eg-overlay-wrapper">'+ 
    '          <div class="eg-image_and_title">'+ 
    '              <img class="eg-product_img_1" src="https://images.wineselectors.com.au/media/products/PETAL20117-main.png">'+ 
    '          </div>'+ 
    '          <div class="eg-info_container">'+ 
    '              <p class="eg-first_name"><span class="eg-product_added">##First name</span>, secret members only offer !</p>'+ 
    '              <p class="eg-save_now"><strong>Save $192 </strong> on one of <br> Australia\'s best Chardonnays</p>'+ 
    '              <p class="eg-product_name">Petaluma Tiers Chardonnay 2017</p>'+ 
    '              <p class="eg-product_offer">Buy 3 now for $228</p>'+ 
    '              <p class="eg-quantity_bottles">Quantity (bottles)</p>'+ 
    '              <div class="eg-overlay_button_wrapper">'+ 
    '                  <div>3</div><button class="eg-continue_shop">Add to Cart</button>'+ 
    '                  <a href="https://www.wineselectors.com.au/product/petaluma-tiers-chardonnay-2017/petal20117">'+ 
    '                      <div class="eg-view_cart_redirect">View Product</div>'+ 
    '                  </a>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '          <p class="eg-close_icon"> x </p>'+ 
    '      </div>'+ 
    '  </div>';
    /* Variation Init */
   function init(){
       document.querySelector('body footer').insertAdjacentHTML('afterend', htmlString);
       document.querySelector('.eg-first_name span').textContent = document.querySelector('label[for="txt_ShippingFirstName"]+input').value; 
      document.querySelector('.eg-continue_shop').addEventListener('click', () => {
          const jsondata = {
              "quantity": 3,
              "sku": "PETAL20117",
              "value": null,
              "frequency": null,
              "startDate": null,
              "varieties": null,
              "years": null
          }
          sendData(jsondata);
      });
      document.querySelector('.eg-close_icon').addEventListener('click', () => {
          document.querySelector('.eg-overlayofadd').remove();
      });
   }
function sendData(jsondata){
  const xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
  const theUrl = 'https://www.wineselectors.com.au/api/cart/add';
  xmlhttp.open('POST', theUrl);
  xmlhttp.setRequestHeader('Content-Type', 'application/json');
  xmlhttp.send(JSON.stringify(jsondata));
  xmlhttp.onreadystatechange = () => { // Call a function when the state changes.
      if (xmlhttp.readyState === 4 && (xmlhttp.status === 200 || xmlhttp.status === 204)) {
          location.reload();
      }
  };
}
    /* Initialize variation */
    waitForElement("body footer", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();