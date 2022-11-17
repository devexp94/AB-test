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
    '          </div>'+ 
    '      </div>'+ 
    '  </div>';

    function pdp() {

      document.querySelector('.c-product-description').insertAdjacentHTML('beforebegin', egMidSeasonSalePdp);

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


