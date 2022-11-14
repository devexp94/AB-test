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

    var egDesktopTopStripPhone =''+ 
    '  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">'+ 
    '  <path d="M14.6666 11.28V13.28C14.6673 13.4657 14.6293 13.6495 14.5549 13.8196C14.4805 13.9897 14.3714 14.1424 14.2346 14.2679C14.0978 14.3935 13.9363 14.489 13.7604 14.5485C13.5845 14.608 13.3982 14.6301 13.2132 14.6134C11.1618 14.3905 9.19125 13.6895 7.45991 12.5667C5.84913 11.5431 4.48347 10.1775 3.45991 8.5667C2.33323 6.8275 1.63208 4.84736 1.41325 2.7867C1.39659 2.60234 1.4185 2.41654 1.47758 2.24111C1.53667 2.06569 1.63163 1.90449 1.75643 1.76778C1.88122 1.63106 2.03312 1.52184 2.20244 1.44704C2.37177 1.37225 2.55481 1.33354 2.73991 1.33336H4.73991C5.06345 1.33018 5.37711 1.44475 5.62242 1.65572C5.86774 1.86669 6.02797 2.15966 6.07325 2.48003C6.15766 3.12007 6.31421 3.74851 6.53992 4.35336C6.62961 4.59198 6.64902 4.85131 6.59585 5.10062C6.54268 5.34993 6.41916 5.57877 6.23991 5.76003L5.39325 6.6067C6.34229 8.27573 7.72422 9.65766 9.39325 10.6067L10.2399 9.76003C10.4212 9.58079 10.65 9.45726 10.8993 9.40409C11.1486 9.35092 11.408 9.37033 11.6466 9.46003C12.2514 9.68573 12.8799 9.84228 13.5199 9.9267C13.8438 9.97238 14.1395 10.1355 14.3509 10.385C14.5624 10.6346 14.6747 10.9531 14.6666 11.28Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'+ 
    '  </svg>';

    var egFlotilla =''+ 
    '  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">'+ 
    '  <path d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8C14.6666 4.3181 11.6818 1.33334 7.99992 1.33334C4.31802 1.33334 1.33325 4.3181 1.33325 8C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z" stroke="#E28C33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'+ 
    '  <path d="M7.99992 10.6667C9.47268 10.6667 10.6666 9.47276 10.6666 8C10.6666 6.52724 9.47268 5.33334 7.99992 5.33334C6.52716 5.33334 5.33325 6.52724 5.33325 8C5.33325 9.47276 6.52716 10.6667 7.99992 10.6667Z" stroke="#E28C33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'+ 
    '  <path d="M3.28662 3.28667L6.11329 6.11333" stroke="#E28C33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'+ 
    '  <path d="M9.88672 9.88667L12.7134 12.7133" stroke="#E28C33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'+ 
    '  <path d="M9.88672 6.11333L12.7134 3.28667" stroke="#E28C33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'+ 
    '  <path d="M9.88672 6.11334L12.2401 3.76" stroke="#E28C33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'+ 
    '  <path d="M3.28662 12.7133L6.11329 9.88667" stroke="#E28C33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'+ 
    '  </svg>';

    var egSailing =''+ 
    '  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">'+ 
    '  <path d="M14.6666 6.66666V10.6667V6.66666ZM1.33325 6.66666L7.99992 3.33333L14.6666 6.66666L7.99992 10L1.33325 6.66666Z" stroke="#A42156" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'+ 
    '  <path d="M4 8V11.3333C6 13.3333 10 13.3333 12 11.3333V8" stroke="#A42156" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'+ 
    '  </svg>';

    var arrow =''+ 
    '  <span class="eg-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">'+ 
    '  <path d="M0.195262 0.528514C0.435585 0.288191 0.813739 0.269705 1.07527 0.473055L1.13807 0.528514L5.13807 4.52851C5.37839 4.76884 5.39688 5.14699 5.19353 5.40852L5.13807 5.47132L1.13807 9.47132C0.877722 9.73167 0.455612 9.73167 0.195262 9.47132C-0.0450605 9.231 -0.0635469 8.85285 0.139803 8.59132L0.195262 8.52851L3.72333 4.99992L0.195262 1.47132C-0.0450605 1.231 -0.0635469 0.852847 0.139803 0.591319L0.195262 0.528514Z" fill="black"/>'+ 
    '  </svg></span>';

    var egMobileMenu =''+ 
    ' <div class="eg-mobile-nav-overlay"></div>'+
    '  <div class="eg-mobile-menu">'+ 
    '      <div class="eg-mobile-menu-inr">'+ 
    '          <p class="eg-back-button">'+ 
    '              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">'+ 
    '                  <path d="M19 12H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />'+ 
    '                  <path d="M12 19L5 12L12 5" stroke="black" stroke-width="2" stroke-linecap="round"'+ 
    '                      stroke-linejoin="round" />'+ 
    '              </svg> Back to home'+ 
    '          </p>'+ 
    '          <div class="eg-menu">'+ 
    '              <div class="eg-menu-inr">'+ 
    '                  <ul class="eg-menu-option">'+ 
    '                      <li class="eg-main-option eg-has-dropdown">'+ 
    '                          <a class="eg-active" href="/yacht-charter" title="Find Your Vacation">Destinations  '+ arrow+'</a>'+ 
    '                          <ul class="eg-sub-menu eg-has-dropdown">'+ 
    '                              <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                                  <a href="/yacht-charter/caribbean" title="Caribbean">Caribbean '+ arrow+'</a>'+ 
    '                                  <ul class="eg-sub-menu-link">'+ 
    '                                      <li class="eg-sub-menu-link-option"><a href="/yacht-charter/caribbean/antigua" title="Antigua">Antigua</a></li>'+ 
    '                                      <li class="eg-sub-menu-link-option"><a href="/yacht-charter/caribbean/bahamas" title="Bahamas">Bahamas</a></li>'+ 
    '                                      <li class="eg-sub-menu-link-option"><a href="/yacht-charter/caribbean/belize" title="Belize">Belize</a></li>'+ 
    '                                      <li class="eg-sub-menu-link-option"><a href="/yacht-charter/caribbean/bvi" title="BVI">BVI <span class="flotilla orange-bk"> '+ egFlotilla +'</span></a></li>'+ 
    '                                      <li class="eg-sub-menu-link-option"><a href="/yacht-charter/caribbean/grenada" title="Grenada">Grenada</a></li>'+ 
    '                                      <li class="eg-sub-menu-link-option"><a href="/yacht-charter/caribbean/st-lucia" title="St. Lucia">St. Lucia</a></li>'+ 
    '                                      <li class="eg-sub-menu-link-option"><a href="/yacht-charter/caribbean/st-martin" title="St. Martin">St. Martin</a></li>'+ 
    '                                      <li class="eg-sub-menu-link-option"><a href="/yacht-charter/caribbean/martinique" title="Martinique">Martinique</a></li>'+ 
    '                                  </ul>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                                  <a href="/yacht-charter/mediterranean" title="Mediterranean">Mediterranean '+ arrow+'</a>'+ 
    '                                  <ul class="eg-sub-menu-link">'+ 
    '                                      <li class="eg-sub-menu-link-option"><a href="/yacht-charter/mediterranean/croatia" title="Croatia">Croatia <span class="flotilla orange-bk"> '+ egFlotilla +'</span> <span'+ 
    '                                                  class="sailing-schools magenta-bk"> '+ egSailing +'</span></a></li>'+ 
    '                                      <li class="eg-sub-menu-link-option"><a href="/yacht-charter/mediterranean/greece" title="Greece">Greece <span class="flotilla orange-bk"> '+ egFlotilla +'</span> <span'+ 
    '                                                  class="sailing-schools magenta-bk"> '+ egSailing +'</span></a></li>'+ 
    '                                      <li class="eg-sub-menu-link-option"><a href="/yacht-charter/mediterranean/italy" title="Italy">Italy <span class="flotilla orange-bk"> '+ egFlotilla +'</span></a></li>'+ 
    '                                  </ul>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                                  <a href="/yacht-charter/north-america" title="Indian Ocean">North America '+ arrow+'</a>'+ 
    '                                  <ul class="eg-sub-menu-link">'+ 
    '                                      <li class="eg-sub-menu-link-option"><a href="/yacht-charter/north-america/vancouver" title="Vancouver">Vancouver</a></li>'+ 
    '                                  </ul>'+ 
    '                              </li>'+
    '                              <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                                  <a href="/yacht-charter/indian-ocean" title="Indian Ocean">Indian Ocean '+ arrow+'</a>'+ 
    '                                  <ul class="eg-sub-menu-link">'+ 
    '                                      <li class="eg-sub-menu-link-option"><a href="/yacht-charter/indian-ocean/seychelles" title="Seychelles">Seychelles</a></li>'+ 
    '                                  </ul>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                                  <a href="/yacht-charter/uk" title="United Kingdom">United Kingdom '+ arrow+'</a>'+ 
    '                                  <ul class="eg-sub-menu-link">'+ 
    '                                      <li class="eg-sub-menu-link-option"><a href="/yacht-charter/uk/portsmouth" title="Portsmouth">Portsmouth <span'+ 
    '                                                  class="sailing-schools magenta-bk"> '+ egSailing +'</span></a></li>'+ 
    '                                  </ul>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                                  <a href="/yacht-charter/south-pacific" title="South Pacific">South Pacific '+ arrow+'</a>'+ 
    '                                  <ul class="eg-sub-menu-link">'+ 
    '                                      <li class="eg-sub-menu-link-option"><a href="/yacht-charter/south-pacific/tonga" title="Tonga">Tonga</a></li>'+ 
    '                                      <li class="eg-sub-menu-link-option"><a href="/yacht-charter/south-pacific/tahiti" title="Tahiti">Tahiti</a>'+ 
    '                                      </li>'+ 
    '                                      <li class="eg-sub-menu-link-option"><a href="/yacht-charter/south-pacific/australia" title="Whitsundays">Whitsundays <span class="flotilla orange-bk"> '+ egFlotilla +'</span>'+ 
    '                                              <span class="sailing-schools magenta-bk"> '+ egSailing +'</span> </a></li>'+ 
    '                                  </ul>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                                  <a href="/yacht-charter/thailand" title="Southeast Asia">Southeast Asia '+ arrow+'</a>'+ 
    '                                  <ul class="eg-sub-menu-link">'+ 
    '                                      <li class="eg-sub-menu-link-option"><a href="/yacht-charter/thailand/phuket" title="Thailand">Thailand</a></li>'+ 
    '                                  </ul>'+ 
    '                              </li>'+ 
    '                          </ul>'+ 
    '                      </li>'+ 
    '                      <li class="eg-main-option eg-has-dropdown">'+ 
    '                          <a href="/sailing-vacations" title="Sailing vacations">Sailing vacations '+ arrow+'</a>'+ 
    '                          <ul class="eg-sub-menu eg-has-dropdown">'+ 
    '                              <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                                  <a href="/sailing-vacations#charter-types" title="Our charter types">Our charter types '+ arrow+'</a>'+ 
    '                                  <ul class="eg-sub-menu-link">'+ 
    '                                      <li class="eg-sub-menu-link-option"><a href="/sailing-vacations/bareboat-charter" title="Bareboat charters">Bareboat charters</a></li>'+ 
    '                                      <li class="eg-sub-menu-link-option"><a href="/sailing-vacations/skippered-yacht-charter" title="Skippered charters">Skippered charters</a></li>'+ 
    '                                      <li class="eg-sub-menu-link-option"><a href="/flotilla-sailing" title="Flotillas">Flotillas</a></li>'+ 
    '                                      <li class="eg-sub-menu-link-option"><a href="/flotilla-sailing/cabin-charter" title="Cabin charters">Cabin charters</a></li>'+ 
    '                                  </ul>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                                  <a href="/sailing-vacations#inspiration" title="Our vacation types">Our vacation types '+ arrow+'</a>'+ 
    '                                  <ul class="eg-sub-menu-link">'+ 
    '                                      <li class="eg-sub-menu-link-option"><a href="/sailing-vacations/family-vacations" title="Family">Family</a></li>'+ 
    '                                      <li class="eg-sub-menu-link-option"><a href="/sailing-vacations/romantic-getaways" title="Romantic">Romantic</a></li>'+ 
    '                                      <li class="eg-sub-menu-link-option"><a href="/sailing-vacations/winter-sun-vacations" title="Winter sun">Winter'+ 
    '                                              sun</a></li>'+ 
    '                                      <li class="eg-sub-menu-link-option"><a href="/sailing-vacations/group-charters" title="Groups">Groups</a></li>'+ 
    '                                      <li class="eg-sub-menu-link-option"><a href="/sailing-vacations/wildlife-and-adventure-vacations" title="Adventure">Adventure</a></li>'+ 
    '                                  </ul>'+ 
    '                              </li>'+ 
    '                          </ul>'+ 
    '                      </li>'+ 
    '                      <li class="eg-main-option eg-has-dropdown">'+ 
    '                          <a href="/yachts" title="Yachts">Yachts '+ arrow+'</a>'+ 
    '                          <ul class="eg-sub-menu eg-has-dropdown">'+ 
    '                              <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                                  <a href="/our-yachts/catamarans" title="Featured Catamarans">Featured Catamarans </a>'+ 
    '                                  <ul class="eg-sub-menu-link">'+ 
    '                                      <li class="eg-sub-menu-link-option">'+ 
    '                                          <a href="/yachts/catamarans/sunsail-424" title="Sunsail 424 - 4 Cabin">Sunsail 424 - 4 Cabin</a>'+ 
    '                                      </li>'+ 
    '                                      <li class="eg-sub-menu-link-option">'+ 
    '                                          <a href="/yachts/catamarans/sunsail-444" title="Sunsail 444 - 4 cabin">Sunsail 444 - 4 cabin</a>'+ 
    '                                      </li>'+ 
    '                                      <li class="eg-sub-menu-link-option">'+ 
    '                                          <a href="/yachts/catamarans/sunsail-454" title="Sunsail 454 - 4 cabin">Sunsail 454 - 4 cabin</a>'+ 
    '                                      </li>'+ 
    '                                      <li class="eg-sub-menu-link-option">'+ 
    '                                          <a href="/yachts/catamarans/sunsail-484" title="Sunsail 484 - 4 cabin">Sunsail 484 - 4 cabin</a>'+ 
    '                                      </li>'+ 
    '                                      <li class="eg-sub-menu-link-option">'+ 
    '                                          <a href="/yachts/catamarans" title="All Catamarans">All Catamarans</a>'+ 
    '                                      </li>'+ 
    '                                  </ul>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                                  <a href="/yachts/monohulls" title="Featured Catamarans">Featured Monohulls '+ arrow+'</a>'+ 
    '                                  <ul class="eg-sub-menu-link">'+ 
    '                                      <li class="eg-sub-menu-link-option">'+ 
    '                                          <a href="/yachts/monohulls/sunsail-36i" title="Sunsail 36i - 3 cabin">Sunsail 36i - 3 cabin</a>'+ 
    '                                      </li>'+ 
    '                                      <li class="eg-sub-menu-link-option">'+ 
    '                                          <a href="/yachts/monohulls/sunsail-38-2-cabin" title="Sunsail 38 - 2 cabin">Sunsail 38 - 2 cabin</a>'+ 
    '                                      </li>'+ 
    '                                      <li class="eg-sub-menu-link-option">'+ 
    '                                          <a href="/yachts/monohulls/sunsail-38-3-cabin" title="Sunsail 38 - 3 cabin">Sunsail 38 - 3 cabin</a>'+ 
    '                                      </li>'+ 
    '                                      <li class="eg-sub-menu-link-option">'+ 
    '                                          <a href="/yachts/monohulls/sunsail-41" title="Sunsail 41 - 3 cabin">Sunsail 41 - 3 cabin</a>'+ 
    '                                      </li>'+ 
    '                                      <li class="eg-sub-menu-link-option">'+ 
    '                                          <a href="/yachts/monohulls" title="All Monohulls">All Monohulls</a>'+ 
    '                                      </li>'+ 
    '                                  </ul>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-option eg-no-dropdown"><a href="/yachts-for-sale" title="Yacht ownership">Yacht ownership</a></li>'+ 
    '                          </ul>'+ 
    '                      </li>'+ 
    '                      <li class="eg-main-option eg-has-dropdown">'+ 
    '                          <a href="/sailing-schools" title="Sailing courses">Sailing courses '+ arrow+'</a>'+ 
    '                          <ul class="eg-sub-menu eg-has-dropdown">'+ 
    '                              <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                                  <a href="/sailing-vacations/sailing-levels-explained" title="Sailing level">Sailing level </a>'+ 
    '                                  <ul class="eg-sub-menu-link">'+ 
    '                                      <li class="eg-sub-menu-link-option">'+ 
    '                                          <a href="/sailing-schools/no-experience-courses" title="No experience">No experience</a>'+ 
    '                                      </li>'+ 
    '                                      <li class="eg-sub-menu-link-option">'+ 
    '                                          <a href="/sailing-schools/beginner-courses" title="Beginner">Beginner</a>'+ 
    '                                      </li>'+ 
    '                                      <li class="eg-sub-menu-link-option">'+ 
    '                                          <a href="/sailing-schools/intermediate-courses" title="Intermediate">Intermediate</a>'+ 
    '                                      </li>'+ 
    '                                      <li class="eg-sub-menu-link-option">'+ 
    '                                          <a href="/sailing-schools/advanced-courses" title="Advanced">Advanced</a>'+ 
    '                                      </li>'+ 
    '                                  </ul>'+ 
    '                              </li>'+ 
    '                              <li class="eg-sub-menu-option eg-has-dropdown">'+ 
    '                                  <a href="/sailing-schools#locations" title="Featured Catamarans">Sailing schools '+ arrow+'</a>'+ 
    '                                  <ul class="eg-sub-menu-link">'+ 
    '                                      <li class="eg-sub-menu-link-option">'+ 
    '                                          <a href="https://www.sunsail.com/sailing-schools/bvi-tortola" title="BVI sailing school">BVI sailing school</a>'+ 
    '                                      </li>'+ 
    '                                      <li class="eg-sub-menu-link-option">'+ 
    '                                          <a href="/sailing-schools/uk-portsmouth" title="Portsmouth sailing school">Portsmouth sailing school</a>'+ 
    '                                      </li>'+ 
    '                                      <li class="eg-sub-menu-link-option">'+ 
    '                                          <a href="/sailing-schools/croatia-agana" title="Agana sailing school">Agana sailing school</a>'+ 
    '                                      </li>'+ 
    '                                      <li class="eg-sub-menu-link-option">'+ 
    '                                          <a href="/sailing-schools/greece-lefkas" title="Lefkas sailing school">Lefkas sailing school</a>'+ 
    '                                      </li>'+ 
    '                                      <li class="eg-sub-menu-link-option">'+ 
    '                                          <a href="/sailing-schools/australia-whitsundays" title="Whitsundays sailing school">Whitsundays sailing school</a>'+ 
    '                                      </li>'+ 
    '                                  </ul>'+ 
    '                              </li>'+ 
    '                          </ul>'+ 
    '                      </li>'+ 
    '                      <li class="eg-main-option eg-no-dropdown"><a href="/offers" title="Offers">Offers</a></li>'+ 
    '                      <li class="eg-main-option eg-no-dropdown"><a href="https://www.sunsail.com/blog" title="Blogs">Blogs</a></li>'+ 
    '                  </ul>'+ 
    '              </div>'+ 
    '          </div>'+ 
    '          <div class="eg-booking-container">'+ 
    '              <a href="/manage-my-booking" class="eg-booking" title="Manage my Booking">Manage my Booking</a>'+ 
    '          </div>'+ 
    '      </div>'+ 
    '  </div>';

    var telephone = '<a class="eg-telephone" href="tel:877 772 3502">  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">'+ 
    '  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6 16.7232V19.6032C21.6022 20.1438 21.3764 20.6603 20.978 21.0258C20.5796 21.3913 20.0456 21.5719 19.5072 21.5232C16.5531 21.2022 13.7155 20.1928 11.2224 18.576C8.90286 17.1021 6.93631 15.1355 5.46238 12.816C3.83996 10.3116 2.8303 7.46015 2.51518 4.4928C2.46668 3.95603 2.64601 3.4236 3.00936 3.02555C3.37271 2.62751 3.88663 2.4005 4.42558 2.4H7.30558C8.26929 2.39051 9.0907 3.09693 9.22558 4.0512C9.34714 4.97286 9.57258 5.87781 9.89758 6.7488C10.1613 7.45044 9.99264 8.24141 9.46558 8.7744L8.24638 9.9936C9.613 12.397 11.603 14.387 14.0064 15.7536L15.2256 14.5344C15.7586 14.0073 16.5495 13.8387 17.2512 14.1024C18.1222 14.4274 19.0271 14.6528 19.9488 14.7744C20.9141 14.9106 21.6242 15.7486 21.6 16.7232Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'+ 
    '  </svg></a>';

    
    var egDestinationMenuLinks2 =''+ 
    '      <h4><a href="/yacht-charter/mediterranean">Mediterranean</a></h4>'+ 
    '      <ul>'+ 
    '          <li><a href="/yacht-charter/mediterranean/croatia">Croatia</a><span class="flotilla orange-bk"></span></li>'+ 
    '          <li><a href="/yacht-charter/mediterranean/greece">Greece</a><span class="flotilla orange-bk"> </span></li>'+ 
    '          <li><a href="/yacht-charter/mediterranean/italy">Italy</a><span class="flotilla orange-bk"></span></li>'+ 
    '      </ul>'+ 
    '      <h4><a href="/yacht-charter/north-america">North America</a></h4>'+ 
    '      <ul>'+ 
    '          <li><a href="/yacht-charter/north-america/Vancouver">Vancouver</a></li>'+ 
    '      </ul>'+ 
    '      <h4><a href="/yacht-charter/indian-ocean">Indian Ocean</a></h4>'+ 
    '      <ul>'+ 
    '          <li><a href="/yacht-charter/indian-ocean/seychelles">Seychelles</a></li>'+ 
    '      </ul>';


    var egDestinationMenuLinks3 =''+
    '  <h4><a href="/yacht-charter/uk">United Kingdom</a></h4>'+ 
    '  <ul>'+ 
    '      <li><a href="/yacht-charter/uk/portsmouth">Portsmouth</a><span class="sailing-schools magenta-bk"></span></li>'+ 
    '  </ul>'+ 
    '  <h4><a href="/yacht-charter/south-pacific">South Pacific</a></h4>'+ 
    '  <ul>'+ 
    '      <li><a href="/yacht-charter/south-pacific/tonga">Tonga</a></li>'+ 
    '      <li><a href="/yacht-charter/south-pacific/tahiti">Tahiti</a></li>'+ 
    '      <li><a href="/yacht-charter/south-pacific/australia">Whitsundays</a><span class="flotilla orange-bk"></span><span class="sailing-schools magenta-bk"></span></li>'+ 
    '  </ul>'+ 
    '  <h4><a href="/yacht-charter/thailand">Southeast Asia</a></h4>'+ 
    '  <ul>'+ 
    '      <li><a href="/yacht-charter/thailand/phuket">Thailand</a></li>'+ 
    '  </ul>';


    function init() {

      document.querySelector('.header-info > p strong').innerHTML = "Speak to a vacation planner";
      document.querySelector('.header-info .hours').innerHTML = "Mon - Fri | 8am - 4pm ET | Sat: 10am - 4pm ET"

      document.querySelector('.navbar .navbar-header').insertAdjacentElement('afterend', document.querySelector('#main-menu.nav'));

      document.querySelector('header #main-menu .last.leaf.menu-link-blog > a').innerHTML = "Blogs";

      if(window.location.pathname == '/blog'){
        document.querySelector('body').classList.add('eg-blog-page');
      }
      var addArrow = document.querySelectorAll('html body .navbar .navbar-nav > li > a');

      for(i=0; i < addArrow.length; i++){
        var text = addArrow[i].innerHTML;
        addArrow[i].innerHTML = text + arrow;
      }


      document.querySelector('#mega-menu-39821 .sub-menu > div:nth-child(2)').innerHTML = egDestinationMenuLinks2;
      document.querySelector('#mega-menu-39821 .sub-menu > div:nth-child(3)').innerHTML = egDestinationMenuLinks3;

      document.querySelector('.navbar #header-info .no-margin.phone i').insertAdjacentHTML('afterend', egDesktopTopStripPhone);
      //Flotilla
      var egFlotillaOrange = document.querySelectorAll('nav.mega-menu .sub-menu .flotilla.orange-bk');

      for(i=0; i < egFlotillaOrange.length; i++){
        egFlotillaOrange[i].innerHTML = egFlotilla;
      }

      //Flotilla
      var egSailingMagenta = document.querySelectorAll('nav.mega-menu .sub-menu .sailing-schools.magenta-bk');

      for(i=0; i < egSailingMagenta.length; i++){
        egSailingMagenta[i].innerHTML = egSailing;
      }

      document.querySelector('.mega-menu-text .flotilla.orange-bk').innerHTML = egFlotilla;
      document.querySelector('.mega-menu-text .sailing-schools.magenta-bk').innerHTML = egSailing;

      document.querySelector('#mega-menu-58151 .sub-menu').insertAdjacentHTML('beforeend', '<div><h4><a href="/yachts-for-sale">Yacht ownership '+ arrow +'</a></h4></div>');


      document.querySelector('body').insertAdjacentHTML('beforeend','<div class="desktop-menu-overlay"></div>');
      
      live('.navbar .navbar-nav > li', 'click', function () {
        if(document.querySelector('#header > .mega-menu.open')){
          document.querySelector('body').classList.add('eg-desktop-overlay');
        }else{
          document.querySelector('body').classList.remove('eg-desktop-overlay');
        }
      });



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
      
    document.querySelector('.navbar-header button[data-target="#navbar-collapse"]').addEventListener('click', function(){
      document.querySelector('body').classList.add('eg-mobile-nav-show');
    })
      
    document.querySelector('.eg-mobile-menu .eg-back-button').addEventListener('click', function(){
      document.querySelector('body').classList.remove('eg-mobile-nav-show');
    })
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

      document.querySelector('.eg-main-option > a[href="https://www.sunsail.com/blog"]').addEventListener('click', function(){
        if(document.querySelector('.eg-menu-inr .eg-main-option > a.eg-active')){
          document.querySelector('.eg-menu-inr .eg-main-option > a.eg-active').classList.remove('eg-active');
        }
        document.querySelector('.eg-main-option > a[href="https://www.sunsail.com/blog"]').classList.add('eg-active');
      })




      live('.eg-mobile-menu .eg-back-button, .eg-mobile-menu .eg-booking, .eg-mobile-nav-overlay', 'click', function () {
        document.querySelector('body').classList.remove('eg-mobile-nav-show');
      });

      window.dispatchEvent(new Event('resize'));
    }
      
    function init2() {
      var phoneNo = document.querySelector('.phone a').getAttribute('href');

      document.querySelector('.navbar-header .navbar-brand').insertAdjacentHTML('afterend', telephone);

      document.querySelector('.eg-telephone').setAttribute('href', phoneNo);

    }

    // function menuMove(){
    //   if(window.innerWidth < 1199){
    //     document.querySelector('.main-menu-navbar .manage-booking').insertAdjacentElement('afterend', document.querySelector('.navbar ul.navbar-nav'));

    //   }else{
    //     document.querySelector('.navbar-header .navbar-brand').insertAdjacentElement('afterend', document.querySelector('.navbar ul.navbar-nav'));
    //   }
    // }


    /* Initialise variation */
    waitForElement('#mega-menu-58151 .sub-menu', init, 100, 35000);
    waitForElement('.phone a', init2, 100, 35000);

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();