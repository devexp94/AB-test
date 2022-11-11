(function() {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = '';

        /* all Pure helper functions */

        function waitForElement(selector, trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function() {
                if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function() {
                clearInterval(interval);
            }, delayTimeout);
        }

        /* Variation functions */



        function init() {
            // insertin a new div in the hero section
            document.querySelector('#page_block_header > div.section-block').insertAdjacentHTML('afterbegin', `
            <div class="eg-hero-video"></div`);


            // getting newly inserted div element
            const egHeroVideoBlock = document.querySelector(".eg-hero-video");

            // clone the video iframe element
            const egVideo = document.querySelector("#element-226  iframe").cloneNode(true);

            // set or change attributes
            egVideo.setAttribute("id", "eg-video-iframe");

            // append this cloned iframe to the newly entered div
            egHeroVideoBlock.insertAdjacentElement("afterbegin",egVideo); 


        }
        /* Initialize variation */
        waitForElement('#page_block_header > div.section-block', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, 'error in Test' + variation_name);
    }
})();