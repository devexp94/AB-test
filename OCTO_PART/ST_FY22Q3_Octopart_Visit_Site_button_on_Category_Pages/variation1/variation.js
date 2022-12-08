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


        let egBtnInterval;
        /* Variation Init */
        function init() {
            /* start your code here */
            clearInterval(egBtnInterval);
            egBtnInterval = setInterval(() => {
                if (window.location.href.indexOf("https://octopart.com/electronic-parts") != -1) {
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
                }

            }, 1000);


        }




        // adding btns on route change
        function listener() {
            /* These are the modifications: */
            window.addEventListener("locationchange", function() {
                waitForElement('.part', init, 50, 15000);
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
        waitForElement('.part', init, 50, 15000);
        listener();
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();