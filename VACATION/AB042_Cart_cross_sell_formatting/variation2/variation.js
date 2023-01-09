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



        function listener() {
            /* These are the modifications: */
            window.addEventListener("locationchange", function() {
                waitForElement('#__next .cart > div:nth-child(2) >div', init, 50, 15000);
            });
            history.pushState = ((f) =>
                function pushState() {
                    var ret = f.apply(this, arguments);
                    window.dispatchEvent(new Event("pushstate"));
                    window.dispatchEvent(new Event("locationchange"));
                    return ret;
                })(history.pushState);
            history.replaceState = ((f) =>
                function replaceState() {
                    var ret = f.apply(this, arguments);
                    window.dispatchEvent(new Event("replacestate"));
                    window.dispatchEvent(new Event("locationchange"));
                    return ret;
                })(history.replaceState);
            window.addEventListener("popstate", () => {
                window.dispatchEvent(new Event("locationchange"));
            });
        }

        const egCompleMentoryHtml = `
        <ul class="eg-comp-products">
           
        </ul>`;

        live(['button', 'span', ".header__nav__count"], 'click', function() {
            if (this.innerText.toUpperCase().indexOf("BAG") != -1) {
                waitForElement('#__next .cart > div:nth-child(2) >div', init, 50, 15000);
            } else if ((this.innerText.toUpperCase() == "ADD") || (this.innerText.toUpperCase() == "REMOVE") || this.parentElement.classList.contains("cart__item__quantity")) {
                waitForElement('#__next .cart > div:nth-child(2) >div', init, 3000, 15000);

            } else if (this.classList.contains("header__nav__count") || this.parentElement.classList.contains("header__nav__count")) {
                waitForElement('#__next .cart > div:nth-child(2) >div', init, 50, 15000);
            }
        });

        /* Variation Init */
        function init() {
            /* start your code here */
            document.querySelector(".eg-comp-products") && document.querySelector(".eg-comp-products").remove();
            document.querySelector("#__next .cart > div:nth-child(2) >div").insertAdjacentHTML("beforeend", egCompleMentoryHtml);
            fecthData();
        }

        /*===============================================*/
        /*============== FETCHING PRODUCTS ==============*/
        /*===============================================*/
        // dummy products

        const egProducts = {
            "CLASSIC LOTION SPF 30": [
                "https://www.vacation.inc/products/classic-whip-spf-30",
                "https://www.vacation.inc/products/scent",
                "https://www.vacation.inc/products/ball-boy-candle"
            ],
            'PARTIAL OCEAN VIEW SUITE': [
                "https://www.vacation.inc/products/chardonnay-oil-spf-30",
                "https://www.vacation.inc/products/luxury-duo",
                "https://www.vacation.inc/products/classic-spray-spf-30"
            ],
            'SUPER SPRITZER': [
                "https://www.vacation.inc/products/mineral-lotion-spf-30",
                "https://www.vacation.inc/products/classic-lotion-pack-of-3",
                "https://www.vacation.inc/products/summer-leisure-pack"
            ],
            'MINERAL LOTION SPF 30': [
                "https://www.vacation.inc/products/air-freshener",
                "https://www.vacation.inc/products/classic-whip-air-freshener",
                "https://www.vacation.inc/products/chardonnay-air-freshener"
            ],
            'HOME RESORT THREE CANDLE SET': [
                "https://www.vacation.inc/products/suite-candle",
                "https://www.vacation.inc/products/lobby-candle",
                "https://www.vacation.inc/products/pool-boy-candle"
            ],
            'LIP DESSERTS 5X COLLECTOR’S SET': [
                "https://www.vacation.inc/products/strawberry-jello-salad",
                "https://www.vacation.inc/products/bananas-foster",
                "https://www.vacation.inc/products/bombe-alaska"
            ],
            'PINEAPPLE UPSIDE-DOWN CAKE': [
                "https://www.vacation.inc/products/air-freshener-4-pack",
                "https://www.vacation.inc/products/air-freshener-variety-pack-pack-of-4",
                "https://www.vacation.inc/products/scent-sample"
            ]
        }

        // for checking product name
        function fecthData() {
            waitForElement('#__next .cart .cart__item .cart__item__content >div >div >div >div .cart__content:nth-of-type(1)', function() {
                let egComp;
                let egTxts = document.querySelectorAll("#__next .cart .cart__item .cart__item__content >div >div >div >div .cart__content:nth-of-type(1)");
                for (let i = 0; i < egTxts.length; i++) {
                    egComp = egProducts[egTxts[i].innerText.toUpperCase()];
                    if (egComp) {
                        break;
                    }
                }


                // products skelton
                const egItemBox = document.querySelector(".eg-comp-products");
                if (egComp) {
                    // making request
                    async function getData() {
                        for (let i = 0; i < egComp.length; i++) {
                            url = egComp[i];
                            const response = await fetch(url);
                            const responseText = await response.text();
                            const ele = document.createElement("div");
                            ele.innerHTML = responseText;
                            const egName = ele.querySelector("#__next .shopping-block-pusher >div:nth-child(1) >div>h1").innerText;
                            const egPrice = ele.querySelector("#__next .shopping-block-pusher >div:nth-child(1) >div>h3:has(>span) > span").innerText;
                            const egImg = ele.querySelector("#__next .embla .embla__slide img").src;
                            // console.log("First com product")
                            // console.log(egName);
                            // console.log(egPrice);
                            // console.log(egImg);

                            // if comproduct is in cart list hiding it from suggestion
                            let egIsPresent = contains("#__next .cart .cart__item .cart__item__content >div >div >div >div .cart__content:nth-of-type(1)", egName)
                            if (egIsPresent.length <= 0) {
                                egItemBox.insertAdjacentHTML("beforeend", `
                                <li class="eg-comp-product">
                                    <!-- complementory product image -->
                                    <div class="eg-comp-product__img">
                                        <img src="${egImg}"/>
                                    </div>

                                    <!-- details and button -->
                                    <div class="eg-comp-product__details">
                                        <p class="eg-comp-product__name-price">
                                            ${egName} <span class="eg-price">${egPrice}</span>
                                        </p>
                                        <button class="eg-comp-product__cta">
                                            <span>ADD</span>
                                        </button>
                                    </div>
                                </li>`);
                            }

                            // updating product price in skeleton
                            ele.remove();
                        }

                    }

                    getData();


                } else {
                    console.log("no complementory product found!!")
                }
            }, 50, 15000);

        }

        // searching element by text inside of it
        function contains(selector, text) {
            var elements = document.querySelectorAll(selector);
            return [].filter.call(elements, function(element) {
                return RegExp(text).test(element.textContent);
            });
        }
        
        /* Initialize variation */
        listener();
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();