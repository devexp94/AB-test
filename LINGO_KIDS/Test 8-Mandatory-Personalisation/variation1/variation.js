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
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent('on' + type, handler);
                else el.addEventListener(type, handler);
            }
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

            function live(selector, event, callback, context) {
                addEvent(context || document, event, function(e) {
                    var found,
                        el = e.target || e.srcElement;
                    while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                    if (found) callback.call(el, e);
                });
            }
            live(selector, event, callback, context);
        };

        live("html body nav > a", "click", listener);

        function listener() {

            /* These are the modifications: */
            window.addEventListener("locationchange", function() {

                waitForElement('.title.title-presentation', function() {
                    if (window.location.href.indexOf("https://app.lingokids.com/es/multifeed") != -1) {
                        document.querySelector(".title.title-presentation").innerText = "¿Cuántos años tiene tu hijo/a?"
                    } else if ((window.location.href.indexOf("https://app.lingokids.com/en/multifeed") != -1) || (window.location.href.indexOf("https://app.lingokids.com/multifeed") != -1)) {
                        document.querySelector(".title.title-presentation").innerText = "How old is your kid?"
                    } else if ((window.location.href.indexOf("https://app.lingokids.com/parents_area") != -1) || (window.location.href.indexOf("https://app.lingokids.com/en/parents_area") != -1)) {
                        document.querySelector(".title.title-presentation").innerText = "Which skills would you like your child to practice?"
                    } else if (window.location.href.indexOf("https://app.lingokids.com/es/parents_area") != -1) {
                        document.querySelector(".title.title-presentation").innerText = "¿Qué habilidades te gustaría que practicara tu hijo/a?"
                    }
                    waitForElement('.pagination + div', init, 50, 15000);
                }, 1500, 15000);

            });
            history.pushState = ((f) =>
                function pushState() {
                    var ret = f.apply(this, arguments);
                    window.dispatchEvent(new Event("pushstate"));
                    window.dispatchEvent(new Event("locationchange"));
                    return ret;
                })(history.pushState);
            history.replaceState = ((f) =>
                function replaceState() {
                    var ret = f.apply(this, arguments);
                    window.dispatchEvent(new Event("replacestate"));
                    window.dispatchEvent(new Event("locationchange"));
                    return ret;
                })(history.replaceState);
            window.addEventListener("popstate", () => {
                window.dispatchEvent(new Event("locationchange"));
            });
        }

        /* Variation Init */
        function init() {

            document.body.classList.add("eg-body");

            document.querySelector(".navigator .navigator-content a[data-label='continue']").classList.add("egCss");

            if (window.location.href.indexOf("https://app.lingokids.com/es/multifeed") != -1) {
                document.querySelector(".title.title-presentation").innerText = "¿Cuántos años tiene tu hijo/a?"
            } else if ((window.location.href.indexOf("https://app.lingokids.com/en/multifeed") != -1) || (window.location.href.indexOf("https://app.lingokids.com/multifeed") != -1)) {
                document.querySelector(".title.title-presentation").innerText = "How old is your kid?"
            } else if ((window.location.href.indexOf("https://app.lingokids.com/parents_area") != -1) || (window.location.href.indexOf("https://app.lingokids.com/en/parents_area") != -1)) {
                document.querySelector(".title.title-presentation").innerText = "Which skills would you like your child to practice?"
            } else if (window.location.href.indexOf("https://app.lingokids.com/es/parents_area") != -1) {
                document.querySelector(".title.title-presentation").innerText = "¿Qué habilidades te gustaría que practicara tu hijo/a?"
            }

            /*** Parents area */

            if ((window.location.href.indexOf("https://app.lingokids.com/es/parents_area") != -1) || (window.location.href.indexOf("https://app.lingokids.com/parents_area") != -1) || (window.location.href.indexOf("https://app.lingokids.com/en/parents_area") != -1)) {
                parentArea();

                live(".mk-outer-div .mk-section-parentsArea", "click", function() {
                    if (this.classList.contains("mk-section-parentsArea")) {
                        if (document.querySelector(".egActive")) {
                            document.querySelector(".egActive").classList.remove("egActive");
                        }
                        this.classList.add("egActive");
                        document.querySelector(".navigator .navigator-content a[data-label='continue']").classList.remove("egCss")
                    }

                });
            } else {
                live(".content-center .pagination + div div.leading-tight > div", "click", function() {
                    if (document.querySelector(".egActive")) {
                        document.querySelector(".egActive").classList.remove("egActive");
                    }
                    this.classList.add("egActive");
                    document.querySelector(".navigator .navigator-content a[data-label='continue']").classList.remove("egCss")
                });
            }


            document.querySelector('.items-center.egActive') && document.querySelector('.items-center.egActive').classList.remove('egActive');


            live(".leading-tight> div:nth-child(1)", "mousedown", function() {
                trackGAEvent('body button', 'click button', 'personalization age 2-3');
            });

            live(".leading-tight> div:nth-child(2)", "mousedown", function() {
                trackGAEvent('body button', 'click button', 'personalization age 4-5');
            });

            live(".leading-tight> div:nth-child(3)", "mousedown", function() {
                trackGAEvent('body button', 'click button', 'personalization age 6-8');
            });

            live("#menu-button", "mousedown", function() {
                trackGAEvent('body button', 'click button', 'language selector');
            });

            live("nav div[role] a:nth-child(2)", "mousedown", function() {
                trackGAEvent('body button', 'click button', 'language selector_en');
            });

            live("nav div[role] a:nth-child(3)", "mousedown", function() {
                trackGAEvent('body button', 'click button', 'language selector_es');
            });

            live(".eg_header a:nth-child(2)", "mousedown", function() {
                trackGAEvent('body button', 'click button', 'language selector_en');
            });

            live(".eg_header a:nth-child(3)", "mousedown", function() {
                trackGAEvent('body button', 'click button', 'language selector_es');
            });
        }

        function parentArea() {
            var textosCards = [];
            var cards = document.querySelectorAll('.text-presentation');
            for (let i = 0; i < cards.length; i++) {
                textosCards[i] = cards[i].innerText;
            }

            document.querySelector(".leading-tight>div").style.display = "none";
            var myHtml = `
    <div class="mk-outer-div flex flex-col justify-between space-x-8 text-center">
      <div class="space-y-2 mk-section-dbbt">
        <div class='mk-section-parentsArea'>
          <img class=" md:max-w-md landscape:max-w-xs" alt="A green check arrow." src="https://lingokids-api-assets-production.imgix.net/web/images/rocket.svg">
          <p class="text-presentation">
          ` + textosCards[0] + `
          </p>
        </div>
        <div class='mk-section-parentsArea'>
          <img class=" md:max-w-md landscape:max-w-xs" alt="A green check arrow." src="https://lingokids-api-assets-production.imgix.net/web/images/collaboration.svg">
          <p class="text-presentation">
          ` + textosCards[1] + `
          </p>
        </div>
      </div>

      <div class="flex flex-col space-y-2 mk-section-dbbt">
        <div class='mk-section-parentsArea'>
          <img class=" md:max-w-md landscape:max-w-xs" alt="A green check arrow." src="https://lingokids-api-assets-production.imgix.net/web/images/messages.svg">
          <p class="text-presentation">
          ` + textosCards[2] + `
          </p>
        </div>
        <div class='mk-section-parentsArea'>
          <img class=" md:max-w-md landscape:max-w-xs" alt="A green check arrow." src="https://lingokids-api-assets-production.imgix.net/web/images/cube-scan.svg">
          <p class="text-presentation">
          ` + textosCards[3] + `
          </p>
        </div>
      </div>
    </div>`;
            document.querySelector(".leading-tight").insertAdjacentHTML("afterbegin", myHtml);
        }


        /************** GA Events *****************/
        function trackGAEvent(eventCategory, eventAction, eventLabel) {
            if ('ga' in window) {
                ga.getAll()[0].send('event', {
                    eventCategory: eventCategory,
                    eventAction: eventAction,
                    eventLabel: eventLabel,
                });
            }
        }

        listener();

        /* Initialize variation */
        waitForElement('.pagination + div', init, 50, 15000);

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();