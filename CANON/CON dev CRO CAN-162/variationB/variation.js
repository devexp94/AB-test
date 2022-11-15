(function () {
    "use strict";

    if (typeof unsafeWindow !== "undefined") window = unsafeWindow;

    var tag = "cv-162",
        debug = document.cookie.indexOf("cfQA") > -1;

    window[tag] = {
        log: function (msg) {
            if (debug) console.log("[CONV]", tag, "-->", msg);
        },

        waitForElement: function (cssSelector, callback) {
            var elementCached,
                maxCalls = 500,
                interval = setInterval(function () {
                    elementCached = document.querySelector(cssSelector);

                    if (elementCached) {
                        clearInterval(interval);

                        try {
                            callback(elementCached);
                        } catch (err) {
                            window[tag].log(err.message);
                        }
                    }

                    if (--maxCalls < 0) {
                        clearInterval(interval);
                        window[tag].log(cssSelector + " not found");
                    }
                }, 20);
        },

        init: function () {
            try {
                this.waitForElement("body", function (docBody) {
                    docBody.classList.add(tag);
                });

                if (debug && document.title.indexOf("CONV QA") < 0) {
                    document.title = "[CONV QA] " + document.title;
                }


        
                initVariation();

                window[tag].log("test running");
            } catch (err) {
                window[tag].log(err.message);
            }
        },

        sendEvtOpt: function (evName) {
            window["optimizely"].push({
                type: "event",
                eventName: evName,
            });

            window[tag].log("metric triggered: " + evName);
        },
    };

    window[tag].init();

    function initVariation() {
        var targetElemSel = 'form .gcdc-form-group-formPostcode, .gcdc-form-group-formCompany';
        if (!targetElemSel) {
            window[tag].log("no target location found, exiting");
        } else {
            window[tag].waitForElement(targetElemSel, function (targetElem) {
                addClassOnBody();
            });
        }
    }
    function addClassOnBody() {
        var pageClass = {
            '/business/services/': 'cv-can-162-service-page',
            '/business/products/production-printers/digital-presses/imagepress-c910-series/': 'cv-can-162-business-digital-presses-page',
            '/business/products/production-printers/digital-presses/imagepress-c10010vp-series/': 'cv-can-162-business-digital-presses-page',
            '/cameras/eos-r3/': 'cv-can-162-eos-r3-page',
            '/business/services/canon-ascent-programme/': 'cv-can-162-canon-ascent-programme-page',
            '/business/insights/articles/insight-report-2020/': 'cv-can-162-canon-ascent-programme-page',
            '/for_work/digitaal_factuur/': 'cv-can-162-digitaal-factuur-page',
            '/business/insights/articles/faalkosten-verlagen/': 'cv-can-162-faalkosten-verlagen-page',
            '/business/digitalisering-in-de-bouw/': 'cv-can-162-digitalisering-in-de-bouw-page',
            '/business/insights/articles/nieuwe-inzichten-voor-inkoopprofessionals/': 'cv-can-162-nieuwe-inzichten-voor-inkoopprofessionals-page',
            '/business/insights/articles/digital-wallpaper-printing-done-right/': 'cv-can-162-digital-wallpaper-printing-done-right',
            '/business/partner-programme/partner-with-us/': 'cv-can-162-partner-with-us-right',
            '/business/insights/events/make-it-print-event/': 'cv-can-162-make-it-print-event',
            '/business/': 'cv-can-162-business-page',
            '/business/partner-programme/': 'cv-can-162-partner-programme-page',
            '/for_work/products/professional_print/large_format/colortrac_smartlf_sc36_xpress/': 'cv-can-162-colortrac_smartlf_sc36_xpress-page'
        };
        if (pageClass[window.location.pathname])
            document.body.classList.add(pageClass[window.location.pathname]);
                    
        //check postcode hidden field
        if (document.querySelector('form .gcdc-form-group-formPostcode.hidden')) {
            document.body.classList.add('cv-can-162-post-hidden');
        }

    }
})();