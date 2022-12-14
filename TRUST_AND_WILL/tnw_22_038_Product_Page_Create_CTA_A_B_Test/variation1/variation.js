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
            if (((window.location.href.indexOf("https://trustandwill.com/trust/") != -1)) || ((window.location.href.indexOf("https://trustandwill.com/will/") != -1))) {
                setTimeout(() => {
                    document.querySelectorAll(".button").forEach(btn => {
                        if (btn.innerText.toUpperCase().indexOf("START") != -1) {
                            btn.innerText = btn.innerText.replace("Start", 'Create')
                        }
                    });
                }, 300);
            }

        }

        /* Initialize variation */
        waitForElement('.button', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();