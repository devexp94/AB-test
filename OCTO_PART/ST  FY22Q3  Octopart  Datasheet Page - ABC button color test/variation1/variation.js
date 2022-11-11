(function() {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";

        /* all Pure helper functions */

        // selector would be the parent div where your are changing css/js
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

        /* Variation functions */
        function init() {
              
        }

        /* Initialize variation */
        waitForElement(".header .middle .bottom", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();