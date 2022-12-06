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

            // changing preselected button
            [...document.querySelector("#nbsStep2 .nbs__options-list").children].forEach(item => {
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                } else {
                    item.classList.add('active');
                }
            });

        }



        /* Initialize variation */
        waitForElement('#nbsStep2 .nbs__options-list', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();