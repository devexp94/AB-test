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
        /* Variation Init */
        function init() {
            /* start your code here */
            let egCount = 0;
            // order now button click
            live('.c-button', "click", function() {
                closeInterval = setInterval(() => {
                    waitForElement('.l-wizard-section__icon', closeAll, 50, 15000);
                    if (allClosed == true) {
                        clearInterval(closeInterval);
                    }
                }, 1000);
            });

            live(['.c-wizard-summary__btn-edit'], 'click', function() {
                if (this.classList.contains("c-wizard-summary__btn-edit")) {
                    let egTargetTxt = this.parentElement.firstElementChild.innerText;
                    document.querySelector(`${egEditBtnTargets[egTargetTxt]} .l-wizard-section__container`).classList.remove("eg-inactive-section");
                }
            });


        }


        // check api call and close tab accordinglly
        function closeActiveSection() {
            const send = XMLHttpRequest.prototype.send
            XMLHttpRequest.prototype.send = function() {
                this.addEventListener('load', function() {
                    // checking api is called for product
                    console.log(this.responseURL.indexOf("wizard"))
                    if (this.responseURL.indexOf("/api/wizard/") != -1) {
                        closeAll();
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

                }
            });
            console.log("hello")
            allClosed = true;
            document.querySelector(".l-wizard-section:not(#wizard-white-ink):has(.l-wizard-section__icon:not(.is-active))").scrollIntoView({ behaviour: "smooth" });
        }

        /* Initialize variation */
        waitForElement('.c-button', init, 50, 15000);
        waitForElement('#container-to-scroll > div:nth-child(2) > div > div:has(.l-wizard-section__container)', closeAll, 50, 15000);

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();