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

        function waitForjQuery(trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function() {
                if (window.jQuery !== undefined) {
                    clearInterval(interval);
                    trigger(window.jQuery);
                }
            }, delayInterval);
            setTimeout(function() {
                clearInterval(interval);
            }, delayTimeout);
        }
        /* Variation functions */

        let eg_Img = `
  <div class="egImg">
  <img class="full-2-1-breakpoints-theme-moorings-xsw-1x" src="https://editor-assets.abtasty.com/46121/637c78c60d1091669101766.png" width="768" height="384" alt="">
  </div>
`;
        var images = ['https://editor-assets.abtasty.com/46121/637c78a6e843c1669101734.png','https://editor-assets.abtasty.com/46121/637c78ecd9bc91669101804.png','https://editor-assets.abtasty.com/46121/637c785999bca1669101657.png', 'https://editor-assets.abtasty.com/46121/637c78c60d1091669101766.png'];

        function init() {
            let container = document.querySelectorAll("#tm-booking .main .extra-inner .extra-line-item");
            for (var i = 0; i < container.length; i++) {
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

            // adding read more read less
            readMoreLess();


            document.querySelectorAll('.booking-flow .main .extra label').forEach(function(el) {
                el.click();
            })

            document.querySelectorAll('.booking-flow .main .extra.child').forEach(function(el) {
                var getProvisionPrice = parseFloat(el.querySelector('.totalPrice').innerHTML.replaceAll('$', ''));
                var getOriginalPrice = parseFloat(el.previousElementSibling.querySelector('.totalPrice').innerHTML.replace(/[$,]/g, ''));

                var totalPriceWithProvision = (getProvisionPrice + getOriginalPrice).toFixed(2);
                el.previousElementSibling.querySelector('.price-quantity').insertAdjacentHTML('beforeend', '<div class="eg_withProvision"><label><input type="radio" name="eg_withProvision"> With Provision</label><span class="eg_totalPrice"> $' + totalPriceWithProvision + '</span></div>')
            })

            document.querySelectorAll('.eg_withProvision label input').forEach(function(el) {

                el.addEventListener('click', function(element) {
                    if (el.closest('.extra').querySelector('.extra-line-item > label input').checked == false) {
                        el.closest('.extra').querySelector('.extra-line-item > label').click();
                        el.checked = true;
                    }
                    el.closest('.extra').nextElementSibling.querySelector('.extra-line-item > label').click();
                })

                el.closest('.extra').querySelector('.extra-line-item > label').addEventListener('click', function() {
                    var element = this;
                    setTimeout(function() {
                        if (element.querySelector('input').checked == true && el.checked == true) {
                            if (el.closest('.extra').nextElementSibling.querySelector('.extra-line-item > label input').checked == false) {
                                el.closest('.extra').nextElementSibling.querySelector('.extra-line-item > label input').click();
                            }
                        }
                    }, 100)
                })
            })

            waitForjQuery(function() {
                var radioState;

                jQuery('.eg_withProvision label input').on('click', function() {
                    if (radioState === this) {
                        this.checked = false;
                        radioState = null;
                    } else {
                        radioState = this;
                    }
                });
            }, 50, 15000)

            setTimeout(function() {
                document.querySelectorAll('.booking-flow .main .extra .extra-line-item > label').forEach(function(el) {
                    el.click();
                })
            }, 500)

        }

        function readMoreLess() {
            let egtoggle = document.querySelector("form > div:nth-child(1) div.extra-description.row > div.text")

            egtoggle.innerHTML = egtoggle.textContent.substring(0, 180) + `<span class="eg-hidden-text">${egtoggle.textContent.substring(100)}</span>` + `<span id="eg_show"><span style="color:black;">...</span>read more</span>`;

            let btn = document.querySelector("#eg_show")

            btn.addEventListener("click", function() {
                egtoggle.classList.toggle("eg_active");
                if (egtoggle.classList.contains("eg_active")) {
                    btn.innerHTML = "read less"
                } else {
                    btn.innerHTML = '<span style="color:black;">...</span>read more';
                }
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
                    priceQuantity.insertAdjacentHTML('afterbegin', '<label class="eg_withoutProvision"><input type="radio" class="eg_withoutProvision"> Without Provision</label>')
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