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


        const eg_icon = `
        <div display="inline-flex" class="Box-sc-qbwqq9-0 Icon__IconWrapper-sc-y4p3lz-0 kIynDD Icon collection-card__title-icon___3Orz0" data-testid="Icon-ChevronRight" data-trackid="Icon-ChevronRight@1.5.0"><svg font-size="m" class="Box-sc-y5ctq9-0 SvgIcon__SvgIconBox-sc-1vnlbss-0 gZsoYO SvgIcon" focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation" data-testid="ChevronRightIcon" data-id="Icon" opacity="1" fill="#fff"><path d="M4.196 17l7.998-8-7.998-8h1.696l8 8-8 8z"></path><path fill="none" d="M0 18V0h18v18z"></path></svg></div>`

        const divs = document.querySelectorAll("#main div:nth-child(2) > div > a > div.collection-card__content___3SEC9");

        const eg_theme = document.querySelector(".collections-hero__cards--desktop___2-cDD  div:nth-child(2)  a > div.collection-card__content___3SEC9 > div.collection-card__type-label___2RC_h");

        const eg_title = document.querySelector(".collections-hero__cards--desktop___2-cDD  div:nth-child(2)  a > div.collection-card__content___3SEC9 > h3")


        /* Variation Init */
        function init() {

            updateContent();

            live(".collections-hero__cards--desktop___2-cDD > div > div:nth-child(2)", 'click', () => {
                updateContent();
            });
           
        }

        function updateContent(){
            for (const div of divs) {
                if(div.innerHTML.indexOf("Managing Cash Flow") !== -1) {
                    eg_theme.style.display = "none";
                    eg_title.innerHTML = "<h3>Opening an HSBC Business account </h3>" + eg_icon;
    
                    div.addEventListener("click" , function(){
                        window.location.href = "https://www.business.hsbc.com.sg/en-sg/business-banking/business-account-opening-process"
                    })
                    }else{
                    console.log(false)
                    }
            }
        }



        /* Initialize variation */
        waitForElement('.collection-cards__card___3N5Oq', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();