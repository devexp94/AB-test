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

            const egMsg = document.querySelector("div#content .page-section .order-summary__panel-body .order-summary__itemised:nth-child(3) > div[data-sample-box] div[data-promocode-description='true']");
            egMsg.innerHTML = `<span class="eg-msg"><strong>First box half price</strong> - subscription exclusive</span>`;

        }

        /* Initialize variation */
        waitForElement('div#content .page-section .order-summary__panel-body .order-summary__itemised:nth-child(3) .cv-price-old', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();