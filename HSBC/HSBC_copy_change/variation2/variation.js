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

        const eg_para = `
                <p class="eg-para collection-card__description___3HHX9">
                Keen on banking with us?</br>
                Find out more about our account opening process and everything you need to get started
                </p>`;


        /* Variation Init */
        function init() {

            // changing first title text on load

            waitForElement('.collection-cards__card___3N5Oq > div > a  div.collection-card__content___3SEC9 h3', updateTile, 50, 15000);

            document.querySelector(".segment-filter > div  > button:nth-child(1)").addEventListener("click",()=>{
                resetTile();
                updateTile();
            })

            live([".segment-filter > div  > button:nth-child(n + 2)",".collection-card__dismiss-control___xPQKd:nth-of-type(1)" ], 'click', () => {
                resetTile();
            });

        };

        function updateTile() {
            const egText = document.querySelector(".collection-cards__card___3N5Oq > div > a  div.collection-card__content___3SEC9 h3");

            // hiding previous element themes
            if (egText.previousElementSibling) {
                egText.previousElementSibling.style.display = "none";
            }

            egText.style.display = "none";

            egText.insertAdjacentHTML("beforebegin", `<h2 class="eg-title collection-card__title___1ghe1">${"Opening an HSBC Business account" + egText.children[0].outerHTML.toString()}</h2>`);

            // updating link
            egText.parentElement.parentElement.href = "https://www.business.hsbc.com.sg/en-sg/business-banking/business-account-opening-process";

            if (egText.nextElementSibling) {
                egText.nextElementSibling.style.display = "none";
            }

            //adding hover text
            egText.insertAdjacentHTML("afterend", eg_para);
        }

        function resetTile() {
            const egTitle = document.querySelector(".eg-title");
            if (egTitle) {
                const egPara = document.querySelector(".eg-para");

                if (egTitle.previousElementSibling) {
                    egTitle.previousElementSibling.style.display = "block";
                }

                egTitle.nextElementSibling.style.display = "block";

                if (egPara.nextElementSibling) {
                    egPara.nextElementSibling.style.display = "block";
                }

                [egTitle, egPara].forEach(ele => {
                    ele.remove();
                });
            }

        }

        /* Initialize variation */
        waitForElement('.collection-cards__card___3N5Oq > div > a  div.collection-card__content___3SEC9 h3', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();