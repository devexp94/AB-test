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
  
      function initDesktop() {
        if(debug){
          console.log('Inside init Function');
        }
        if(window.screen.width>=767){ 
          document.body.classList.add('com-pages');       
        //Adding section
        var phoneno= document.querySelector(" header  .phone-number strong").outerHTML;
        function wrap(el, wrapper) {
            el.parentNode.insertBefore(wrapper, el);
            wrapper.appendChild(el);
        }
        wrap(document.querySelector('.primary-menu'), document.createElement('div'));

        document.querySelector(' header > nav > div > div:nth-child(1)').classList.add("new-nav-container");

        document.querySelector('.primary-menu').insertAdjacentHTML("beforebegin", '<div class="logo-container"><a href="/"><img src="https://expogrowth.in/wp-content/uploads/2022/04/on-dark.svg"></a></div>');
        document.querySelector('.primary-menu').insertAdjacentHTML("afterend", '<div class="right-phone-container">'+phoneno+'<p class="call-time">Mon - Sat | 8:30am - 5:30pm ET</p><p class="new-contact-us"><a href="/contact-us">Contact Us</a></p></div>');
      }
      }
      function initMobile() {
      if(window.screen.width<=767){
        document.body.classList.add('com-pages');
        document.querySelector("header > section .phone-number  #call-us p:first-of-type").innerHTML="Mon - Sat | 8:30am - 5:30pm ET";

        document.querySelector('body').insertAdjacentHTML('beforeend', '<div class="eg-overlay"></div>')
      }
      }
      waitForElement(".primary-menu", initDesktop, 50, 15000);
       waitForElement("header > section .phone-number  #call-us p:first-of-type", initMobile, 50, 15000);

    } 
    catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
})();