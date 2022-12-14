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
            document.querySelector("#quizResults").insertAdjacentHTML("beforeend", `
                <div class="eg-not-sure">
                    <h3>Still Not Sure?</h3>
                    <p>Learn more about differences between trusts and wills <a href="https://trustandwill.com/learn/difference-between-trust-and-will">here</a></p>
                </div>`);

        }

        /* Initialize variation */
        waitForElement('#quizResults', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();