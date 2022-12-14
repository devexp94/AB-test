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

        live(['.c-h-search_suggestions_item', '.a11-recent-search-list > li'], 'click', function() {
            waitForElement('html body .c-title-component-text h1', init, 50, 15000);
        });

        let egChangeTxt, egTimeout;
        /* Variation Init */
        function init() {
            /* start your code here */
            let egTarget = document.querySelector("html body .c-title-component-text h1");
            let egSearchBox = document.querySelector("#header-search");

            egSearchBox.addEventListener("input", function() {
                setTimeout(() => {
                    egTarget.textContent = `Results for "${this.value}"`;
                }, 1000)
            });

            egSearchBox.addEventListener('keydown', event => {
                console.log(event.key)
                if (event.key === 'Enter') {
                    setTimeout(() => {
                        egTarget.textContent = `Results for "${egSearchBox.value}"`;
                    }, 1000)
                }
            });

            clearInterval(egChangeTxt);
            clearTimeout(egTimeout);

            egChangeTxt = setInterval(() => {


                if ((egTarget.textContent.indexOf("Results for") == -1) || egTarget.textContent.toUpperCase() != `RESULTS FOR ${egSearchBox.value.toUpperCase()}`) {


                    egTarget.textContent = `Results for "${egSearchBox.value}"`;

                    egSearchBox.addEventListener("input", function() {
                        egTarget.textContent = `Results for "${this.value}"`;
                    });
                }

            }, 500);

            egTimeout = setTimeout(() => {
                clearInterval(egChangeTxt);
            }, 5000);


        }

        /* Initialize variation */
        waitForElement('html body .c-title-component-text h1', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();