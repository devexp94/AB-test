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


      var searchIcon =''+
      '<button class="eg-search_cta icon icon-search"></button>'
      
      function init() {

        var lastScroll = 0;

        window.addEventListener('scroll', function() {
          var currentScroll = window.pageYOffset;      
          if (currentScroll > lastScroll){
              document.querySelector('html body header#header').classList.add('eg-search-show'); 
            } else if (currentScroll < lastScroll) {
              document.querySelector('html body header#header').classList.remove('eg-search-show'); 
            }
                lastScroll = currentScroll;
            });
  
  

      }
           /* Initialise variation */
      waitForElement("html body header#header", init, 100, 25000);
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();


