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


    var plpBackground =''+ 
'  <svg xmlns="http://www.w3.org/2000/svg" width="230" height="110" viewBox="0 0 230 110" fill="none">'+ 
'  <path d="M160.5 7.5C78.545 10.5044 21.1667 11 -42 11V109.5H313V0C271.5 3 217.197 5.42154 160.5 7.5Z" fill="#2D8C9E"/>'+ 
'  </svg>';

    var egGiftTile =''+ 
    '<div class="col-md-3 col-sm-6 col-xs-6 v-align-top eg-mid-season-tile-plp item-wrapper">'+
    '<div class="item-box eg-mid-season-link">'+
    '  <div class="eg-sale-banner">'+ 
    '      <div class="banner-content">'+ 
    '          <h2 class="banner-heading">MID </br>SEASON </br>SALE </br><span>NOW ON</span></h2>'+ 
    '      </div>'+ 
    '      <div class="eg-promo-timer">'+ plpBackground +
    '          <p class="banner-subheading">UP TO 60% OFF</br>SITEWIDE</p>'+ 
    '          <h3 class="promo-heading">HURRY,</br> MID SEASON </br>SALE ENDS IN</h3>'+ 
    '          <div class="eg-promo-timer-inr">'+ 
    '              <div class="eg-date eg-box">'+ 
    '                  <span class="eg-number">00</span>'+ 
    '                  <span class="eg-text">Days</span>'+ 
    '              </div>'+ 
    '             <span class="eg-colon">:</span>'+
    '              <div class="eg-hours eg-box">'+ 
    '                  <span class="eg-number">00</span>'+ 
    '                  <span class="eg-text">Hours</span>'+ 
    '              </div>'+ 
    '             <span class="eg-colon">:</span>'+
    '              <div class="eg-minutes eg-box">'+ 
    '                  <span class="eg-number">00</span>'+ 
    '                  <span class="eg-text">Mins</span>'+ 
    '              </div>'+ 
    '             <span class="eg-colon">:</span>'+
    '              <div class="eg-seconds eg-box">'+ 
    '                  <span class="eg-number">00</span>'+ 
    '                  <span class="eg-text">Sec</span>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>'+
    '</div>'+
    '</div>';


    function engine(){
  
      if(document.querySelector('.eg-mid-season-tile-plp')){
        document.querySelector('.eg-mid-season-tile-plp').remove();
      }
    
      if(document.querySelectorAll('.dialog-category-products-list .products-list > div > .item-wrapper').length >= 1){
        document.querySelector('.dialog-category-products-list .products-list > div:nth-child(1) > .item-wrapper:nth-of-type(1)').insertAdjacentHTML('beforebegin', egGiftTile);
      }else if(document.querySelector('.dialog-category-products-list .products-list > div')){
        document.querySelector('.dialog-category-products-list .products-list > div').insertAdjacentHTML('beforeEnd', egGiftTile);
      }

      setInterval(function () {

        var egEndDate = new Date('October 07 2022 23:59:59 GMT+1300').getTime();
        var egStartDate = new getEstTime().getTime();
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
    
    function plp() {

      document.querySelector('#coveo-sort-dropdown').addEventListener('change', function () {
        checkLoader();
      });
      
      live('.c-c-pl_filters_group_item', 'click', function () {
        checkLoader();
      });
      
      engine();

    }
   
    function checkLoader(){
      var interval = setInterval(function () {
        if (document.querySelector('body .loading-animation.d-none') == null) {
          clearInterval(interval);
          setTimeout(function () {
            engine();
          }, 500);
        }
      }, 50);
    }


    /* plpialise variation */
    waitForElement(".dialog-category-products-list .products-list > div > .item-wrapper:last-child", plp, 100, 25000);
    
    waitForElement(".c-product-description", pdp, 100, 25000);

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


