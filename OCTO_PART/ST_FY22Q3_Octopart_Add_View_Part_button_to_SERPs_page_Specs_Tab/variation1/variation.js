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

        

        let egBtnInterval;
        /* Variation Init */
        function init() {
            /* start your code here */
            if (document.querySelector(".controls .widgets > form >div.specs")) {
                // modifying table 
                document.querySelector(".groups th:nth-child(4)").colSpan = 4;

                if (!document.querySelector(".eg-view-part")) {
                    document.querySelector(".columns th:nth-child(6)").insertAdjacentHTML("afterend", `
                                                                                    <th class="eg-view-part"></th>
                                                                                    `);

                    document.querySelector(".sorts-filters th:nth-child(6)").insertAdjacentHTML("afterend", `
                                                                                        <th class="eg-view-part"></th>
                                                                                        `);
                }
                // adding view part btn
                waitForElement('table > tbody > tr  > .spec:nth-child(6)', addBtn, 50, 15000);


            }

        }

        function addBtn() {
            egBtnInterval = setInterval(() => {
                // only when btn is not present then add it
                if (!document.querySelector('.eg-view-part-cta')) {
                    document.querySelectorAll("table > tbody > tr  > .spec:nth-child(6)").forEach(ele => {
                        ele.insertAdjacentHTML("afterend", `
                                      <td class="eg-view-part-cta"><div><a href="${ele.parentElement.children[1].firstElementChild.href}">View Part</a></div></td>`);
                    });
                } else {
                    clearInterval(egBtnInterval);
                }
            },1000);
        }

        // adding btns on route change
        function listener() {
            /* These are the modifications: */
            window.addEventListener("locationchange", function() {
                setTimeout(function() {
                    // adding view part btn
                    waitForElement('.sorts-filters th:nth-child(6)', init, 50, 15000);
                }, 500);
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

        listener();

        /* Initialize variation */
        waitForElement('.sorts-filters th:nth-child(6)', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();