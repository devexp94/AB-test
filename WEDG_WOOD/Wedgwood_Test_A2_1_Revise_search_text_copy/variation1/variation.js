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
            // changing search box text to search
            let egSearchBox = document.querySelector("#header  #header-search")
            egSearchBox.placeholder = "Search";
            let isFocused = false;

            egSearchBox.addEventListener('focus', () => {
                isFocused = true;
                egSearchBox.placeholder = "";
            });
            egSearchBox.addEventListener('blur', () => {
                isFocused = false;
                egSearchBox.placeholder = "Search";
            });

        }

        /* Initialize variation */
        waitForElement('#header  #header-search', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();