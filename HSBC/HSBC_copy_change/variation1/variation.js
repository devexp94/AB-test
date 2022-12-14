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

        /* Variation Init */
        function init() {
            /* start your code here */

            updateCnt();

            live(["button[aria-controls='product-theme-carousel']", "#main > div > div:nth-child(1) > div > div.products-listing__navigation > div:nth-child(1)"], 'click', (e) => {
                updateCnt();
            });
        }

        function updateCnt() {
            const egTitles = document.querySelectorAll("#product-theme-carousel > div:nth-of-type(3) > div h3")
            egTitles.forEach(titles => {
                if (titles.textContent == 'Working capital') {
                    titles.textContent = "Opening an HSBC Business account";
                    titles.parentElement.querySelector("a").href = "/en-sg/business-banking/business-account-opening-process";
                    titles.parentElement.nextElementSibling.href = "/en-sg/business-banking/business-account-opening-process";
                }
            })
        }

        /* Initialize variation */
        waitForElement("#product-theme-carousel > div:nth-of-type(3) > div:nth-child(1) > div > div > a", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();