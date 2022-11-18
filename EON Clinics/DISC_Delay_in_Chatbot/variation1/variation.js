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

            // delay of 15 seconds 
            // setTimeout(() => {
            //     document.querySelector("#podium-website-widget").style.visibility = "visible";
            // }, 15000);

            // scroll depth
            window.addEventListener("scroll",(e)=>{
              if ((window.innerHeight + window.scrollY + 25) >= document.body.offsetHeight) {
                    // you're at the bottom of the page
                    document.querySelector("#podium-website-widget").style.visibility = "visible";
                }
            });
        }

        /* Initialize variation */
        waitForElement('#podium-website-widget', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();