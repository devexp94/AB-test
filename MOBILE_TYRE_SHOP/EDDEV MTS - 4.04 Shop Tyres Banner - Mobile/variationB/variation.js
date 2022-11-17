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
        if (el.attachEvent) el.attachEvent("on" + type, handler);
        else el.addEventListener(type, handler);
      }
      // matches polyfill
      this &&
        this.Element &&
        (function (ElementPrototype) {
          ElementPrototype.matches =
            ElementPrototype.matches ||
            ElementPrototype.matchesSelector ||
            ElementPrototype.webkitMatchesSelector ||
            ElementPrototype.msMatchesSelector ||
            function (selector) {
              var node = this,
                nodes = (
                  node.parentNode || node.document
                ).querySelectorAll(selector),
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

    var egSteps =''+ 
'  <div class="eg-steps -yellow">'+ 
'  <div class="content-wrapper">'+ 
'      <div class="eg-steps-inr">'+ 
'          <h2 class="eg-steps-heding">Get it all in 3 easy steps</h2>'+ 
'          <div class="easy-steps-wrapper">'+
'          <div class="eg-steps-image">'+ 
'              <img src="https://mobiletyreshop.com.au/wp-content/themes/mobiletyres-phase4/images/3-steps-1.svg?v=4.3.56" class="easy-steps_image active" alt="Steps1 image">'+ 
'              <img src="https://mobiletyreshop.com.au/wp-content/themes/mobiletyres-phase4/images/3-steps-2.svg?v=4.3.56" class="easy-steps_image--other" alt="Steps2 image">'+ 
'              <img src="https://mobiletyreshop.com.au/wp-content/themes/mobiletyres-phase4/images/3-steps-3.svg?v=4.3.56" class="easy-steps_image--other" alt="Steps3 image">'+ 
'          </div>'+ 
'<div class="easy-steps-content">'+
'					<h3 class="easy-steps-content_text">Select your tyres</h3>'+
'					<h3 class="easy-steps-content_text">Book a time</h3>'+
'					<h3 class="easy-steps-content_text">We come to you</h3>'+
'				</div>'+
'          </div>'+ 
'      </div>'+ 
'      </div>'+ 
'  </div>';

var egSearch =''+ 
'<li class="eg-search" onclick="onSearch()">'+
'<span>Search </span>'+
'  <svg style="width: 18px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">'+ 
'  							<path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>'+ 
'  						</svg>'+
'</li>';

    function init() {
      
      document.querySelector('.navigation .navigation_logo').insertAdjacentElement('afterend', document.querySelector('.navigation .navigation-submenu .mobile-widget-buttons .-contact'))
      
      live('.eg-search-option > .btn','click', function(){
        document.querySelector('.navigation-submenu  .mobile-widget-buttons .tyreWidget-bar-buttons_btn.-tyre').click();
      });
      
      document.querySelector('.navigation .mega-menu-wrap #mega-menu-max_mega_menu_1 > .mega-menu-item:last-child').insertAdjacentHTML('afterend', egSearch)

      
      document.querySelector('.eg-search').addEventListener('click', function(){
        document.querySelector('.navigation-hamburger.-open .navigation-hamburger_btn.closed').click();
      });

     document.querySelector('html body .carousel .carousel-item .content-wrapper > a').innerHTML = '<img src="https://expogrowth.in/wp-content/uploads/2022/07/Hero-banner-yellow.png">';
      
      document.querySelector('.navigation .navigation-submenu .content-wrapper').insertAdjacentHTML('beforeend', '<div class="eg-search-option"><a class="eg-search-rego btn">Search by Rego</a><a class="eg-search-size btn">Search by Size</a></div>');
            
      document.querySelector('.carousel').insertAdjacentHTML('afterend', egSteps);


      var count = 1;
      setInterval(function(){
        document.querySelector('.eg-steps-image img.active').classList.remove('active');         
        document.querySelector('.eg-steps-image img:nth-child('+count+')').classList.add('active');
        if(count == 3){
        count = 0;
        }
        count++;
      },3000);
      
    }

    /* Initialise variation */
    waitForElement(".module.brand-icons", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
