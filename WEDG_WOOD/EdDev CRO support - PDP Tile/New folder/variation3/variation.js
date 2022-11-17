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

      var egGiftTile =''+ 
      '  <li class="c-c-product-card eg-gift-tile">'+ 
      '      <a href="" class="eg-gift-link">'+ 
      '          <div class="eg-gift-container">'+ 
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
      '  </div>'+
      '              <p class="eg-sub-heading">Find the best gifts for 2021</p>'+ 
      '              <p class="eg-heading">Christmas Gift Guide</p>'+ 
      '              <button class="eg-button c-btn primary">Discover the perfect gift</button>'+ 
      '          </div>'+ 
      '      </a>'+ 
      '  </li>';

      function engine(){
  
        if(document.querySelector('.eg-gift-tile')){
          document.querySelector('.eg-gift-tile').remove();
        }
      
        if(document.querySelectorAll('.c-c-pl_results_list .c-c-product-card').length >= 3){
          document.querySelector('.c-c-pl_results_list .c-c-product-card:nth-of-type(3)').insertAdjacentHTML('afterend', egGiftTile);
        }else if(document.querySelectorAll('.c-c-pl_results_list .c-c-product-card').length >= 2){
          document.querySelector('.c-c-pl_results_list .c-c-product-card:nth-of-type(2)').insertAdjacentHTML('afterend', egGiftTile);
        }else if(document.querySelectorAll('.c-c-pl_results_list .c-c-product-card').length == 1){
          document.querySelector('.c-c-pl_results_list .c-c-product-card:nth-of-type(1)').insertAdjacentHTML('afterend', egGiftTile);
        }else if(document.querySelector('.c-c-pl_results_list')){
          document.querySelector('.c-c-pl_results_list').insertAdjacentHTML('beforeEnd', egGiftTile);
        }


      }
      
      function init() {

        document.querySelector('#coveo-sort-dropdown').addEventListener('change', function () {
          checkLoader();
        });
        
        live('.c-c-pl_filters_group_item', 'click', function () {
          checkLoader();
        });
        
        engine();

        if(window.location.pathname.indexOf('/en-gb/') != -1){

          document.querySelector('.eg-gift-link').setAttribute('href', 'https://www.wedgwood.com/en-gb/welcome-to-wedgwood/editorials/christmas-gift-guide-2021');
 
         }else if(window.location.pathname.indexOf('/en-us/') != -1){
 
           document.querySelector('.eg-gift-link').setAttribute('href', 'https://www.wedgwood.com/en-us/welcome-to-wedgwood/editorials/christmas-gift-guide-2021');
         }
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


      /* Initialise variation */
      waitForElement(".c-c-pl_results_list .c-c-product-card:last-child", init, 100, 25000);
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();


