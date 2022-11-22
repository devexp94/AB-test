(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";

        /* all Pure helper functions */

        function waitForElement(selector, trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function () {
                if (
                    document &&
                    document.querySelector(selector) &&
                    document.querySelectorAll(selector).length > 0
                ) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function () {
                clearInterval(interval);
            }, delayTimeout);
        }
        /* Variation functions */

        let eg_Img = `
    <div class="egImg">
    <img class="full-2-1-breakpoints-theme-moorings-xsw-1x" src="https://editor-assets.abtasty.com/46121/637c78c60d1091669101766.png" width="768" height="384" alt="">
    </div>
  `;
  var images = ['https://editor-assets.abtasty.com/46121/637c78a6e843c1669101734.png','https://editor-assets.abtasty.com/46121/637c785999bca1669101657.png','https://editor-assets.abtasty.com/46121/637c78c60d1091669101766.png','https://editor-assets.abtasty.com/46121/637c78ecd9bc91669101804.png']

        function init() {
            let container = document.querySelectorAll("#tm-booking .main .extra-inner .extra-line-item");
            for (var i = 0; i< container.length; i++) {
                let eg_Img = `
                <div class="egImg">
                <img class="full-2-1-breakpoints-theme-moorings-xsw-1x" src="${images[i]}" width="768" height="384" alt="">
                </div>
              `;
              container[i].insertAdjacentHTML("afterbegin", eg_Img);
            }
            movingElements(document.querySelectorAll("#tm-booking .main .extra-inner"));
            // mutation observer
            let observer = new MutationObserver(mutations => {
                // console.log(mutations); // console.log(the changes)
                for (let mutation of mutations) {
                    for (let node of mutation.addedNodes) {
                        // we track only elements, skip other nodes (e.g. text nodes)
                        if ((node instanceof HTMLElement)) {
                            node.querySelector(".extra-line-item") && node.querySelector(".extra-line-item").insertAdjacentHTML("afterbegin", eg_Img);
                            movingElements([node]);
                        }
                        // console.log('hello',node);
                    }
                }
            });

            const ele = document.querySelectorAll("#tm-booking .main .extras form");

            ele.forEach(ele => {
                // observe everything except attributes
                observer.observe(ele, {
                    subtree: true, // observe desendents children
                    childList: true
                });
            });
        }

        // moving crew message and text note
        function movingElements(elements) {
            elements.forEach(ele => {
                qualifier = ele.querySelector("span.qualifier");
                priceQuantity = ele.querySelector(".price-quantity");
                notes = ele.querySelector(".extra-description > .notes");
                text = ele.querySelector(".extra-description > .text");

                if (qualifier) {
                    priceQuantity.insertAdjacentElement("beforeend", qualifier);
                }

                if (notes) {
                    text.insertAdjacentElement("afterend", notes);
                    // notes.querySelector(".crew-message").textContent = notes.querySelector(".crew-message").textContent.replace("*","Note")
                }
            })
        }

        /* Initialize variation */
        waitForElement("#tm-booking .main .extra-inner", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();