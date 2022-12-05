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

        }

        function createLanding() {

            console.log("B005 createLanding function started");
            var hdrw = document.querySelector('.headerOuterWrap');
            var hdrb = document.querySelector('.headerOuterWrap .headerStickyBlock');
            var colp = document.createElement('button');
            colp.classList.add('collapsible');
            colp.innerHTML = '<div class="triangle-block triangle-topright" ></div><div class="collapsible-box">About Outbax</div><div class="triangle-block triangle-topleft" ></div>';
            console.log("B005 before insert");
            hdrb.appendChild(colp);
            console.log("B005 inserted");
            var qsn = document.querySelector('div');
            qsn.classList.add('qsn-content');
            qsn.innerHTML = '<div class="qsn-inner"><h4>We provide your camping and outdoor needs at <span>consistently low prices</span>, <u>without compromising quality</u>.</h4><div><p>At Outbax, our team of 30+ staff are passionate about offering quality products at a low price.</p><p>Customer service is the core of our business. We have 12 full-time customer service champions to answer all of your queries and you’ll never be caught unaware with our 60-day money back guarantee.</p></div></div>';
            hdrw.insertAdjacentElement('afterend', qsn);

            if (getCookieValueByLoop('crobots_pgcount') && getCookieValueByLoop('crobots_pgcount') == 1) {
                var clp = document.querySelector('.collapsible');
                clp.classList.add('active');
            }

            var opennew = document.getElementsByClassName("qsn-content")[0];
            if (opennew.style.maxHeight) {
                console.log("B005 opennew if")
                opennew.style.maxHeight = null;
            } else {
                console.log("B005 opennew else")
                opennew.style.maxHeight = opennew.scrollHeight + "px";
                setInterval(function() { console.log('B005 ' + opennew.scrollHeight); }, 3000)
            }
            var coll = document.getElementsByClassName("collapsible");
            var i;
            for (i = 0; i < coll.length; i++) {
                coll[i].addEventListener("click", function() {
                    $("html, body").animate({
                        scrollTop: 0
                    }, "slow");
                    this.classList.toggle("active");
                    var content = document.getElementsByClassName("qsn-content")[0];
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                    }
                });
            }

            var pgc = getCookieValueByLoop('crobots_pgcount');
            if (typeof(pgc) == 'undefined' || pgc == null || pgc > 1) {
                opennew.style.maxHeight = null;
            }

            console.log("B005 createLanding function finished");

        }

        /* Initialize variation */
        waitForElement('', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();