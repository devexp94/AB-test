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

            let egIndex = 0;

            let egTexts = ["Christmas",
                "Royal Albert",
                "Vera Wang",
                "Wonderlust",
                "Teapot"
            ]

            const egSearchBox = document.querySelector("#header  #header-search");
            let egTime = 4000 // 4 seconds

            setInterval(function() {
                if (egIndex < egTexts.length - 1) {
                    egIndex += 1;
                } else {
                    egIndex = 0;
                }
                // Check if the input field is in focus
                if (document.activeElement !== egSearchBox) {
                    egSearchBox.placeholder = `Search for ( ${egTexts[egIndex]} )`;
                }
            }, egTime); // 4 seconds

            egSearchBox.addEventListener("click", function() {
                this.placeholder = "";
            })

        }

        /* Initialize variation */
        waitForElement('#header  #header-search', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();