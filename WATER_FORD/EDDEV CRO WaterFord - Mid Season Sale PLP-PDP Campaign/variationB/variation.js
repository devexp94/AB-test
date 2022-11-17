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

    var egMidSeasonSalePdp =''+ 
    '  <div class="eg-mid-season-sale-pdp">'+ 
    '      <div class="eg-sale-banner">'+ 
    '          <div class="banner-content">'+ 
    '              <img src="https://glb-oned-cdn-prod.azureedge.net/-/media/Waterford/Images/Sales/2022/MidSeason-Sale/Sale-Timer/Product_Page_Banner_Desktop/Mid-Season_Sale_product_page_banner_desktop_copy">'+
    // '              <h2 class="banner-heading">20% OFF Sitewide*</h2>'+ 
    // '              <p class="banner-subheading">IN OUR MID-SEASON SALE</p>'+ 
    '          </div>'+ 
    '          <div class="eg-promo-timer">'+ 
    '              <h3 class="promo-heading">HURRY, MID-SEASON SALE ENDS IN</h3>'+ 
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

    function getEstTime(){
      var offset = new Date().getTimezoneOffset();// getting offset to make time in gmt+0 zone (UTC) (for gmt+5 offset comes as -300 minutes)
      var date = new Date();
      date.setMinutes ( date.getMinutes() + offset);// date now in UTC time

      var easternTimeOffset = -240; //for dayLight saving, Eastern time become 4 hours behind UTC thats why its offset is -4x60 = -240 minutes. So when Day light is not active the offset will be -300
      date.setMinutes ( date.getMinutes() + easternTimeOffset);
      return date;
    }

    function pdp() {

      document.querySelector('.c-product-description').insertAdjacentHTML('beforebegin', egMidSeasonSalePdp);

      setInterval(function () {

        var egEndDate = new Date('June 1 2022 23:59:59 GMT+1300').getTime();
        var egStartDate = new getEstTime().getTime();
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


    }
   


    var egGiftTile =''+ 
    '  <li class="c-c-product-card eg-mid-season-tile-plp">'+ 
    '      <a href="" class="eg-mid-season-link">'+ 
    '          <div class="eg-mid-season-container">'+ 
    '  <div class="c-c-product-card_img-container">'+ 
    '      <figure>'+ 
    '          <picture>'+ 
    '              <source media="(min-width: 1200px)" data-srcset="https://gbl-oned-cdn-prod.azureedge.net/-/media/products/2021/06/17/01/26/resource_wedgwoodemea_1057272.ashx?rev=1f03facec01d429ba93f97aa9f98538f&q=100&iw=338&ih=338&crop=1 1x, https://gbl-oned-cdn-prod.azureedge.net/-/media/products/2021/06/17/01/26/resource_wedgwoodemea_1057272.ashx?rev=1f03facec01d429ba93f97aa9f98538f&q=100&iw=676&ih=676&crop=1 2x"'+ 
    '                  srcset="https://gbl-oned-cdn-prod.azureedge.net/-/media/products/2021/06/17/01/26/resource_wedgwoodemea_1057272.ashx?rev=1f03facec01d429ba93f97aa9f98538f&q=100&iw=338&ih=338&crop=1 1x, https://gbl-oned-cdn-prod.azureedge.net/-/media/products/2021/06/17/01/26/resource_wedgwoodemea_1057272.ashx?rev=1f03facec01d429ba93f97aa9f98538f&q=100&iw=676&ih=676&crop=1 2x">'+ 
    '              <source media="(min-width: 992px) and (max-width: 1199px)" data-srcset="https://gbl-oned-cdn-prod.azureedge.net/-/media/products/2021/06/17/01/26/resource_wedgwoodemea_1057272.ashx?rev=1f03facec01d429ba93f97aa9f98538f&q=100&iw=225&ih=225&crop=1 1x, https://gbl-oned-cdn-prod.azureedge.net/-/media/products/2021/06/17/01/26/resource_wedgwoodemea_1057272.ashx?rev=1f03facec01d429ba93f97aa9f98538f&q=100&iw=450&ih=450&crop=1 2x"'+ 
    '                  srcset="https://gbl-oned-cdn-prod.azureedge.net/-/media/products/2021/06/17/01/26/resource_wedgwoodemea_1057272.ashx?rev=1f03facec01d429ba93f97aa9f98538f&q=100&iw=225&ih=225&crop=1 1x, https://gbl-oned-cdn-prod.azureedge.net/-/media/products/2021/06/17/01/26/resource_wedgwoodemea_1057272.ashx?rev=1f03facec01d429ba93f97aa9f98538f&q=100&iw=450&ih=450&crop=1 2x">'+ 
    '              <source media="(min-width: 768px) and (max-width: 991px)" data-srcset="https://gbl-oned-cdn-prod.azureedge.net/-/media/products/2021/06/17/01/26/resource_wedgwoodemea_1057272.ashx?rev=1f03facec01d429ba93f97aa9f98538f&q=100&iw=215&ih=215&crop=1 1x, https://gbl-oned-cdn-prod.azureedge.net/-/media/products/2021/06/17/01/26/resource_wedgwoodemea_1057272.ashx?rev=1f03facec01d429ba93f97aa9f98538f&q=70&iw=430&ih=430&crop=1 2x"'+ 
    '                  srcset="https://gbl-oned-cdn-prod.azureedge.net/-/media/products/2021/06/17/01/26/resource_wedgwoodemea_1057272.ashx?rev=1f03facec01d429ba93f97aa9f98538f&q=100&iw=215&ih=215&crop=1 1x, https://gbl-oned-cdn-prod.azureedge.net/-/media/products/2021/06/17/01/26/resource_wedgwoodemea_1057272.ashx?rev=1f03facec01d429ba93f97aa9f98538f&q=70&iw=430&ih=430&crop=1 2x">'+ 
    '              <source media="(min-width: 576px) and (max-width: 767px)" data-srcset="https://gbl-oned-cdn-prod.azureedge.net/-/media/products/2021/06/17/01/26/resource_wedgwoodemea_1057272.ashx?rev=1f03facec01d429ba93f97aa9f98538f&q=100&iw=350&ih=350&crop=1 1x, https://gbl-oned-cdn-prod.azureedge.net/-/media/products/2021/06/17/01/26/resource_wedgwoodemea_1057272.ashx?rev=1f03facec01d429ba93f97aa9f98538f&q=70&iw=700&ih=700&crop=1 2x"'+ 
    '                  srcset="https://gbl-oned-cdn-prod.azureedge.net/-/media/products/2021/06/17/01/26/resource_wedgwoodemea_1057272.ashx?rev=1f03facec01d429ba93f97aa9f98538f&q=100&iw=350&ih=350&crop=1 1x, https://gbl-oned-cdn-prod.azureedge.net/-/media/products/2021/06/17/01/26/resource_wedgwoodemea_1057272.ashx?rev=1f03facec01d429ba93f97aa9f98538f&q=70&iw=700&ih=700&crop=1 2x">'+ 
    '              <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="https://gbl-oned-cdn-prod.azureedge.net/-/media/products/2021/06/17/01/26/resource_wedgwoodemea_1057272.ashx?rev=1f03facec01d429ba93f97aa9f98538f&q=100&iw=270&ih=270&crop=1 1x, https://gbl-oned-cdn-prod.azureedge.net/-/media/products/2021/06/17/01/26/resource_wedgwoodemea_1057272.ashx?rev=1f03facec01d429ba93f97aa9f98538f&q=70&iw=540&ih=540&crop=1 2x, https://gbl-oned-cdn-prod.azureedge.net/-/media/products/2021/06/17/01/26/resource_wedgwoodemea_1057272.ashx?rev=1f03facec01d429ba93f97aa9f98538f&q=70&iw=810&ih=810&crop=1 3x"'+ 
    '                  class=" ls-is-cached lazyloaded" srcset="https://gbl-oned-cdn-prod.azureedge.net/-/media/products/2021/06/17/01/26/resource_wedgwoodemea_1057272.ashx?rev=1f03facec01d429ba93f97aa9f98538f&q=100&iw=270&ih=270&crop=1 1x, https://gbl-oned-cdn-prod.azureedge.net/-/media/products/2021/06/17/01/26/resource_wedgwoodemea_1057272.ashx?rev=1f03facec01d429ba93f97aa9f98538f&q=70&iw=540&ih=540&crop=1 2x, https://gbl-oned-cdn-prod.azureedge.net/-/media/products/2021/06/17/01/26/resource_wedgwoodemea_1057272.ashx?rev=1f03facec01d429ba93f97aa9f98538f&q=70&iw=810&ih=810&crop=1 3x">'+ 
    '          </picture>'+ 
    '      </figure>'+ 
    '      <!---->'+ 
    '          </div>'+ 
    '  </div>'+
    '  <div class="eg-sale-banner">'+ 
    '      <div class="banner-content">'+ 
    '           <img src="https://glb-oned-cdn-prod.azureedge.net/-/media/Waterford/Images/Sales/2022/MidSeason-Sale/Sale-Timer/Product_Listing_Page_Banner_Mobile/Mid-Season_Sale_Product_Listing_Page_Banner_Mobile_copy">'+
    // '          <h2 class="banner-heading">20% Off Sitewide*</h2>'+ 
    // '          <p class="banner-subheading">IN OUR MID-SEASON SALE</p>'+ 
    '      </div>'+ 
    '      <div class="eg-promo-timer">'+ 
    '          <h3 class="promo-heading">HURRY, MID-SEASON SALE ENDS IN</h3>'+ 
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
    '      </a>'+ 
    '  </li>';


    function engine(){
  
      if(document.querySelector('.eg-mid-season-tile-plp')){
        document.querySelector('.eg-mid-season-tile-plp').remove();
      }
    
      if(document.querySelectorAll('.c-c-pl_results_list .c-c-product-card').length >= 1){
        document.querySelector('.c-c-pl_results_list .c-c-product-card:nth-of-type(1)').insertAdjacentHTML('beforebegin', egGiftTile);
      }else if(document.querySelector('.c-c-pl_results_list')){
        document.querySelector('.c-c-pl_results_list').insertAdjacentHTML('beforeEnd', egGiftTile);
      }

      setInterval(function () {

        var egEndDate = new Date('June 1 2022 23:59:59 GMT+1300').getTime();
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

      document.querySelector('.eg-mid-season-tile-plp').addEventListener('click', function(e){
        e.preventDefault;
        e.stopPropagation;
      })
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
        waitForElement(".c-c-pl_results_list .c-c-product-card:last-child", plp, 100, 25000);
    document.querySelector('body').insertAdjacentHTML('beforeend', '<img src="https://glb-oned-cdn-prod.azureedge.net/-/media/Waterford/Images/Sales/2022/MidSeason-Sale/Sale-Timer/Product_Listing_Page_Banner_Mobile/Mid-Season_Sale_Product_Listing_Page_Banner_Mobile_copy" style="display: none;"><img src="https://glb-oned-cdn-prod.azureedge.net/-/media/Waterford/Images/Sales/2022/MidSeason-Sale/Sale-Timer/Product_Listing_Page_Banner_Desktop/Mid-Season_Sale_Product_Listing_Page_Banner_Desktop_background" style="display: none;">');

    
    waitForElement(".c-product-description", pdp, 100, 25000);


    document.querySelector('body').insertAdjacentHTML('beforeend', '<img src="https://glb-oned-cdn-prod.azureedge.net/-/media/Waterford/Images/Sales/2022/MidSeason-Sale/Sale-Timer/Product_Page_Banner_Desktop/Mid-Season_Sale_product_page_banner_desktop_background" style="display: none;"><img src="https://glb-oned-cdn-prod.azureedge.net/-/media/Waterford/Images/Sales/2022/MidSeason-Sale/Sale-Timer/Product_Page_Banner_Desktop/Mid-Season_Sale_product_page_banner_desktop_copy" style="display: none;">');
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


