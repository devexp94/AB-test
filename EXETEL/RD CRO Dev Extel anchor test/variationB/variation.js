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
  

    var egOrderOption =''+ 
    '  <div class="eg-order">'+ 
    '      <div class="eg-order-inr">'+ 
    '      <div class="eg-icon">'+ 
    '          <p class="eg-text">Click Here to Continue Your Order</p>'+ 
    '      </div>'+ 
    '      </div>'+ 
    '  </div>';

    function init() {

        document.querySelector('body').insertAdjacentHTML('beforeend', egOrderOption);

        document.querySelector('.eg-order-inr').addEventListener('click',function(){
            document.querySelector('.nbn-fibre-extras .inner-container').scrollIntoView({behavior: "smooth", block : "start"}); 
        });

        live('.plan-inner-wrapper .plan', 'click', function () {
            document.querySelector('body').classList.add('eg-icon-show');
          });
    
    }

    /* Initialise variation */
    waitForElement("body", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
