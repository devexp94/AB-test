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

        const egLabels = [
            "small price",
            "new product",
            "best seller"
        ]

        const egTxt = [
            "GET THE POOL BOY SCENTED CANDLE FOR $34",
            "GET THE ICONIC CLASSIC WHIP SPF30 SUNSCREEN MOUSSE FOR $22",
            "GET THE SCENT OF THE WORLD'S BEST-SMELLING SUNSCREEN, FOR YOUR CAR OR HOME OFFICE FOR $5"
        ]

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

        live('button', 'click', function() {
            if (this.innerText.toUpperCase().indexOf("BAG") != -1) {
                waitForElement('.keen-slider.cart__upsells > .keen-slider__slide', init, 50, 15000);
            }
        });




        /* Variation Init */
        function init() {
            /* start your code here */
            console.log("called");
            // inserting labels

            [...document.querySelectorAll(".keen-slider.cart__upsells > .keen-slider__slide")].forEach(item => {
                let egTarget = item.querySelector(".cart__item .cart__item__content > .gara");
                if (egTarget.innerText.toUpperCase() == "GET THE POOL BOY SCENTED CANDLE FOR $34") {
                    item.classList.add("eg-has-label");
                    if (!egTarget.querySelector(".eg-label")) {
                        egTarget.insertAdjacentHTML("afterbegin", `<span class="eg-label">${egLabels[0]}</span>`)
                    }
                } else if (egTarget.innerText.toUpperCase() == "GET THE ICONIC CLASSIC WHIP SPF30 SUNSCREEN MOUSSE FOR $22") {
                    item.classList.add("eg-has-label");
                    if (!egTarget.querySelector(".eg-label")) {
                        egTarget.insertAdjacentHTML("afterbegin", `<span class="eg-label">${egLabels[1]}</span>`)
                    }
                } else if (egTarget.innerText.toUpperCase() == "GET THE SCENT OF THE WORLD'S BEST-SMELLING SUNSCREEN, FOR YOUR CAR OR HOME OFFICE FOR $5") {
                    item.classList.add("eg-has-label");
                    if (!egTarget.querySelector(".eg-label")) {
                        egTarget.insertAdjacentHTML("afterbegin", `<span class="eg-label">${egLabels[2]}</span>`)
                    }
                }
            });
        }

        function listener() {
            /* These are the modifications: */
            window.addEventListener("locationchange", function() {
                waitForElement('.keen-slider.cart__upsells > .keen-slider__slide', init, 50, 15000);
            });
            history.pushState = ((f) =>
                function pushState() {
                    var ret = f.apply(this, arguments);
                    window.dispatchEvent(new Event("pushstate"));
                    window.dispatchEvent(new Event("locationchange"));
                    return ret;
                })(history.pushState);
            history.replaceState = ((f) =>
                function replaceState() {
                    var ret = f.apply(this, arguments);
                    window.dispatchEvent(new Event("replacestate"));
                    window.dispatchEvent(new Event("locationchange"));
                    return ret;
                })(history.replaceState);
            window.addEventListener("popstate", () => {
                window.dispatchEvent(new Event("locationchange"));
            });
        }

        listener();

        // mutation
        

        /* Initialize variation */
        waitForElement('.keen-slider.cart__upsells > .keen-slider__slide', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();