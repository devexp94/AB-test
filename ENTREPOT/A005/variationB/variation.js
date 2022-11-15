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
    function live(event, selector, callback, context) {
      /****Helper Functions****/
      // helper for enabling IE 8 event bindings
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent("on" + type, handler);
        else el.addEventListener(type, handler);
      }
      // matches polyfill
      this.Element &&
        (function (ElementPrototype) {
          ElementPrototype.matches =
            ElementPrototype.matches ||
            ElementPrototype.matchesSelector ||
            ElementPrototype.webkitMatchesSelector ||
            ElementPrototype.msMatchesSelector ||
            function (selector) {
              var node = this,
                nodes = (
                  node.parentNode || node.document
                ).querySelectorAll(selector),
                i = -1;
              while (nodes[++i] && nodes[i] != node);
              return !!nodes[i];
            };
        })(Element.prototype);
      // live binding helper using matchesSelector
      function live(selector, event, callback, context) {
        addEvent(context || document, event, function (e) {
          var found,
            el = e.target || e.srcElement;
          while (
            el &&
            el.matches &&
            el !== context &&
            !(found = el.matches(selector))
          )
            el = el.parentElement;
          if (found) callback.call(el, e);
        });
      }
      live(selector, event, callback, context);
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
      '  <div class="eg-cart-drawer-popup eg-cart-drawer-popup1">' +
      '  <div class="eg-cart-drawer-popup-overlay"></div>' +
      '  <div class="eg-cart-drawer-toster">' +
      '      <div class="eg-cart-drawer-toster-content">' +
      '        <div class="eg-cart-drawer-header-content">' +
      '          <h2 class="eg-cart-drawer-toster-heading">N\'oubliez pas votre panier</h2>' +
      '          <span class="eg-cart-drawer-toster-cross">×</span>' +
      '         </div>' +
      '          <div class="eg-cart-drawer-cart-content">' +
      '              <div class="eg-cart-drawer-cart-content-inr">' +
      '              </div>' +
      '          </div>' +
      '<div class="sub-total">TOTAL commande TTC <span>89.80 €</span></div>'+
      '         <a href="https://www.entrepot-du-bricolage.fr/commande/panier" class="eg-cart-drawer-link">Commander</a>' +
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
      setTimeout(function(){
        document.querySelector('.o-header-main .o-header-cart a.a-link').insertAdjacentHTML('afterend', egToster);
        var pn = window.location.pathname;
          document.querySelector('.eg-cart-drawer-toster-cross').addEventListener('click', function () {
            createSession();
            document.querySelector('body').classList.remove('eg-cart-drawer-top-toster');
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'event': 'campClick',
              'eventAction': 'A001 | Fermeture pop-up (icône)',
              'eventLibelle': pn
            });
          });
          
          document.querySelector('.eg-cart-drawer-link').addEventListener('click', function () {
            createSession();
            document.querySelector('body').classList.remove('eg-cart-drawer-top-toster');
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'event': 'campClick',
              'eventAction': 'A001 | Clic CTA Commander',
              'eventLibelle': pn
            });
          });
    
          
          document.querySelector('.eg-cart-drawer-popup-overlay').addEventListener('click', function () {
            createSession();
            document.querySelector('body').classList.remove('eg-cart-drawer-top-toster');
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'event': 'campClick',
              'eventAction': 'A001 | Fermeture pop-up (externe)',
              'eventLibelle': pn
            });
          });
    
      },2000);
      if(!document.querySelector('.eg-cart-drawer-popup1'))
     
      live('mousedown','.o-product-information button.a-button.a-button-primary.a-button-icon.m-add-cart-button', function(){
        waitForElement('.toasted.toasted-primary.success', function(){
          addProduct();
          addSubTotal();
          },50,10000);
      });

      live('mousedown','.o-additionalsales button.m-add-cart-button, #product-list button.m-add-cart-button', function(){
          waitForElement('.toasted.toasted-primary.success', function(){
            //console.log('hello111');
          addProduct();
          addSubTotal();
            },50,10000);
        });

      
    }
    function addProduct() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var el = document.createElement('div');
          el.innerHTML = this.responseText;
          appendItem(el);
          document.querySelector('body').classList.add("eg-cart-drawer-top-toster");
        }
      };
      xhttp.open("GET", "https://www.entrepot-du-bricolage.fr/commande/panier", true);
      xhttp.send();
    }
    function appendItem(el) {
      var item = '';
      var productImg = el.querySelectorAll('li.o-cart-product-item .o-cart-product-item-image img');
      var productDetail = el.querySelectorAll('li.o-cart-product-item .m-product-description');
      var productQty = el.querySelectorAll('li.o-cart-product-item .o-cart-product-item-info') 

      for (var i = 0; i < productImg.length; i++) {
        item += '<div class="product-item"><div class="img-div"><img src="' + productImg[i].getAttribute('data-src') + '"></div><div class="content-div">' + productDetail[i].innerHTML + productQty[i].innerHTML + '</div></div>';
      }
      document.querySelector('.eg-cart-drawer-cart-content-inr').innerHTML = item;

    }
    function addSubTotal(){
      var cartKey = getCookie('cart');
      //get subtotal 
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var data = JSON.parse(this.responseText);
         // document.querySelector('.eg-cart-drawer-link').innerHTML = 'Commander';
          document.querySelector('.sub-total span').innerHTML =  data.metaTotal + '€'
        }
      };
      xhttp.open("GET", "https://www.entrepot-du-bricolage.fr/api/carts/601/" + cartKey, true);
      xhttp.send();
    }
  
    /* Initialise variation */
      waitForElement(".o-header-main .o-header-cart", init, 50, 15000);
    
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();