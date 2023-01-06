(function() {
    if (!document.querySelector('.eg-tab-btn')) {
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
                    this.parentElement.children[0].click();
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

            let egMobBtn =
                `<li role="option" aria-selected="false" class="eg-drowdown-list">
                <span class="eg-drowdown-list-label">
                    <div>
                        <div class="eg-icon-wrapper"><svg font-size="m" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-id="Icon" opacity="1" fill="currentColor">
                                <path fill="none" d="M0 0h18v18H0z" opacity=".25"></path>
                                <path d="M0 2v14h18V2H0zm15.952 1.2L9 10.151 2.048 3.2h13.904zM1.2 14.8V4.048l7.8 7.8 7.8-7.8V14.8H1.2z"></path>
                            </svg></div>
                        <div class="eg-btn-text" onclick="TMS.trackEvent({ 'event_category': 'content', 'event_action': 'onsite', 'event_content': 'account opening tab click', 'event_value': '1 ' });"><span>Account opening enquiries</span></div>
                    </div>
                </span>
            </li>`;

            // mobile drop down btn click detect
            live(`div[class^='contact-header__mobile-menu'] button[class^='dropdown-list__button']`, 'click', function() {
                // console.log(this)
                const egSibling = this.nextElementSibling;
                if (egSibling != null && !document.querySelector('li.eg-drowdown-list')) {
                    egSibling.insertAdjacentHTML("beforeend", egMobBtn);
                }

                if (this.classList.contains('eg-clicked')) {
                    if (egSibling != null) {
                        removeActive(egSibling, true);
                    }
                }
            });

            // drop down btn arrow click detect
            live(`div[class*='dropdown-list__button-icon']`, 'click', function() {
                // console.log(this)
                const egSibling = document.querySelector(`ul[class^='dropdown-list__listbox']`);
                if (egSibling != null && !document.querySelector('li.eg-drowdown-list')) {
                    egSibling.insertAdjacentHTML("beforeend", egMobBtn);
                    if (document.querySelector(".eg-clicked")) {
                        removeActive(egSibling, true);
                    }
                }
            });

            // list items click detect
            live(`ul[class^='dropdown-list__listbox'] > li`, 'click', function() {
                if (this.classList.contains("eg-drowdown-list")) {
                    if (!document.querySelector(".eg-clicked")) this.parentElement.children[0].click();
                    removeActive(this.parentElement, true);
                    document.querySelector("div[class^='contact-header__mobile-menu'] button[class^='dropdown-list__button']").click();
                    document.querySelector("div[class^='contact-header__mobile-menu'] button[class^='dropdown-list__button']").classList.add("eg-clicked");
                    setTimeout(() => {
                        updateBtnHtml(this.innerText);
                    }, 100)


                } else {
                    if (document.querySelector(".eg-clicked")) {
                        document.querySelector(".eg-clicked").classList.remove("eg-clicked");
                    }
                    removeActive(this.parentElement, false);
                    if (this.innerText.toUpperCase() == "GENERAL ENQUIRIES") {
                        updateBtnHtml(this.innerText);
                    }
                }
            });

            function updateBtnHtml(text) {
                const egBtn = document.querySelector(`div[class^='contact-header__mobile-menu'] button[class^='dropdown-list__button']`);
                let egSvg = egBtn.querySelector(".contact-header-dropdown__icon");
                let egText = egBtn.querySelector('span[class^="contact-header-dropdown"]');
                egText.textContent = text;
                egSvg.innerHTML = `<svg font-size="m" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-id="Icon" opacity="1" fill="currentColor">
                                <path fill="none" d="M0 0h18v18H0z" opacity=".25"></path>
                                <path d="M0 2v14h18V2H0zm15.952 1.2L9 10.151 2.048 3.2h13.904zM1.2 14.8V4.048l7.8 7.8 7.8-7.8V14.8H1.2z"></path>
                            </svg>`;
            }

            function removeActive(egSibling, clicked) {
                [...egSibling.children].forEach(item => {
                    if (!item.classList.contains("eg-drowdown-list")) {
                        if (clicked == true) {
                            item.classList.add("eg-remove-active-state");
                        } else {
                            if (item.classList.contains("eg-remove-active-state")) {
                                item.classList.remove("eg-remove-active-state");
                            }
                        }

                    }
                });
            }


            let egTabBtnHTML = `
      <div class="eg-tab-btn" tabindex="-1" onclick="TMS.trackEvent({ 'event_category': 'content', 'event_action': 'onsite', 'event_content': 'account opening tab click', 'event_value': '1 ' });">
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
                //=====for all devices====+
                // inserting tab content
                const egContactContent = document.querySelector("#contact-content");
                if (!document.querySelector('.eg-tab-content')){
                    egContactContent.insertAdjacentHTML("afterbegin", egTabContent);
                }

                //====desktop + tab only===+
                if (window.innerWidth > 759) {
                    const egTabBtnTarget = document.querySelector("div[class^='contact-header__content'] > div[class^='Box-sc']");

                    // inserting tab button 
                    egTabBtnTarget.insertAdjacentHTML("beforeend", egTabBtnHTML);
                }

            }

            /* Initialize variation */
            waitForElement('#contact-content', init, 150, 15000);
        } catch (e) {
            if (debug) console.log(e, "error in Test" + variation_name);
        }
    }

})();