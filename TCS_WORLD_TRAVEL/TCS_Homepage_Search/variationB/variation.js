(function() {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";
        var $;
        /* all Pure helper functions */

        function waitForElement(selector, trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function() {
                if (
                    document &&
                    document.querySelector(selector) &&
                    document.querySelectorAll(selector).length > 0
                ) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function() {
                clearInterval(interval);
            }, delayTimeout);
        }

        function waitForjQuery(trigger) {
            var interval = setInterval(function() {
                if (window.jQuery != undefined) {
                    clearInterval(interval);
                    trigger();
                } else {
                    addJQuery();
                }
            }, 50);
            setTimeout(function() {
                clearInterval(interval);
            }, 15000)
        }

        function addJQuery() {
            var jQueryScript = document.createElement('script');
            // check for updated jquery cdn
            jQueryScript.src = 'https://code.jquery.com/jquery-3.6.3.min.js';
            document.getElementsByTagName('head')[0].appendChild(jQueryScript);
        }

        function live(selector, event, callback, context) {
            /****Helper Functions****/
            // helper for enabling IE 8 event bindings
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent("on" + type, handler);
                else el.addEventListener(type, handler);
            }
            // matches polyfill
            this.Element &&
                (function(ElementPrototype) {
                    ElementPrototype.matches =
                        ElementPrototype.matches ||
                        ElementPrototype.matchesSelector ||
                        ElementPrototype.webkitMatchesSelector ||
                        ElementPrototype.msMatchesSelector ||
                        function(selector) {
                            var node = this,
                                nodes = (node.parentNode || node.document).querySelectorAll(selector),
                                i = -1;
                            while (nodes[++i] && nodes[i] != node);
                            return !!nodes[i];
                        };
                })(Element.prototype);
            // live binding helper using matchesSelector
            function live(selector, event, callback, context) {
                addEvent(context || document, event, function(e) {
                    var found,
                        el = e.target || e.srcElement;
                    while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                    if (found) callback.call(el, e);
                });
            }
            live(selector, event, callback, context);
        }



        let egArrow = `<svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">

    <path d="M78.466,35.559L50.15,63.633L22.078,35.317c-0.777-0.785-2.044-0.789-2.828-0.012s-0.789,2.044-0.012,2.827L48.432,67.58
        c0.365,0.368,0.835,0.563,1.312,0.589c0.139,0.008,0.278-0.001,0.415-0.021c0.054,0.008,0.106,0.021,0.16,0.022
        c0.544,0.029,1.099-0.162,1.515-0.576l29.447-29.196c0.785-0.777,0.79-2.043,0.012-2.828S79.249,34.781,78.466,35.559z"></path>

</svg>`;

        var searchTrips = '' +
            '  <div class="eg-search-trips">' +
            '  <div class="eg-search-trips-inr container-fluid">' +
            '      <div class="eg-language-option23-outer">' +
            '      <div class="eg-language-option23 eg-trip-type">' +
            '          <div class="eg-dropdown">' +
            '              <p class="eg-label">Travel Type</p>' +
            '              <span class="eg-default-option facet__title">What kind of trip ? <span aria-hidden="true" class="facet__toggle-icon icon chevron-down eg-arrow">' + egArrow + '</span></span>' +
            '              <div class="eg-dropdown-options">' +
            '                  <span class="eg-dropdown-item" data-trip-type="Group Jet Expedition">Group Jet Expedition</span>' +
            '                  <span class="eg-dropdown-item" data-trip-type="Private Custom Travel">Private Custom Travel</span>' +
            '              </div>' +
            '          </div>' +
            '      </div>' +
            '      <div class="eg-language-option23 eg-destination">' +
            '          <div class="eg-dropdown">' +
            '              <p class="eg-label">Destination</p>' +
            '              <span class="eg-default-option facet__title">Where to?<span aria-hidden="true" class="facet__toggle-icon icon chevron-down eg-arrow">' + egArrow + '</span></span>' +
            '              <div class="eg-dropdown-options ">' +
            '                  <span class="eg-dropdown-item" data-destination="Africa">Africa</span>' +
            '                  <span class="eg-dropdown-item" data-destination="Around the World">Around the World</span>' +
            '                  <span class="eg-dropdown-item" data-destination="Asia">Asia</span>' +
            '                  <span class="eg-dropdown-item" data-destination="Australia &amp; The Pacific">Australia &amp; The Pacific</span>' +
            '                  <span class="eg-dropdown-item" data-destination="Central America &amp; Caribbean">Central America &amp; Caribbean</span>' +
            '                  <span class="eg-dropdown-item" data-destination="Europe">Europe</span>' +
            '                  <span class="eg-dropdown-item" data-destination="India &amp; the Middle East">India &amp; the Middle East</span>' +
            '                  <span class="eg-dropdown-item" data-destination="North America">North America</span>' +
            '                  <span class="eg-dropdown-item" data-destination="Polar Regions">Polar Regions</span>' +
            '                  <span class="eg-dropdown-item" data-destination="South America">South America</span>' +
            '              </div>' +
            '          </div>' +
            '      </div>' +
            '      <div class="eg-language-option23 eg-dates">' +
            '          <div class="eg-dropdown">' +
            '              <p class="eg-label">Dates</p>' +
            '              <span class="eg-default-option facet__title">When do you want to go ? <span aria-hidden="true" class="facet__toggle-icon icon chevron-down eg-arrow">' + egArrow + '</span></span>' +
            '              <div class="eg-dropdown-options">' +
            '                  <span class="eg-dropdown-item" data-year="2022">2022</span>' +
            '                  <span class="eg-dropdown-item" data-year="2023">2023</span>' +
            '                  <span class="eg-dropdown-item" data-year="2024">2024</span>' +
            '              </div>' +
            '          </div>' +
            '      </div>' +
            '      </div>' +
            '      <div class="eg-button">' +
            '          <a class="btn btn-primary eg-button-link">Find A Trip</a>' +
            '      </div>' +
            '      </div>' +
            '  </div>';

        



        var destination, date, tripType;

        function init() {
            waitForElement("html body main article.homepage", function() {
                waitForjQuery(function() {
                    var $ = window.jQuery;

                    if (window.innerWidth < 951) {
                        document.querySelector(".page__hero").insertAdjacentHTML("afterend", searchTrips)
                    } else {
                        document.querySelector('html body main article.homepage').insertAdjacentHTML('afterbegin', searchTrips);
                    }


                    $('body').on('mousedown', '.eg-default-option', function() {
                        $(this).parent().toggleClass('eg-active');
                    });

                    $('body').on('click', '.eg-trip-type span.eg-dropdown-item', function() {
                        tripType = $(this).text();
                        $(this).parents('.eg-trip-type').find('.eg-default-option.facet__title').html('' + tripType + ' <span aria-hidden="true" class="facet__toggle-icon icon chevron-down"></span>');
                        $('.eg-dropdown').removeClass('eg-active');
                    });

                    $('body').on('click', '.eg-destination span.eg-dropdown-item', function() {
                        destination = $(this).text();
                        $(this).parents('.eg-destination').find('.eg-default-option.facet__title').html('' + destination + ' <span aria-hidden="true" class="facet__toggle-icon icon chevron-down"></span>');
                        $('.eg-dropdown').removeClass('eg-active');
                    });


                    $('body').on('click', '.eg-dates span.eg-dropdown-item', function() {
                        date = $(this).text();
                        $(this).parents('.eg-dates').find('.eg-default-option.facet__title').html('' + date + ' <span aria-hidden="true" class="facet__toggle-icon icon chevron-down"></span>');
                        $('.eg-dropdown').removeClass('eg-active');
                    });

                    $('body').on('click', '.eg-button', function() {
                        if (destination && date && tripType)
                            window.location.href = 'https://www.tcsworldtravel.com/trip-finder?destination=' + destination + '&date=' + date + '&tripType=' + tripType;
                    });
                });
            }, 50, 15000);


        }

        /* Initialize variation */
        waitForElement("body", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();