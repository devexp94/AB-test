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

        // new banner html
        const egTickIcon = `
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 191.667 191.667" style="enable-background:new 0 0 191.667 191.667;" xml:space="preserve">
            <path d="M95.833,0C42.991,0,0,42.99,0,95.833s42.991,95.834,95.833,95.834s95.833-42.991,95.833-95.834S148.676,0,95.833,0z
             M150.862,79.646l-60.207,60.207c-2.56,2.56-5.963,3.969-9.583,3.969c-3.62,0-7.023-1.409-9.583-3.969l-30.685-30.685
             c-2.56-2.56-3.97-5.963-3.97-9.583c0-3.621,1.41-7.024,3.97-9.584c2.559-2.56,5.962-3.97,9.583-3.97c3.62,0,7.024,1.41,9.583,3.971
            l21.101,21.1l50.623-50.623c2.56-2.56,5.963-3.969,9.583-3.969c3.62,0,7.023,1.409,9.583,3.969
            C156.146,65.765,156.146,74.362,150.862,79.646z" />
        </svg>`;

        const egNewBannerHTML = `
        <section class="eg-banner">
            <div class="eg-banner-wrapper">
                <div class="eg-container">
                    <!-- left content -->
                    <div class="eg-left-content">
                        <!--heading-->
                        <h1 class="eg-heading">Shop mobile plans</h1>

                        <!--benefits-->
                        <ul class="eg-benefits">
                            <li>
                                <span class="eg-icons">
                                    ${egTickIcon}    
                                </span>
                                <p>Unlimited Data</p>
                            </li>

                            <li>
                                <span class="eg-icons">
                                    ${egTickIcon}
                                </span>
                                <p>No Contract</p>
                            </li>
                            
                            <li>
                                <span class="eg-icons">
                                    ${egTickIcon}
                                </span>
                                <p>Singapore's #1 Mobile Virtual Network Operator</p>
                            </li>
                        </ul>

                        <!-- plans cta only will show onmobiles -->
                        <a href="#" class="eg-checkout-plans-cta">Check out plans</a>
                        
                        <!-- description mobile view -->
                        <p class="eg-desc" id="eg-desc-mobile">
                            Voted Singapore's #1 Mobile Virtual Network Operator (MVNO), MyRepublic brings you mobile plans that have you covered in all the ways that matter.
                        </p>

                        <!-- description desktop -->
                        <p class="eg-desc" id="eg-desc-desktop">
                            MyRepublic brings you mobile plans that have you covered in all the ways that matter. SIM only plans, unlimited data plans, no contract plans, and no hidden chargess. All plans are available in eSIM or physical SIM options.
                        </p>
                    </div>

                    <!-- right content -->
                    <div class="eg-right-content">
                        <img class="eg-banner-image" src="https://expogrowth.in/wp-content/uploads/2022/11/image-1.png" alt="banner-image">
                    </div>
                </div>
            </div>
        </section>
        `;

        /* Variation functions */
        function init() {
            // write your js here(function can be outside)
            document.querySelector("main article .elementor-section-wrap section:nth-child(2)").insertAdjacentHTML("beforebegin", egNewBannerHTML);

            // mobile cta scroll to first plan
            const egCta = document.querySelector(".eg-checkout-plans-cta");

            egCta.addEventListener("click", (e) => {
                e.preventDefault();
                window.scrollTo({
                    top: 1170,
                    behavior: 'smooth',
                })
            });

        }


        /* Initialize variation */
        waitForElement("main article .elementor-section-wrap section:nth-child(2)", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();