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

      var egBlackFridaySale =''+ 
      '  <div class="eg-black-friday-sale">'+ 
      '      <div class="eg-sale-banner">'+ 
      '          <div class="banner-content">'+ 
      '              <h2 class="banner-heading">Black Friday </br> Sale</h2>'+ 
      '              <p class="banner-subheading">Save 25% sitewide</p>'+ 
      '          </div>'+ 
      '          <div class="eg-promo-timer">'+ 
      '              <h3 class="promo-heading">Hurry, 25% Off sitewide ends in:</h3>'+ 
      '              <div class="eg-promo-timer-inr">'+ 
      '                  <div class="eg-date eg-box">'+ 
      '                      <span class="eg-number">00</span>'+ 
      '                      <span class="eg-text">Hours</span>'+ 
      '                  </div>'+ 
      '                  <div class="eg-hours eg-box">'+ 
      '                      <span class="eg-number">00</span>'+ 
      '                      <span class="eg-text">Hours</span>'+ 
      '                  </div>'+ 
      '                  <span class="eg-colon">:</span>'+ 
      '                  <div class="eg-minutes eg-box">'+ 
      '                      <span class="eg-number">00</span>'+ 
      '                      <span class="eg-text">Mins</span>'+ 
      '                  </div>'+ 
      '                  <span class="eg-colon">:</span>'+ 
      '                  <div class="eg-seconds eg-box">'+ 
      '                      <span class="eg-number">00</span>'+ 
      '                      <span class="eg-text">Sec</span>'+ 
      '                  </div>'+ 
      '              </div>'+ 
      '          </div>'+ 
      '      </div>'+ 
      '  </div>';

      
      function init() {

        document.querySelector('.c-product-description').insertAdjacentHTML('beforebegin', egBlackFridaySale);

        setInterval(function () {

          var egEndDate = new Date('Nov 10, 2021 12:59:59').getTime();
          var egStartDate = new Date().getTime();
          var egDiff = egEndDate - egStartDate;
          var days = Math.floor(egDiff / (1000 * 60 * 60 * 24));
          var hours = Math.floor((egDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((egDiff % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((egDiff % (1000 * 60)) / (1000));
          if (days < 10) {
            document.querySelector('.eg-date .eg-number').innerHTML = "0" + days;
          } else {
            document.querySelector('.eg-date .eg-number').innerHTML = days;
          }
          if (hours < 10) {
            document.querySelector('.eg-hours .eg-number').innerHTML = hours = "0" + hours;
          } else {
            document.querySelector('.eg-hours .eg-number').innerHTML = hours;
          }
          if (minutes < 10) {
            document.querySelector('.eg-minutes .eg-number').innerHTML = "0" + minutes;
          } else {
            document.querySelector('.eg-minutes .eg-number').innerHTML = minutes;
          }
          if (seconds < 10) {
            document.querySelector('.eg-seconds .eg-number').innerHTML = "0" + seconds;
          } else {
            document.querySelector('.eg-seconds .eg-number').innerHTML = seconds;
          }
          if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
            clearInterval(interval);
            document.querySelector('.eg-promo-timer').style.display = "none";
          }
        }, 1000);


      }
     

      /* Initialise variation */
      waitForElement(".c-product-description", init, 100, 25000);
      document.querySelector('body').insertAdjacentHTML('beforeend', '<img src="https://drive.google.com/uc?export=view&id=1sYGNRwM2vn5XAujamUqW-9uvD_WD9kDv" style="display: none;"><img src="https://drive.google.com/uc?export=view&id=1vmDlbqunO93Nix18jwJekOeVeZfEHAgK" style="display: none;">');
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();


