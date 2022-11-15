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
          document.querySelector('main #hero > div:nth-child(2) > div > .min-h-full:nth-child(3)').insertAdjacentHTML('beforebegin', '<p class="eg-headline">Ready to get started?</p><div class="eg-link-container"><span class="eg-link eg-trust">Start My Trust</span><span class="eg-link eg-will">Start My Will</span> <span class="eg-link eg-guardianship">Start My Guardianship</span></div>');
  
        },5000)
  
        live(".eg-trust", "click", function () {
          document.querySelector('section[id^="auto-tiles_section"] li:nth-child(1) #modal_anchor_handle-toggle-modal').click();
        });
      
        live(".eg-will", "click", function () {
          document.querySelector('section[id^="auto-tiles_section"] li:nth-child(2) #modal_anchor_handle-toggle-modal').click();
        });

        live(".eg-guardianship", "click", function () {
          document.querySelector('section[id^="auto-tiles_section"] li:nth-child(3) #modal_anchor_handle-toggle-modal').click();
        });
      
      }
  
  
  
      /* Initialise variation */
      waitForElement("main #hero > div:nth-child(2) > div > .min-h-full:nth-child(3)", init, 50, 25000);
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();
  