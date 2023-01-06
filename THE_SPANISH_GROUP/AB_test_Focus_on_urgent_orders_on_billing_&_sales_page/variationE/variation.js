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


        const egSelectHtml = `
            <span class="eg-select eg-standard eg-active">Standard Order</span>
            <span class="eg-select eg-same-day">Same Day Delivery Order</span>`;

        function egInsertBtn() {

            let egEle;

            // for desktop
            if (window.innerWidth > 767) {
                waitForElement("html body #banner .nfn__container > .nfn__content .nfn__actions button#nfnOrderBtn", function() {
                    egEle = document.querySelector("html body #banner .nfn__container > .nfn__content .nfn__actions button#nfnOrderBtn");
                    egEle.innerHTML = egSelectHtml;
                }, 50, 15000);

            } //for mobile devices
            else {
                waitForElement("html body .form_container_mobile .nfn__container > .nfn__content .nfn__actions_mobile button#nfnOrderBtn_mobile", function() {
                    egEle = document.querySelector("html body .form_container_mobile .nfn__container > .nfn__content .nfn__actions_mobile button#nfnOrderBtn_mobile");
                    egEle.innerHTML = egSelectHtml;
                }, 50, 15000);
            }

            // inserting buttons


            live('.eg-select', 'click', function() {
                this.parentElement.querySelector(".eg-active").classList.remove("eg-active");
                this.classList.add("eg-active");
                if (this.classList.contains("eg-same-day")) {
                    let egHref = this.parentElement.parentElement.href;
                    if (egHref.indexOf("&egSameDay") == -1) {
                        this.parentElement.parentElement.href += "&egSameDay";
                        console.log(this.parentElement.parentElement.href);
                    }
                } else if (this.classList.contains("eg-standard")) {
                    let egHref = this.parentElement.parentElement.href;

                    if (egHref.indexOf("&egSameDay")) {
                        this.parentElement.parentElement.href = this.parentElement.parentElement.href.replace("&egSameDay", "");
                    }
                }
            });
        }


        function egChangePreselected() {
            if (window.location.search.indexOf("egSameDay") != -1) {
                const egSelectIn = setInterval(()=>{
                    if(!document.querySelector("#nbsStep2 .nbs__options-list li:last-of-type").classList.contains("active")){
                        document.querySelector('#nbsStep2 .nbs__options-list li:last-of-type').click();
                    } else {
                        clearInterval(egSelectIn);
                    }
                },100);
                
            }
        }

        /* Initialize variation */
        if (window.location.href.indexOf("https://thespanishgroup.org/translations") != -1) {
            waitForElement('html body', egInsertBtn, 50, 15000);
        } else if (window.location.href.indexOf("https://thespanishgroup.org/billing") != -1) {
            waitForElement('#nbsStep2 .nbs__options-list li:last-of-type', egChangePreselected,50, 15000);
        }
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();