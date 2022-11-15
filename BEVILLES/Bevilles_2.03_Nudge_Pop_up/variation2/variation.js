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

        // timer block html
        const egTimerHtml = `
            <div class="s001-banner-wrapper">
                <div class="s001-banner-data">
                    <p class="eg-txt">Order within</p>
                    <p><span class="whole-time-block"><span class="s001-timer-h"></span> Hours <span class="s001-timer-m"></span> Minutes <span class="s001-timer-s"></span> Seconds</p>
                    <p class="eg-txt">to get your order dispatched next business day</p>
                </div>
            </div>`;

        // popup html 

        const egPopupHTML = `
<!-- overlay div -->
<div class="eg-popup-overlay"></div>
 <!-- popup box -->
    <div class="eg-popup-wrapper-outer">
    <div class="eg-popup-wrapper" role="dialog">
        <div class="eg-popup-container">
            <div class="action-icons eg-close-icon"><a href="#" class="close-box action-icon"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                    </svg></a></div>
            <div class="added-notice eg-added-notice">
                <div class="added-notice__product">
                    <div class="added-notice__product__description">
                        <div class="added-notice__description_top">
                            <div class="eg-cart-icon
    ">
                                <svg width="50" height="48" viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.4277 38.148C25.1146 38.148 27.4176 40.3231 27.4176 43.138C27.4176 45.8249 25.1146 48 22.4277 48C19.7408 48 17.4377 45.8249 17.4377 43.138C17.4377 40.3231 19.7408 38.148 22.4277 38.148ZM22.4277 40.7071C21.0202 40.7071 19.9965 41.7307 19.9965 43.1382C19.9965 44.4177 21.0202 45.4412 22.4277 45.4412C23.7072 45.4412 24.8588 44.4176 24.8588 43.1382C24.8588 41.7307 23.7072 40.7071 22.4277 40.7071Z" fill="#A6C3E2"/>
<path d="M37.9099 38.148C40.5968 38.148 42.8998 40.3231 42.8998 43.138C42.8998 45.8249 40.5967 48 37.9099 48C35.223 48 32.9199 45.8249 32.9199 43.138C32.9199 40.3231 35.223 38.148 37.9099 38.148ZM37.9099 40.7071C36.6303 40.7071 35.4787 41.7307 35.4787 43.1382C35.4787 44.4177 36.6303 45.4412 37.9099 45.4412C39.1894 45.4412 40.341 44.4176 40.341 43.1382C40.341 41.7307 39.1894 40.7071 37.9099 40.7071Z" fill="#A6C3E2"/>
<path d="M1.95568 0.018938L10.5283 1.93821C11.0401 2.06613 11.296 2.32213 11.4239 2.8338L13.4711 12.5579H48.4014C49.0412 12.5579 49.553 13.1976 49.4251 13.9653L44.691 30.8548C44.5631 31.3666 44.1792 31.6225 43.6673 31.6225H17.4375L17.9493 34.4373H43.2834C44.6909 34.4373 44.6909 36.9964 43.2834 36.9964H16.7978C16.286 36.9964 15.7741 36.6124 15.6462 36.1008L9.12076 4.24113L1.44381 2.57785C-0.0915338 2.19393 0.548225 -0.237014 1.95564 0.0188158L1.95568 0.018938ZM13.9831 15.117L16.7979 29.0637H42.6437L46.4822 15.117H13.9831Z" fill="#A6C3E2"/>
</svg>
                            </div>
                            <div class="added-notice__title eg-notice-title">We noticed you left<br>something in your cart
                            </div>
                            <div class="eg-confirmation-text">Would you like to complete your order?
                            </div>
                        </div>
                        <div class="tabel-list eg-tabel-list">
                            <!-- fast dispatch block -->
                            <div class="eg-fast-dispatch">
                                <a class="close-box more-link eg-dispatch-link" href="#">Fast Dispatch</a>
                                <div class="eg-show-item">
                                    <!-- item image -->
                                    <div class='eg-show-item-img'>
                                        <img src="https://i.ibb.co/Xb55Ksj/item-in-popup.png" alt="item-in-popup" border="0">
                                    </div>
                                <!-- item name and price -->
                                    <div class='eg-show-item-details'>
                                        <p class="eg-name">Halo Claw Set Ring with 1.00ct of Diamonds in Sterling Silver</p>
                                        <p class='eg-price'><strong>&dollar;299</strong><a class="close-box more-link eg-dispatch-link" href="#">Fast Dispatch</a></p>
                                    </div>
                                </div>
                            </div>
                            ${egTimerHtml}
                            <div class="added-notice__checkout eg-checkout"><a class="button" href="/cart">View Cart and Checkout</a></div>
                            <div class="added-notice__continue eg-continue"><a class="close-box more-link" href="#">Continue shopping</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    `;
        // variable for timer
        var intervalFn;

        /* Variation Init */
        function init() {
            /* start your code here */
            // adding class to body
            document.body.classList.add("eg-body");

            document.body.insertAdjacentHTML("afterbegin", egPopupHTML);

            // logic to hide popup
            document.querySelector(".eg-close-icon").addEventListener("click", (e) => {
                document.querySelector(".eg-popup-overlay").style.cssText = document.querySelector(".eg-popup-wrapper-outer").style.cssText = `
                    z-index:-1000;
                    display:none;
                    overflow:hidden;
                  `;  
            });

            // running timer function after showing popup
            timerfn();
        }

        // timer function
        function timerfn() {
            const date = new Date();
            let hours = date.getHours();
            let ss02hours = 0;
            if(hours > 12){
                ss02hours = 11 - (hours - 12);
            } else {
                ss02hours = 11 - hours;
            }
            let ss02minutes = 60 - date.getMinutes();
            let ss02seconds = 60 - date.getSeconds();
            intervalFn = setInterval(function() {
                --ss02seconds;
                if (ss02hours === 0) {
                    clearInterval(intervalFn);
                    ss02minutes = 0;
                    ss02seconds = 0;
                }
                if (ss02minutes === 0 && ss02seconds === 0) {
                    --ss02hours;
                    // clearInterval(intervalFn);
                    // timerfn();
                    ss02minutes = 10;
                    ss02seconds = 0;
                }
                if (ss02seconds <= 0) {
                    ss02seconds = 59;
                    --ss02minutes;
                }
                document.querySelector('.s001-timer-h').innerHTML = ss02hours;

                document.querySelector('.s001-timer-m').innerHTML = ss02minutes;
                if (ss02seconds < 10) {
                    document.querySelector('.s001-timer-s').innerHTML = '0' + ss02seconds;
                } else
                    document.querySelector('.s001-timer-s').innerHTML = ss02seconds;

            }, 1000);
        }

        /* Initialize variation */
        waitForElement('body', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();