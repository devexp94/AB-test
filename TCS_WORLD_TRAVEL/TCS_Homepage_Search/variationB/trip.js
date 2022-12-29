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

        // wait for jquery
        function waitForjQuery(trigger) {
            var interval = setInterval(function() {
                if (window.jQuery != undefined) {
                    clearInterval(interval);
                    trigger();
                } else {
                    addJQuery();
                }
            }, 50);
            setTimeout(function() {
                clearInterval(interval);
            }, 15000)
        }

        function addJQuery() {
            var jQueryScript = document.createElement('script');
            // check for updated jquery cdn
            jQueryScript.src = 'https://code.jquery.com/jquery-3.6.3.min.js';
            document.getElementsByTagName('head')[0].appendChild(jQueryScript);
        }


        /* Variation Init */
        function init() {
            /* start your code here */
            document.addEventListener("DOMContentLoaded", function() {
                waitForjQuery(function() {
                    var $ = window.jQuery;
                    let tripType, destination, date;
                    let egQueryParams = window.location.href.split("?").pop().split("&");
                    let egSearchQuery = {};

                    egQueryParams.forEach(param => {
                        let name = param.split("=").shift();
                        let value = param.split("=").pop();
                        if (name.indexOf("%20") != -1) {
                            name = name.split("%20").join(" ");
                        } else if (value.indexOf("%20") != -1) {
                            value = value.split("%20").join(" ");;
                        }

                        egSearchQuery[name] = value;
                    });

                    tripType = egSearchQuery["tripType"];
                    date = egSearchQuery["date"];
                    destination = egSearchQuery["destination"];
                    let egTripTypeEl, egDesEl, egDateEl;
                    waitForElement('#trip_filter_bar form fieldset:nth-of-type(1) > div > div >div:nth-of-type(3) label', function() {
                        egTripTypeEl = $(document).find(`label:contains('${tripType}')`)[0];
                        waitForElement("#trip_filter_bar form fieldset:nth-of-type(3) > div > div >div label", function() {
                            egDesEl = $(document).find(`label:contains('${destination}')`)[0];

                            egDateEl = $(document).find(`label:contains('${date}')`)[0];

                            egTripTypeEl.click();

                            if (!egDesEl.parentElement.querySelector("input[type=checkbox]").checked) {
                                egDesEl.click();
                            }


                            if (!egDateEl.parentElement.querySelector("input[type=checkbox]").checked) {
                                egDateEl.click();
                            }

                        }, 50, 15000);
                    }, 50, 15000);



                });
            });


        }

        /* Initialize variation */
        if (window.location.href.indexOf("https://www.tcsworldtravel.com/trip-finder") != -1) {
            waitForElement('#trip_filter_bar form fieldset:nth-of-type(1) > div > div >div:nth-of-type(2) label', init, 50, 15000);
        }

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();