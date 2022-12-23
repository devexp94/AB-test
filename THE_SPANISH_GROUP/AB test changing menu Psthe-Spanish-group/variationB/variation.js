(function() {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";
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

        var egTruck = '' +
            '  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">' +
            '  <g>' +
            '   <g>' +
            '     <path d="M416.397,170.264c-12.265-15.113-30.464-23.781-49.927-23.781h-33.645c0.065,0.882,0.109,1.769,0.109,2.667v29.79h0.001    h14.612h18.924c9.64,0,18.652,4.293,24.726,11.777l27.065,33.349l13.671,16.845h41.799L416.397,170.264z"/>' +
            '   </g>' +
            '  </g>' +
            '  <g>' +
            '   <g>' +
            '     <path d="M368.629,204.007c-8.962,0-16.228,7.266-16.228,16.228v20.676h32.456v-20.676    C384.858,211.273,377.592,204.007,368.629,204.007z"/>' +
            '   </g>' +
            '  </g>' +
            '  <g>' +
            '   <g>' +
            '     <path d="M296.977,134.829H122.076c-12.014,0-21.753,9.739-21.753,21.753v77.727H78.685H47.973    c-8.738,0-16.257,6.715-16.669,15.444c-0.439,9.319,6.987,17.013,16.21,17.013h31.171h21.638v46.647    c0,12.014,9.739,21.753,21.753,21.753h20.393c4.785-17.934,21.164-31.186,40.586-31.186c19.422,0,35.799,13.252,40.586,31.186    h87.658V149.15C311.299,141.241,304.886,134.829,296.977,134.829z"/>' +
            '   </g>' +
            '  </g>' +
            '  <g>' +
            '   <g>' +
            '     <path d="M78.685,167.265c-2.642-1.864-5.857-2.969-9.337-2.969h-53.12C7.266,164.297,0,171.563,0,180.525    s7.266,16.228,16.228,16.228h53.12c3.479,0,6.695-1.105,9.337-2.969c4.164-2.937,6.892-7.775,6.892-13.26    C85.577,175.042,82.849,170.203,78.685,167.265z"/>' +
            '   </g>' +
            '  </g>' +
            '  <g>' +
            '   <g>' +
            '     <path d="M492.791,262.549H322.116v67.38h88.242c6.319-15.218,21.331-25.95,38.808-25.95c17.478,0,32.491,10.732,38.809,25.95    h2.271c12.014,0,21.753-9.739,21.753-21.753v-26.418C512,271.148,503.4,262.549,492.791,262.549z"/>' +
            '   </g>' +
            '  </g>' +
            '  <g>' +
            '   <g>' +
            '     <path d="M183.054,314.798c-17.196,0-31.186,13.99-31.186,31.186c0,17.196,13.99,31.186,31.186,31.186    c17.196,0,31.186-13.99,31.186-31.186S200.25,314.798,183.054,314.798z"/>' +
            '   </g>' +
            '  </g>' +
            '  <g>' +
            '   <g>' +
            '     <path d="M449.167,314.799c-17.196,0-31.185,13.99-31.185,31.186c0,17.196,13.99,31.186,31.185,31.186    c17.195,0,31.187-13.991,31.187-31.187C480.354,328.789,466.363,314.799,449.167,314.799z"/>' +
            '   </g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  </svg>';

        var egDocument = '' +
            '  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1000px" height="1000px" viewBox="0 0 1000 1000" version="1.1" x="0px" y="0px" enable-background="new 0 0 1000 1000" xml:space="preserve">' +
            '  ' +
            '  <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M379.3,4907.5c-119.9-63.8-219.4-181.1-252.5-300.9c-35.7-130.1-35.7-8857.6,0-8987.7c35.7-122.4,135.2-239.7,257.6-300.9c94.3-48.5,168.3-51,2736.6-51c1775.1,0,2662.6,7.7,2711.1,25.5c38.3,15.3,390.2,346.8,780.4,734.5l706.5,706.5v1262.5v1259.9l-191.3-257.6l-191.3-257.6l-770.2-306c-425.9-168.3-775.3-303.5-777.9-300.9c-2.5,2.5,51,364.7,117.3,805.9L5628-257.1l846.7,1152.8L7321.5,2051l-7.6,1295.6l-7.6,1295.6l-61.2,91.8c-33.2,48.5-102,117.3-150.5,150.5l-91.8,61.2l-3264.5,5.1C557.8,4956,468.5,4956,379.3,4907.5z M5967.2,2255.1v-229.5H3595.3H1223.4v229.5v229.5h2371.9h2371.9V2255.1z M5967.2,903.4V673.8H3595.3H1223.4v229.5v229.5h2371.9h2371.9V903.4z M5074.6-448.4v-229.5H3149H1223.4v229.5v229.5H3149h1925.6V-448.4z M5074.6-1800.1v-229.5H3149H1223.4v229.5v229.5H3149h1925.6V-1800.1z"/><path d="M8428.4,3229.4c-249.9-346.9-941.1-1290.5-1532.8-2096.5L5821.9-333.6l-91.8-599.3c-51-329-86.7-601.9-81.6-609.5c5.1-5.1,272.9,96.9,591.7,224.4l581.5,234.6l994.7,1356.8c548.3,744.7,1239.5,1693.5,1540.5,2104.1l543.2,747.3l-30.6,114.8c-89.3,313.7-535.6,624.9-887.5,622.3C8887.5,3859.3,8882.4,3851.6,8428.4,3229.4z"/></g></g>' +
            '  </svg>';

        var egBag = '' +
            '  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 268.133 268.133" style="enable-background:new 0 0 268.133 268.133;" xml:space="preserve">' +
            '  <g>' +
            '   <path style="fill:#1f3d5c;" d="M113.573,9.44h40.98c12.697,0,23.354,8.891,26.075,20.777H87.498   C90.213,18.33,100.882,9.44,113.573,9.44z"/>' +
            '   <path style="fill:#1f3d5c;" d="M0,42.15h80.863H187.27h80.863v102.308H153.957v-5.859c0-3.3-2.667-5.967-5.967-5.967h-27.847   c-3.3,0-5.967,2.667-5.967,5.967v5.854H0V42.15z"/>' +
            '   <polygon style="fill:#1f3d5c;" points="126.11,150.419 126.11,144.565 142.023,144.565 142.023,150.419 142.023,165.467    126.11,165.467  "/>' +
            '   <path style="fill:#1f3d5c;" d="M268.133,258.694H0V156.386h114.176v15.042c0,3.3,2.667,5.967,5.967,5.967h27.847   c3.3,0,5.967-2.667,5.967-5.967v-15.042h114.176V258.694z"/>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  <g>' +
            '  </g>' +
            '  </svg>';

        var egMenuLink = '' +
            '  <li class="eg-main-menu-link eg-home">' +
            '      <a>Home</a>' +
            '      <ul class="eg-main-menu-link-inr">' +
            '         <li>' +
            '              <ul class="eg-sub-menu-outer">' +
            '                  <li class="eg-sub-menu">' +
            '                <a class="https://thespanishgroup.org/">Main Homepage</a>' +
            '             </li>' +
            '                  <li class="eg-sub-menu">' +
            '                <a href="https://thespanishgroup.org/translations/">Translation Homepage</a>' +
            '             </li>' +
            '           </ul>' +
            '         </li>' +
            '      </ul>' +
            '  </li>' +
            '  <li class="eg-main-menu-link">' +
            '      <a>Translation Services</a>' +
            '      <ul class="eg-main-menu-link-inr">' +
            '          <li>' +
            '              <a class="eg-truck">' + egTruck + 'Same Day Delivery Translations</a>' +
            '              <ul class="eg-sub-menu-outer">' +
            '                  <li class="eg-sub-menu">' +
            '                      <a href="https://thespanishgroup.org/translations/certified-translations-for-official-civil-documents/">Certified Legal Translations</a>' +
            '                  </li>' +
            '                  <li class="eg-sub-menu">' +
            '                      <a href="https://thespanishgroup.org/translations/legal-translation-services">Certified Translations for Official Use</a>' +
            '                  </li>' +
            '                  <li class="eg-sub-menu">' +
            '                      <a href="https://thespanishgroup.org/translations/diploma-and-transcript-spanish-translation/">Foreign Credential Evaluation & Translation</a>' +
            '                  </li>' +
            '                  <li class="eg-sub-menu">' +
            '                      <a href="https://thespanishgroup.org/translations/legal-document-translation-services/">Legal Translation Services for Law Firms & Organizations</a>' +
            '                  </li>' +
            '                  <li class="eg-sub-menu">' +
            '                      <a href="https://thespanishgroup.org/translations/marketing-translation/">Marketing Translation</a>' +
            '                  </li>' +
            '                  <li class="eg-sub-menu">' +
            '                      <a href="https://thespanishgroup.org/translations/diploma-and-transcript-spanish-translation/">Translation for Diplomas & Academic Documents</a>' +
            '                  </li>' +
            '                  <li class="eg-sub-menu">' +
            '                      <a href="https://thespanishgroup.org/translations/immigration-certificate-translation/">USCIS Certified Translation Services</a>' +
            '                  </li>' +
            '              </ul>' +
            '          </li>' +
            '          <li>' +
            '              <a class="eg-document">' + egDocument + 'Certified Translations for Official purposes</a>' +
            '              <ul class="eg-sub-menu-outer">' +
            '                  <li class="eg-sub-menu">' +
            '                      <a href="https://thespanishgroup.org/translations/certified-translations-for-official-civil-documents/">Certified Legal Translations</a>' +
            '                  </li>' +
            '                  <li class="eg-sub-menu">' +
            '                      <a href="https://thespanishgroup.org/translations/legal-translation-services/">Certified Translations for Official Use</a>' +
            '                  </li>' +
            '                  <li class="eg-sub-menu">' +
            '                      <a href="https://thespanishgroup.org/translations/diploma-and-transcript-spanish-translation/">Foreign Credential Evaluation & Translation</a>' +
            '                  </li>' +
            '                  <li class="eg-sub-menu">' +
            '                      <a href="https://thespanishgroup.org/translations/notarized-translation/">Notarized Translations</a>' +
            '                  </li>' +
            '                  <li class="eg-sub-menu">' +
            '                      <a href="https://thespanishgroup.org/translations/diploma-and-transcript-spanish-translation/">Translation for Diplomas & Academic Documents</a>' +
            '                  </li>' +
            '                  <li class="eg-sub-menu">' +
            '                      <a href="https://thespanishgroup.org/translations/immigration-certificate-translation/">USCIS Certified Translation Services</a>' +
            '                  </li>' +
            '                  <li class="eg-sub-menu">' +
            '                      <a href="https://thespanishgroup.org/translations/spanish-document-translations/">Word Documents & PDFs</a>' +
            '                  </li>' +
            '              </ul>' +
            '          </li>' +
            '          <li>' +
            '              <a class="eg-bag">' + egBag + 'Certified Translations for Business</a>' +
            '              <ul class="eg-sub-menu-outer">' +
            '                  <li class="eg-sub-menu">' +
            '                      <a href="https://thespanishgroup.org/translations/document-translations-in-90-plus-languages/">Business Document Translation' +
            '                      </a>' +
            '                  </li>' +
            '                  <li class="eg-sub-menu">' +
            '                      <a href="https://thespanishgroup.org/translations/spanish-document-translations/">Business Documents & Manuals' +
            '                      </a>' +
            '                  </li>' +
            '                  <li class="eg-sub-menu">' +
            '                      <a href="https://thespanishgroup.org/translations/comprehensive-api-translation-solutions-for-business/">Comprehensive API Translation Solutions for Business' +
            '                      </a>' +
            '                  </li>' +
            '                  <li class="eg-sub-menu">' +
            '                      <a href="https://thespanishgroup.org/translations/industrial-translation-services/">Industrial Translation' +
            '                      </a>' +
            '                  </li>' +
            '                  <li class="eg-sub-menu">' +
            '                      <a href="https://thespanishgroup.org/translations/spanish-document-translations/">Legal Translation Services for Law Firms & Organizations' +
            '                      </a>' +
            '                  </li>' +
            '                  <li class="eg-sub-menu">' +
            '                      <a href="https://thespanishgroup.org/translations/marketing-translation/">Marketing Translation' +
            '                      </a>' +
            '                  </li>' +
            '                  <li class="eg-sub-menu">' +
            '                      <a href="https://thespanishgroup.org/translations/subtitling-and-translation-services/">Subtitling & Translation Services' +
            '                      </a>' +
            '                  </li>' +
            '                  <li class="eg-sub-menu">' +
            '                      <a href="https://thespanishgroup.org/translations/website-translations/">Website Translations' +
            '                      </a>' +
            '                  </li>' +
            '              </ul>' +
            '          </li>' +
            '      </ul>' +
            '  </li>';

        function init() {
            var $ = window.jQuery
            document.querySelector('#navigation .wsite-menu-default >li:first-of-type').insertAdjacentHTML('beforebegin', egMenuLink);


        }

        // logic for show and hide
        live(['.eg-main-menu-link', '.eg-main-menu-link-inr > li > a'], 'click',
            function() {
                if (window.innerWidth < 1201) {
                    this.querySelector(".eg-main-menu-link-inr").classList.toggle("eg-show");
                }
            }
        );

        live('.eg-main-menu-link-inr > li > a', 'click',
            function() {
                if (window.innerWidth < 1201) {
                    this.nextElementSibling.classList.toggle("eg-show");
                }
            }
        );


        function init2() {
            var $ = window.jQuery

            if (document.querySelector('#more-menu.more-menu > ul > li:first-of-type')) {
                document.querySelector('#more-menu.more-menu > ul > li:first-of-type').insertAdjacentHTML('afterend', egMenuLink);
            } else if (document.querySelector('.more-menu .english-menu > ul > li:first-child')) {
                document.querySelector('.more-menu .english-menu > ul > li:first-child').insertAdjacentHTML('afterend', egMenuLink);
            }

            // $('body').on('click', '.more-menu .eg-main-menu-link:not(.eg-home) > a', function(){
            //   $(this).next().slideToggle(1000);
            // });

            // $('body').on('click', '.more-menu .eg-main-menu-link:not(.eg-home) > .eg-main-menu-link-inr > li >a', function(){
            //   $(this).next().slideToggle(1000);
            // });


        }

        /* Initialise variation */

        waitForElement("#navigation .wsite-menu-default >li:first-of-type", init, 100, 35000);
        waitForElement("#more-menu.more-menu > ul > li:first-of-type, .more-menu .english-menu > ul > li:first-child", init2, 100, 35000);

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();