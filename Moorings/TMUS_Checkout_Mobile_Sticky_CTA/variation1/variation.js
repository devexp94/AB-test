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

        const egStickyHtml = `
                <div class="eg-sticky-wrapper">
                    <!-- charter name and price -->
                    <div class="eg-info"></div>

                    <!-- cta -->
                    <div class="eg-cta-container">
                        
                    </div>
                </div>
            `;

        /* Variation Init */
        function init() {
            /* start your code here */
            const egBody = document.querySelector("html body");

            egBody.insertAdjacentHTML("beforeend", egStickyHtml);

            // clearfix 
            const egClearFix = document.querySelector(".booking-flow .sidebar .totalPrice .clearfix");
            const egContinueCta = document.querySelector(".extras form button[type=submit]");
            const egSaveQuoteCta = document.querySelector(".booking-flow .sidebar .share-quote");

            // insertng these elements inside our sticky wrapper

            document.querySelector(".eg-sticky-wrapper .eg-info").insertAdjacentElement("afterbegin", egClearFix);

            [egContinueCta, egSaveQuoteCta].forEach(cta => {
                document.querySelector(".eg-sticky-wrapper .eg-cta-container").insertAdjacentElement("beforeend", cta);
            });

        }

        /* Initialize variation */
        waitForElement('body', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();