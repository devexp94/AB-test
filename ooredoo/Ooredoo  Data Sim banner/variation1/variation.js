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

            if (window.location.href.indexOf("https://www.ooredoo.qa/web/en/") != -1) {

                document.querySelector("#why-ooredoo .slick-track > .slick-slide:nth-child(2) img:nth-of-type(1)").src = "https://www.ooredoo.qa/web/wp-content/uploads/2022/12/HomepageWE.png"
                if (window.innerWidth < 767) {
                    document.querySelector("#why-ooredoo .slick-track > .slick-slide:nth-child(2) img:nth-of-type(2)").src = "https://www.ooredoo.qa/web/wp-content/uploads/2022/12/HomepageME.png"
                }
            } else if (window.location.href.indexOf("https://www.ooredoo.qa/web/ar/") != -1) {
                document.querySelector("#why-ooredoo .slick-track > .slick-slide:nth-child(1) img:nth-of-type(1)").src = "https://www.ooredoo.qa/web/wp-content/uploads/2022/12/HomepageWA.png";

                if (window.innerWidth < 767) {
                    document.querySelector("#why-ooredoo .slick-track > .slick-slide:nth-child(1) img:nth-of-type(2)").src = "https://www.ooredoo.qa/web/wp-content/uploads/2022/12/HomepageMA.png"
                }
            }

        }

        /* Initialize variation */
        waitForElement('#why-ooredoo .slick-track > .slick-slide:nth-child(2) img:nth-of-type(1)', init, 500, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();