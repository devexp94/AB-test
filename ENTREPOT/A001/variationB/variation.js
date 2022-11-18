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
      '          <h2 class="eg-toster-heading">N\'oubliez pas votre panier</h2>' +
      '          <span class="eg-toster-cross">×</span>' +
      '         </div>' +
      '          <div class="eg-cart-content">' +
      '              <div class="eg-cart-content-inr">' +
      '              </div>' +
      '          </div>' +
      '         <a href="" class="eg-link">Commander -</a>' +
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


addSubTotal();

      //add mouseout event 
      document.addEventListener("mouseout", function (e) {
        var cartVal = document.querySelector('.m-cart-number .a-icon-bubble') && document.querySelector('.m-cart-number .a-icon-bubble').textContent.match(/\d+/)[0];
        if (e.toElement == null && e.relatedTarget == null) {
          if (parseInt(cartVal) > 0 && !getCookie('itemOnCart')) {
            document.querySelector('body').classList.add("eg-top-toster");
            //create session 
            offset = window.pageYOffset;
          }
        }
      });

    }
    function addProduct() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var el = document.createElement('div');
          el.innerHTML = this.responseText;
          appendItem(el)
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
      document.querySelector('.eg-cart-content-inr').innerHTML = item;

    }
    function addSubTotal(){
      var cartKey = getCookie('cart');
      //get subtotal 
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var data = JSON.parse(this.responseText);
          document.querySelector('.eg-link').innerHTML = 'Commander - ' + data.metaTotal + '€';
        }
      };
      xhttp.open("GET", "https://www.entrepot-du-bricolage.fr/api/carts/601/" + cartKey, true);
      xhttp.send();
    }
    /* Initialise variation */
    if (!getCookie('itemOnCart')) {
      addProduct();
      waitForElement("body", init, 50, 15000);
    }
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();