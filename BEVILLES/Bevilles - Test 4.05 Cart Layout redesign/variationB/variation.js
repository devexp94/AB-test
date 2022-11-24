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

        function live(selector, event, callback, context) {
            /****Helper Functions****/
            // helper for enabling IE 8 event bindings
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent("on" + type, handler);
                else el.addEventListener(type, handler);
            }
            // matches polyfill
            this.Element &&
                (function(ElementPrototype) {
                    ElementPrototype.matches =
                        ElementPrototype.matches ||
                        ElementPrototype.matchesSelector ||
                        ElementPrototype.webkitMatchesSelector ||
                        ElementPrototype.msMatchesSelector ||
                        function(selector) {
                            var node = this,
                                nodes = (node.parentNode || node.document).querySelectorAll(selector),
                                i = -1;
                            while (nodes[++i] && nodes[i] != node);
                            return !!nodes[i];
                        };
                })(Element.prototype);
            // live binding helper using matchesSelector
            function live(selector, event, callback, context) {
                addEvent(context || document, event, function(e) {
                    var found,
                        el = e.target || e.srcElement;
                    while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                    if (found) callback.call(el, e);
                });
            }
            live(selector, event, callback, context);
        }

        const egTruckSvg = `
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 495.317 495.317" style="enable-background:new 0 0 495.317 495.317;" xml:space="preserve">
<path d="M495.103,333.198c-1.933-9.851-19.004-96.612-23.221-109.279c-10.139-30.455-34.498-65.125-65.159-92.742
    c-31.879-28.713-64.908-45.181-90.62-45.181H65.991c-12.962,0-23.508,10.546-23.508,23.508v36.938H25.165
    c-6.351,0-11.5,5.149-11.5,11.5s5.149,11.5,11.5,11.5h17.317v27.432H11.5c-6.351,0-11.5,5.149-11.5,11.5
    c0,6.351,5.149,11.5,11.5,11.5h30.982v115.537c0,12.962,10.546,23.507,23.508,23.507h28.672
    c4.287,28.488,28.926,50.401,58.59,50.401c29.664,0,54.303-21.913,58.589-50.401h105.484c4.286,28.488,28.926,50.401,58.59,50.401
    c29.664,0,54.303-21.913,58.589-50.401h37.304c12.963,0,23.509-10.545,23.509-23.507
    C495.317,334.669,495.245,333.928,495.103,333.198z M448.743,227.476l-118.502-0.001V111.052
    C372.222,122.327,430.41,178.181,448.743,227.476z M153.253,386.32c-19.99,0-36.254-16.263-36.254-36.254
    c0-19.99,16.264-36.253,36.254-36.253c19.99,0,36.253,16.263,36.253,36.253C189.505,370.057,173.243,386.32,153.253,386.32z
     M375.916,386.32c-19.99-0.001-36.254-16.264-36.254-36.254c0-19.99,16.264-36.253,36.254-36.253s36.253,16.263,36.253,36.253
    C412.169,370.057,395.906,386.32,375.916,386.32z M471.24,335.919c-9.59,0-37.791,0-37.791,0
    c-6.361-25.861-29.736-45.105-57.533-45.105s-51.173,19.244-57.534,45.105H210.786c-6.361-25.861-29.736-45.105-57.533-45.105
    c-27.797,0-51.173,19.244-57.534,45.105H65.991c-0.28,0-0.508-0.228-0.508-0.507V219.875h140.934c6.351,0,11.5-5.149,11.5-11.5
    c0-6.351-5.149-11.5-11.5-11.5H65.482v-27.432h64.87c6.351,0,11.5-5.149,11.5-11.5s-5.149-11.5-11.5-11.5h-64.87v-36.938
    c0-0.28,0.228-0.508,0.508-0.508h241.251v129.978c0,6.351,5.148,11.5,11.5,11.5l135.955,0.001
    c4.904,22.361,11.63,58.202,17.356,84.734C472.168,335.744,471.834,335.919,471.24,335.919z"/>
</svg>
`;

        const egCollectSvg = `
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 217.205 217.205" style="enable-background:new 0 0 217.205 217.205;" xml:space="preserve">

    <path d="M167.631,101.102H49.574c-16.216,0-29.408-13.199-29.408-29.422c0-16.211,13.192-29.399,29.408-29.399h73.789
        c4.143,0,7.5-3.358,7.5-7.5c0-4.142-3.357-7.5-7.5-7.5H49.574c-24.486,0-44.408,19.917-44.408,44.399
        c0,24.494,19.922,44.422,44.408,44.422h118.057c16.216,0,29.408,13.199,29.408,29.423c0,16.211-13.192,29.399-29.408,29.399H93.205
        c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h74.426c24.486,0,44.408-19.917,44.408-44.399
        C212.039,121.03,192.117,101.102,167.631,101.102z"/>
    <path d="M48.516,130.001c-17.407,0-31.568,14.162-31.568,31.568c0,26.865,25.192,52.367,26.265,53.439
        c1.407,1.407,3.314,2.197,5.304,2.197c1.989,0,3.897-0.79,5.304-2.197c1.072-1.073,26.263-26.574,26.263-53.439
        C80.082,144.163,65.922,130.001,48.516,130.001z M48.516,198.357c-6.477-7.995-16.568-22.713-16.568-36.788
        c0-9.136,7.433-16.568,16.568-16.568c9.135,0,16.566,7.433,16.566,16.568C65.082,175.644,54.991,190.362,48.516,198.357z"/>
    <path d="M168.053,87.202c1.919,0,3.838-0.732,5.302-2.195c1.073-1.072,26.278-26.573,26.278-53.44
        C199.633,14.161,185.466,0,168.053,0c-17.407,0-31.568,14.161-31.568,31.566c0,26.866,25.192,52.367,26.266,53.439
        C164.214,86.47,166.133,87.202,168.053,87.202z M168.053,15c9.143,0,16.58,7.432,16.58,16.566c0,14.076-10.1,28.796-16.579,36.79
        c-6.476-7.994-16.569-22.713-16.569-36.79C151.484,22.432,158.917,15,168.053,15z"/>
</svg>
`;


        function init() {
            const egFreeShip = document.querySelector("#content #shopify-section-cart-template .freeShipMsg");
            const egCartSectionRght = document.querySelector("#content #cartform .cart-right-section");

            // text bold in free ship msg
            egFreeShip.querySelector("p").innerHTML = egFreeShip.querySelector("p").innerHTML.replace("FREE SHIPPING!", "<strong class='eg-freeship-bold'>FREE SHIPPING!</strong>");

            // inserting login signup msg
            egFreeShip.insertAdjacentHTML("beforebegin", `
              <div class="eg-login-signup-msg">
                  <p>Have an Account? <a href="#" data-login><strong>Login</strong></a> or <a href="#" data-login><strong>sign up</strong></a></p>
              </div>
            `);



            //adding heart icon
            document.querySelectorAll("#content #cartform .cart-items .item .description").forEach(ele => {
                ele.insertAdjacentHTML("afterbegin", `<div class="eg-move-to-wishlist"></div>`);
            })

            live('.eg-move-to-wishlist', 'click', function() {
                this.parentElement.querySelector("a.move_to_wishlist").click();
            });

            // defalult radio check
            document.querySelector("#content #cartform .cart-right-section .delivery-option #location-container input#bevilles-home-radio").checked = true;


            // changing tabs innerHtml
            const egDelivery = document.querySelector("#content #cartform .cart-right-section .delivery-option #location-container label[for='bevilles-home-radio']");
            const egCollect = document.querySelector("#content #cartform .cart-right-section .delivery-option #location-container label[for='bevilles-store-radio']");

            // changing delevery text
            document.querySelector("#content .cart-amount-summary label[for='checkout']:nth-of-type(1)").textContent = "Order summary";

            egDelivery.innerHTML = `<span class="eg-delivery-tab">${egTruckSvg} Delivery</span>`;
            egCollect.innerHTML = `<span class="eg-delivery-tab">${egCollectSvg} Click &amp; Collect</span>`;

            // inserting new div in cart summary

            egCartSectionRght.insertAdjacentHTML("beforeend", `<div class="eg-verified-trust">
                <div class="tabel-list eg-tabel-list">
                    <ul class="eg-benifits">
                         <li>Free Returns for 14 days</li>
                        <li>90 Day Exchanges</li>
                        <li>365 Day Jewellery Warranty</li>
                     </ul>
                </div>
                </div>`);

            // moving verified box inside this div
            const egVerifiedBox = document.querySelector("#content #cartform .cart-right-section .cart-amount-summary .badge-cart");
            document.querySelector(".eg-verified-trust").insertAdjacentElement("afterbegin", egVerifiedBox);

            // moving delivery and click & collect box inside right section
            if (window.innerWidth < 768) {
                document.querySelector("#content .cart-left-section").insertAdjacentElement("beforeend", egCartSectionRght);
            }

        }


        // for slider
        function waitForSlick(trigger) {
            var interval = setInterval(function() {
                if (window.jQuery.fn.slick != undefined) {
                    clearInterval(interval);
                    trigger();
                }
            }, 50);
            setTimeout(function() {
                clearInterval(interval);
            }, 15000)
        }

        function waitForjQuery(trigger) {
            var interval = setInterval(function() {
                if (window.jQuery != undefined) {
                    clearInterval(interval);
                    trigger();
                }
            }, 50);
            setTimeout(function() {
                clearInterval(interval);
            }, 15000)
        }

        function addScript() {
            var cssScript = '' +
                "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css'/>";
            document.querySelector('head').insertAdjacentHTML('beforeend', cssScript);
            var swiperScript = document.createElement('script');
            swiperScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js';
            document.getElementsByTagName('head')[0].appendChild(swiperScript);
        }

        waitForElement("#content #shopify-section-cart-template", init, 100, 35000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();