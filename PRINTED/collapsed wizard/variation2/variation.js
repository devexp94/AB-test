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


        let allClosed = false;
        let closeInterval;
        /* Variation Init */
        function init() {
            /* start your code here */
            closeInterval = setInterval(() => {
                if (!allClosed) {
                    // console.log("hello")
                    // adding arrow icons
                    waitForElement('.l-wizard-section__header', function() {
                        document.querySelectorAll(".l-wizard-section__header").forEach(item => {
                            if (!item.querySelector(".eg-arrow")) {
                                item.insertAdjacentHTML("beforeend", `<span class="eg-arrow"></span>`);
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

        // header click detect

        live('.l-wizard-section__header', 'click', (e) => {
            if (e.target.classList.contains("l-wizard-section__header")) {
                e.target.querySelector(".eg-arrow").click();
            }
        });

        // order now button click
        live('.c-button', "click", function() {
            waitForElement('.l-wizard-section__icon', closeAll, 50, 15000);
        });


        // expand close logic
        live(['.c-wizard-summary__btn-edit', '.eg-arrow'], 'click', function() {
            if (this.classList.contains("c-wizard-summary__btn-edit")) {
                let egTargetTxt = this.parentElement.firstElementChild.innerText.toUpperCase().split(" ").shift();
                // searching section for this text
                document.querySelectorAll(".l-wizard-section__header .l-wizard-section__title").forEach(title => {
                    if (title.innerText.toUpperCase().indexOf(egTargetTxt) != -1) {

                        //========== EDIT BUTTON CLICK LOGIC ========//

                        /* so here i'm checking this edit button's grand parent's first element text 
                        and looping it through the sections header title if its meet any of one 
                        than our loop will stop and that section will get scrolled into view
                        and if it's container part (which contains content) is close so we will open it and if 
                        not just scrolled that section */

                        title.parentElement.parentElement.scrollIntoView({ behavior: "smooth" });
                        if (title.parentElement.parentElement.querySelector(".eg-inactive-section")) {
                            title.parentElement.parentElement.querySelector(".eg-inactive-section").classList.remove("eg-inactive-section");
                        }

                    }
                });
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
                    // console.log(this.responseURL.indexOf("wizard"))
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
                if (check.classList.contains("is-active") && !check.classList.contains("is-inactive")) {
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
            firstUnopend.scrollIntoView({ behaviour: "smooth" });
            firstUnopend.querySelector(".l-wizard-section__container").classList.remove("eg-inactive-section");
            
        }

        /* Initialize variation */
        waitForElement('.c-button', init, 50, 15000);
        waitForElement('html body .l-wizard__body', init, 50, 15000);

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();