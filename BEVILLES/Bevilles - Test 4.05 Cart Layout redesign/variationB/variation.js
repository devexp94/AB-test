(function() {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";
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


        function init() {
            const egFreeShip = document.querySelector("#content #shopify-section-cart-template .freeShipMsg");

            // inserting login signup msg
            egFreeShip.insertAdjacentHTML("beforebegin", `
              <div class="eg-login-signup-msg">
                  <p>Have an Account? <a href="#" data-login><strong>Login</strong></a> or <a href="#" data-login><strong>sign up</strong></a></p>
              </div>
            `);
        }

        waitForElement("#content #shopify-section-cart-template", init, 100, 35000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();