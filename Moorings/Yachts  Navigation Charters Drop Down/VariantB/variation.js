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


    var egSubMenu =''+ 
    '  <div class="mega-menu__menu" id="tab-2">'+ 
    '      <ul class="menu nav">'+ 
    '          <li class="first leaf"><a href="/yacht-charter/whats-included" class="analyticsMegaMenu-processed">What\'s'+ 
    '                  Included</a></li>'+ 
    '          <li class="leaf"><a href="/yacht-charter/extras" class="analyticsMegaMenu-processed">Extras</a></li>'+ 
    '          <li class="leaf"><a href="/yacht-vacations/skippered-charter" class="analyticsMegaMenu-processed">Skippered'+ 
    '                  Vacations</a></li>'+ 
    '          <li class="last leaf"><a href="/yacht-charter/learn-to-sail/rya-motor-cruising" class="analyticsMegaMenu-processed">RYA Power School</a></li>'+ 
    '      </ul>'+ 
    '      <div class="mega-menu-merch-text">'+ 
    '          <p>A long-time favorite of boaters everywhere, the Exumas, Bahamas are best enjoyed from the deck of a power catamaran. Discover the beauty of this unique charter destination today.</p>'+ 
    '      </div>'+ 
    '      <div>'+ 
    '          <div style="background-image:url(https://www.moorings.com/sites/default/files/image_1.jpg?t=1HIK9t)" class="merch-cta">'+ 
    '              <div class="cta-btn"><a href="/destinations/americas/bahamas/exumas-yacht-charters#!productType=2" class="analyticsMegaMenu-processed">Discover the Bahamas</a></div>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>'+ 
    '  <div class="mega-menu__menu" id="tab-3">'+ 
    '      <ul class="menu nav">'+ 
    '          <li class="first leaf"><a href="/yacht-vacations/crewed-charter/whats-included" class="analyticsMegaMenu-processed">What\'s Included</a></li>'+ 
    '          <li class="leaf"><a href="/yacht-vacations/crewed-charter/crew-profiles" class="analyticsMegaMenu-processed">Meet the Crews</a></li>'+ 
    '          <li class="last leaf"><a href="/yacht-vacations/crewed-charter/by-the-cabin" class="analyticsMegaMenu-processed">Cabin Charters</a></li>'+ 
    '      </ul>'+ 
    '      <div class="mega-menu-merch-text">'+ 
    '          <p>Belize is home to the second largest barrier reef in the world, making it ideal for an all-inclusive getaway complete with fishing, snorkeling, and countless secluded cays to be explored.</p>'+ 
    '      </div>'+ 
    '      <div>'+ 
    '          <div style="background-image:url(https://www.moorings.com/sites/default/files/belize_women_kayaking_880x440_web.jpg?t=1LsmkY)" class="merch-cta">'+ 
    '              <div class="cta-btn"><a href="/destinations/americas/belize-yacht-charters#!productType=3" class="analyticsMegaMenu-processed">Learn more about Belize</a></div>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>';

    var arrow =''+ 
    '  <span class="eg-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">'+ 
    '  <path d="M0.195262 0.528514C0.435585 0.288191 0.813739 0.269705 1.07527 0.473055L1.13807 0.528514L5.13807 4.52851C5.37839 4.76884 5.39688 5.14699 5.19353 5.40852L5.13807 5.47132L1.13807 9.47132C0.877722 9.73167 0.455612 9.73167 0.195262 9.47132C-0.0450605 9.231 -0.0635469 8.85285 0.139803 8.59132L0.195262 8.52851L3.72333 4.99992L0.195262 1.47132C-0.0450605 1.231 -0.0635469 0.852847 0.139803 0.591319L0.195262 0.528514Z" fill="black"/>'+ 
    '  </svg></span>';

    var egMobileMenu =''+ 
    ' <div class="eg-mobile-nav-overlay"></div>'+
    '  <div class="eg-mobile-menu">'+ 
    '      <div class="eg-mobile-menu-inr">'+ 
    '          <p class="eg-back-button">'+ 
    '  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">'+ 
    '  <path d="M19 12H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'+ 
    '  <path d="M12 19L5 12L12 5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'+ 
    '  </svg> Back to home</p>'+ 
    '                  <div class="eg-menu">'+ 
    '                      <div class="eg-menu-inr">'+ 
    '                          <ul class="eg-menu-option">'+ 
    '                              <li class="eg-main-option eg-has-dropdown">'+ 
    '                                  <a class="eg-active" href="/destinations" title="Find Your Vacation">Destinations '+ arrow+'</a>'+ 
    '                                  <ul class="eg-sub-menu eg-has-dropdown">'+ 
    '                                      <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                                          <a href="/destinations/caribbean" title="">Caribbean '+ arrow+'</a>'+ 
    '                                          <ul class="eg-sub-menu-link">'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/destinations/caribbean/antigua-yacht-charters" title="Antigua">Antigua</a></li>'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/destinations/caribbean/british-virgin-islands-yacht-charters" title="British Virgin Islands">British Virgin Islands</a></li>'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/destinations/caribbean/grenada-yacht-charters" title="Grenada">Grenada</a></li>'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/destinations/caribbean/martinique-yacht-charters" title="Martinique">Martinique</a></li>'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/destinations/caribbean/st-lucia-yacht-charters" title="St. Lucia">St. Lucia</a></li>'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/destinations/caribbean/st-martin-yacht-charters" title="St. Martin">St. Martin</a></li>'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/destinations/caribbean/st-thomas-yacht-charters" title="St. Thomas (USVI)">St. Thomas (USVI)</a></li>'+ 
    '                                          </ul>'+ 
    '                                      </li>'+ 
    '                                      <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                                          <a href="/destinations/americas" title="Americas">Americas '+ arrow+'</a>'+ 
    '                                          <ul class="eg-sub-menu-link">'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/destinations/americas/bahamas" title="Bahamas">Bahamas</a></li>'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/destinations/americas/belize-yacht-charters" title="Belize">Belize</a></li>'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/destinations/americas/florida" title="Florida">Florida</a></li>'+ 
    '                                          </ul>'+ 
    '                                      </li>'+ 
    '                                      <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                                          <a href="/destinations/mediterranean" title="Mediterranean">Mediterranean '+ arrow+'</a>'+ 
    '                                          <ul class="eg-sub-menu-link">'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/destinations/mediterranean/croatia-yacht-charters" title="Croatia">Croatia</a></li>'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/destinations/mediterranean/greece" title="Greece">Greece</a></li>'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/destinations/mediterranean/italy" title="Italy">Italy</a></li>'+ 
    '                                          </ul>'+ 
    '                                      </li>'+ 
    '                                      <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                                          <a href="/destinations/exotics" title="Exotics">Exotics '+ arrow+'</a>'+ 
    '                                          <ul class="eg-sub-menu-link">'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/destinations/exotics/seychelles-yacht-charters" title="Seychelles">Seychelles</a></li>'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/destinations/exotics/tahiti-yacht-charters" title="Tahiti">Tahiti</a></li>'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/destinations/exotics/thailand-yacht-charters" title="Thailand">Thailand</a></li>'+ 
    '                                          </ul>'+ 
    '                                      </li>'+ 
    '                                  </ul>'+ 
    '                              </li>'+ 
    '                              <li class="eg-main-option eg-has-dropdown">'+ 
    '                                  <a href="/yacht-vacations/sailing-charter" title="Premium Sailing Vacations">Charters '+ arrow+'</a>'+ 
    '                                  <ul class="eg-sub-menu eg-has-dropdown">'+ 
    '                                      <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                                          <a href="/yacht-vacations/sailing-charter" title="Sailing Charters ">Sailing Charters '+ arrow+'</a>'+ 
    '                                          <ul class="eg-sub-menu-link">'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/yacht-charter/whats-included" title="What\'s Included">What\'s Included</a></li>'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/yacht-charter/extras" title="Extras">Extras</a></li>'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/yacht-vacations/skippered-charter" title="Skippered Vacations">Skippered Vacations</a></li>'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/yachts/sail-fleet/catamarans" title="View All Catamarans">View All Catamarans</a></li>'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/yachts/sail-fleet/monohulls" title="View All Monohulls">View All Monohulls</a></li>'+ 
    '                                          </ul>'+ 
    '                                      </li>'+ 
    '                                      <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                                          <a href="/yacht-vacations/power-charter" title="Power Yacht Vacations">Power Charters '+ arrow+'</a>'+ 
    '                                          <ul class="eg-sub-menu-link">'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/yacht-charter/whats-included" title="What\'s Included">What\'s Included</a></li>'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/yacht-charter/extras" title="Extras">Extras</a></li>'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/yacht-vacations/skippered-charter" title="Skippered Vacations">Skippered Vacations</a></li>'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/yacht-charter/learn-to-sail/rya-motor-cruising" title="RYA Power School">RYA Power School</a></li>'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/yachts/power-fleet" title="View All Power Charters">View All Power Charters</a></li>'+ 
    '                                          </ul>'+ 
    '                                      </li>'+ 
    '                                      <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                                          <a href="/yacht-vacations/crewed-charter" title="Crewed Charters">Crewed Charters '+ arrow+'</a>'+ 
    '                                          <ul class="eg-sub-menu-link">'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/yacht-vacations/crewed-charter/whats-included" title="What\'s Included">What\'s Included</a></li>'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/yacht-vacations/crewed-charter/crew-profiles" title="Meet the Crews">Meet the Crews</a></li>'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/yacht-vacations/crewed-charter/by-the-cabin" title="Cabin Charters">Cabin Charters</a></li>'+ 
    '                                              <li class="eg-sub-menu-link-option"><a href="/yachts/crewed-fleet" title="View All Crewed Charters">View All Crewed Charters</a></li>'+ 
    '                                          </ul>'+ 
    '                                      </li>'+ 
    '                                  </ul>'+ 
    '                              </li>'+ 
    '                              <li class="eg-main-option eg-has-dropdown">'+ 
    '                                  <a href="/yachts" title="Explore Fleet">Yachts '+ arrow+'</a>'+ 
    '                                  <ul class="eg-sub-menu eg-has-dropdown">'+ 
    '                                      <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                                          <a href="/yachts/sail-fleet" title="Sail Yachts">Sail Yachts '+ arrow+'</a>'+ 
    '                                          <ul class="eg-sub-menu-link">'+ 
    '                                              <li class="eg-sub-menu-link-option">'+ 
    '                                                  <a href="/yachts/sail-fleet/catamarans" title="Sail Catamarans">Sail Catamarans</a>'+ 
    '                                              </li>'+ 
    '                                              <li class="eg-sub-menu-link-option">'+ 
    '                                                  <a href="/yachts/sail-fleet/monohulls" title="Sail Monohulls">Sail Monohulls</a>'+ 
    '                                              </li>'+ 
    '                                          </ul>'+ 
    '                                      </li>'+ 
    '                                      <li class="eg-sub-menu-option eg-no-dropdown">'+ 
    '                                          <a href="/yachts/power-fleet" title="Power Yachts">Power Yachts</a>'+ 
    '                                      </li>'+ 
    '                                      <li class="eg-sub-menu-option eg-no-dropdown">'+ 
    '                                          <a href="/yachts/crewed-fleet" title="Crewed Yachts">Crewed Yachts</a>'+ 
    '                                      </li>'+ 
    '                                      <li class="eg-sub-menu-option eg-no-dropdown">'+ 
    '                                          <a href="/yacht-ownership" title="Yacht Sales & Ownership">Yacht Ownership </a>'+ 
    '                                      </li>'+ 
    '                                  </ul>'+ 
    '                              </li>'+ 
    '                              <li class="eg-main-option eg-no-dropdown"><a href="/blog" title="News">Blog</a></li>'+ 
    '                          </ul>'+ 
    '                      </div>'+ 
    '                  </div>'+ 
    '                  <div class="eg-booking-container">'+ 
    '                      <a href="/manage-my-booking" class="eg-booking">Manage my Bookings</a>'+ 
    '                  </div>'+ 
    '      </div>'+ 
    '  </div>';

    var menuoptions = ''+ 
    '  <div class="eg-submenu-option">'+ 
    '      <div class="eg-menu-left-section">'+ 
    '          <div class="eg-sailing-menu">'+ 
    '              <p class="eg-submenu-heading">Sailing Charters</p>'+ 
    '              <p class="eg-submenu-subheading">Premium Sailing Vacations</p>'+ 
    '              <ul>'+ 
    '                  <li><a href="/yacht-charter/whats-included">What\'s Included</a></li>'+ 
    '                  <li><a href="/yacht-charter/extras">Extras</a></li>'+ 
    '                  <li><a href="/yacht-vacations/skippered-charter">Skippered Vacations</a></li>'+ 
    '                  <li><a href="/yachts/sail-fleet/catamarans">View All Catamarans</a></li>'+ 
    '                  <li><a href="/yachts/sail-fleet/monohulls">View All Monohulls</a></li>'+ 
    '              </ul>'+ 
    '          </div>'+ 
    '          <div class="eg-power-menu">'+ 
    '              <p class="eg-submenu-heading">Power Charters</p>'+ 
    '              <p class="eg-submenu-subheading">Power Yacht Vacations</p>'+ 
    '              <ul>'+ 
    '                  <li><a href="/yacht-charter/whats-included">What\'s Included</a></li>'+ 
    '                  <li><a href="/yacht-charter/extras">Extra</a></li>'+ 
    '                  <li><a href="/yacht-vacations/skippered-charter">Skippered Vacations</a></li>'+ 
    '                  <li><a href="/yacht-charter/learn-to-sail/rya-motor-cruising">RYA Power School</a></li>'+ 
    '                  <li><a href="/yachts/power-fleet">View All Power Charters</a></li>'+ 
    '              </ul>'+ 
    '          </div>'+ 
    '          <div class="eg-crewed-menu">'+ 
    '              <p class="eg-submenu-heading">Crewed Charters</p>'+ 
    '              <p class="eg-submenu-subheading">Crewed Yacht Charters Vacations</p>'+ 
    '              <ul>'+ 
    '                  <li><a href="/yacht-vacations/crewed-charter/whats-included">What\'s Included</a></li>'+ 
    '                  <li><a href="/yacht-vacations/crewed-charter/crew-profiles">Meet the Crews</a></li>'+ 
    '                  <li><a href="/yacht-vacations/crewed-charter/by-the-cabin">Cabin Charters</a></li>'+ 
    '                  <li><a href="/yachts/crewed-fleet">View All Crewed Charters</a></li>'+ 
    '              </ul>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '      <div class="eg-menu-right-section">'+ 
    '          <div style="background-image:url(https://www.moorings.com/sites/default/files/magens-bay-st-thomas-usvi-women-paddleboard_880x440.jpg?t=1LfLjp)" class="merch-cta">'+ 
    '              <div class="cta-btn"><a href="/yacht-charter" class="analyticsMegaMenu-processed">View Charter Guide</a></div>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>';

    var telephone = '<a class="eg-telephone" href="tel:(800) 416-0247">  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">'+ 
    '  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6 16.7232V19.6032C21.6022 20.1438 21.3764 20.6603 20.978 21.0258C20.5796 21.3913 20.0456 21.5719 19.5072 21.5232C16.5531 21.2022 13.7155 20.1928 11.2224 18.576C8.90286 17.1021 6.93631 15.1355 5.46238 12.816C3.83996 10.3116 2.8303 7.46015 2.51518 4.4928C2.46668 3.95603 2.64601 3.4236 3.00936 3.02555C3.37271 2.62751 3.88663 2.4005 4.42558 2.4H7.30558C8.26929 2.39051 9.0907 3.09693 9.22558 4.0512C9.34714 4.97286 9.57258 5.87781 9.89758 6.7488C10.1613 7.45044 9.99264 8.24141 9.46558 8.7744L8.24638 9.9936C9.613 12.397 11.603 14.387 14.0064 15.7536L15.2256 14.5344C15.7586 14.0073 16.5495 13.8387 17.2512 14.1024C18.1222 14.4274 19.0271 14.6528 19.9488 14.7744C20.9141 14.9106 21.6242 15.7486 21.6 16.7232Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'+ 
    '  </svg></a>';

    

    function init() {

    // Logo change Desktop
    document.querySelector('.navbar-brand .hidden-md #logo').setAttribute('data-src', 'https://editor-assets.abtasty.com/46121/61bce1769a2741639768438.svg');
    document.querySelector('.navbar-brand .hidden-md #logo').setAttribute('src', 'https://editor-assets.abtasty.com/46121/61bce1769a2741639768438.svg');
      
    document.querySelector('.navbar-brand .hidden-lg #logo').setAttribute('data-src', 'https://editor-assets.abtasty.com/46121/61bce1769a2741639768438.svg');
    document.querySelector('.navbar-brand .hidden-lg #logo').setAttribute('src', 'https://editor-assets.abtasty.com/46121/61bce1769a2741639768438.svg');
    

      document.querySelector('.navbar-header #header-info .no-margin.hours').innerHTML = 'Mon - Sat | 9am - 5:30pm';

      document.querySelector('.navbar-nav>li > a[href="/yacht-vacations/sailing-charter"]').innerHTML = "Charters";


      document.querySelector('div[data-menu="mega-menu-link-27641"] > .mega-menu__menu > ul >.last.leaf a').insertAdjacentHTML('afterend' , '<a href="/yacht-ownership" class="analyticsMegaMenu-processed eg-yatch-ownership">Yatch Ownership</a>');

      document.querySelector('#mega-menu [data-menu="mega-menu-link-27581"] > .mega-menu__menu').setAttribute('id', 'tab-1');
      document.querySelector('#mega-menu [data-menu="mega-menu-link-27581"] > .mega-menu__menu').classList.add('eg-active');

      document.querySelector('#mega-menu [data-menu="mega-menu-link-27581"] > .mega-menu__menu').insertAdjacentHTML('beforebegin', menuoptions);
      
      document.querySelector('#mega-menu [data-menu="mega-menu-link-27581"] > .mega-menu__menu').insertAdjacentHTML('afterend', egSubMenu);


      var addArrow = document.querySelectorAll('html body .navbar .navbar-nav > li > a');

      for(i=0; i < addArrow.length; i++){
        var text = addArrow[i].innerHTML;
        addArrow[i].innerHTML = text + arrow;
      }

      // Mobile Menu Add and function
      document.querySelector('body').insertAdjacentHTML('beforeend', egMobileMenu);

      document.querySelectorAll('.eg-submenu-option > span').forEach(function(item) {
        item.addEventListener('click', function(e) {
          (e).preventDefault();
          (e).stopPropagation();
          document.querySelector('.eg-submenu-option > span.eg-active').classList.remove('eg-active');    
          this.classList.add('eg-active');
          var id = this.getAttribute('id');
          document.querySelector('[data-menu="mega-menu-link-27581"] .mega-menu__menu.eg-active').classList.remove('eg-active');
          document.querySelector('[data-menu="mega-menu-link-27581"] .mega-menu__menu#'+id).classList.add('eg-active')
        })
      })

      var egMainDropDown = document.querySelectorAll(".eg-menu-inr .eg-main-option > a .eg-arrow");

    for (var i = 0; i < egMainDropDown.length; i++) {
      egMainDropDown[i].addEventListener("click", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var self = this;
        egMainDropDown.forEach(function(item) {
            if(item != self) {
                item.parentElement.classList.remove('eg-active');
            }
        })
        this.parentElement.classList.toggle("eg-active");
      });
    }
      
      
      var egMainSubMenu = document.querySelectorAll('.eg-menu-inr .eg-sub-menu-option > a .eg-arrow');

      for(var i=0; i < egMainSubMenu.length; i++){
        egMainSubMenu[i].addEventListener('click', function(e){
            e.preventDefault()
            e.stopImmediatePropagation();
            var self = this;
            egMainSubMenu.forEach(function(item) {
                if(item != self) {
                    item.parentElement.classList.remove('eg-active');
                }
            })
            this.parentElement.classList.toggle("eg-active");
        });
      }

      document.querySelector('.eg-main-option > a[href="/blog"]').addEventListener('click', function(){
        if(document.querySelector('.eg-menu-inr .eg-main-option > a.eg-active')){
          document.querySelector('.eg-menu-inr .eg-main-option > a.eg-active').classList.remove('eg-active');
        }
        document.querySelector('.eg-main-option > a[href="/blog"]').classList.add('eg-active');
      })

      document.querySelector('.navbar-mobile.navbar-toggle').addEventListener('click', function(e){
        e.preventDefault()
        e.stopImmediatePropagation();
        document.querySelector('body').classList.add('eg-mobile-nav-show');
      });

      live('.eg-mobile-menu .eg-back-button, .eg-mobile-menu .eg-booking, .eg-mobile-nav-overlay', 'click', function () {
        document.querySelector('body').classList.remove('eg-mobile-nav-show');
      });

      // Nav change on Resize
      menuMove();

      window.addEventListener('resize', function(event) {
        menuMove();
      }, true);

      window.dispatchEvent(new Event('resize'));
    }
      
    function init2() {
      var phoneNo = document.querySelector('.phone a').getAttribute('href');

      document.querySelector('.navbar-toggle').insertAdjacentHTML('afterend', telephone);

      document.querySelector('.eg-telephone').setAttribute('href', phoneNo);

    }

    function menuMove(){
      if(window.innerWidth < 1199){
        document.querySelector('.main-menu-navbar .manage-booking').insertAdjacentElement('afterend', document.querySelector('.navbar ul.navbar-nav'));

      }else{
        document.querySelector('.navbar-header .navbar-brand').insertAdjacentElement('afterend', document.querySelector('.navbar ul.navbar-nav'));
      }
    }


    /* Initialise variation */
    waitForElement('div .mega-menu__menu > ul >.last.leaf a', init, 100, 35000);
    waitForElement('.phone a', init2, 100, 35000);

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


