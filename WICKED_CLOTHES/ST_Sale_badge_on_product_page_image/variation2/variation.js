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
            let egCrrPrice = Math.floor(document.querySelector(".price .current_price").innerText.replace("$", ""));
            let egWasPriceEle = document.querySelector(".price .was_price");

            if (egWasPriceEle) {
                let egWasPrice = Math.floor(document.querySelector(".price .was_price").innerText.replace("$", ""));
                let egDiscount = Math.floor(Math.abs(egWasPrice - egCrrPrice));

                const egSaleBadge = `
                    <div class="eg-sale-badge">
                       <p class="eg-text">YOU SAVE</p>
                        <strong class="eg-saved">&dollar;${egDiscount}</strong>
                    </div>`;

                document.querySelector("html body #pdp--main-image").insertAdjacentHTML("beforeend", egSaleBadge);
                // if there is slick slider waiting for it and
                // moving our element just after it
                waitForElement("#pdp--main-image > button.slick-next",function(){
                    document.querySelector("#pdp--main-image > button.slick-next").insertAdjacentElement("afterend", document.querySelector(".eg-sale-badge"));
                },50,15000);
            }


        }

        /* Initialize variation */
        waitForElement('html body #pdp--main-image', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();