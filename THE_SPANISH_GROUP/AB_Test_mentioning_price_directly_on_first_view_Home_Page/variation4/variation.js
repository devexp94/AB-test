(function() {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";

        /* all Pure helper functions */


        // selector would be the parent div where your are changing css/js
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
        const egBlueStrip = `
            <p class="eg-blue-strip">
                Now <strong>&dollar;24.99</strong> per Page & <strong>10&#162</strong> per Word!
            </p>
        `;

        /* Variation functions */
        function init() {
            if(window.innerWidth > 1024){
                document.querySelector("html body #whattypeoftranslation .nfn__container > .nfn__content").insertAdjacentHTML("afterbegin",egBlueStrip);                
            }

        }


        /* Initialize variation */
        waitForElement("html body #whattypeoftranslation .nfn__container > .nfn__content", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();