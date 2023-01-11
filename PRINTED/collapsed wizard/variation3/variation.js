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
        let closeInterval;
        /* Variation Init */
        function init() {
            /* start your code here */
            // adding arrow icons
            waitForElement('.l-wizard-section__header', function() {
                document.querySelectorAll(".l-wizard-section__header").forEach(item => {
                    if (!item.querySelector(".eg-arrow")) {
                        item.insertAdjacentHTML("beforeend", `<span class="eg-arrow"></span>`);
                    }
                });
                closeActiveSection();
            }, 50, 15000);

        }





        // header click detect

        live('.l-wizard-section__header', 'click', (e) => {
            if (e.target.classList.contains("l-wizard-section__header")) {
                e.target.querySelector(".eg-arrow").click();
            } else if (e.target.classList.contains("l-wizard-section__title")) {
                e.target.parentElement.querySelector(".eg-arrow").click();
            } else if (e.target.classList.contains("l-wizard-section__icon")) {
                e.target.parentElement.querySelector(".eg-arrow").click();
            }
        });

        // order now button click
        live(['html body .c-product-card__btn',
            "html body .c-product-header__wizard-cta",
            "html body .c-sticky-nav__button"
        ], "click", function() {
            waitForElement('html body .l-wizard__body', init, 50, 15000);
        });

        // expand close logic
        live(['.c-wizard-summary__btn-edit', '.eg-arrow'], 'click', function() {
            if (this.classList.contains("c-wizard-summary__btn-edit")) {
                let egTargetTxt = this.parentElement.firstElementChild.innerText.toUpperCase().split(" ").shift();
                // searching section for this text
                document.querySelectorAll(".l-wizard-section__header .l-wizard-section__title").forEach(title => {
                    if (title.innerText.toUpperCase().indexOf(egTargetTxt) != -1) {
                        title.parentElement.parentElement.scrollIntoView({ behavior: "smooth", block: 'start' });

                        //========== EDIT BUTTON CLICK LOGIC ========//

                        /* so here i'm checking this edit button's grand parent's first element text 
                        and looping it through the sections header title if its meet any of one 
                        than our loop will stop and that section will get scrolled into view
                        and if it's container part (which contains content) is close so we will open it and if 
                        not just scrolled that section */


                        if (title.parentElement.parentElement.querySelector(".eg-inactive-section")) {
                            closeOpenArrows();
                            egOpend.unshift(title.parentElement.parentElement.querySelector(".eg-inactive-section"));
                            title.parentElement.parentElement.querySelector(".eg-inactive-section").classList.remove("eg-inactive-section");

                        }

                    }
                });
            }

            // btn open close logic
            if (this.classList.contains("eg-arrow")) {
                let egContainer = this.parentElement.parentElement.querySelector(".l-wizard-section__container");
                if (egContainer !== null) {
                    closeOpenArrows(egContainer);
                    egContainer.classList.toggle("eg-inactive-section");
                    this.parentElement.parentElement.scrollIntoView({ behavior: "smooth", block: 'start' });

                    if (!this.parentElement.parentElement.querySelector(".l-wizard-section__container").classList.contains("eg-inactive-section")) {
                        egOpend.unshift(this.parentElement.parentElement.querySelector(".l-wizard-section__container"));
                    }
                }

            }
        });

        function closeOpenArrows(crrSec = null) {
            [...new Set(egOpend)].forEach(sec => {
                if (sec != crrSec) {
                    sec.classList.add("eg-inactive-section");
                }
            });
        }

        // check api call and close tab accordinglly
        function closeActiveSection() {
            const element = document.querySelector('#vue-wizard .l-wizard__trigger');

            const observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                    if (mutation.attributeName === 'disabled') {
                        if (element.disabled) {
                            closeAll();
                        }
                    }
                });
            });

            const config = { attributes: true };
            observer.observe(element, config);

        }




        function closeAll() {
            const egArrows = document.querySelectorAll(".eg-arrow");
            egArrows.forEach(arrow => {
                if (!arrow.parentElement.parentElement.querySelector(".eg-inactive-section")) {
                    arrow.click();
                }
            });

            closeOpenArrows();

            let egBlock = document.querySelector(".l-wizard-section:has(.l-wizard-section__icon:not(.is-active)) .l-wizard-section__container")
            if (egBlock) {
                egBlock.classList.remove("eg-inactive-section");
                egOpend.unshift(egBlock);
                egBlock.parentElement.scrollIntoView({ behaviour: "smooth", block: 'start' });
            }

        }

        /* Initialize variation */
        waitForElement('html body .l-wizard__body', init, 50, 15000);

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();