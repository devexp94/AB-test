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

        let egOpend = [];
        let egCloseTimeout;
        /* Variation Init */
        function init() {
            /* start your code here */
            waitForElement('.l-wizard-section__header', function() {
                setTimeout(() => {
                    closeActiveSection();
                }, 5000);

            }, 50, 15000);

        }

        // header click detect

        live('.l-wizard-section__header', 'click', (e) => {
            if (e.target.classList.contains("l-wizard-section__header")) {
                showContainer(e.target);

            } else if ((e.target.classList.contains("l-wizard-section__title")) || (e.target.classList.contains("l-wizard-section__icon"))) {
                e.target.parentElement.click();
            }
        });

        function showContainer(headerEle) {
            let egContainer = headerEle.parentElement.querySelector(".l-wizard-section__container");
            if (egContainer !== null) {
                closeOpenArrows(egContainer);
                egContainer.removeAttribute("style");
                egContainer.classList.toggle("eg-inactive-section");
                headerEle.parentElement.scrollIntoView({ behavior: "smooth", block: 'start' });

                if (!headerEle.parentElement.querySelector(".l-wizard-section__container").classList.contains("eg-inactive-section")) {
                    egOpend.unshift(headerEle.parentElement.querySelector(".l-wizard-section__container"));
                }
            }
        }


        // order now button click
        live(['html body .c-product-card__btn',
            "html body .c-product-header__wizard-cta",
            "html body .c-sticky-nav__button"
        ], "click", function() {
            waitForElement('html body .l-wizard__body', init, 50, 15000);
        });


        // edit btn click logic
        live('.c-wizard-summary__btn-edit', 'click', function() {
            if (this.classList.contains("c-wizard-summary__btn-edit")) {
                let egTargetTxt = this.parentElement.firstElementChild.innerText.toUpperCase().split(" ").shift();
                // searching section for this text
                document.querySelectorAll(".l-wizard-section").forEach(secTion => {
                    if (secTion.innerText.toUpperCase().indexOf(egTargetTxt) != -1) {
                        secTion.scrollIntoView({ behavior: "smooth", block: 'start' });

                        //========== EDIT BUTTON CLICK LOGIC ========//

                        /* so here i'm lopping through all the sections and getting their inner text
                        if inner text has the egTargetTxt then only we are scrolling to that section
                        and showing the container element inside of it */


                        if (secTion.querySelector(".eg-inactive-section")) {
                            closeOpenArrows();
                            egOpend.unshift(secTion.querySelector(".eg-inactive-section"));
                            secTion.querySelector(".eg-inactive-section").classList.remove("eg-inactive-section");
                        }

                    }
                });
            }
        });

        function closeOpenArrows(crrSec = null) {
            [...new Set(egOpend)].forEach(sec => {
                if (sec != crrSec) {
                    sec.classList.add("eg-inactive-section");
                }
            });
        }

        // check loader for disabled attribute then close tab accordinglly
        function closeActiveSection() {
            const element = document.querySelector('#vue-wizard .l-wizard__trigger');

            const observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                    console.log("eg-mutation")
                    if (mutation.attributeName === 'disabled') {
                        if (element.disabled === false) {
                            
                            egOpend = egOpend.concat(Array.from(document.querySelectorAll(".l-wizard-section__container")));
                            closeOpenArrows();
                            let egBlock = document.querySelector(".l-wizard-section:has(.l-wizard-section__icon:not(.is-active)) .l-wizard-section__container");
                            if (egBlock) {
                                egBlock.classList.remove("eg-inactive-section");
                                egOpend.unshift(egBlock);
                                egBlock.parentElement.scrollIntoView({ behaviour: "smooth", block: 'start' });
                            }
                            
                        }
                    }
                });
            });

            const config = { attributes: true };
            observer.observe(element, config);

        }

        /* Initialize variation */
        waitForElement('html body .l-wizard__body', init, 50, 15000);

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();