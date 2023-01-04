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

        let egHref = "https://store.altium.com/flowmanager/flow/start?ProductId=ADP&TrackingId=DSSFRONT.V3";

        function init(){
            document.querySelector(".s-ad-video__buy a:first-of-type").href = egHref;
            waitForElement('.b-btns-control div:first-of-type a',function(){
                document.querySelectorAll(".b-btns-control div:first-of-type a").forEach(anchor=>{
                    anchor.href = egHref;
                });
                waitForElement(".s-upgrade .am-container > div:nth-of-type(1) a",function(){
                    document.querySelectorAll(".s-upgrade .am-container > div:nth-of-type(1) a").forEach(anchor=>{
                        anchor.href = egHref;
                    });
                },50,15000);
            }, 50, 15000);
        }

        /* Initialize variation */
        waitForElement('.s-ad-video__buy a:first-of-type', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();