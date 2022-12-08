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





        let egBtnInterval;
        /* Variation Init */
        function init() {
            /* start your code here */
            clearInterval(egBtnInterval);
            egBtnInterval = setInterval(() => {
                if (document.querySelector(".controls .widgets > form >div.prices")) {
                    // modifying table 
                    document.querySelectorAll(".part").forEach(part => {
                        // changes in thead
                        if (part.querySelector("table > thead > tr > th:nth-child(5)")) {
                            if (!part.querySelector(".eg-visit-site")) {
                                part.querySelector("table > thead > tr > th:nth-child(5)").insertAdjacentHTML("afterend", `<th class="jsx-1976292197 eg-visit-site"></th>`);
                            }

                            // adding btn in tbody
                            part.querySelectorAll("table > tbody > tr > td:nth-child(5)").forEach(data => {
                                if (!data.parentElement.querySelector(".eg-visit-site-cta")) {
                                    data.insertAdjacentHTML("afterend", `<td class="jsx-3284562066 eg-visit-site-cta"><div><a href="${data.parentElement.children[1].querySelector("a:nth-of-type(1)").href}">Visit Site</a></div></td>`);
                                }
                            });
                        }
                    });


                }
            }, 1000);

        }




        // adding btns on route change
        function listener() {
            /* These are the modifications: */
            window.addEventListener("locationchange", function() {
                setTimeout(function() {
                    // adding view part btn
                    waitForElement('.part', init, 50, 15000);
                }, 500);
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



        /* Initialize variation */
        if (window.location.href.indexOf("https://octopart.com/electronic-parts") != -1) {
            waitForElement('.part', init, 50, 15000);
            listener();
            live('.part .footer button[type=button]', 'click', function() {

                waitForElement('.part', init, 50, 15000);
            });
        }
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();