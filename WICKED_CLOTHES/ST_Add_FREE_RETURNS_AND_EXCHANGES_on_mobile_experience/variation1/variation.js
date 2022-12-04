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
            if (window.innerWidth < 767) {
                document.querySelector(".pdp--header.mobile .product-artist").innerHTML = `Free Returns &amp; Exchanges`;
            }

        }

        /* Initialize variation */
        waitForElement('.pdp--header.mobile .product-artist', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();