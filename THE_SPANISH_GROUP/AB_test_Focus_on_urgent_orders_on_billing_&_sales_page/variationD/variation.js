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

        function egInsertBtn() {
            const egBtnHtml = `<a id="eg-urgent" href="/billing?q=egBilling">
                                      <button type="button" class="nfn__btn">Urgent Order</button>
                                   </a>`;
            document.querySelectorAll(".nfn__content .nfn__trust").forEach(box => {
                box.insertAdjacentHTML("beforeend", egBtnHtml);
            })
        }


        function egChangePreselected() {
            if (window.location.search.indexOf("egBilling") != -1) {
                [...document.querySelector("#nbsStep2 .nbs__options-list").children].forEach(item => {
                    if (item.classList.contains('active')) {
                        item.classList.remove('active');
                    } else {
                        item.classList.add('active');
                    }
                });
            }
        }

        /* Initialize variation */
        if (window.location.href.indexOf("https://thespanishgroup.org/translations") != -1) {
            waitForElement('.nfn__content .nfn__trust', egInsertBtn, 50, 15000);
        } else if (window.location.href.indexOf("https://thespanishgroup.org/billing") != -1) {
            waitForElement('#nbsStep2 .nbs__options-list', egChangePreselected, 50, 15000);
        }
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();