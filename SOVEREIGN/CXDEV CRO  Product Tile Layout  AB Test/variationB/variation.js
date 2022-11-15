(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";
        /* all Pure helper functions */
        function waitForElement(selector, trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function () {
                if (
                    document &&
                    document.querySelector(selector) &&
                    document.querySelectorAll(selector).length > 0
                ) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function () {
                clearInterval(interval);
            }, delayTimeout);
        }

        function live(selector, event, callback, context) {
            // helper for enabling IE 8 event bindings
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent('on' + type, handler);
                else el.addEventListener(type, handler);
            }
            // matches polyfill
            this.Element && function (ElementPrototype) {
                ElementPrototype.matches = ElementPrototype.matches ||
                    ElementPrototype.matchesSelector ||
                    ElementPrototype.webkitMatchesSelector ||
                    ElementPrototype.msMatchesSelector ||
                    function (selector) {
                        var node = this,
                            nodes = (node.parentNode || node.document).querySelectorAll(selector),
                            i = -1;
                        while (nodes[++i] && nodes[i] != node);
                        return !!nodes[i];
                    };
            }(Element.prototype);
            // live binding helper using matchesSelector
            function live(selector, event, callback, context) {
                addEvent(context || document, event, function (e) {
                    var found, el = e.target || e.srcElement;
                    while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                    if (found) callback.call(el, e);
                });
            }
            live(selector, event, callback, context);
        }


        function addClass(element_selector, className) {
            var element = document.querySelectorAll(element_selector);
            for (var i = 0; i < element.length; i++) {
                if (element[i].classList)
                    element[i].classList.add(className);
                else if (!BmHelperUtils.hasClass(element[i], className))
                    element[i].className += ' ' + className;
            }
        };

        function removeClass(element_selector, className) {
            var element = document.querySelectorAll(element_selector);
            for (var i = 0; i < element.length; i++) {
                if (element[i].classList)
                    element[i].classList.remove(className);
                else
                    element[i].className = element[i].className.replace(new RegExp('\\b' + className + '\\b', 'g'), '');
            }
        };

        var topStrip = '' +
            '<a href="https://www.sovereign.com/about/travel-with-confidence/">COVID-19 Refund Guarantee</a>&nbsp;|&nbsp;<a href="https://www.sovereign.com/about/travel-with-confidence/">FREE Cancellations</a>&nbsp;|&nbsp;<a href="https://www.sovereign.com/about/travel-with-confidence/">FREE Amendments</a>&nbsp;';


        function init() {

            document.querySelector('body #lp-pom-text-50 u').innerHTML = topStrip;
            document.querySelector('#lp-pom-form-35 form').insertAdjacentHTML('beforebegin', '<div class="form-modal__heading h3">Almost There!</div><div class="form-modal__sub-heading h5">We just need a bit more info to get you your personalised itinerary:</div>');
            document.querySelector('div#lp-pom-image-12').insertAdjacentHTML('beforebegin', '<div class="eg-header-wrap"><div class="eg-header-container"><span></span></div></div>');

            document.querySelector('.eg-header-container > span').insertAdjacentElement('beforebegin', document.querySelector('body #lp-pom-image-12'));
            document.querySelector('.eg-header-container > span').insertAdjacentElement('afterend', document.querySelector('body #lp-pom-text-13'));

            document.querySelector('.eg-header-container > #lp-pom-text-13').insertAdjacentElement('afterend', document.querySelector('body #lp-pom-text-14'));
            document.querySelector('.eg-header-container > #lp-pom-text-14').insertAdjacentElement('afterend', document.querySelector('body #lp-pom-image-15'));

            document.querySelector('.eg-header-wrap').insertAdjacentHTML('afterend', '<div class="eg-hero-wrap"><span></span><div class="eg-hero-wrap-inr"><div class="eg-hero-container"><div class="hero-content"><span></span></div><span></span></div></div></div>');

            document.querySelector('.eg-hero-wrap > span').insertAdjacentElement('afterend', document.querySelector('body #lp-pom-image-20'));

            document.querySelector('.eg-hero-container > span').insertAdjacentElement('afterend', document.querySelector('body #lp-pom-box-24'));
            document.querySelector('.eg-hero-container > span').insertAdjacentElement('beforebegin', document.querySelector('body #lp-code-32'));

            document.querySelector('.eg-hero-container .hero-content > span').insertAdjacentElement('beforebegin', document.querySelector('body #lp-pom-text-21'));
            document.querySelector('.eg-hero-container .hero-content > span').insertAdjacentElement('afterend', document.querySelector('body #lp-pom-text-22'));

            document.querySelector('body #lp-code-42').insertAdjacentHTML('beforebegin', '<div class="eg-container-wrap"><div class="eg-container"><span></span></div></div>');

            document.querySelector('.eg-container-wrap span').insertAdjacentElement('beforebegin', document.querySelector('#lp-code-41'));
            document.querySelector('.eg-container-wrap span').insertAdjacentElement('afterend', document.querySelector('#lp-pom-box-25'));

            document.querySelector('#lp-pom-text-50').insertAdjacentHTML('beforebegin', '<div class="eg-logo-container-wrap"><div class="eg-logo-container"><div class="eg-logo-container-inr"><span></span></div></div></div>');

            document.querySelector('.eg-logo-container-wrap .eg-logo-container-inr > span').insertAdjacentElement('beforebegin', document.querySelector('div#lp-code-42'));
            document.querySelector('.eg-logo-container-wrap .eg-logo-container-inr > span').insertAdjacentElement('afterend', document.querySelector('div#lp-code-43'));
            document.querySelector('.eg-logo-container-wrap .eg-logo-container-inr > span').insertAdjacentElement('afterend', document.querySelector('div#lp-code-52'));

            document.querySelector('button#lp-pom-button-36 strong').insertAdjacentHTML('afterend', '<span>It only takes 2 minutes</span>');

            document.querySelector('body #lp-pom-text-22').addEventListener('click', function () {
                window.open('#', '_blank');
            });


            msfChange();

        }

        function msfChange() {
            addClass('#lp-pom-form-35', 'tv-step1-show');
            document.querySelector('button#lp-pom-button-36').addEventListener('click', function (e) {
                if (firstStepValidation() && document.querySelector('#lp-pom-form-35.tv-step1-show')) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    addClass('#lp-pom-form-35', 'tv-step2-show');
                    removeClass('#lp-pom-form-35', 'tv-step1-show');
                    document.querySelector('body').classList.add('form-step-2');
                }
 
            });
        }

        function firstStepValidation() {
            var op1 = document.querySelector('#container_where_do_you_want_to_go select').value;
            var op2 = document.querySelector('#container_holiday_experiences__unbounce_ select').value;
            // var op3 = document.querySelector('#container_no_of_travellers select').value;
            var op5 = document.querySelector('#container_departure_month select').value;
            var op4 = document.querySelector('#container_budget_per_person__unbounce_ select').value;
            
            if (op1.length && op2.length && op5.length && op4.length) {
                return true;
            } else {
                false;
            }
        }
      
        /* Initialise variation */
        waitForElement("body #lp-pom-text-50", init, 100, 35000);
        // waitForElement("#lp-pom-text-50", init2, 100, 35000);

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();
