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

var egTooltip = ''+
' <div class="eg-tooltip">'+
'   <p class="eg-tooltip-text">Our best option for businesses that need fast and reliable broadband at unbeatable prices. Trusted by over 55,000 businesses.</p>'+
' </div>';


    function init() {
      /* start your code here */
      live('.vfuk-Controller__shadow #post-code-form button', 'mousedown', function () {
        waitForElement('.vfuk-Controller__shadow .vfuk-SelectContractType__contract-list__item:nth-child(2) div[role="button"].vfuk-ContractTypeButton__button--is-selected span + div', init2, 100, 25000);    
      });

    }

    function init2() {
    
    if(!document.querySelector('.eg-tooltip')){
      document.querySelector('.vfuk-Controller__shadow .vfuk-AddressAndLinenumber__section .vfuk-SelectContractType__contract-list >div:last-child').insertAdjacentHTML('afterend', egTooltip);
    }
      
    
    }
    /* Initialise variation */
    waitForElement(".vfuk-Controller__shadow #post-code-form button", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();