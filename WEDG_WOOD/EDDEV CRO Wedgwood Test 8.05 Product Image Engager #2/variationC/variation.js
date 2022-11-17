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
    /* Variation functions */
    var eg_allCollection = ''+
    '<a class="link c-global-mini-cart-trigger eg_cart"><span class="icon icon-cart"></span></a>'+
    '<div class="eg_sections eg_allCollection">'+
    '<div class="eg_component eg_one">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wonderlust/wonderlust-crimson-orient-teacup-saucer-set-40024021">'+
    '                 <p class="eg_product_name">Wonderlust Crimson Orient Teacup & Saucer Set</p>'+
    '                 <p class="eg_product_price">$85.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_two">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wonderlust/wonderlust-camellia-teacup-saucer-set-40031703">'+
    '                 <p class="eg_product_name">Wonderlust Camellia Teacup & Saucer Set</p>'+
    '                 <p class="eg_product_price">$75.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_three">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wonderlust/wonderlust-3in-tea-bowl-set-of-4-40023882">'+
    '                 <p class="eg_product_name">Wonderlust 3in Tea Bowl, Set of 4</p>'+
    '                 <p class="eg_product_price">$150.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_four">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wonderlust/wonderlust-yellow-tonquin-teacup-saucer-set-40031706">'+
    '                 <p class="eg_product_name">Wonderlust Yellow Tonquin Teacup & Saucer Set</p>'+
    '                 <p class="eg_product_price">$75.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '</div>';
    var eg_allDinnerSets = ''+
    '<a class="link c-global-mini-cart-trigger eg_cart"><span class="icon icon-cart"></span></a>'+
    '<div class="eg_sections eg_allDinnerSets">'+
    '<div class="eg_component eg_one">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/dinnerware/drinkware/wine-glasses/globe-white-wine-set-of-2-40032667">'+
    '                 <p class="eg_product_name">Globe White Wine, Set of 2</p>'+
    '                 <p class="eg_product_price">$60.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_two">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/gio-stone/gio-stone-bowl-47inch-1052250">'+
    '                 <p class="eg_product_name">Gio Stone Bowl 4.7inch</p>'+
    '                 <p class="eg_product_price">$30.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_three">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/gio/gio-small-sculptural-bowl-40034157">'+
    '                 <p class="eg_product_name">Gio Small Sculptural Bowl</p>'+
    '                 <p class="eg_product_price">$30.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_four">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/dinnerware/dinnerware/all-dinnerware/gio-pasta-bowl-40023840">'+
    '                 <p class="eg_product_name">Gio Pasta Bowl</p>'+
    '                 <p class="eg_product_price">$35.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_five">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/home-decor/interior/flower-pots/jasper-folia-dove-grey-mini-pot-1055034">'+
    '                 <p class="eg_product_name">Jasper Folia Dove Grey Mini Pot</p>'+
    '                 <p class="eg_product_price">$18.75</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_six">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/gio-stone/gio-stone-bowl-95inch-1052251">'+
    '                 <p class="eg_product_name">Gio Stone Bowl 9.5inch</p>'+
    '                 <p class="eg_product_price">$52.50</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_seven">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/dinnerware/dinnerware/all-dinnerware/gio-soupcereal-bowl-40023841">'+
    '                 <p class="eg_product_name">Gio Soup/Cereal Bowl</p>'+
    '                 <p class="eg_product_price">$30.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_eight">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/gio-stone/gio-stone-serving-bowl-11-inch-1052252">'+
    '                 <p class="eg_product_name">Gio Stone Serving Bowl 11 inch</p>'+
    '                 <p class="eg_product_price">$78.75</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '</div>';
    var eg_teaAndTeaware = ''+
    '<a class="link c-global-mini-cart-trigger eg_cart"><span class="icon icon-cart"></span></a>'+
    '<div class="eg_sections eg_teaAndTeaware">'+
    '<div class="eg_component eg_one">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wonderlust/wonderlust-apple-blossom-teacup-saucer-set-40024024">'+
    '                 <p class="eg_product_name">Wonderlust Apple Blossom Teacup & Saucer Set</p>'+
    '                 <p class="eg_product_price">$85.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_two">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wonderlust/wonderlust-blue-pagoda-3-piece-tea-set-40031717">'+
    '                 <p class="eg_product_name">Wonderlust Blue Pagoda 3-Piece Tea Set</p>'+
    '                 <p class="eg_product_price">$250.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_three">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wonderlust/wonderlust-peony-diamond-teacup-saucer-set-40024019">'+
    '                 <p class="eg_product_name">Wonderlust Peony Diamond Teacup & Saucer Set</p>'+
    '                 <p class="eg_product_price">$85.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_four">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/paeonia-blush/paeonia-blush-blue-sandwich-tray-40032132">'+
    '                 <p class="eg_product_name">Paeonia Blush Blue Sandwich Tray</p>'+
    '                 <p class="eg_product_price">$110.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_five">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/magnolia-blossom/magnolia-blossom-vase-40024001">'+
    '                 <p class="eg_product_name">Magnolia Blossom Vase</p>'+
    '                 <p class="eg_product_price">$305.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_six">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wonderlust/wonderlust-rococo-flowers-teacup-saucer-set-40032680">'+
    '                 <p class="eg_product_name">Wonderlust Rococo Flowers Teacup & Saucer Set</p>'+
    '                 <p class="eg_product_price">$75.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_seven">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wonderlust/wonderlust-camellia-teacup-saucer-set-40031703">'+
    '                 <p class="eg_product_name">Wonderlust Camellia Teacup & Saucer Set</p>'+
    '                 <p class="eg_product_price">$75.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '</div>';
    var eg_allTeaware= ''+
    '<a class="link c-global-mini-cart-trigger eg_cart"><span class="icon icon-cart"></span></a>'+
    '<div class="eg_sections eg_allTeaware">'+
    '<div class="eg_component eg_one">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/home-decor/decorative-accessories/vanity-accessories/wonderlust-yellow-tonquin-tray-40023909">'+
    '                 <p class="eg_product_name">Wonderlust Yellow Tonquin Tray</p>'+
    '                 <p class="eg_product_price">$37.50</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_two">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wonderlust/wonderlust-apple-blossom-teacup-saucer-set-40024024">'+
    '                 <p class="eg_product_name">Wonderlust Apple Blossom Teacup & Saucer Set</p>'+
    '                 <p class="eg_product_price">$85.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_three">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/magnolia-blossom/magnolia-blossom-vase-40024001">'+
    '                 <p class="eg_product_name">Magnolia Blossom Vase</p>'+
    '                 <p class="eg_product_price">$305.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_four">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/dinnerware/dinnerware/all-dinnerware/white-folia-gift-tray-rectangular-40032157">'+
    '                 <p class="eg_product_name">White Folia Gift Tray Rectangular</p>'+
    '                 <p class="eg_product_price">$85.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_five">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/dinnerware/dinnerware/all-dinnerware/wonderlust-primrose-teacup-saucer-set-40024020">'+
    '                 <p class="eg_product_name">Wonderlust Primrose Teacup & Saucer Set</p>'+
    '                 <p class="eg_product_price">$85.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '</div>';
    var eg_cupAndSaucers= ''+
    '<a class="link c-global-mini-cart-trigger eg_cart"><span class="icon icon-cart"></span></a>'+
    '<div class="eg_sections eg_cupAndSaucers">'+
    '<div class="eg_component eg_one">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/folia/white-folia-rose-bowl-40032153">'+
    '                 <p class="eg_product_name">White Folia Rose Bowl</p>'+
    '                 <p class="eg_product_price">$65.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_two">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/home-decor/decorative-accessories/vanity-accessories/wonderlust-yellow-tonquin-tray-40023909">'+
    '                 <p class="eg_product_name">Wonderlust Yellow Tonquin Tray</p>'+
    '                 <p class="eg_product_price">$37.50</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_three">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wonderlust/wonderlust-crimson-orient-teacup-saucer-set-40024021">'+
    '                 <p class="eg_product_name">Wonderlust Crimson Orient Teacup & Saucer Set</p>'+
    '                 <p class="eg_product_price">$85.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_four">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wonderlust/wonderlust-crimson-jewel-teacup-saucer-set-40031700">'+
    '                 <p class="eg_product_name">Wonderlust Crimson Jewel Teacup & Saucer Set</p>'+
    '                 <p class="eg_product_price">$75.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '</div>';
    var eg_boneChina = ''+
    '<a class="link c-global-mini-cart-trigger eg_cart"><span class="icon icon-cart"></span></a>'+
    '<div class="eg_sections eg_boneChina">'+
    '<div class="eg_component eg_one">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/jasper-conran-strata/jasper-conran-strata-dinner-plate-50191309580">'+
    '                 <p class="eg_product_name">Jasper Conran Strata Dinner Plate</p>'+
    '                 <p class="eg_product_price">$35.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_two">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/jasper-conran-strata/jasper-conran-strata-salad-plate-50191309581">'+
    '                 <p class="eg_product_name">Jasper Conran Strata Salad Plate</p>'+
    '                 <p class="eg_product_price">$30.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_five">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/jasper-conran-strata/jasper-conran-strata-teacup-and-saucer-1057996">'+
    '                 <p class="eg_product_name">Jasper Conran Strata Teacup and Saucer</p>'+
    '                 <p class="eg_product_price">$45.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '</div>';
    var eg_wonderLust= ''+
    '<a class="link c-global-mini-cart-trigger eg_cart"><span class="icon icon-cart"></span></a>'+
    '<div class="eg_sections eg_wonderLust">'+
    '<div class="eg_component eg_one">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wonderlust/wonderlust-waterlily-mug-1057274">'+
    '                 <p class="eg_product_name">Wonderlust Waterlily Mug</p>'+
    '                 <p class="eg_product_price">$45.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_two">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wonderlust/wonderlust-sapphire-garden-plate-1057263">'+
    '                 <p class="eg_product_name">Wonderlust Sapphire Garden Plate</p>'+
    '                 <p class="eg_product_price">$50.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_three">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/folia/jasper-folia-warm-white-rose-bowl-1056991">'+
    '                 <p class="eg_product_name">Jasper Folia Warm White Rose Bowl</p>'+
    '                 <p class="eg_product_price">$75.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_four">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wonderlust/wonderlust-waterlily-plate-1057262">'+
    '                 <p class="eg_product_name">Wonderlust Waterlily Plate</p>'+
    '                 <p class="eg_product_price">$50.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_five">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wonderlust/wonderlust-sapphire-garden-teacup-saucer-1057269">'+
    '                 <p class="eg_product_name">Wonderlust Sapphire Garden Teacup & Saucer</p>'+
    '                 <p class="eg_product_price">$85.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '</div>';
    var eg_bestTeaSet= ''+
    '<a class="link c-global-mini-cart-trigger eg_cart"><span class="icon icon-cart"></span></a>'+
    '<div class="eg_sections eg_bestTeaSet">'+
    '<div class="eg_component eg_one">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/dinnerware/dinnerware/all-dinnerware/wonderlust-midnight-crane-teacup-saucer-set-40024023">'+
    '                 <p class="eg_product_name">Wonderlust Midnight Crane Teacup & Saucer Set</p>'+
    '                 <p class="eg_product_price">$85.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '</div>';
    var eg_bestTeaSet2 = ''+
    '<a class="link c-global-mini-cart-trigger eg_cart"><span class="icon icon-cart"></span></a>'+
    '<div class="eg_sections eg_bestTeaSet">'+
    '<div class="eg_component eg_two">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wonderlust/wonderlust-yellow-tonquin-teacup-saucer-set-40031706">'+
    '                 <p class="eg_product_name">Wonderlust Yellow Tonquin Teacup & Saucer Set</p>'+
    '                 <p class="eg_product_price">$75.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_three">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/gio/gio-serving-platter-40023847">'+
    '                 <p class="eg_product_name">Gio Serving Platter</p>'+
    '                 <p class="eg_product_price">$115.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_four">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wonderlust/wonderlust-8in-plate-set-of-4-40031712">'+
    '                 <p class="eg_product_name">Wonderlust 8in Plate, Set of 4</p>'+
    '                 <p class="eg_product_price">$200.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_five">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wonderlust/wonderlust-yellow-tonquin-tray-40023909">'+
    '                 <p class="eg_product_name">Wonderlust Yellow Tonquin Tray</p>'+
    '                 <p class="eg_product_price">$37.50</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '</div>';
    var eg_bestTeaSet3 = ''+
    '<a class="link c-global-mini-cart-trigger eg_cart"><span class="icon icon-cart"></span></a>'+
    '<div class="eg_sections eg_bestTeaSet">'+
    '<div class="eg_component eg_six">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/dinnerware/dinnerware/all-dinnerware/white-folia-gift-tray-rectangular-40032157">'+
    '                 <p class="eg_product_name">White Folia Gift Tray Rectangular</p>'+
    '                 <p class="eg_product_price">$85.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_seven">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/renaissance-red/renaissance-red-teacup-saucer-1058821">'+
    '                 <p class="eg_product_name">Renaissance Red Teacup & Saucer</p>'+
    '                 <p class="eg_product_price">$75.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_eight">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/intaglio/intaglio-teacup-and-saucer-1052874">'+
    '                 <p class="eg_product_name">Intaglio Teacup and Saucer</p>'+
    '                 <p class="eg_product_price">$45.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_nine">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wild-strawberry/wild-strawberry-teacup-saucer-peony-1053287">'+
    '                 <p class="eg_product_name">Wild Strawberry Teacup & Saucer Peony</p>'+
    '                 <p class="eg_product_price">$90.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '</div>';
    var eg_bestTeaSet4 = ''+
    '<a class="link c-global-mini-cart-trigger eg_cart"><span class="icon icon-cart"></span></a>'+
    '<div class="eg_sections eg_bestTeaSet">'+
    '<div class="eg_component eg_eleven">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/renaissance-gold/renaissance-gold-bread-butter-plate-5c102101008">'+
    '                 <p class="eg_product_name">Renaissance Gold Bread & Butter Plate</p>'+
    '                 <p class="eg_product_price">$35.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_twelve">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/renaissance-gold/renaissance-gold-dinner-plate-5c102101004">'+
    '                 <p class="eg_product_name">Renaissance Gold Dinner Plate</p>'+
    '                 <p class="eg_product_price">$60.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_thirteen">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/florentine-turquoise/florentine-turquoise-salad-plate-9inch-50102601005">'+
    '                 <p class="eg_product_name">Florentine Turquoise Salad Plate 9inch</p>'+
    '                 <p class="eg_product_price">$120.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_fourteen">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/dinnerware/dinnerware/all-dinnerware/gio-rectangular-tray-40034167">'+
    '                 <p class="eg_product_name">Gio Rectangular Tray</p>'+
    '                 <p class="eg_product_price">$55.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '</div>';
    var eg_bestTeaSet5= ''+
    '<a class="link c-global-mini-cart-trigger eg_cart"><span class="icon icon-cart"></span></a>'+
    '<div class="eg_sections eg_bestTeaSet">'+
    '<div class="eg_component eg_eighteen">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wild-strawberry/wild-strawberry-teacup-saucer-peony-1053287">'+
    '                 <p class="eg_product_name">Wild Strawberry Teacup & Saucer Peony</p>'+
    '                 <p class="eg_product_price">$90.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '</div>';
    var eg_bestTeaSet6 = ''+
    '<a class="link c-global-mini-cart-trigger eg_cart"><span class="icon icon-cart"></span></a>'+
    '<div class="eg_sections eg_bestTeaSet">'+
    '<div class="eg_component eg_nineteen">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wonderlust/wonderlust-8in-plate-set-of-4-40031712">'+
    '                 <p class="eg_product_name">Wonderlust 8in Plate, Set of 4</p>'+
    '                 <p class="eg_product_price">$200.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_twenty-one">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wonderlust/wonderlust-rococo-flowers-bowl-40023902">'+
    '                 <p class="eg_product_name">Wonderlust Rococo Flowers Bowl</p>'+
    '                 <p class="eg_product_price">$55.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_twenty-two">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wonderlust/wonderlust-peony-diamond-teacup-saucer-set-40024019">'+
    '                 <p class="eg_product_name">Wonderlust Peony Diamond Teacup & Saucer Set</p>'+
    '                 <p class="eg_product_price">$85.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '</div>';
    var eg_bestTeaSet7 = ''+
    '<a class="link c-global-mini-cart-trigger eg_cart"><span class="icon icon-cart"></span></a>'+
    '<div class="eg_sections eg_bestTeaSet">'+
    '<div class="eg_component eg_twenty-three">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wonderlust/wonderlust-blue-pagoda-3-piece-tea-set-40031717">'+
    '                 <p class="eg_product_name">Wonderlust Blue Pagoda 3-Piece Tea Set</p>'+
    '                 <p class="eg_product_price">$250.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_twenty-four">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/dinnerware/dinnerware/all-dinnerware/wonderlust-midnight-crane-teacup-saucer-set-40024023">'+
    '                 <p class="eg_product_name">Wonderlust Midnight Crane Teacup & Saucer Set</p>'+
    '                 <p class="eg_product_price">$85.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_twenty-five">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/dinnerware/dinnerware/all-dinnerware/wonderlust-blue-pagoda-teacup-saucer-set-40031709">'+
    '                 <p class="eg_product_name">Wonderlust Blue Pagoda Teacup & Saucer Set</p>'+
    '                 <p class="eg_product_price">$74.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_twenty-six">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wonderlust/wonderlust-rococo-flowers-bowl-40023902">'+
    '                 <p class="eg_product_name">Wonderlust Rococo Flowers Bowl</p>'+
    '                 <p class="eg_product_price">$55.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_twenty-seven">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wonderlust/wonderlust-8in-plate-set-of-4-40031712">'+
    '                 <p class="eg_product_name">Wonderlust 8in Plate, Set of 4</p>'+
    '                 <p class="eg_product_price">$200.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '</div>';
    var eg_bestTeaSet8 = ''+
    '<a class="link c-global-mini-cart-trigger eg_cart"><span class="icon icon-cart"></span></a>'+
    '<div class="eg_sections eg_bestTeaSet">'+
    '<div class="eg_component eg_twenty-eight">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/renaissance-gold/renaissance-gold-scroll-accent-salad-plate-5c102103109">'+
    '                 <p class="eg_product_name">Renaissance Gold Scroll Accent Salad Plate</p>'+
    '                 <p class="eg_product_price">$60.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_twenty-nine">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/renaissance-gold/renaissance-gold-bread-butter-plate-5c102101008">'+
    '                 <p class="eg_product_name">Renaissance Gold Bread & Butter Plate</p>'+
    '                 <p class="eg_product_price">$35.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_thirty">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/florentine-turquoise/florentine-turquoise-salad-plate-9inch-50102601005">'+
    '                 <p class="eg_product_name">Florentine Turquoise Salad Plate 9inch</p>'+
    '                 <p class="eg_product_price">$120.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_thirty-one">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/renaissance-gold/renaissance-gold-dinner-plate-5c102101004">'+
    '                 <p class="eg_product_name">Renaissance Gold Dinner Plate</p>'+
    '                 <p class="eg_product_price">$60.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_thirty-two">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/dinnerware/dinnerware/all-dinnerware/gio-rectangular-tray-40034167">'+
    '                 <p class="eg_product_name">Gio Rectangular Tray</p>'+
    '                 <p class="eg_product_price">$55.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_thirty-three">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/florentine-turquoise/florentine-turquoise-dinner-plate-50102601004">'+
    '                 <p class="eg_product_name">Florentine Turquoise Dinner Plate</p>'+
    '                 <p class="eg_product_price">$130.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '</div>';
    var eg_brideAndGroom = ''+
    '<a class="link c-global-mini-cart-trigger eg_cart"><span class="icon icon-cart"></span></a>'+
    '<div class="eg_sections eg_brideAndGroom">'+
    '<div class="eg_component eg_one">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/gio-gold/gio-gold-teapot-40007547">'+
    '                 <p class="eg_product_name">Gio Gold Teapot</p>'+
    '                 <p class="eg_product_price">$200.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_two">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/dinnerware/drinkware/champagne-glasses/with-love-silver-toasting-flutes-pair-57003606117">'+
    '                 <p class="eg_product_name">With Love Silver Toasting Flutes, Pair</p>'+
    '                 <p class="eg_product_price">$110.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_three">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/gio-gold/gio-gold-accent-teacup-saucer-set-of-4-40007555">'+
    '                 <p class="eg_product_name">Gio Gold Accent Teacup & Saucer, Set of 4</p>'+
    '                 <p class="eg_product_price">$320.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_four">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/dinnerware/drinkware/champagne-glasses/globe-champagne-flute-set-of-2-40032669">'+
    '                 <p class="eg_product_name">Globe Champagne Flute, Set of 2</p>'+
    '                 <p class="eg_product_price">$60.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_five">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/globe/globe-hiball-set-of-2-40032665">'+
    '                 <p class="eg_product_name">Globe HiBall, Set of 2</p>'+
    '                 <p class="eg_product_price">$52.50</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '</div>';
    var eg_brideAndGroom1 = ''+
    '<a class="link c-global-mini-cart-trigger eg_cart"><span class="icon icon-cart"></span></a>'+
    '<div class="eg_sections eg_brideAndGroom">'+
    '<div class="eg_component eg_six">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/paeonia-blush/paeonia-blush-bowl-set-of-4-40032142">'+
    '                 <p class="eg_product_name">Paeonia Blush Bowl Set of 4</p>'+
    '                 <p class="eg_product_price">$150.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_seven">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wonderlust/wonderlust-waterlily-plate-1057262">'+
    '                 <p class="eg_product_name">Wonderlust Waterlily Plate</p>'+
    '                 <p class="eg_product_price">$50.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_eight">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/hibiscus/hibiscus-4-piece-place-setting-1050603">'+
    '                 <p class="eg_product_name">Hibiscus 4-Piece Place Setting</p>'+
    '                 <p class="eg_product_price">$200.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_nine">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/tea-and-teaware/teaware/all-teaware/wonderlust-sapphire-garden-plate-1057263">'+
    '                 <p class="eg_product_name">Wonderlust Sapphire Garden Plate</p>'+
    '                 <p class="eg_product_price">$50.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_ten">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/magnolia-blossom/magnolia-blossom-vase-40024001">'+
    '                 <p class="eg_product_name">Magnolia Blossom Vase</p>'+
    '                 <p class="eg_product_price">$305.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_eleven">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wonderlust/wonderlust-menagerie-teacup-saucer-1057267">'+
    '                 <p class="eg_product_name">Wonderlust Menagerie Teacup & Saucer</p>'+
    '                 <p class="eg_product_price">$85.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '</div>';
    var eg_brideAndGroom2 = ''+
    '<a class="link c-global-mini-cart-trigger eg_cart"><span class="icon icon-cart"></span></a>'+
    '<div class="eg_sections eg_brideAndGroom">'+
    '<div class="eg_component eg_twelve">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/dinnerware/drinkware/champagne-glasses/love-knots-toasting-flutes-pair-54735805748">'+
    '                 <p class="eg_product_name">Love Knots Toasting Flutes, Pair</p>'+
    '                 <p class="eg_product_price">$110.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_thirteen">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/folia/jasper-folia-mink-tall-vase-1056990">'+
    '                 <p class="eg_product_name">Jasper Folia MInk Tall Vase</p>'+
    '                 <p class="eg_product_price">$125.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_fourteen">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/gio-gold/gio-gold-two-tier-cake-stand-1055616">'+
    '                 <p class="eg_product_name">Gio Gold Two-Tier Cake Stand</p>'+
    '                 <p class="eg_product_price">$160.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_fifteen">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/gio-gold/gio-gold-white-accent-plate-octagonal-40007545">'+
    '                 <p class="eg_product_name">Gio Gold White Accent Plate Octagonal</p>'+
    '                 <p class="eg_product_price">$75.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_sixteen">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/vera-wang-bande/vera-bande-wine-decanter-40024288">'+
    '                 <p class="eg_product_name">Vera Bande Wine Decanter</p>'+
    '                 <p class="eg_product_price">$175.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_seventeen">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/gio/gio-serving-tray-rectangular-40023849">'+
    '                 <p class="eg_product_name">Gio Serving Tray Rectangular</p>'+
    '                 <p class="eg_product_price">$115.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '</div>';
    var eg_brideAndGroom3 = ''+
    '<a class="link c-global-mini-cart-trigger eg_cart"><span class="icon icon-cart"></span></a>'+
    '<div class="eg_sections eg_brideAndGroom">'+
    '<div class="eg_component eg_eighteen">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/hibiscus/hibiscus-iconic-teacup-saucer-40003900">'+
    '                 <p class="eg_product_name">Hibiscus Iconic Teacup & Saucer</p>'+
    '                 <p class="eg_product_price">$75.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_nineteen">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/wonderlust/wonderlust-blue-pagoda-3-piece-tea-set-40031717">'+
    '                 <p class="eg_product_name">Wonderlust Blue Pagoda 3-Piece Tea Set</p>'+
    '                 <p class="eg_product_price">$250.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_twenty">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/gio-gold/gio-gold-two-tier-cake-stand-1055616">'+
    '                 <p class="eg_product_name">Gio Gold Two-Tier Cake Stand</p>'+
    '                 <p class="eg_product_price">$160.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '<div class="eg_component eg_twenty-one">'+
    '       <span class="eg_component_icon"></span>'+
    '       <div class="eg_product">'+
    '             <a href="https://www.wedgwood.com/en-us/collections/all-collections/renaissance-gold/renaissance-gold-teacup-saucer-1053087">'+
    '                 <p class="eg_product_name">Renaissance Gold Teacup & Saucer</p>'+
    '                 <p class="eg_product_price">$75.00</p>'+
    '             </a>'+
    '       </div>'+
    '</div>'+
    '</div>';
    /* Variation Init */
    function AllCollection() {
      /* start your code here */
      document.querySelector('.c-title-component-image').insertAdjacentHTML('beforeend',eg_allCollection);
      iconsToggle();
      showDots();
    }
    function AllDinnerSets() {
      /* start your code here */
      document.querySelector('.c-title-component-image').insertAdjacentHTML('beforeend',eg_allDinnerSets);
      iconsToggle();
      showDots();
    }
    function TeaAndTeaware() {
      /* start your code here */
      document.querySelector('.c-image').insertAdjacentHTML('beforeend', eg_teaAndTeaware);
      iconsToggle();
      showDots();
    }
    function AllTeaware(){
      document.querySelector('.c-title-component-image').insertAdjacentHTML('beforeend',eg_allTeaware);
      iconsToggle();
      showDots();
    }
    function CupAndSaucers(){
      document.querySelector('.c-title-component-image').insertAdjacentHTML('beforeend',eg_cupAndSaucers);
      iconsToggle();
      showDots();
    }
    function BoneChina(){
      document.querySelector('.c-title-component-image').insertAdjacentHTML('beforeend',eg_boneChina);
      iconsToggle();
      showDots();
    }
    function WonderLust(){
      document.querySelector('.c-title-component-image').insertAdjacentHTML('beforeend',eg_wonderLust);
      iconsToggle();
      showDots();
    }
    function BestTeaSet(){
      document.querySelector('.c-image').insertAdjacentHTML('beforeend',eg_bestTeaSet);
      document.querySelector('.component.c-image').insertAdjacentHTML('beforeend',eg_bestTeaSet2);
      document.querySelectorAll('.component.c-image')[1].insertAdjacentHTML('beforeend',eg_bestTeaSet3);
      document.querySelectorAll('.component.c-image')[2].insertAdjacentHTML('beforeend',eg_bestTeaSet4);
      document.querySelectorAll('.component.c-image')[3].insertAdjacentHTML('beforeend',eg_bestTeaSet5);
      document.querySelectorAll('.component.c-image')[4].insertAdjacentHTML('beforeend',eg_bestTeaSet6);
      document.querySelectorAll('.component.c-image')[5].insertAdjacentHTML('beforeend',eg_bestTeaSet7);
      document.querySelectorAll('.component.c-image')[6].insertAdjacentHTML('beforeend',eg_bestTeaSet8);
      iconsToggle();
      showDots();
    }
    function BrideAndGroom(){
      document.querySelectorAll('.component.c-image')[1].insertAdjacentHTML('beforeend',eg_brideAndGroom);
      document.querySelectorAll('.component.c-image')[2].insertAdjacentHTML('beforeend',eg_brideAndGroom1);
      document.querySelectorAll('.component.c-image')[3].insertAdjacentHTML('beforeend',eg_brideAndGroom2);
      document.querySelectorAll('.component.c-image')[4].insertAdjacentHTML('beforeend',eg_brideAndGroom3);
      iconsToggle();
      showDots();
    }
    function showDots(){
      live('.eg_cart','click',function(){
        this.parentElement.classList.toggle('eg_active')
      });
      
    }
    // toggle cross selling product
    function iconsToggle(){
      var icons = document.querySelectorAll('.eg_component_icon');
      for(var i = 0; i<icons.length; i++){
        icons[i].addEventListener('click',function(){
          if(!this.parentElement.classList.contains('eg_show')){
            if(document.querySelector('.eg_show')){
              document.querySelector('.eg_show').classList.remove('eg_show');
            }
            this.parentElement.classList.add('eg_show');
          }else{
            this.parentElement.classList.remove('eg_show');
          }
        })
      }
    }
    /* Initialize variation */
    if(window.location.pathname === '/en-us/collections/all-collections'){
      waitForElement(".c-title-component-image", AllCollection, 50, 15000);
    }
    if(window.location.pathname === '/en-us/dinnerware/dinner-sets/all-dinner-sets'){
      waitForElement(".c-title-component-image", AllDinnerSets, 50, 15000);
    }
    if(window.location.pathname === '/en-us/tea-and-teaware'){
      waitForElement(".c-image", TeaAndTeaware, 50, 15000);
    }
    if(window.location.pathname === '/en-us/tea-and-teaware/teaware/all-teaware'){
      waitForElement(".c-title-component-image", AllTeaware, 50, 15000);
    }
    if(window.location.pathname === '/en-us/tea-and-teaware/teaware/cups-and-saucers'){
      waitForElement(".c-title-component-image", CupAndSaucers, 50, 15000);
    }
    if(window.location.pathname === '/en-us/welcome-to-wedgwood/buying-guides/a-guide-to-bone-china'){
      waitForElement(".c-title-component-image", BoneChina, 50, 15000);
    }
    if(window.location.pathname === '/en-us/collections/all-collections/wonderlust'){
      waitForElement(".c-title-component-image", WonderLust, 50, 15000);
    }
    if(window.location.pathname === '/en-us/welcome-to-wedgwood/buying-guides/a-tea-lovers-guide-to-buying-the-best-tea-set'){
      waitForElement(".component.c-image:nth-of-type(7)", BestTeaSet, 50, 15000);
    }
    if(window.location.pathname === '/en-us/welcome-to-wedgwood/editorials/wedding-gift-ideas-for-the-bride-and-groom'){
      waitForElement(".grid-module.t-spacing-small:last-child", BrideAndGroom, 50, 15000);
    }
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();

