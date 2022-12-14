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
                <p class="eg-para">
                Keen on banking with us?</br>
                Find out more about our account opening process and everything you need to get started
                </p>`;

        /*====================================EASILY UPDATE TEXT====================================*/
        /* if you want to change the first tile txt to something just update it in this variable here*/
        const egUpdatedText = "Opening an HSBC Business account";

        live([".segment-filter > div  > button:nth-child(n + 2)", "button[class^='collection-card__dismiss-control']:nth-of-type(1)"], 'click', () => {
            resetTile();
        });

        live('.segment-filter > div  > button:nth-child(1)', 'click', function() {
            if (this.innerText == "Select All") {
                resetTile();
                updateTile();
            }
        });

        let egInterval;

        /* Variation Init */
        function init() {

            egInterval = setInterval(() => {
                if (!document.querySelector(".eg-title")) {
                    const egFirstTileBtn = document.querySelector(".segment-filter > div  > button:nth-child(1)");

                    // changing first title text on load

                    if (egFirstTileBtn.ariaChecked === 'true') {
                        waitForElement('div[class^="collection-cards__card"] > div > a  div[class^="collection-card__content"] h3', updateTile, 50, 15000);
                    }

                } else {
                    clearInterval(egInterval);
                }
            }, 1000);

        };

        setTimeout(()=>{
            clearInterval(egInterval);
        },8000);

        function updateTile() {
            const egText = document.querySelector(`div[class^="collection-cards__card"] > div > a  div[class^="collection-card__content"] h3`);

            egText.insertAdjacentHTML("beforebegin", `<h2 class="eg-title">${egUpdatedText + egText.children[0].outerHTML.toString()}</h2>`);

            // updating link
            egText.parentElement.parentElement.href = "https://www.business.hsbc.com.sg/en-sg/business-banking/business-account-opening-process";

            //adding hover text
            egText.insertAdjacentHTML("afterend", eg_para);
        }

        function resetTile() {
            const egTitle = document.querySelector(".eg-title");
            if (egTitle) {
                const egPara = document.querySelector(".eg-para");

                [egTitle, egPara].forEach(ele => {
                    ele.remove();
                });
            }

        }

        /* Initialize variation */
        waitForElement('div[class^="collection-cards__card"] > div > a  div[class^="collection-card__content"] h3', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();