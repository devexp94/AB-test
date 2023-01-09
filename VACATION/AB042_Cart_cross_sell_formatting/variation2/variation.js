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

        live(['button', 'span', ".header__nav__count", ".eg-comp-product__cta"], 'click', function() {
            if (this.innerText.toUpperCase().indexOf("BAG") != -1) {
                waitForElement('#__next .cart > div:nth-child(2) >div', init, 50, 15000);
            } else if ((this.classList.contains("eg-comp-product__cta")) || (this.parentElement.classList.contains("eg-comp-product__cta"))) {
                // add to cart functionality
                fetch("https://checkout.vacation.inc/api/2020-07/graphql", {
                        "headers": {
                            "accept": "application/json",
                            "accept-language": "*",
                            "content-type": "application/json",
                            "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
                            "sec-ch-ua-mobile": "?0",
                            "sec-ch-ua-platform": "\"macOS\"",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-site",
                            "x-sdk-variant": "javascript",
                            "x-sdk-version": "2.11.0",
                            "x-shopify-storefront-access-token": "fe00875189b0e661fdcf65285171dc0f"
                        },
                        "referrer": "https://www.vacation.inc/",
                        "referrerPolicy": "strict-origin-when-cross-origin",
                        "body": "{\"query\":\"fragment VariantFragment on ProductVariant  { id,title,price,priceV2 { amount,currencyCode },presentmentPrices (first: 20) { pageInfo { hasNextPage,hasPreviousPage },edges { node { price { amount,currencyCode },compareAtPrice { amount,currencyCode } } } },weight,available: availableForSale,sku,compareAtPrice,compareAtPriceV2 { amount,currencyCode },image { id,src: originalSrc,altText },selectedOptions { name,value },unitPrice { amount,currencyCode },unitPriceMeasurement { measuredType,quantityUnit,quantityValue,referenceUnit,referenceValue } },fragment DiscountApplicationFragment on DiscountApplication  { __typename,targetSelection,allocationMethod,targetType,value { ... on MoneyV2 { amount,currencyCode },... on PricingPercentageValue { percentage } },... on ManualDiscountApplication { title,description },... on DiscountCodeApplication { code,applicable },... on ScriptDiscountApplication { description },... on AutomaticDiscountApplication { title } },fragment AppliedGiftCardFragment on AppliedGiftCard  { amountUsedV2 { amount,currencyCode },balanceV2 { amount,currencyCode },presentmentAmountUsed { amount,currencyCode },id,lastCharacters },fragment VariantWithProductFragment on ProductVariant  { ...VariantFragment,product { id,handle } },fragment UserErrorFragment on UserError  { field,message },fragment CheckoutUserErrorFragment on CheckoutUserError  { field,message,code },fragment MailingAddressFragment on MailingAddress  { id,address1,address2,city,company,country,firstName,formatted,lastName,latitude,longitude,phone,province,zip,name,countryCode: countryCodeV2,provinceCode },fragment CheckoutFragment on Checkout  { id,ready,requiresShipping,note,paymentDue,paymentDueV2 { amount,currencyCode },webUrl,orderStatusUrl,taxExempt,taxesIncluded,currencyCode,totalTax,totalTaxV2 { amount,currencyCode },lineItemsSubtotalPrice { amount,currencyCode },subtotalPrice,subtotalPriceV2 { amount,currencyCode },totalPrice,totalPriceV2 { amount,currencyCode },completedAt,createdAt,updatedAt,email,discountApplications (first: 10) { pageInfo { hasNextPage,hasPreviousPage },edges { node { __typename,...DiscountApplicationFragment } } },appliedGiftCards { ...AppliedGiftCardFragment },shippingAddress { ...MailingAddressFragment },shippingLine { handle,price,priceV2 { amount,currencyCode },title },customAttributes { key,value },order { id,processedAt,orderNumber,subtotalPrice,subtotalPriceV2 { amount,currencyCode },totalShippingPrice,totalShippingPriceV2 { amount,currencyCode },totalTax,totalTaxV2 { amount,currencyCode },totalPrice,totalPriceV2 { amount,currencyCode },currencyCode,totalRefunded,totalRefundedV2 { amount,currencyCode },customerUrl,shippingAddress { ...MailingAddressFragment },lineItems (first: 250) { pageInfo { hasNextPage,hasPreviousPage },edges { cursor,node { title,variant { ...VariantWithProductFragment },quantity,customAttributes { key,value } } } } },lineItems (first: 250) { pageInfo { hasNextPage,hasPreviousPage },edges { cursor,node { id,title,variant { ...VariantWithProductFragment },quantity,customAttributes { key,value },discountAllocations { allocatedAmount { amount,currencyCode },discountApplication { __typename,...DiscountApplicationFragment } } } } } },mutation ($checkoutId:ID!,$lineItems:[CheckoutLineItemInput!]!)  { checkoutLineItemsAdd (checkoutId: $checkoutId lineItems: $lineItems) { userErrors { ...UserErrorFragment },checkoutUserErrors { ...CheckoutUserErrorFragment },checkout { ...CheckoutFragment } } }\",\"variables\":{\"checkoutId\":\"" + readCookie('vacation_checkout_id') + "\",\"lineItems\":[{\"variantId\":\"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTY3ODk5NTY2MDk3NA==\",\"quantity\":1,\"customAttributes\":[{\"key\":\"_subtitle\",\"value\":\"SPF 30 Sunscreen Lotion\"},{\"key\":\"_sc\",\"value\":\"undefined_undefined_undefined\"}]}]}}",
                        "method": "POST",
                        "mode": "cors",
                        "credentials": "omit"
                    }).then((response) => response.json())
                    .then((data) => {
                        window.location.reload();
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });;
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
            "CLASSIC LOTION SPF 30": {
                "comp-products": [{
                        "url": "https://www.vacation.inc/products/classic-whip-spf-30",
                        "id": 30
                    },
                    {
                        "url": "https://www.vacation.inc/products/scent",
                        "id": 30
                    },
                    {
                        "url": "https://www.vacation.inc/products/ball-boy-candle",
                        "id": 30
                    },
                ]
            },
            'PARTIAL OCEAN VIEW SUITE': {
                "comp-products": [{
                        "url": "https://www.vacation.inc/products/chardonnay-oil-spf-30",
                        "id": 30
                    },
                    {
                        "url": "https://www.vacation.inc/products/luxury-duo",
                        "id": 30
                    },
                    {
                        "url":"https://www.vacation.inc/products/classic-spray-spf-30",
                        "id": 30
                    },
                ]
            },
            'SUPER SPRITZER': {
                "comp-products": [{
                        "url": "https://www.vacation.inc/products/mineral-lotion-spf-30",
                        "id": 30
                    },
                    {
                        "url":"https://www.vacation.inc/products/classic-lotion-pack-of-3",
                        "id": 30
                    },
                    {
                        "url":"https://www.vacation.inc/products/summer-leisure-pack",
                        "id": 30
                    },
                ]
            },
            'MINERAL LOTION SPF 30': {
                "comp-products": [{
                        "url":"https://www.vacation.inc/products/air-freshener",
                        "id": 30
                    },
                    {
                        "url":"https://www.vacation.inc/products/classic-whip-air-freshener",
                        "id": 30
                    },
                    {
                        "url":"https://www.vacation.inc/products/chardonnay-air-freshener",
                        "id": 30
                    },
                ]
            },
            'HOME RESORT THREE CANDLE SET': {
                "comp-products": [{
                        "url":"https://www.vacation.inc/products/suite-candle",
                        "id": 30
                    },
                    {
                        "url":"https://www.vacation.inc/products/lobby-candle",
                        "id": 30
                    },
                    {
                        "url":"https://www.vacation.inc/products/pool-boy-candle",
                        "id": 30
                    },
                ]
            },
            'LIP DESSERTS 5X COLLECTOR’S SET': {
                "comp-products": [{
                        "url":"https://www.vacation.inc/products/strawberry-jello-salad",
                        "id": 30
                    },
                    {
                        "url":"https://www.vacation.inc/products/bananas-foster",
                        "id": 30
                    },
                    {
                        "url":"https://www.vacation.inc/products/bombe-alaska",
                        "id": 30
                    },
                ]
            },
            'PINEAPPLE UPSIDE-DOWN CAKE': {
                "comp-products": [{
                        "url":"https://www.vacation.inc/products/air-freshener-4-pack",
                        "id": 30
                    },
                    {
                        "url":"https://www.vacation.inc/products/air-freshener-variety-pack-pack-of-4",
                        "id": 30
                    },
                    {
                        "url":"https://www.vacation.inc/products/scent-sample",
                        "id": 30
                    },
                ]
            }
        }

        // for checking product name
        function fecthData() {

            waitForElement('#__next .cart .cart__item .cart__item__content >div >div >div >div .cart__content:nth-of-type(1)', function() {
                let egComp;
                let egTxts = document.querySelectorAll("#__next .cart .cart__item .cart__item__content >div >div >div >div .cart__content:nth-of-type(1)");
                for (let i = 0; i < egTxts.length; i++) {
                    egComp = egProducts[egTxts[i].innerText.toUpperCase()]["comp-products"];
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
                            url = egComp[i].url;
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
                            if (egIsPresent.length <= 0 && !egItemBox.querySelector(`#eg-comp-${i}`)) {
                                egItemBox.insertAdjacentHTML("beforeend", `
                                <li class="eg-comp-product" id="eg-comp-${i}">
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

        // add to cart functionality
        function readCookie(name) {
            // READ COOKIE
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }



        /* Initialize variation */
        listener();
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();