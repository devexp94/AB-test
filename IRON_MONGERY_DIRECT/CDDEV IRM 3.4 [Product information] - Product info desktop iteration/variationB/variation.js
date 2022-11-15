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
                nodes = (node.parentNode || node.document).querySelectorAll(
                  selector
                ),
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
    

    function init() {
      
      setTimeout(function(){
        document.querySelector('.prod-overview__inner .product-summary__wrapper > .product-summary__stars').insertAdjacentHTML('beforebegin', '<span class="eg-link eg-dimensions">Dimensions</span> <span class="eg-link eg-about">About this product</span>')

      },5000)

      live(".eg-about", "click", function () {
        document.querySelector('.product-details__container #about').scrollIntoView({behavior: "smooth", block : "start"}); 
      });
    
      live(".eg-dimensions", "click", function () {
        document.querySelector('.product-details__container #specs').scrollIntoView({behavior: "smooth", block : "center"}); 
      });
    
    }



    /* Initialise variation */
    waitForElement(".prod-overview__inner .product-summary__wrapper .product-summary__count", init, 50, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
