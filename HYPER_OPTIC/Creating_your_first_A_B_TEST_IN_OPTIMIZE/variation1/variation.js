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
            // adding description 

            const egDesc = [
                "Great for streaming and wifi",
                "Perfect for gaming and downloading on multiple devices",
                "Keeps heavy-user households with lots of gadgets happy",
                "The ultimate experience, whatever you throw at it."
            ]
            setTimeout(() => {
                const egPriceInfoBoxes = document.querySelectorAll("#block_627dfcc65e214  .package > .package-body > div > .speed-details-wr");

                egPriceInfoBoxes.forEach((priceInfo, index) => {
                    priceInfo.insertAdjacentHTML("beforebegin", `<p class="eg-desc">${egDesc[index]}</p>`);
                    console.log(priceInfo)
                });
            }, 2000);

        }

        /* Initialize variation */
        waitForElement('#block_627dfcc65e214  .package > .package-body > div > .speed-details-wr', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();