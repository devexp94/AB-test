// (function () {
//   try {
//     /* main variables */
//     var debug = 0;
//     var variation_name = "";
//     /* all Pure helper functions */
//     function waitForElement(selector, trigger, delayInterval, delayTimeout) {
//       var interval = setInterval(function () {
//         if (
//           document &&
//           document.querySelector(selector) &&
//           document.querySelectorAll(selector).length > 0
//         ) {
//           clearInterval(interval);
//           trigger();
//         }
//       }, delayInterval);
//       setTimeout(function () {
//         clearInterval(interval);
//       }, delayTimeout);
//     }

//     function live(selector, event, callback, context) {
//       // helper for enabling IE 8 event bindings
//       function addEvent(el, type, handler) {
//         if (el.attachEvent) el.attachEvent("on" + type, handler);
//         else el.addEventListener(type, handler);
//       }
//       // matches polyfill
//       this.Element &&
//         (function (ElementPrototype) {
//           ElementPrototype.matches =
//             ElementPrototype.matches ||
//             ElementPrototype.matchesSelector ||
//             ElementPrototype.webkitMatchesSelector ||
//             ElementPrototype.msMatchesSelector ||
//             function (selector) {
//               var node = this,
//                 nodes = (node.parentNode || node.document).querySelectorAll(
//                   selector
//                 ),
//                 i = -1;
//               while (nodes[++i] && nodes[i] != node);
//               return !!nodes[i];
//             };
//         })(Element.prototype);
//       // live binding helper using matchesSelector
//       function live(selector, event, callback, context) {
//         addEvent(context || document, event, function (e) {
//           var found,
//             el = e.target || e.srcElement;
//           while (
//             el &&
//             el.matches &&
//             el !== context &&
//             !(found = el.matches(selector))
//           )
//             el = el.parentElement;
//           if (found) callback.call(el, e);
//         });
//       }
//       live(selector, event, callback, context);
//     }

//     function elementInViewport2(el) {
//       var top = el.offsetTop;
//       var left = el.offsetLeft;
//       var width = el.offsetWidth;
//       var height = el.offsetHeight;
    
//       while(el.offsetParent) {
//         el = el.offsetParent;
//         top += el.offsetTop;
//         left += el.offsetLeft;
//       }
    
//       return (
//         top < (window.pageYOffset + window.innerHeight) &&
//         left < (window.pageXOffset + window.innerWidth) &&
//         (top + height) > window.pageYOffset &&
//         (left + width) > window.pageXOffset
//       );
//     }

//     var bmFooter =''+ 
//     '  <div class="eg-sticky-nav">'+ 
//     '      <div class="eg-sticky-inr">'+ 
//     '          <div class="eg-content-section">'+ 
//     '              <a class="eg-scroll-button eg-pricing">Pricing</a>'+ 
//     '              <a class="eg-scroll-button eg-plan" data-option="pricing-pricing-comparison-grid">Compare Plans</a>'+ 
//     '              <a class="eg-scroll-button eg-feature" data-option="pricing-pricing-features">Features</a>'+ 
//     '              <a class="eg-scroll-button eg-testimonials" data-option="customer-stories-section">Testimonials</a>'+ 
//     '              <a class="eg-scroll-button eg-faq" data-option="pricing-faq">FAQs</a>'+ 
//     '              <a class="eg-popup-button">Try Labster Now</a>'+ 
//     '          </div>'+ 
//     '      </div>'+ 
//     '  </div>';

//     var bmHeaderMobile =''+ 
//     '  <div class="eg-sticky-header">'+ 
//     '      <div class="eg-sticky-inr">'+ 
//     '          <div class="eg-content-section">'+ 
//     '              <a class="eg-scroll-button eg-pricing">Pricing</a>'+ 
//     '              <a class="eg-scroll-button eg-plan" data-option="pricing-pricing-comparison-grid">Compare Plans</a>'+ 
//     '              <a class="eg-scroll-button eg-feature" data-option="pricing-pricing-features">Features</a>'+ 
//     '              <a class="eg-scroll-button eg-testimonials" data-option="customer-stories-section">Testimonials</a>'+ 
//     '              <a class="eg-scroll-button eg-faq" data-option="pricing-faq">FAQs</a>'+ 
//     '          </div>'+ 
//     '      </div>'+ 
//     '  </div>';

//     /* Variation Init */
//     function init() {
//       document.querySelector('body').insertAdjacentHTML('beforeend', bmFooter);
//       document.querySelector('header.header > nav').insertAdjacentHTML('afterend', bmHeaderMobile);

//       var bmButton = document.querySelectorAll('.eg-scroll-button');
//       for(var i=0; i< bmButton.length; i++){
//         bmButton[i].addEventListener('click', function(){
          
//             // 
//             if(document.querySelector('.eg-scroll-button.eg-active')){
//               document.querySelector('.eg-scroll-button.eg-active').classList.remove('eg-active');
//             }
//             this.classList.add('eg-active');
//             if(this.getAttribute('data-option')) {
//               document.querySelector('#'+this.getAttribute('data-option')).scrollIntoView({ behavior: 'smooth' });
//             }
//         });
//       }     

//       document.querySelector('.eg-sticky-nav .eg-popup-button').addEventListener('click', function(){
        
//         document.querySelector('#try-labster-button').click();
          
//       })


//       document.querySelector('.eg-sticky-nav .eg-pricing').addEventListener('click', function(){
        
//         document.querySelector('.tabs-wrap').scrollIntoView({behavior: "smooth", block : "start"});
        
//       });

//       document.querySelector('.eg-sticky-header .eg-pricing').addEventListener('click', function(){
        
//         document.querySelector('.tabs-wrap').scrollIntoView({behavior: "smooth", block : "start"});
          
//       });


//       window.addEventListener('scroll', function() {
//         if(this.scrollY > document.querySelector('body .pricing-specs-section .boxes-wrap').offsetTop) {
//           document.body.classList.add('eg-show-strip');
//         } else {
//           document.body.classList.remove('eg-show-strip');
//         }
//       })

//       window.addEventListener('scroll', function() {
//         // if(flag) {
//           document.querySelector('.eg-nav .eg-scroll-button.eg-active') && document.querySelector('.eg-nav .eg-scroll-button.eg-active').classList.remove('eg-active');
//           if(elementInViewport2(document.querySelector('.pricing-specs-section .content .tab-content'))) {
//             document.querySelector('.eg-nav .eg-scroll-button.eg-pricing').classList.add('eg-active');
//           } else if(elementInViewport2(document.querySelector('#pricing-pricing-comparison-grid'))) {
//             document.querySelector('.eg-nav .eg-scroll-button.eg-plan').classList.add('eg-active');
//           } else if(elementInViewport2(document.querySelector('#pricing-pricing-features'))) {
//             document.querySelector('.eg-nav .eg-scroll-button.eg-feature').classList.add('eg-active');
//           } else if(elementInViewport2(document.querySelector('#customer-stories-section'))) {
//             document.querySelector('.eg-nav .eg-scroll-button.eg-testimonials').classList.add('eg-active');
//           } else if(elementInViewport2(document.querySelector('#pricing-faq'))) {
//             document.querySelector('.eg-nav .eg-scroll-button.eg-faq').classList.add('eg-active');
//           } 
//         // }
//       })
//     }
//     waitForElement("header.header > nav", init, 100, 25000);
//   } catch (e) {
//     if (debug) console.log(e, "error in Test" + variation_name);
//   }
// })();

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
                nodes = (node.parentNode || node.document).querySelectorAll(
                  selector
                ),
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
    }

    function elementInViewport2(el) {
      var top = el.offsetTop;
      var left = el.offsetLeft;
      var width = el.offsetWidth;
      var height = el.offsetHeight;
    
      while(el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
      }
    
      return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
      );
    }


    var egSecondryNav =''+ 
    '  <div class="eg-secondry-nav">'+ 
    '      <div class="eg-secondry-nav-inr container">'+ 
    '          <p>Support</p>'+ 
    '          <div class="eg-nav">'+ 
    '              <a class="eg-scroll-button registration" data-option="">Manuals & Registration</a>'+ 
    '              <a class="eg-scroll-button book-service" data-option="">Book a Service</a>'+ 
    '              <a class="eg-scroll-button appliance-installation" data-option="">Appliance Installation</a>'+ 
    '              <a class="eg-scroll-button faq" data-option="">FAQs</a>'+ 
    '              <a class="eg-scroll-button accessories" data-option="">Accessories</a>'+ 
    '              <a class="eg-scroll-button contact" data-option="">Contact</a>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>';

    var egMobileNav = '' +
      ' <div class="eg-nav-container-mobile">' +
      '  <div class="eg-dropdown">' +
      '      <span class="eg-default-option">Manuals & Registration</span>' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">' +
      '<path opacity="0.7" d="M3 6L8 11L13 6" stroke="#8A8A8A" stroke-width="2"/>' +
      '</svg>' +
      '      </div>' +
      '      <div class="eg-dropdown-options" style="display: block;">' +
      '          <span class="eg-dropdown-item" data-option="manuals-registration"><span class="eg-dropdown-item-text">Manuals & Registration</span></span>' +
      '          <span class="eg-dropdown-item" data-option="book-a-service"><span class="eg-dropdown-item-text">Book a Service</span></span>' +
      '          <span class="eg-dropdown-item" data-option="appliance-installation"><span class="eg-dropdown-item-text">Appliance Installation</span></span>' +
      '          <span class="eg-dropdown-item" data-option="faq"><span class="eg-dropdown-item-text">FAQs</span></span>' +
      '          <span class="eg-dropdown-item" data-option="accessories"><span class="eg-dropdown-item-text">Accessories</span></span>' +
      '          <span class="eg-dropdown-item" data-option="contact"><span class="eg-dropdown-item-text">Contact</span></span>' +
      '      </div>' +
      ' </div>';


    
    function init() {      
      
        // if(window.innerWidth >= 1025){
          document.querySelector('header nav.navigation-wrapper .main-nav').insertAdjacentHTML('beforeend', egSecondryNav);
        // }else{
          document.querySelector('header .main-nav.header-mobile').insertAdjacentHTML('beforeend', egMobileNav);
        // }

        
        var egButton = document.querySelectorAll('.eg-scroll-button');

      for(var i=0; i< egButton.length; i++){
        egButton[i].addEventListener('click', function(){
            var egthis = this;
          
            setTimeout(function(){
              document.querySelector('.eg-nav .eg-scroll-button.eg-active') && document.querySelector('.eg-nav .eg-scroll-button.eg-active').classList.remove('eg-active');
              egthis.classList.add('eg-active');
            },1000);
        });
      }

      var egButtonMobile = document.querySelectorAll('.eg-dropdown-item');

      for(var i=0; i< egButtonMobile.length; i++){
        egButtonMobile[i].addEventListener('click', function(){
            var egthisMobile = this;
          
            setTimeout(function(){
              document.querySelector('.eg-dropdown-item.eg-active') && document.querySelector('.eg-dropdown-item.eg-active').classList.remove('eg-active');
              egthisMobile.classList.add('eg-active');
              document.querySelector('.eg-default-option').innerHTML = egthisMobile.innerText;
            },1000);
        });
      }

  //mobile toggleFeature
  document.querySelector('.eg-nav-container-mobile .eg-dropdown').addEventListener('click',function(){
    if(!document.querySelector('.drop-open'))
    this.classList.add('drop-open');
    else
    document.querySelector('.drop-open').classList.remove('drop-open');
    });

    live('.eg-scroll-button.registration, .eg-nav-container-mobile [data-option="manuals-registration"]', 'click', function(){
      dropdownClassRemove()
      document.querySelector('.search-landing-page + div').scrollIntoView({behavior: "smooth", block : "start"});
    });
    live('.eg-scroll-button.book-service, .eg-nav-container-mobile [data-option="book-a-service"]', 'click', function(){
      dropdownClassRemove()
      document.querySelector('.search-landing-page + div + div').scrollIntoView({behavior: "smooth", block : "start"});
    });
    live('.eg-scroll-button.appliance-installation, .eg-nav-container-mobile [data-option="appliance-installation"]', 'click', function(){
      dropdownClassRemove()
      document.querySelector('.hero-banner-standard.right-align').scrollIntoView({behavior: "smooth", block : "start"});
    });
    live('.eg-scroll-button.faq, .eg-nav-container-mobile [data-option="faq"]','click', function(){
      dropdownClassRemove()
      document.querySelector('.products-support__faq').scrollIntoView({behavior: "smooth", block : "start"});
    });
    live('.eg-scroll-button.accessories, .eg-nav-container-mobile [data-option="accessories"]','click', function(){
      dropdownClassRemove()
      document.querySelector('div.flex-direction-column:not(.mgbt-sm-2) + .hero-banner-standard.left-align').scrollIntoView({behavior: "smooth", block : "start"});
    });
    live('.eg-scroll-button.contact, .eg-nav-container-mobile [data-option="contact"]','click', function(){
      dropdownClassRemove()
      document.querySelector('.hero-banner-standard.left-align + div:not(.right-align)').scrollIntoView({behavior: "smooth", block : "start"});
    });      




      window.addEventListener('scroll', function() {

        // console.log('hello',this);

        // if(flag) {
            document.querySelector('.eg-nav .eg-scroll-button.eg-active') && document.querySelector('.eg-nav .eg-scroll-button.eg-active').classList.remove('eg-active');
            document.querySelector('.eg-dropdown-item.eg-active') && document.querySelector('.eg-dropdown-item.eg-active').classList.remove('eg-active');
  
          
         if(elementInViewport2(document.querySelector('.search-landing-page + div'))) {
            document.querySelector('.eg-nav .eg-scroll-button.registration').classList.add('eg-active');
            document.querySelector('.eg-dropdown-item[data-option="manuals-registration"]').classList.add('eg-active');
            document.querySelector('.eg-nav-container-mobile .eg-default-option').innerHTML = "Manuals & Registration";
          } else if(elementInViewport2(document.querySelector('.search-landing-page + div + div'))) {
            document.querySelector('.eg-nav .eg-scroll-button.book-service').classList.add('eg-active');
            document.querySelector('.eg-dropdown-item[data-option="book-a-service"]').classList.add('eg-active');
            document.querySelector('.eg-nav-container-mobile .eg-default-option').innerHTML = "Book a Service";
          } else if(elementInViewport2(document.querySelector('.hero-banner-standard.right-align'))) {
            document.querySelector('.eg-nav .eg-scroll-button.appliance-installation').classList.add('eg-active');
            document.querySelector('.eg-dropdown-item[data-option="appliance-installation"]').classList.add('eg-active');
            document.querySelector('.eg-nav-container-mobile .eg-default-option').innerHTML = "Appliance Installation";
          } else if(elementInViewport2(document.querySelector('.products-support__faq'))) {
            document.querySelector('.eg-nav .eg-scroll-button.faq').classList.add('eg-active');
            document.querySelector('.eg-dropdown-item[data-option="faq"]').classList.add('eg-active');
            document.querySelector('.eg-nav-container-mobile .eg-default-option').innerHTML = "FAQs";
          } else if(elementInViewport2(document.querySelector('div.flex-direction-column:not(.mgbt-sm-2) + .hero-banner-standard.left-align'))) {
            document.querySelector('.eg-nav .eg-scroll-button.accessories').classList.add('eg-active');
            document.querySelector('.eg-dropdown-item[data-option="accessories"]').classList.add('eg-active');
            document.querySelector('.eg-nav-container-mobile .eg-default-option').innerHTML= "Accessories";
          } else if(elementInViewport2(document.querySelector('.hero-banner-standard.left-align + div:not(.right-align)'))) {
            document.querySelector('.eg-nav .eg-scroll-button.contact').classList.add('eg-active');
            document.querySelector('.eg-dropdown-item[data-option="contact"]').classList.add('eg-active');
            document.querySelector('.eg-nav-container-mobile .eg-default-option').innerHTML= "Contact";
          } 
        // }
      });

    }

    function dropdownClassRemove(){
      if(document.querySelector('.eg-dropdown.drop-open')){
        document.querySelector('.drop-open').classList.remove('drop-open');
      }
    }
  
    /* Initialise variation */
    waitForElement("header nav.navigation-wrapper .main-nav > .container", init, 50, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();