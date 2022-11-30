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

            live('#container-to-scroll > div:nth-child(2) > div > div:has(.l-wizard-section__container)', 'click', function(){
                if (this.parentElement.parentElement.classList.contains("l-wizard__body")) {
                    if (this.parentElement.querySelector(".eg-active-section")) {
                        if(this.parentElement.querySelector(".eg-active-section") != this){
                            this.parentElement.querySelector(".eg-active-section").classList.remove("eg-active-section");
                        }
                    }
                    this.classList.toggle("eg-active-section");
                    console.log(this)

                    this.scrollIntoView({ behaviour: "smooth" });
                }
            });
        }


        // function checkSelection(sectionEle) {
        //     console.log(sectionEle);
        //     // mutation observer
        //     let observer = new MutationObserver(mutations => {
        //         // console.log(mutations); // console.log(the changes)
        //         for (let mutation of mutations) {
        //             if (mutation.target.classList.contains("is-complete")) {
        //                 if (sectionEle.nextElementSibling) {
        //                     sectionEle.nextElementSibling.click();
        //                 }
        //                 break;
        //             }
        //         }
        //     });

        //     const ele = document.querySelectorAll(".c-wizard-summary  .c-wizard-summary__body >div");

        //     ele.forEach(ele => {
        //         // observe everything except attributes
        //         observer.observe(ele, {
        //             attributes: true,
        //             attributeFilter: ['style', 'class']
        //         });
        //     });
        // }

        /* Initialize variation */
        waitForElement('#sticky-nav .c-sticky-nav__button', init, 50, 15000);
        waitForElement('#container-to-scroll > div:nth-child(2) > div > div:has(.l-wizard-section__container)', addCollapseExpand, 50, 15000);

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();