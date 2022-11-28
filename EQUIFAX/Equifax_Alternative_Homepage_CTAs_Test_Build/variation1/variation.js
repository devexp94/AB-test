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

            const egNavCta = document.querySelector(".nav-sub .buttons a.btn:nth-of-type(1)")
            const egVideoCta = document.querySelector(".video-block-wrapper .cta-x");
            const egHeroCta = document.querySelector("div.heading-container .heading-content a.cta-x");
            
            [egNavCta,egVideoCta,egHeroCta].forEach(cta=>{
                cta.textContent = "Start Free Trial";
            });
        }

        /* Initialize variation */
        waitForElement('.video-block-wrapper .cta-x', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();