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
     function setCookie(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
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

    function live(selector, event, callback, context) {
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



    var svgIconCross = '  <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 50 50" width="20px" height="20px"><path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/></svg>';
    var egFbBanner =''+ 
'  <div class="eg-Banner fb-banner">'+ 
'      <div class="eg-Banner-inr">'+ 
'          <span class="eg-cross">'+ svgIconCross + '</span>'+
'          <img src="https://cfactory-img.s3.amazonaws.com/SMC/7.4/gift.svg">'+
'<p class="eg-Banner-text">FREE gift with every trial box <span>(Applied at checkout. Worth £8)</span></p>'+ 
'      </div>'+ 
'  </div>';
    
var egFreeGift = ''+
'  <div class="eg-gift-section">'+ 
'          <img src="https://cfactory-img.s3.amazonaws.com/SMC/7.4/altruist-large-2.svg">'+ 
'          <div class="eg-gift-content">'+ 
'              <h3 class="eg-heading">Here’s your FREE gift!</h3>'+ 
'              <p class="eg-para">Worth £8</p>'+ 
'              <p class="eg-link">Show me!</p>'+ 
'          </div>'+ 
'  </div>';

var egGiftModel =''+ 
'  <div class="eg-gift-model">'+ 
'      <div class="eg-gift-overlay"></div>'+ 
'      <div class="eg-content">'+ 
'          <div class="eg-content-inr">'+ 
'               <span class="eg-mobile-cross">'+ svgIconCross +'</span>'+ 
'              <div class="eg-top-section">'+ 
'               <span class="eg-cross">'+ svgIconCross +'</span>'+ 
'                  <div class="eg-top-content">'+ 
'                      <h3 class="eg-top-heading"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg>You’ve qualified for a FREE gift!</h3>'+ 
'                      <p class="eg-top-para">Order your box today and we’ll send you a link to claim your <b>FREE Sunscreen, Shampoo Bar, Facewash, or Gentle Moisturiser.</b></br> This exclusive offer is from <b>grüum.</b> - the planet-friendly personal care brand.</p>'+ 
'                  </div>'+ 
'                  </div>'+ 
'                  <div class="eg-middle-section">'+ 
'                      <div class="eg-middle-left">'+ 
'                          <h2 class="eg-middle-heading">From our friends at grüum</h2>'+ 
'                          <p class="eg-middle-para">Our top pick is the award-winning zero-plastic hår Shampoo Bar. Handmade in England, these bars are a sustainable alternative to regular shampoo. They work just like the bottled stuff but come in eco-friendly cardboard packaging.'+ 
'                              There’s plenty more to choose from for FREE, including sunscreen, face wash or pür Gentle Moisturiser. Each product worth £8.</p>'+ 
'                      </div>'+ 
'                      <div class="eg-middle-right">'+ 
'                          <img src="https://cfactory-img.s3.amazonaws.com/SMC/7.4/Group-234.svg">'+ 
'                      </div>'+ 
'                  </div>'+ 
'                  <div class="eg-bottom-section">'+ 
'                      <div class="eg-box-section">'+ 
'                          <div class="eg-box eg-box1">'+ 
'                              <div class="eg-bottom-box-inr">'+ 
'                                 <div class="eg-image">'+
//'                                    <img src="https://cfactory-img.s3.amazonaws.com/SMC/7.4/revitalising2_1-removebg-preview-1.svg">'+ 
'                                 </div>'+ 
'                                  <p class="eg-title">hår Shampoo Bar</p>'+ 
'                              </div>'+ 
'                          </div>'+ 
'                          <div class="eg-box eg-box2">'+ 
'                              <div class="eg-bottom-box-inr">'+ 
'                                 <div class="eg-image">'+
//'                                  <img src="https://cfactory-img.s3.amazonaws.com/SMC/7.4/kori-1-1.svg">'+ 
'                                 </div>'+ 
'                                  <p class="eg-title">kóri Exfoliating Face Wash</p>'+ 
'                              </div>'+ 
'                          </div>'+ 
'                          <div class="eg-box eg-box3">'+ 
'                              <div class="eg-bottom-box-inr">'+ 
'                                 <div class="eg-image">'+
//'                                  <img src="https://cfactory-img.s3.amazonaws.com/SMC/7.4/altruist-large-2.svg">'+ 
'                              </div>'+ 
'                                  <p class="eg-title">SPF30 5* UVA Sunscreen</p>'+ 
'                              </div>'+ 
'                          </div>'+ 
'                          <div class="eg-box eg-box4">'+ 
'                              <div class="eg-bottom-box-inr">'+ 
'                                 <div class="eg-image">'+
//'                                  <img src="https://cfactory-img.s3.amazonaws.com/SMC/7.4/pur-desktop-1.svg">'+ 
'                              </div>'+ 
'                                  <p class="eg-title">pür Gentle Moisturiser</p>'+ 
'                              </div>'+ 
'                              </div>'+ 
'                          </div>'+ 
'                      <p class="eg-bottom-para">*Order your box today and we’ll send you a link to choose your FREE gift worth £8 (just pay postage)</p>'+ 
'                      </div>'+ 
'                  </div>'+ 
'              </div>'+ 
'          </div>'+ 
'      </div>'+ 
'  </div>';

    
    function init() {
    
      document.querySelector('body > nav').insertAdjacentHTML('afterend', egFbBanner);
      
      document.querySelector('.eg-Banner .eg-cross').addEventListener("click", function () {
        document.querySelector('body').classList.add("eg-banner-hide");
        setCookie('eg-gift', true, 365);
      });

    }

    function init2(){

      document.querySelector('#sulu-headless-container > div > .flex > div:first-child > div:first-child').insertAdjacentHTML('beforebegin', egFreeGift);

      document.querySelector('#sulu-headless-container > div > .flex > div:first-child').insertAdjacentHTML('beforebegin',egFreeGift);

      document.querySelector('body').insertAdjacentHTML('beforeend', egGiftModel);

      live('.eg-gift-section', 'click', function () {
        document.querySelector('body').classList.add('fe-popup-show');
        setTimeout(function(){
          document.querySelector('body').classList.add('fe-popup-slide');
        },10);
      });

      live('.eg-gift-model .eg-mobile-cross, .eg-gift-model .eg-cross, .eg-gift-overlay', 'click', function(){
        document.querySelector('body').classList.remove('fe-popup-show');
        document.querySelector('body').classList.remove('fe-popup-slide');
      });

      // live('.eg-gift-model .eg-cross', 'click', function(){
      //   document.querySelector('body').classList.remove('fe-popup-show');
      // });
    }
    /* Initialise variation */
    if (!getCookie('eg-gift')) {
      waitForElement("body > nav", init, 50, 15000);
    }
    waitForElement("#sulu-headless-container > div > .flex > div:first-child > div:first-child", init2, 50, 15000);

    document.querySelector('body').insertAdjacentHTML('beforeend', '<img src="https://cfactory-img.s3.amazonaws.com/SMC/7.4/altruist-large-2.svg" style="display:none;">')
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
