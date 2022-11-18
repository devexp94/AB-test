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
    function fnc_scrollto(to){
      to = parseInt(to);
  var i = parseInt(window.pageYOffset);
      if (i < to) {
          var int = setInterval(function() {
              if (i > (to-20)) i += 1;
              else if (i > (to-40)) i += 3;
              else if (i > (to-80)) i += 8;
              else if (i > (to-160)) i += 18;
              else if (i > (to-200)) i += 24;
              else if (i > (to-300)) i += 40;
              else i += 60;
              window.scroll(0, i);
              if (i >= to) clearInterval(int);
          }, 10);
      }
      else {
          var int = setInterval(function() {
              if (i < (to+20)) i -= 1;
              else if (i < (to+40)) i -= 3;
              else if (i < (to+80)) i -= 8;
              else if (i < (to+160)) i -= 18;
              else if (i < (to+200)) i -= 24;
              else if (i < (to+300)) i -= 40;
              else i -= 60;
              window.scroll(0, i);
              if (i <= to) clearInterval(int);
          }, 10);
      }
  }


    var arrow =''+ 
'  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">'+ 
'  <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  <g>'+ 
'  </g>'+ 
'  </svg>';
    
    /* Variation functions */
    var ym_banner = ''+
    '<div class="ym_banner">'+
    '       <div class="ym_head">'+
    '           <h2>Shop all products</h2>'+
    '           <div class="ym_btn_toggle">'+
    '                 <p class="ym_active" data-target="#ym_annual">One-Time</p>'+
    '                 <p data-target="#ym_monthly">Subscribe & Save 25%</p>'+
    '           </div>'+
    '       </div>'+
    '       <div class="ym_body">'+
    '           <div class="ym_tab ym_active" data-content id="ym_annual">'+
    '               <div class="ym_tab_content tab-1">'+
    '                 <div class="ym_left">'+
    '                       <img src="//cdn.shopify.com/s/files/1/1428/0736/files/greater-than-breastfeeding-drink-lactation-supplement-trial-pack-1-liter-6-flavor-variety-pack_b84e7243-b6e2-4e42-8536-c586385dc2b7_800x.png?v=1637955398">'+
    '                       <div>'+
    '                             <h6 class="eg-pack-heading">Trial 6 Flavor Variety Pack</h6>'+
    '                             <p class="eg-subheading">Find your favorite flavors!</p>'+
    '                             <p class="eg-price">$49.00</p>'+
    '                             <p></p>'+
    '                       </div>'+
    '                 </div>'+
    '                 <div class="ym_right">'+ arrow +
    '                 </div>'+
    '               </div>'+
    '               <div class="ym_tab_content tab-2">'+
    '                 <div class="ym_left">'+
    '                       <img src="https://cdn.shopify.com/s/files/1/1428/0736/files/greater-than-breastfeeding-drink-lactation-supplement-build-your-own-box-right-facing_800x.png?v=1645602167">'+
    '                       <div>'+
    '                             <h6 class="eg-pack-heading">Build Your Own Bundle!</h6>'+
    '                             <p class="eg-subheading">Mix and match your favorites!</p>'+
    '                             <p class="eg-price">$92.65</p>'+
    '                       </div>'+
    '                 </div>'+
    '                 <div class="ym_right">'+ arrow +
    '                 </div>'+
    '               </div>'+
    '               <div class="ym_tab_content tab-3">'+
    '                 <div class="ym_left">'+
    '                       <img src="https://cdn.shopify.com/s/files/1/1428/0736/products/greater-than-breastfeeding-drink-lactation-supplement-tropical-new-liter-carton_900x.png?v=1633709619">'+
    '                       <div>'+
    '                             <h6 class="eg-pack-heading">Single Flavor Packs</h6>'+
    '                             <p class="eg-subheading">Order 1 flavor only</p>'+
    '                             <p class="eg-price">$89.00</p>'+
    '                       </div>'+
    '                 </div>'+
    '                 <div class="ym_right">'+ arrow +
    '                 </div>'+
    '               </div>'+
    '               <div class="ym_tab_content tab-4">'+
    '                 <div class="ym_left">'+
    '                       <img src="https://cdn.shopify.com/s/files/1/1428/0736/files/Greater_Than_Product_Images_-_June_2021_35_800x.png?v=1648060436">'+
    '                       <div>'+
    '                             <h6 class="eg-pack-heading">Spring Splash Sale</h6>'+
    '                             <p class="eg-subheading">Time limited offer: try out our new 36 Packs!</p>'+
    '                             <p class="eg-price">$29.50</p>'+
    '                       </div>'+
    '                 </div>'+
    '                 <div class="ym_right">'+ arrow +
    '                 </div>'+
    '               </div>'+
    '               <div class="ym_tab_content tab-5">'+
    '                 <div class="ym_left">'+
    '                       <img src="https://cdn.shopify.com/s/files/1/1428/0736/files/Amazon_Carton_Single_Shots-2_800x.png?v=1651257063">'+
    '                       <div>'+
    '                             <h6 class="eg-pack-heading">BREASTSeller Sample 8-Pack</h6>'+
    '                             <p class="eg-subheading">Try this special edition sample pack!</p>'+
    '                              <p class="eg-price">$34.99</p>'+
    '                       </div>'+
    '                 </div>'+
    '                 <div class="ym_right">'+ arrow +
    '                 </div>'+
    '               </div>'+

    '           </div>'+
    '           <div class="ym_tab" data-content id="ym_monthly">'+
    '               <div class="ym_tab_content tab-1">'+
    '                 <div class="ym_left">'+
    '                       <img src="//cdn.shopify.com/s/files/1/1428/0736/files/greater-than-breastfeeding-drink-lactation-supplement-trial-pack-1-liter-6-flavor-variety-pack_b84e7243-b6e2-4e42-8536-c586385dc2b7_800x.png?v=1637955398">'+
    '                       <div>'+
    '                             <h6 class="eg-pack-heading">Trial 6 Flavor Variety Pack</h6>'+
    '                             <p class="eg-subheading">Find your favorite flavors!</p>'+
    '                             <p class="eg-price">$41.65</p>'+
    '                       </div>'+
    '                 </div>'+
    '                 <div class="ym_right">'+ arrow +
    '                 </div>'+
    '               </div>'+
    '               <div class="ym_tab_content tab-2">'+
    '                 <div class="ym_left">'+
    '                       <img src="https://cdn.shopify.com/s/files/1/1428/0736/files/greater-than-breastfeeding-drink-lactation-supplement-build-your-own-box-right-facing_800x.png?v=1645602167">'+
    '                       <div>'+
    '                             <h6 class="eg-pack-heading">Build Your Own Bundle!</h6>'+
    '                             <p class="eg-subheading">Mix and match your favorites!</p>'+
    '                             <p class="eg-price">$92.65</p>'+
    '                       </div>'+
    '                 </div>'+
    '                 <div class="ym_right">'+ arrow +
    '                 </div>'+
    '               </div>'+
    '               <div class="ym_tab_content tab-3">'+
    '                 <div class="ym_left">'+
    '                       <img src="https://cdn.shopify.com/s/files/1/1428/0736/products/greater-than-breastfeeding-drink-lactation-supplement-tropical-new-liter-carton_900x.png?v=1633709619">'+
    '                       <div>'+
    '                             <h6 class="eg-pack-heading">Single Flavor Packs</h6>'+
    '                             <p class="eg-subheading">Order 1 flavor only</p>'+
    '                              <p class="eg-price">$89.00</p>'+
    '                       </div>'+
    '                 </div>'+
    '                 <div class="ym_right">'+ arrow +
    '                 </div>'+
    '               </div>'+
    '               <div class="ym_tab_content tab-4">'+
    '                 <div class="ym_left">'+
    '                       <img src="https://cdn.shopify.com/s/files/1/1428/0736/files/Amazon_Carton_Single_Shots-2_800x.png?v=1651257063">'+
    '                       <div>'+
    '                             <h6 class="eg-pack-heading">BREASTSeller Sample 8-Pack</h6>'+
    '                             <p class="eg-subheading">Try this special edition sample pack!</p>'+
    '                              <p class="eg-price">$34.99</p>'+
    '                       </div>'+
    '                 </div>'+
    '                 <div class="ym_right">'+ arrow +
    '                 </div>'+
    '               </div>'+
    '           </div>'+
    '       <div>'+
    '</div>'+
    '<a href="#sticky-wrapper" class="scrollup" id="scroll-up"></a>';
    /* Variation Init */
    function init() {
        var productPrice=['$49.00','$92.65','$29.50','$34.99'];    
      var productSubPrice=['$41.65','$92.65','$29.50','$34.99'];
      /* start your code here */
        document.querySelector('#shopify-section-1gt-products .products-intro').insertAdjacentHTML('afterend',ym_banner);

        var tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]')
  
        tabs.forEach(function(tab){
            tab.addEventListener('click', function(){
                var target = document.querySelector(tab.dataset.target)
  
                tabContents.forEach(tabContent =>{
                    tabContent.classList.remove('ym_active')
                })
                target.classList.add('ym_active')
  
                tabs.forEach(tab =>{
                    tab.classList.remove('ym_active')
                })
                tab.classList.add('ym_active')
            })
        }) 

        window.addEventListener('scroll', scrollUp)

        live('.ym_tab_content.tab-1', 'mousedown', function () {
          fnc_scrollto(document.querySelector('.products-section .product-block:nth-child(4)').offsetTop - 50);
        });
        live('.ym_tab_content.tab-2', 'mousedown', function () {
          fnc_scrollto(document.querySelector('.products-section .product-block:nth-child(5)').offsetTop - 50);
        });
        live('.ym_tab_content.tab-3', 'mousedown', function () {
          fnc_scrollto(document.querySelector('.products-section .product-block.product-block-carousel').offsetTop - 50);
        });
        live('#ym_annual .ym_tab_content.tab-4', 'mousedown', function () {
          fnc_scrollto(document.querySelector('.products-section .product-block:nth-child(7)').offsetTop - 50);    
        });
  
        live('#ym_annual .ym_tab_content.tab-5, #ym_monthly .ym_tab_content.tab-4', 'mousedown', function () {
          fnc_scrollto(document.querySelector('.products-section #tinuiti-amazon').offsetTop - 50);    
        });


 

        var SliderButton = document.querySelectorAll('.product-block-carousel .img-carousel  .product-image:not(.slick-cloned) .product-cta');
        var SliderText =  document.querySelector('.product-block-carousel .yotpo-wrapper + p').innerHTML;
        var prcielist=['$79.00','$79.00','$79.00','$89.00','$89.00','$64.00','$89.00','$89.00','$89.00'];
        for(i=0; i < SliderButton.length; i++){
          SliderButton[i].insertAdjacentHTML('beforebegin', '<p>'+ SliderText +'</p>');
          SliderButton[i].insertAdjacentHTML('beforebegin', '<p class="ym_price">From  '+ prcielist[i] +'</p>');
        }

        document.querySelector('.product-block.product-block-carousel + .product-block > .col-12 > .product-cta').insertAdjacentElement('beforebegin', document.querySelector('.product-block.product-block-carousel + .product-block > .col-12 > p'));

        document.querySelector('.toolbar + .product-block .collection-atc').insertAdjacentHTML('afterend', '<div class="eg-button"><a class="product-cta product-cta-small" href="/products/trial-pack">Learn More</a></div>');
        var mainProductList = document.querySelectorAll('div.collection-atc, .product-block:not(.product-block-carousel) .product-cta:not(.product-cta-small)');
        for(var i=0; i< mainProductList.length; i++){
          mainProductList[i].insertAdjacentHTML('beforebegin','<p class="ym-price">From '+productPrice[i]+'</p> <p class="ym-sub-price">'+productSubPrice[i]+'</p>')
        }
    }

    function scrollUp(){
      var scrollUp = document.getElementById('scroll-up');
      if(this.scrollY >= 260)
       scrollUp.classList.add('show-scroll'); 
      else scrollUp.classList.remove('show-scroll')
    }

    /* Initialize variation */
    waitForElement(".product-block.product-block-carousel + .product-block > .col-12 > .product-cta", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
