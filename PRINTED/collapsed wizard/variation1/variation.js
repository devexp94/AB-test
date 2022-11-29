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


        /* Variation Init */
        function init() {
            /* start your code here */
            let egCount = 0;
            // order now button click
            document.querySelector("#sticky-nav .c-sticky-nav__button").addEventListener("click", () => {
                if (egCount == 0) {
                    waitForElement('#container-to-scroll > div:nth-child(2) > div > div:has(.l-wizard-section__container)', addCollapseExpand, 50, 15000);
                    egCount += 1;
                }
            });
        }

        function addCollapseExpand() {
            const egSections = document.querySelectorAll("#container-to-scroll > div:nth-child(2) > div > div:has(.l-wizard-section__container)");

            egSections.forEach((section, i) => {
                section.addEventListener("click", function() {
                    if (this.parentElement.querySelector(".eg-active-section")) {
                        this.parentElement.querySelector(".eg-active-section").classList.remove("eg-active-section");
                    }
                    this.classList.add("eg-active-section");
                    this.scrollIntoView({ behaviour: "smooth" });

                    // checking for is-complete in the summary part
                    // checkSelection(this, i + 1);
                });
            });
        }


        function checkSelection(sectionEle, index) {
            // mutation observer
            let observer = new MutationObserver(mutations => {
                // console.log(mutations); // console.log(the changes)
                for (let mutation of mutations) {
                    if (mutation.target.classList.contains("is-complete")) {
                        if (sectionEle.nextElementSibling) {
                            if (index == 3 || index == 8) {
                                sectionEle.nextElementSibling.nextElementSibling.click();
                            } else {
                                sectionEle.nextElementSibling.click();
                            }
                        }
                        break;
                    }
                }
            });

            const ele = document.querySelectorAll(".c-wizard-summary  .c-wizard-summary__body >div");

            ele.forEach(ele => {
                // observe everything except attributes
                observer.observe(ele, {
                    attributes: true,
                    attributeFilter: ['style', 'class']
                });
            });
        }

        /* Initialize variation */
        waitForElement('#sticky-nav .c-sticky-nav__button', init, 50, 15000);
        waitForElement('#container-to-scroll > div:nth-child(2) > div > div:has(.l-wizard-section__container)', addCollapseExpand, 50, 15000);

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();