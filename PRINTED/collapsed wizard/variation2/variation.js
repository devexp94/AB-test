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
        let egEditBtnTargets = {
            'Product': '#wizard-product',
            'Type': '#wizard-type',
            'Size': '#wizard-size',
            'Orientation': '#wizard-orientation',
            'Printed sides': '#wizard-printed-sides',
            'Paper': '#wizard-paper',
            'Paper weight': '#wizard-paper',
            'Quantity': '#wizard-quantity',
            'Lamination': '#section-extras',
            'Corners': '#section-extras',
            'Perforation': '#section-extras',
            'Fold type': '#wizard-fold-type',
            'Spot UV': '#wizard-spot-uv',
            'White Ink': '#wizard-white-ink'
        }
        let allClosed = false;
        let closeInterval;
        let egConfrmBtn = `<button class="eg-confirm-btn" aria-checked="false">Confirm</button>`;
        /* Variation Init */
        function init() {
            /* start your code here */
            closeInterval = setInterval(() => {
                if (!allClosed) {
                    console.log("hello")
                    // adding arrow icons
                    waitForElement('.l-wizard-section__header', function() {
                        document.querySelectorAll(".l-wizard-section__header").forEach(item => {
                            if (!item.querySelector(".eg-arrow")) {
                                item.insertAdjacentHTML("beforeend", `<span class="eg-arrow"></span>`);
                            }
                        })
                    }, 50, 15000);

                    // adding confirm buttons
                    waitForElement('.l-wizard-section__container', function() {
                        document.querySelectorAll(".l-wizard-section__container").forEach(item => {
                            if (!item.querySelector(".eg-confirm-btn")) {
                                item.insertAdjacentHTML("beforeend", egConfrmBtn);
                            }
                        })
                    }, 50, 15000);

                    // closing all active(ticked) sections
                    waitForElement('.l-wizard-section__icon', closeAll, 50, 15000);
                } else {
                    clearInterval(closeInterval);
                    closeInterval = null;
                    closeActiveSection();
                }
            }, 1000);

        }

        // order now button click
        live(['.c-button:not(.eg-confirm-btn)', '.eg-confirm-btn'], "click", function() {
            // console.log("clicked!!!")
            if (!this.classList.contains("eg-confirm-btn")) {
                waitForElement('html body .l-wizard__body', init, 50, 15000);
            } else {
                if (this.parentElement.parentElement.querySelector(".is-active")) {
                    this.ariaChecked = true;
                }
                waitForElement('.l-wizard-section__icon', closeAll, 50, 15000);
            }
        });

        // expand close logic
        live(['.c-wizard-summary__btn-edit', '.eg-arrow'], 'click', function() {
            if (this.classList.contains("c-wizard-summary__btn-edit")) {
                let egTargetTxt = this.parentElement.firstElementChild.innerText;
                document.querySelector(`${egEditBtnTargets[egTargetTxt]} .eg-arrow`).click();
            }

            // btn open close logic
            if (this.classList.contains("eg-arrow")) {
                this.parentElement.parentElement.querySelector(".l-wizard-section__container").classList.toggle("eg-inactive-section");
                this.parentElement.parentElement.scrollIntoView({ behavior: "smooth" });
            }
        });


        // check api call and close tab accordinglly
        function closeActiveSection() {
            const send = XMLHttpRequest.prototype.send
            XMLHttpRequest.prototype.send = function() {
                this.addEventListener('load', function() {
                    // checking api is called for product
                    console.log(this.responseURL.indexOf("wizard"))
                    if (this.responseURL.indexOf("/api/wizard/") != -1) {
                        allClosed = false;
                        setTimeout(() => {
                            waitForElement('html body .l-wizard__body', init, 50, 15000);
                        }, 3000);
                    }
                })
                return send.apply(this, arguments)
            }
        }

        function closeAll() {
            const egActiveSec = document.querySelectorAll(".l-wizard-section__icon");
            egActiveSec.forEach((check, i) => {
                if (check.classList.contains("is-active") && !check.classList.contains("is-inactive") && (check.parentElement.parentElement.querySelector(".eg-confirm-btn").ariaChecked === "true")) {
                    let egChilds = check.parentElement.parentElement.children;
                    for (let i = 0; i < egChilds.length; i++) {
                        if (egChilds[i].classList.contains("l-wizard-section__container")) {
                            egChilds[i].classList.add("eg-inactive-section");
                            break;
                        }
                    }
                } else {
                    allClosed = true;
                }
            });
            let firstUnopend = document.querySelector(".l-wizard-section:has(.l-wizard-section__icon:not(.is-active))");
            if (firstUnopend && !document.querySelector(".eg-confirm-btn[aria-checked=false]")) {
                firstUnopend.scrollIntoView({ behaviour: "smooth" });
            } else {
                document.querySelector(".eg-confirm-btn[aria-checked=false]").parentElement.parentElement.scrollIntoView({ behaviour: "smooth" });
            }
        }

        /* Initialize variation */
        waitForElement('.c-button', init, 50, 15000);
        waitForElement('html body .l-wizard__body', init, 50, 15000);

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();