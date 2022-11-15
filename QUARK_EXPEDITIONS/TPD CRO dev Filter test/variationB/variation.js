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
    function onLoadJqueryLibrary(trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function() {
        if (window.jQuery && window.jQuery.fn) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function() {
        clearInterval(interval);
      }, delayTimeout);
    }
    
    function live(event, selector, callback, context) {
      /****Helper Functions****/
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

    var searchTrips =''+ 
    '  <div class="eg-search-trips">'+ 
    '  <div class="eg-search-trips-inr container-fluid">'+ 
    '      <div class="eg-language-option23-outer">'+
    '      <div class="eg-language-option23 eg-destination">'+ 
    '          <div class="eg-dropdown">'+ 
    '              <span class="eg-default-option facet__title">Destination <span aria-hidden="true" class="facet__toggle-icon icon chevron-down"></span></span>'+ 
    '              <div class="eg-dropdown-options" style="display: block;">'+ 
    '                  <span class="eg-dropdown-item" data-destination="antarctica">Antarctica</span>'+ 
    '                  <span class="eg-dropdown-item" data-destination="canada">Canada</span>'+ 
    '                  <span class="eg-dropdown-item" data-destination="chile">Chile</span>'+ 
    '                  <span class="eg-dropdown-item" data-destination="iceland">Iceland</span>'+ 
    '                  <span class="eg-dropdown-item" data-destination="north-pole">North Pole</span>'+ 
    '                  <span class="eg-dropdown-item" data-destination="russia">Russia</span>'+ 
    '                  <span class="eg-dropdown-item" data-destination="south-georgia">South Georgia</span>'+ 
    '                  <span class="eg-dropdown-item" data-destination="spitsbergen">Spitsbergen</span>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '      <div class="eg-language-option23 eg-departure">'+ 
    '          <div class="eg-dropdown">'+ 
    '              <span class="eg-default-option facet__title">Itinerary Length<span aria-hidden="true" class="facet__toggle-icon icon chevron-down"></span></span>'+ 
    '              <div class="eg-dropdown-options " style="display: block;">'+ 
    '                  <span class="eg-dropdown-item" data-itinerary="7-days">7 Days</span>'+ 
    '                  <span class="eg-dropdown-item" data-itinerary="8-days">8 Days</span>'+ 
    '                  <span class="eg-dropdown-item" data-itinerary="9-days">9 Days</span>'+ 
    '                  <span class="eg-dropdown-item" data-itinerary="10-days">10 Days</span>'+ 
    '                  <span class="eg-dropdown-item" data-itinerary="11-days">11 Days</span>'+ 
    '                  <span class="eg-dropdown-item" data-itinerary="12-days">12 Days</span>'+ 
    '                  <span class="eg-dropdown-item" data-itinerary="13-days">13 Days</span>'+ 
    '                  <span class="eg-dropdown-item" data-itinerary="14-days">14 Days</span>'+ 
    '                  <span class="eg-dropdown-item" data-itinerary="15-days">15 Days</span>'+ 
    '                  <span class="eg-dropdown-item" data-itinerary="16-days">16 Days</span>'+ 
    '                  <span class="eg-dropdown-item" data-itinerary="17-days">17 Days</span>'+ 
    '                  <span class="eg-dropdown-item" data-itinerary="20-days">20 Days</span>'+ 
    '                  <span class="eg-dropdown-item" data-itinerary="22-days">22 Days</span>'+ 
    '                  <span class="eg-dropdown-item" data-itinerary="23-days">23 Days</span>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '      <div class="eg-language-option23 eg-expedition">'+ 
    '          <div class="eg-dropdown">'+ 
    '              <span class="eg-default-option facet__title">Expedition Type <span aria-hidden="true" class="facet__toggle-icon icon chevron-down"></span></span>'+ 
    '              <div class="eg-dropdown-options" style="display: block;">'+ 
    '                  <span class="eg-dropdown-item" data-expedition="fly-cruise-expedition">Fly/Cruise Expeditions</span>'+ 
    '                  <span class="eg-dropdown-item" data-expedition="icebreaker-expedition">Icebreaker Expeditions</span>'+ 
    '                  <span class="eg-dropdown-item" data-expedition="small-ship-expedition">Small Ship Expeditions</span>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '      </div>'+ 
    '      <div class="eg-button">'+ 
    '          <a class="btn btn-primary eg-button-link">Search Trips</a>'+ 
    '      </div>'+ 
    '      </div>'+ 
    '   <div class="scroll-animation"><div class="mouse"></div><p>Scroll down to learn more</p></div>'+
    '  </div>';


    function _onClickOutside() {
      live("click", "body", function (e) {
        var dropdownEl = document.querySelector(
          ".eg-dropdown"
        );
        var dropdownPopup = document.querySelector(
          ".eg-dropdown-options"
        );
        if (
          !dropdownPopup.contains(e.target) &&
          !dropdownEl.contains(e.target)
        ) {
          var openItem = document.querySelector(
            ".eg-dropdown.eg-active"
          );
          openItem && openItem.classList.remove("eg-active");
        }
      });
    }
  var destination, departure, expedition;

    function init() {
      var $ = window.jQuery;

      document.querySelector('article > .landing-page__field-hero-banner').insertAdjacentHTML('afterend', searchTrips);
      
     // _onClickOutside();
      
      
      // $('.hero-text-wrapper .btn-wrapper').before(bmDropdown);

      $('body').on('mousedown', '.eg-default-option', function(){
        $(this).parent().toggleClass('eg-active');  
      });
      
   $('body').on('click','.eg-destination span.eg-dropdown-item', function(){
     destination = $(this).text();
    $(this).parents('.eg-destination').find('.eg-default-option.facet__title').html(''+destination+' <span aria-hidden="true" class="facet__toggle-icon icon chevron-down"></span>');
    $('.eg-dropdown').removeClass('eg-active');  
   });

   $('body').on('click','.eg-departure span.eg-dropdown-item', function(){
     departure = $(this).text();
    $(this).parents('.eg-departure').find('.eg-default-option.facet__title').html(''+departure+' <span aria-hidden="true" class="facet__toggle-icon icon chevron-down"></span>');
    $('.eg-dropdown').removeClass('eg-active');  
     });

     //eg-expedition
     $('body').on('click','.eg-expedition span.eg-dropdown-item', function(){
       expedition = $(this).text();
      $(this).parents('.eg-expedition').find('.eg-default-option.facet__title').html(''+expedition+' <span aria-hidden="true" class="facet__toggle-icon icon chevron-down"></span>');
      $('.eg-dropdown').removeClass('eg-active');  
       });

       $('body').on('click','.eg-button',function(){
         if(destination && departure && expedition)
       window.location.href = 'https://www.quarkexpeditions.com/departures?destination='+destination+'&departure='+departure+'&expedition='+expedition;
       });
    }
    onLoadJqueryLibrary(function(){
      $ = window.jQuery;
      waitForElement("article > .landing-page__field-hero-banner", init, 50, 15000);
    })
    
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();