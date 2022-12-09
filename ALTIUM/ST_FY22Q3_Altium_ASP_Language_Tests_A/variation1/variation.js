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
            document.querySelector(".s-hero__text h1").textContent = "Get Altium Designer with Altium 365 & Save 25%!";

            document.querySelector(".s-hero__text .read-more__text-more p:nth-of-type(1)").textContent = "Congratulations! Sign up for Your FREE Trial of Altium Designer with Altium 365 and receive an email with a special coupon for 25% off your Altium Designer purchase."

            document.querySelector(".s-hero__text .read-more__text-more p:nth-of-type(2)").textContent = "Watch this 2 minute video to discover how Altium Designer can transform your design experience!";
        }



        /* Initialize variation */
        waitForElement('.s-hero__text .read-more__text-more p:nth-of-type(2)', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();