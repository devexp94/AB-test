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
            <div class="eg-video-container"><iframe src="https://player.vimeo.com/video/787733389?title=0&autoplay=1&muted=1&controls=0&sidedock=0&loop=1"></iframe></div`);
            if (window.innerWidth < 768) {
                waitForElement("html body .eg-video-container + div > div:nth-child(2)", function() {
                    let egEle = document.querySelector("html body .eg-video-container + div > div:nth-child(2)");
                    egEle.classList.add("eg-mob-cta");
                    document.body.insertAdjacentElement("beforeend", egEle);
                }, 50, 15000);
            }
        }
        /* Initialize variation */
        waitForElement('#page_block_header > div.section-block', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, 'error in Test' + variation_name);
    }
})();