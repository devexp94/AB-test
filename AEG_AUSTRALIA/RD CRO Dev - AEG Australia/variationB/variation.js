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
    '          <p>Service & Repair</p>'+ 
    '          <div class="eg-nav">'+ 
    '              <a class="eg-scroll-button eg-why" data-option="">Why AEG?</a>'+ 
    '              <a class="eg-scroll-button" data-option="section-testimonial">Testimonials</a>'+ 
    '              <a class="eg-scroll-button" data-option="hero-banner-standard">Better Living</a>'+ 
    '              <a class="eg-scroll-button" data-option="products-support__faq">FAQs</a>'+ 
    '              <a class="eg-scroll-button" data-option="service-center">Service Center Locator</a>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>';

    var egMobileNav = '' +
    ' <div class="eg-nav-container-mobile">' +
    '  <div class="eg-dropdown">' +
    '      <span class="eg-default-option">Why AEG?</span>' +
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">' +
    '<path opacity="0.7" d="M3 6L8 11L13 6" stroke="#8A8A8A" stroke-width="2"/>' +
    '</svg>' +
    '      </div>' +
    '      <div class="eg-dropdown-options" style="display: block;">' +
    '          <span class="eg-dropdown-item eg-why" data-option="why-AEG"><span class="eg-dropdown-item-text">Why AEG?</span></span>' +
    '          <span class="eg-dropdown-item" data-option="section-testimonial"><span class="eg-dropdown-item-text">Testimonials</span></span>' +
    '          <span class="eg-dropdown-item" data-option="hero-banner-standard"><span class="eg-dropdown-item-text">Better Living</span></span>' +
    '          <span class="eg-dropdown-item" data-option="products-support__faq"><span class="eg-dropdown-item-text">FAQs</span></span>' +
    '          <span class="eg-dropdown-item" data-option="service-center"><span class="eg-dropdown-item-text">Service Center Locator</span></span>' +
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
          
            if(document.querySelector('.eg-scroll-button.eg-active')){
              document.querySelector('.eg-scroll-button.eg-active').classList.remove('eg-active');
            }
            this.classList.add('eg-active');
            if(this.getAttribute('data-option')) {
              document.querySelector('.'+this.getAttribute('data-option')).scrollIntoView({ behavior: 'smooth', block : "start"});
            }
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

      document.querySelector('.eg-scroll-button.eg-why').addEventListener('click', function(){
        document.querySelector('section> div.border-top-content.theme-carbon').scrollIntoView({behavior: "smooth", block : "start"});
      });      

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

      var egButton = document.querySelectorAll('.eg-dropdown-item');

      for(var i=0; i< egButton.length; i++){
        egButton[i].addEventListener('click', function(){
          dropdownClassRemove();
            if(document.querySelector('.eg-dropdown-item.eg-active')){
              document.querySelector('.eg-dropdown-item.eg-active').classList.remove('eg-active');
            }
            this.classList.add('eg-active');
            if(this.getAttribute('data-option')) {
              document.querySelector('.'+this.getAttribute('data-option')).scrollIntoView({ behavior: 'smooth', block : "start"});
            }
        });
      }

      document.querySelector('.eg-dropdown-item.eg-why').addEventListener('click', function(){
        document.querySelector('section> div.border-top-content.theme-carbon').scrollIntoView({behavior: "smooth", block : "start"});
      });      



      window.addEventListener('scroll', function() {
        // if(flag) {
           document.querySelector('.eg-nav .eg-scroll-button.eg-active') && document.querySelector('.eg-nav .eg-scroll-button.eg-active').classList.remove('eg-active');
          document.querySelector('.eg-dropdown-item.eg-active') && document.querySelector('.eg-dropdown-item.eg-active').classList.remove('eg-active');

          if(elementInViewport2(document.querySelector('section> div.border-top-content.theme-carbon'))) {
            document.querySelector('.eg-scroll-button.eg-why').classList.add('eg-active');
            document.querySelector('.eg-dropdown-item[data-option="why-AEG"]').classList.add('eg-active');
            document.querySelector('.eg-nav-container-mobile .eg-default-option').innerHTML = "Why AEG?";
          } else if(elementInViewport2(document.querySelector('.section-testimonial'))) {
            document.querySelector('.eg-scroll-button[data-option="section-testimonial"]').classList.add('eg-active');
            document.querySelector('.eg-dropdown-item[data-option="section-testimonial"]').classList.add('eg-active');
            document.querySelector('.eg-nav-container-mobile .eg-default-option').innerHTML = "Testimonials";
          } else if(elementInViewport2(document.querySelector('.hero-banner-standard'))) {
            document.querySelector('.eg-scroll-button[data-option="hero-banner-standard"]').classList.add('eg-active');
            document.querySelector('.eg-dropdown-item[data-option="hero-banner-standard"]').classList.add('eg-active');
            document.querySelector('.eg-nav-container-mobile .eg-default-option').innerHTML = "Better Living";
          } else if(elementInViewport2(document.querySelector('.products-support__faq'))) {
            document.querySelector('.eg-scroll-button[data-option="products-support__faq"]').classList.add('eg-active');
            document.querySelector('.eg-dropdown-item[data-option="products-support__faq"]').classList.add('eg-active');
            document.querySelector('.eg-nav-container-mobile .eg-default-option').innerHTML = "FAQs";
          } else if(elementInViewport2(document.querySelector('.service-center'))) {
            document.querySelector('.eg-scroll-button[data-option="service-center"]').classList.add('eg-active');
             document.querySelector('.eg-dropdown-item[data-option="service-center"]').classList.add('eg-active');
            document.querySelector('.eg-nav-container-mobile .eg-default-option').innerHTML= "Service Center Locator";
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
