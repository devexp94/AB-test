(function () {
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

        live(`div[class^='contact-header__content'] > div[class^='Box-sc'] > div`, 'click', function() {
            if (this.classList.contains("eg-tab-btn")) {
                this.classList.add("active");
                [...this.parentElement.children].forEach(btn => {
                    if (!btn.classList.contains("eg-tab-btn")) {
                        btn.classList.add("eg-remove-active-state");
                    }
                });
            } else {
                [...this.parentElement.children].forEach(btn => {
                    if (btn.classList.contains("active")) {
                        btn.classList.remove("active")
                    } else if (btn.classList.contains("eg-remove-active-state")) {
                        btn.classList.remove("eg-remove-active-state");
                    }
                })
            }
        });


        let egTabBtnHTML = `
      <div class="eg-tab-btn" tabindex="-1">
          <svg class="eg-icon" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-testid="ContactMessageIcon" data-id="Icon" opacity="1" fill="currentColor">
              <path fill="none" d="M0 0h18v18H0z" opacity=".25"></path>
              <path d="M0 2v14h18V2H0zm15.952 1.2L9 10.151 2.048 3.2h13.904zM1.2 14.8V4.048l7.8 7.8 7.8-7.8V14.8H1.2z"></path>
          </svg>
              Account opening enquiries
      </div>`;

        let egTabContent = `
      <div class="eg-tab-content">
          <p class="eg-tab-heading">Open an HSBC Business Account in three easy steps:</p>
          <!-- steps -->
          <ul class="eg-steps">
              <li class="eg-step">
                  <p>Step 1</p>
                  <p>Schedule a meeting with us</p>
              </li>
              <li class="eg-step">
                  <p>Step 2</p>
                  <p>We'll get in touch within two working days to find out more about your business</p>
              </li>
              <li class="eg-step">
                  <p>Step 3</p>
                  <p>We'll help you through the process to set up your Business Account</p>
              </li>
          </ul>
      </div>
      `;

        /* Variation Init */
        function init() {
            /* start your code here */
            // currently desktop only
            if (window.innerWidth > 759) {
                const egTabBtnTarget = document.querySelector("div[class^='contact-header__content'] > div[class^='Box-sc']");

                const egContactContent = document.querySelector("#contact-content");


                // inserting tab button 
                egTabBtnTarget.insertAdjacentHTML("beforeend", egTabBtnHTML);

                // inserting tab content
                egContactContent.insertAdjacentHTML("afterbegin", egTabContent);
            }

        }

        /* Initialize variation */
        waitForElement(`div[class^='contact-header__content'] > div[class^='Box-sc'] `, init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();