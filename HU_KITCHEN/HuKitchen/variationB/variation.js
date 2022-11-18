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

    function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }

    function setCookie(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    var egToster = '' +
      '  <div class="eg-popup">' +
      '  <div class="eg-popup-overlay"></div>' +
      '  <div class="eg-toster">' +
      '      <div class="eg-toster-content">' +
      '        <div class="eg-header-content">' +
      '          <h2 class="eg-toster-heading"> Items in your cart</h2>' +
      '          <span class="eg-toster-cross">×</span>' +
      '         </div>' +
      '          <div class="eg-cart-content">' +
      '              <div class="eg-cart-content-inr">' +
      '              </div>' +
      '          </div>' +
      '         <a href="https://hukitchen.com/cart" class="eg-link">Proceed to checkout</a>' +
      '      </div>' +
      '      </div>' +
      '  </div>';

    var offset;

    function createSession() {
      if (getCookie('itemOnCart') == null) {
        setCookie('itemOnCart', '1', 365);
      }
    }

    function init() {
      document.querySelector('body').insertAdjacentHTML('beforeend', egToster);

      document.querySelector('.eg-toster-cross').addEventListener('click', function () {
        createSession();
        document.querySelector('body').classList.remove('eg-top-toster');
      });

      document.querySelector('.eg-popup-overlay').addEventListener('click', function () {
        createSession();
        document.querySelector('body').classList.remove('eg-top-toster');
      });
      //add mouseout event 
      document.addEventListener("mouseout", function (e) {
        var cartVal = document.querySelector('.header-side__icon--cart .cart-icon__count') && document.querySelector('.header-side__icon--cart .cart-icon__count').textContent;
        if (e.toElement == null && e.relatedTarget == null) {
          if (parseInt(cartVal) > 0 && !getCookie('itemOnCart')) {
            document.querySelector('body').classList.add("eg-top-toster");
            //create session 
            offset = window.pageYOffset;
          }
        }
      });
      if(window.screen.width < 1024)
      { 
          // listen to "scroll" event
          window.onscroll = function(){
             var cartVal = document.querySelector('.header-side__icon--cart .cart-icon__count') && document.querySelector('.header-side__icon--cart .cart-icon__count').textContent;
            if (parseInt(cartVal) > 0 && checkScrollSpeed() > 100 && !getCookie('itemOnCart') == null) {
              document.querySelector('body').classList.add("eg-top-toster");
              
          }
          };
      }
    }
    function appendItem(data) {
      var item = '';
      var product = data.items;

      for (var i = 0; i < product.length; i++) {
        item += '<div class="product-item"><a href="'+product[i].url+'"><div class="img-div"><img src="' + product[i].image+ '"></div><div class="content-div"><p class="eg-item-title">' + product[i].product_title + '</p><span class="eg-item-description">'+product[i].product_type +'</span><span class="eg-item-qty">Qty - '+ product[i].quantity+'</span></div></div>';
      }
      document.querySelector('.eg-cart-content-inr').innerHTML = item;
      document.querySelector('.eg-toster-heading').innerHTML = data.item_count+' items in your cart';
    }
    function addSubTotal(){
      //get subtotal 
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
         var data = JSON.parse(this.responseText);
         appendItem(data);
        }
      };
      xhttp.open("GET", "https://hukitchen.com/cart.js", true);
      xhttp.send();
    }
    var checkScrollSpeed = (function(settings){
      settings = settings || {};
  
      var lastPos, newPos, timer, delta, 
          delay = settings.delay || 50; // in "ms" (higher means lower fidelity )
  
      function clear() {
        lastPos = null;
        delta = 0;
      }
  
      clear();
  
      return function(){
        newPos = window.scrollY;
        if ( lastPos != null ){ // && newPos < maxScroll 
          delta = newPos -  lastPos;
        }
        lastPos = newPos;
        clearTimeout(timer);
        timer = setTimeout(clear, delay);
        return delta;
      };
  })();
    /* Initialise variation */
    if (!getCookie('itemOnCart')) {
      addSubTotal();
      waitForElement("body", init, 50, 15000);
    }
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();