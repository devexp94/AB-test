(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";

    /* helper library */
    var _$;
    !(function (factory) {
      _$ = factory();
    })(function () {
      var bm = function (s) {
        if (typeof s === "string") {
          this.value = Array.prototype.slice.call(document.querySelectorAll(s));
        }
        if (typeof s === "object") {
          this.value = [s];
        }
      };
      bm.prototype = {
        eq: function (n) {
          this.value = [this.value[n]];
          return this;
        },
        each: function (fn) {
          [].forEach.call(this.value, fn);
          return this;
        },
        log: function () {
          console && console.log(this);
        },
         parent: function () {
                  return _$(this.value[0].parentNode);
                },        
        addClass: function (v) {
                  var a = v.split(" ");
                  return this.each(function (i) {
                    for (var x = 0; x < a.length; x++) {
                      if (i.classList) {
                        i.classList.add(a[x]);
                      } else {
                        i.className += " " + a[x];
                      }
                    }
                  });
                },
          removeClass: function (v) {
                   var a = v.split(' ');
                   return this.each(function (i) {
                     for (var x = 0; x < a.length; x++) {
                       if (i.classList) {
                         i.classList.remove(a[x]);
                       } else {
                         i.className = i.className.replace(
                           new RegExp('\\b' + a[x] + '\\b', 'g'),
                           ''
                         );
                       }
                     }
                   });
                 },       
         toggleClass: function(v) {
                   var a = v.split(' ');
                   return this.each(function (i) {
                     for (var x = 0; x < a.length; x++) {
                       if (i.classList) {
                         i.classList.toggle(a[x]);
                       } else {
                         if (new RegExp('\\b' + a[x] + '\\b').test(i.className)) {
                           i.className = i.className.replace(
                             new RegExp('\\b' + a[x] + '\\b', 'g'),
                             ''
                           );
                         } else {
                           i.className += ' ' + a[x];
                         }
                       }
                     }
                   });
                 }, 
         insertAfterElement: function (v) {
                   return this.each(function (i) {
                     i.insertAdjacentElement('afterEnd', v);
                   });
                 },
          insertAfter: function (v) {
                    return this.each(function (i) {
                      i.insertAdjacentHTML('afterEnd', v);
                    });
                  },       
          html: function (v) {
                   return typeof v == 'undefined'
                     ? this.value[0].innerHTML
                     : this.each(function (i) {
                         i.innerHTML = v;
                       });
                 },                       
         live : function(selector, event, callback, context) {
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
          },        
                
        waitForElement: function (
          selector,
          trigger,
          delayInterval,
          delayTimeout
        ) {
          var interval = setInterval(function () {
            if (_$(selector).value.length) {
              clearInterval(interval);
              trigger();
            }
          }, delayInterval);
          setTimeout(function () {
            clearInterval(interval);
          }, delayTimeout);
        },
      };
      return function (selector) {
        return new bm(selector);
      };
    });

    var helper = _$();
    /* Variation Init */
    function init() {

      if(document.querySelector('.eg_loginTypeSelection')) return;

      if(document.querySelector('.c-checkout-customer-address_login-info button')){
        _$('.c-checkout-customer-address_login-info button').value[0].click();
      }

      _$('#formCheckoutAddress h2').parent().parent().addClass('eg_shippingAddress');

      _$('.c-checkout-customer-address .checkout-step-title').html('Login or checkout as guest');

      _$('.c-checkout-customer-address .checkout-step-title').insertAfter(
        '<div class="eg_loginTypeSelection">'+
        '      <div><input type="radio" id="eg_guest" name="fav_language" checked="checked"><label for="eg_guest">Checkout as a guest</label></div>'+
        '      <div><input type="radio" id="eg_login" name="fav_language"><label for="eg_login">Login to your account</label></div>'+
        '</div>'
      )

      _$('body').addClass('eg_guestSelected');

      _$('.c-checkout-progress-indicator .progress-return,.returnLink a').html('Return to cart and continue shopping')

      _$('#formCheckoutAddress h2').value[0].addEventListener('click',function(el){
        _$(this).parent().parent().toggleClass('eg_show');
      })

      _$('.c-checkout-shipping.-only-address h2').value[0].addEventListener('click',function(el){
        _$(this).parent().toggleClass('eg_show');
      })


      helper.live('.eg_loginTypeSelection input','change',function(){
        if(document.querySelector('#eg_guest').checked){
          _$('body').addClass('eg_guestSelected');
        }else{
          _$('body').removeClass('eg_guestSelected');
        }
      })

      setTimeout(function(){
        var getLoginForm = _$('#checkoutLoginModal').value[0];
        _$('.c-checkout-customer-address_login-info').insertAfterElement(getLoginForm);
        _$('.c-checkout-login-modal #formCheckoutLogin button').html('LOGIN FOR FASTER CHECKOUT')
      },1000)
      
    }


    // check the spa window location
    listener();

    function listener() {
      /* These are the modifications: */
      window.addEventListener("locationchange", function() {
        helper.waitForElement("#formCheckoutAddress h2", init, 50, 15000);
      });
      history.pushState = ((f) =>
        function pushState() {
          var ret = f.apply(this, arguments);
          window.dispatchEvent(new Event("pushstate"));
          window.dispatchEvent(new Event("locationchange"));
          return ret;
        })(history.pushState);
      history.replaceState = ((f) =>
        function replaceState() {
          var ret = f.apply(this, arguments);
          window.dispatchEvent(new Event("replacestate"));
          window.dispatchEvent(new Event("locationchange"));
          return ret;
        })(history.replaceState);
      window.addEventListener("popstate", () => {
        window.dispatchEvent(new Event("locationchange"));
      });
    }

    /* Initialize variation */
    helper.waitForElement("#formCheckoutAddress h2", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();