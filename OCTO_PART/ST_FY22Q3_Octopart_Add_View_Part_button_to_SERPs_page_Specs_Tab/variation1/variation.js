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

        // live(['.controls .widgets > form >*',
        //     'nav > a.prev',
        //     'nav > a.next',
        //     'nav > ul.jumps',
        //     'nav > ul.pages > li'
        // ], 'click', function() {
        //     waitForElement('.sorts-filters th:nth-child(6)', init, 50, 15000);
        //     console.log("clicked")
        // });

        /* Variation Init */
        function init() {
            /* start your code here */
            if (document.querySelector(".controls .widgets > form >div.specs")) {
                // modifying table 
                document.querySelector(".groups th:nth-child(4)").colSpan = 4;

                if (!document.querySelector(".eg-view-part")) {
                    document.querySelector(".columns th:nth-child(6)").insertAdjacentHTML("afterend", `
                                                                                    <th class="jsx-1766019851 jsx-3649838565 eg-view-part"></th>
                                                                                    `);

                    document.querySelector(".sorts-filters th:nth-child(6)").insertAdjacentHTML("afterend", `
                                                                                        <th class="jsx-1766019851 jsx-3649838565 eg-view-part"></th>
                                                                                        `);
                }
                // adding view part btn
                waitForElement('table > tbody > tr  > .spec:nth-child(6)', addBtn, 50, 15000);


            }

        }

        function addBtn() {
            // only when btn is not present then add it
            if (!document.querySelector('.eg-view-part-cta')) {
                document.querySelectorAll("table > tbody > tr  > .spec:nth-child(6)").forEach(ele => {
                    ele.insertAdjacentHTML("afterend", `
                                      <td class="jsx-3284562066 spec eg-view-part-cta"><div class="jsx-312275976 jsx-3946697165 market-availability"><a class="jsx-312275976 jsx-3946697165 number" href="${ele.parentElement.children[1].firstElementChild.href}">View Part</a></div></td>`);
                });
            }
        }

        // adding btns on route change
        function listener() {
            /* These are the modifications: */
            window.addEventListener("locationchange", function() {
                setTimeout(function() {
                    // adding view part btn
                    waitForElement('.sorts-filters th:nth-child(6)', init, 50, 15000);
                }, 5000);
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

        /* Initialize variation */
        waitForElement('.sorts-filters th:nth-child(6)', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();