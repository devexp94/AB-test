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

var pdpBackground =''+ 
'  <svg xmlns="http://www.w3.org/2000/svg" width="454" height="78" viewBox="0 0 454 78" fill="none">'+ 
'  <path d="M313.632 11.8513C166.636 17.0486 63.6974 19.0796 -49.6342 20.77L-48.1651 119.259L588.764 109.759L587.131 0.271005C512.718 4.38126 415.325 8.25575 313.632 11.8513Z" fill="#2D8C9E"/>'+ 
'  </svg>';


    var egMidSeasonSalePdp =''+ 
    '  <div class="eg-mid-season-sale-pdp">'+ 
    '      <div class="eg-sale-banner">'+ 
    '          <div class="banner-content">'+ 
    '              <h2 class="banner-heading">GOLDEN WEEK OFFER <span>NOW ON</span></h2>'+ 
    '              <h3 class="promo-heading">HURRY, </br> GOLDEN WEEK OFFER </br> ENDS IN</h3>'+ 
    '          </div>'+ 
    '          <div class="eg-promo-timer">'+ pdpBackground +
    '              <p class="banner-subheading">Enjoy a further 10% off </br>already reduced items*</p>'+ 
    '              <div class="eg-promo-timer-inr">'+ 
    '                  <div class="eg-date eg-box">'+ 
    '                      <span class="eg-number">00</span>'+ 
    '                      <span class="eg-text">Days</span>'+ 
    '                  </div>'+ 
    '                  <span class="eg-colon">:</span>'+ 
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
    function pdp() {

      document.querySelector('.product-details .details .description').insertAdjacentHTML('beforebegin', egMidSeasonSalePdp);

      setInterval(function () {

        var egEndDate = new Date('October 07 2022 23:59:59 GMT+10').getTime();
        var egStartDate = new Date().getTime();
        var egDiff = egEndDate - egStartDate;
        var days = Math.floor(egDiff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((egDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((egDiff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((egDiff % (1000 * 60)) / (1000));
        if (days < 10) {
          document.querySelector('.eg-date .eg-number').innerHTML= days;
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
 live('.eg-mid-season-sale-pdp','click',function(){
 window.location.href = "https://www.royaldoulton.com.au/sale";
      });

    }
       
    waitForElement(".product-details .details .description", pdp, 100, 25000);

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


