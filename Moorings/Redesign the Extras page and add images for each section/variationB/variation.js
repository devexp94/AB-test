(function() {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";

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
                                nodes = (node.parentNode || node.document).querySelectorAll(
                                    selector
                                ),
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
                    while (
                        el &&
                        el.matches &&
                        el !== context &&
                        !(found = el.matches(selector))
                    )
                        el = el.parentElement;
                    if (found) callback.call(el, e);
                });
            }
            live(selector, event, callback, context);
        }

        /* Variation functions */

        let eg_Img = `
    <div class="egImg">
    <img class="full-2-1-breakpoints-theme-moorings-xsw-1x" src="https://www.moorings.com/sites/default/files/styles/full_2_1_breakpoints_theme_moorings_xsw_1x/public/images/yacht/4000_3c_card.jpg?t=1Lwg6B&amp;itok=nHISHjeW" width="768" height="384" alt="">
    </div>
  `;

        function init() {
            let container = document.querySelectorAll("#tm-booking .main .Collapsible__contentInner .extra-line-item");
            for (let item of container) {
                item.insertAdjacentHTML("afterbegin", eg_Img);
            }

            // mutation observer
            let observer = new MutationObserver(mutations => {
                console.log(mutations); // console.log(the changes)
                for (let mutation of mutations) {
                    for (let node of mutation.addedNodes) {
                        // we track only elements, skip other nodes (e.g. text nodes)
                        if ((node instanceof HTMLElement)) {
                            node.children[0].children[0].insertAdjacentHTML("afterbegin", eg_Img);
                        }
                    }
                }
            });

            const ele = document.querySelectorAll("#tm-booking .main .Collapsible__contentInner");

            ele.forEach(ele => {
                // observe everything except attributes
                observer.observe(ele, {
                    childList: true, // observe direct children
                });
            });
        }

        /* Initialize variation */
        waitForElement("#tm-booking .main .Collapsible__contentInner", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();