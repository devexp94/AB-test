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

        const egIcons = {
            visa: "https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg",
            paypal: "https://cdn.shopify.com/shopifycloud/shopify/assets/checkout/offsite-gateway-logos/paypal@2x-768388b0667bef1aa9a7cf02fa1cc2184c2915a90d4cdd62dde223f74f2acbfc.png",
            afterpay: "https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/afterpay-c814f73b45b605f4c618ce52eb8c67427d3ae3cb8addb872e621dfbabae0b5f0.svg",
            shoppay: "https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg",
            mastercard: "https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg"
        }

        const egPaymentsIcons = `
            <div class="eg-we-support">
                <ul class="eg-icons">
                    <!-- VISA -->

                    <li><img class="eg-icon" src="${egIcons.visa}"></img></li>
                    <!-- PAYPAL -->
                    <li><img class="eg-icon" src="${egIcons.paypal}"></img></li>
                    <!-- AFTERPAY -->
                    <li><img class="eg-icon" src="${egIcons.afterpay}"></img></li>
                    <!-- SHOPPAY -->
                    <li><svg class="eg-icon eg-shop-pay" preserveAspectRatio="xMidYMid" class="qZgSr5RiiBCTAMfQYsty"><use xlink:href="#shopify-svg__payments-shop-pay"></use></svg></li>
                    <!-- MASTERCARD -->
                    <li><img class="eg-icon" src="${egIcons.mastercard}"></img></li>
                </ul>
            </div>
        `;


        /* Variation Init */
        function init() {
            /* start your code here */
            document.querySelector("html body .inline-cart__footer-info").insertAdjacentHTML("beforebegin",egPaymentsIcons);
        }

        /* Initialize variation */
        waitForElement('html body .inline-cart__footer-info', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();