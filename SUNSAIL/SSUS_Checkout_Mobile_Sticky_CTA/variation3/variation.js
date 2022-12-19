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
            if (window.innerWidth < 768) {
                const egBody = document.querySelector("html body");

                egBody.insertAdjacentHTML("beforeend", egStickyHtml);

                // clearfix 
                const egClearFix = document.querySelector(".booking-flow .sidebar .totalPrice .clearfix");

                let egContinueCta = `<button class="btn btn-primary">Continue</button>`;

                const egSaveQuoteCta = document.querySelector(".sidebar-footer .booking-share-quote");

                // insertng these elements inside our sticky wrapper

                document.querySelector(".eg-sticky-wrapper .eg-info").insertAdjacentElement("afterbegin", egClearFix);

                // inserting save quote cta
                document.querySelector(".eg-sticky-wrapper .eg-cta-container").insertAdjacentElement("beforeend", egSaveQuoteCta);

                // inserting continue button html
                document.querySelector(".eg-sticky-wrapper .eg-cta-container").insertAdjacentHTML("beforeend", egContinueCta);

                // continue btn click detect and submit form
                document.querySelector(".eg-cta-container>.btn").addEventListener("click", () => {
                    // if extras form
                    if (document.querySelector(".extras form")) {
                        document.querySelector(".extras form > button[type=submit]").click();
                    } // if passenger details form 
                    else if (document.querySelector("#tm-booking .passenger> form")) {
                        document.querySelector("#tm-booking .passenger> form > .clearfix button[type=submit]").click();
                    } // if paynow form
                    else if (document.querySelector("#tm-booking #checkoutForm")) {
                        document.querySelector("#tm-booking #checkoutForm input[type=submit]").click();
                    }
                });

                // changing text
                document.querySelector(".eg-info label").textContent = `Total Charter price`;
                // inserting a new line below buttons
                document.querySelector(".eg-cta-container").insertAdjacentHTML("afterend",`
                    <a href="tel:877 772 3502" class="eg-inquiry-msg">Call on (877) 772-3502</a>`);
            }

        }

        /* Initialize variation */
        waitForElement('.booking-flow .sidebar .totalPrice .clearfix', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();