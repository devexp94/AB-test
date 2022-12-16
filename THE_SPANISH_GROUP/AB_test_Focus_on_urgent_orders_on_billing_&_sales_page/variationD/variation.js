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

        live(['.eg-stars','.eg-review-btn'], 'click', function() {
            document.querySelector(`a[title="Reviews"]`).click();
        });

        let egReviews = `
        <div class="eg-reviews">
                <!-- stars -->
                <div class="sa_info eg-stars">
                    <span style="white-space: nowrap">
                        <span class="sa_star sa_activestar"></span>
                        <span class="sa_star sa_activestar"></span>
                        <span class="sa_star sa_activestar"></span>
                        <span class="sa_star sa_activestar"></span>
                        <span class="sa_star sa_activestar"></span>
                    </span>
                </div>
                <!-- logo -->
                <span class="eg-review-btn">
                    <img alt="www.thespanishgroup.org widget logo" class="sa_widget_footer lazyloaded" src="https://www.shopperapproved.com/widgets/widgetfooter-darklogo.png">
                </span>
        </div>
        `;

        function egInsertBtn() {
            const egBtnHtml = `<a id="eg-urgent" href="/billing?q=egBilling">
                                      <button type="button" class="nfn__btn">Urgent Order</button>
                                   </a>`;
            document.querySelectorAll(".nfn__content .nfn__trust").forEach(box => {
                box.insertAdjacentHTML("beforeend", egBtnHtml);
                // insert reviews 
                box.insertAdjacentHTML("afterend", egReviews);
            })
        }


        function egChangePreselected() {
            if (window.location.search.indexOf("egBilling") != -1) {
                setTimeout(() => {
                    document.querySelector('#nbsStep2 .nbs__options-list li:last-of-type').click();
                }, 1000);
            }
        }

        /* Initialize variation */
        if (window.location.href.indexOf("https://thespanishgroup.org/translations") != -1) {
            waitForElement('.nfn__content .nfn__trust', egInsertBtn, 50, 15000);
        } else if (window.location.href.indexOf("https://thespanishgroup.org/billing") != -1) {
            waitForElement('#nbsStep2 .nbs__options-list li:last-of-type', egChangePreselected, 50, 15000);
        }
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();