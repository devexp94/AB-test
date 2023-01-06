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
        <!-- complementory product one -->
        <li class="eg-comp-product">
            <!-- complementory product image -->
            <div class="eg-comp-product__img">
                <img src="https://cdn.sanity.io/images/kie4hq77/development/e37ece62f678845561172009cd0379fa5b4c8075-2000x2000.png?auto=format&q=75&w=200&h=200"/>
            </div>

            <!-- details and button -->
            <div class="eg-comp-product__details">
                <p class="eg-comp-product__name-price">
                    Get the scent of the world's best-smelling sunscreen, for your car or home office for <span class="eg-price">
$5</span>
                </p>
                <button class="eg-comp-product__cta">
                    <span>ADD</span>
                </button>
            </div>
        </li>
        <!-- complementory product two -->
        <li class="eg-comp-product">
            <!-- complementory product image -->
            <div class="eg-comp-product__img">
                <img src="https://cdn.sanity.io/images/kie4hq77/development/e37ece62f678845561172009cd0379fa5b4c8075-2000x2000.png?auto=format&q=75&w=200&h=200"/>
            </div>

            <!-- details and button -->
            <div class="eg-comp-product__details">
                <p class="eg-comp-product__name-price">
                    Get the scent of the world's best-smelling sunscreen, for your car or home office for <span class="eg-price">
$5</span>
                </p>
                <button class="eg-comp-product__cta">
                    <span>ADD</span>
                </button>
            </div>
        </li>

        <!-- complementory product three -->
        <li class="eg-comp-product">
            <!-- complementory product image -->
            <div class="eg-comp-product__img">
                <img src="https://cdn.sanity.io/images/kie4hq77/development/e37ece62f678845561172009cd0379fa5b4c8075-2000x2000.png?auto=format&q=75&w=200&h=200"/>
            </div>

            <!-- details and button -->
            <div class="eg-comp-product__details">
                <p class="eg-comp-product__name-price">
                    Get the scent of the world's best-smelling sunscreen, for your car or home office for <span class="eg-price">
$5</span>
                </p>
                <button class="eg-comp-product__cta">
                    <span>ADD</span>
                </button>
            </div>
        </li>
    </ul>
`;
        live(['button', 'span'], 'click', function() {
            if (this.innerText.toUpperCase().indexOf("BAG") != -1) {
                waitForElement('#__next .cart > div:nth-child(2) >div', init, 50, 15000);
            } else if ((this.innerText.toUpperCase() == "ADD") || (this.innerText.toUpperCase() == "REMOVE") || this.parentElement.classList.contains("cart__item__quantity")) {
                waitForElement('#__next .cart > div:nth-child(2) >div', init, 3000, 15000);

            }
        });

        listener();
        /* Variation Init */
        function init() {
            /* start your code here */

            if (!document.querySelector(".eg-comp-products")) {
                document.querySelector("#__next .cart > div:nth-child(2) >div").insertAdjacentHTML("beforeend", egCompleMentoryHtml);
                fecthData();
            } else {
                fecthData();
            }

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
                    if (egProducts[egTxts[i].innerText.toUpperCase()]) {
                        egComp = egProducts[egTxts[i].innerText.toUpperCase()]
                        break;
                    } else {
                        document.querySelector(".eg-comp-products").style.display = "none";
                    }
                }

                console.log(egComp);

                // products skelton
                const egItems = document.querySelectorAll(".eg-comp-product");
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

                            // updating img src in skeleton
                            egItems[i].querySelector(".eg-comp-product__img > img").src = egImg;
                            // updating product name in skeleton
                            egItems[i].querySelector(".eg-comp-product__name-price").childNodes[0].textContent = egName;
                            // updating product price in skeleton
                            egItems[i].querySelector(".eg-price").innerText = egPrice;
                            ele.remove();
                        }
                        document.querySelector(".eg-comp-products").style.display = "block";

                    }

                    getData();


                } else {
                    console.log("no complementory product found!!")
                }
            }, 50, 15000);

        }



        /* Initialize variation */
        waitForElement('#__next .cart > div:nth-child(2) >div', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();