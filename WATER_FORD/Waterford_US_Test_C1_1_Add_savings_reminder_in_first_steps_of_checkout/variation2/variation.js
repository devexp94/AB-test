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

        let egAccordianHTML = `
    <div class="c-checkout-summary-cart eg-promo-accordian">
        <button data-toggle="collapse" aria-controls="eg-promo-accordian" aria-expanded="false" type="button" role="tab" class="summary-trigger collapse-toggle collapsed" data-target="#eg-promo-accordian">
            <div class="cart-trigger-title"><span class="sr-only open-text">Open promo section</span> <span class="sr-only close-text">Hide promo section</span> <span aria-hidden="true" class="text">apply promo code</span></div> <span class="toggle-icon closed"><span role="img" aria-hidden="true" class="icon icon-plus-circle"></span></span> <span class="toggle-icon opened"><span role="img" aria-hidden="true" class="icon icon-minus-circle"></span></span>
        </button>
        <section class="c-minicart collapse" id="eg-promo-accordian">
            
        </section>
    </div>`;

        let egAccordianMobileHTML = `
    <div class="eg-mobile-wrapper">
    <button data-toggle="collapse" data-target="#eg-promo-accordian-mob" aria-controls="#eg-promo-accordian-mob" role="tab" type="button" class="summary-trigger collapse-toggle collapsed" aria-expanded="false">
        <div class="cart-trigger-title"><span class="text">apply promo code</span></div> <span class="toggle-icon opened"><span role="img" aria-hidden="true" class="icon icon-minus-circle"></span></span> <span class="toggle-icon closed"><span role="img" aria-hidden="true" class="icon icon-plus-circle"></span></span>
    </button>
    <div id="eg-promo-accordian-mob" data-cy="collapsibleSummary" class="collapsible-summary collapse">
        
    </div>
</div>`;

        /* Variation Init */
        function init() {
            /* start your code here */
            // for desktop
            waitForElement('.c-checkout-summary.isBelow #collapsible-summary19', function() {
                document.querySelector(".c-checkout-summary.isBelow #collapsible-summary19 > .c-checkout-summary-cart").insertAdjacentHTML("afterend", egAccordianHTML);
                let egPromoDiv = document.querySelector(".c-checkout-summary.isBelow #collapsible-summary19 > .c-summary-details .c-summary-details_item:nth-child(2)");
                document.querySelector("#eg-promo-accordian").insertAdjacentElement("afterbegin", egPromoDiv);
                document.querySelector("#eg-promo-accordian>div label[for=pc-form-input]").childNodes[0].textContent = '';
            }, 50, 15000);

            // for mobiles

            waitForElement('.c-checkout-summary.isAbove #collapsible-summary14', function() {
                document.querySelector(".c-checkout-summary.isAbove #collapsible-summary14 > .c-checkout-summary-cart").insertAdjacentHTML("afterend", egAccordianMobileHTML);
                let egPromoDiv = document.querySelector(".c-checkout-summary.isAbove #collapsible-summary14 > .c-summary-details .c-summary-details_item:nth-child(2)");
                document.querySelector("#eg-promo-accordian-mob").insertAdjacentElement("afterbegin", egPromoDiv);
                document.querySelector("#eg-promo-accordian-mob>div label[for=pc-mobile-form-input]").childNodes[0].textContent = '';
            }, 50, 15000);

        }



        /* Initialize variation */
        waitForElement('body', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();