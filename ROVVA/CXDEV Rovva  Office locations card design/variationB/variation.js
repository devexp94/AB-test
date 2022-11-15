(function () {
    var debug = 0;
    var variation_name = "";
    if (window.location.href.indexOf('qa-debug=true') > -1) {
      debug = 1;
    }
      try {
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
          function init(){
            var btn= '<div class="eg-button"><p class="btn btn-danger">Continue</p></div>';
            var price = document.querySelectorAll('.address-table app-grid-card p.center-desc + div.center-price');

            for(var i=0; i < price.length; i++){
            price[i].insertAdjacentHTML('afterend',btn);
                
            }
            live('.eg-button p','click',function(){
             var self= this;
             setTimeout(function(){
                 console.log('hello')
                document.querySelector('.item-card.selected-variant-2 button').click();
             },2000);
            });
          }
          waitForElement('.address-table app-grid-card p.center-desc + div.center-price',init,100,25000);
        }
        catch(er){}
    })();