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
      this.Element && function(ElementPrototype) {
          ElementPrototype.matches = ElementPrototype.matches ||
              ElementPrototype.matchesSelector ||
              ElementPrototype.webkitMatchesSelector ||
              ElementPrototype.msMatchesSelector ||
              function(selector) {
                  var node = this,
                      nodes = (node.parentNode || node.document).querySelectorAll(selector),
                      i = -1;
                  while (nodes[++i] && nodes[i] != node);
                  return !!nodes[i];
              };
      }(Element.prototype);
      // live binding helper using matchesSelector
      function live(selector, event, callback, context) {
          addEvent(context || document, event, function(e) {
              var found, el = e.target || e.srcElement;
              while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
              if (found) callback.call(el, e);
          });
      }
      live(selector, event, callback, context);
  }
  
    function init() {
  
       live('.eg-cart-overlay, .minicart .minicart-total + .mini-cart-modal button.close ','click', function(e){
                document.querySelector('body').classList.remove('eg-cart-open');
            });
    
        document.querySelector('.minicart').addEventListener('click', function(e){
          console.log(e.target);
          if(e.target == document.querySelector('.svg-icon.shopping-cart') || e.target == document.querySelector('.minicart-quantity') || 
          e.target == document.querySelector('.minicart-link') || e.target == document.querySelector('.minicart-total')){
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();
            document.querySelector('body').classList.add('eg-cart-open');
          }
        });
 
   live('.eg-cart-overlay, .minicart .minicart-total + .mini-cart-modal button.close ','click', function(e){
            document.querySelector('body').classList.remove('eg-cart-open');
        });

        var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.querySelector('.minicart .minicart-total + .mini-cart-modal .popover.popover-bottom').innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https://www.yankeecandle.com/on/demandware.store/Sites-homefragranceus-Site/en_US/Cart-MiniCartShow", true);
  xhttp.send();
    }

    /* Initialise variation */
    waitForElement(".minicart", init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();