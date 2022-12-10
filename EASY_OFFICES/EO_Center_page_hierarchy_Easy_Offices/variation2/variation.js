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


        /* Variation Init */
        function init() {
            /* start your code here */
            if (window.innerWidth > 1024) {
                // moving map
                document.querySelector(".office-info .office-info-right .office-info-item:nth-child(4)").insertAdjacentElement("beforebegin", document.querySelector(".property-map.desktop"));

                // moving facilities section
                document.querySelector(".office-info .office-info-right .office-info-item:nth-child(5)").insertAdjacentElement("afterend", document.querySelector(".facilities"));
            }
        }

        /* Initialize variation */
        waitForElement('.property-map.desktop', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();