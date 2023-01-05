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

        function waitForEmbla(trigger) {
            var interval = setInterval(function() {
                if (window.EmblaCarousel != undefined) {
                    clearInterval(interval);
                    trigger();
                } else {
                    addEmbla();
                }
            }, 50);
            setTimeout(function() {
                clearInterval(interval);
            }, 15000)
        }

        function addEmbla() {
            var emblaScript = document.createElement('script');
            // check for updated jquery cdn
            emblaScript.src = 'https://unpkg.com/embla-carousel/embla-carousel.umd.js';
            document.getElementsByTagName('head')[0].appendChild(emblaScript);
        }


        function listener() {
            /* These are the modifications: */
            window.addEventListener("locationchange", function() {
                if ((window.location.href.indexOf("https://www.vacation.inc/products/scent") != -1) && !document.querySelector(".eg-sld")) {
                    waitForElement(".shopping-block-pusher >div:nth-child(2) > div:nth-child(1) ul", function() {
                        if (!document.querySelector(".eg-right-txt")) {
                            document.querySelector(".shopping-block-pusher >div:nth-child(2) > div:nth-child(1) ul").insertAdjacentHTML("beforeend", `<li class="eg-right-txt"><em>FREE Air Freshener With Purchase!<em></li>`);
                            live(".shopping-block-pusher >div:nth-child(2) > div:nth-child(1) > div > button[title='toggle']", "click", function() {
                                if (!document.querySelector(".eg-right-txt")) {
                                    document.querySelector(".shopping-block-pusher >div:nth-child(2) > div:nth-child(1) ul").insertAdjacentHTML("beforeend", `<li class="eg-right-txt"><em>FREE Air Freshener With Purchase!<em></li>`)
                                }
                            });
                        }

                    }, 50, 15000);

                    /* Initialize variation */
                    waitForElement('.embla__container', init, 50, 15000);
                }
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

        var embla;


        live(['.product__hero-thumb', '.product__hero-dot'], 'click', function() {

            if (this.parentElement.children[0] == this) {
                embla.scrollTo(0, false);
            } else if (this.parentElement.children[1] == this) {
                embla.scrollTo(1, false);
            } else if (this.parentElement.children[2] == this) {
                embla.scrollTo(2, false);
            } else if (this.parentElement.children[3] == this) {
                embla.scrollTo(3, false);
            } else if (this.parentElement.children[4] == this) {
                embla.scrollTo(4, false);
            } else if (this.parentElement.children[5] == this) {
                embla.scrollTo(5, false);
            } else if (this.parentElement.children[6] == this) {
                embla.scrollTo(6, false);
            } else if (this.parentElement.children[7] == this) {
                embla.scrollTo(7, false);
            }

            this.parentElement.querySelectorAll(".active").forEach(act => {
                act.classList.remove("active")
            })
            this.classList.add("active");
        });



        /* Variation Init */
        function init() {
            waitForEmbla(function() {
                if (!document.querySelector(".eg-sld")) {
                    var emblaNode = document.querySelector('.embla')
                    var options = { dots: true }

                    embla = EmblaCarousel(emblaNode, options);
                    const egSlide = document.createElement("div");
                    egSlide.classList.add("embla__slide", "eg-sld");
                    egSlide.style.cssText = `flex:0 0 100%;height:100%;width:100%;position:relative`
                    'flex:0 0 100%;height:100%;width:100%;position:relative'
                    egSlide.innerHTML = `<div class="image pa x y top left">
                    <picture>
                        <source srcset="https://expogrowth.in/wp-content/uploads/2023/01/PDP-Carousel-Frame-4.jpg" media="(min-width: 1000px)">
                        <source srcset="https://expogrowth.in/wp-content/uploads/2023/01/PDP-Carousel-Frame-4.jpg" media="(min-width: 600px)"><img src="https://expogrowth.in/wp-content/uploads/2023/01/PDP-Carousel-Frame-4.jpg"></picture>
                </div>`;
                    const egSlideThumb = `<div class="product__hero-thumb mb1 pr"><button aria-label="Select image slide" class="image pa x y top left eg-thumb">
                    <picture><img alt="video thumbnail" src="https://expogrowth.in/wp-content/uploads/2023/01/PDP-Carousel-Frame-4.jpg?width=300&amp;fit_mode=preserve&amp;time=0"></picture>
                </button></div>`;


                    document.querySelector(".product__hero-carousel-thumbs > div:nth-child(3)").insertAdjacentHTML("afterend", egSlideThumb);

                    const egSlideDot = `<button aria-label="Select image slide" class="product__hero-dot eg-dot"></button>`;
                    document.querySelector(".product__hero-dots > button:nth-child(3)").insertAdjacentHTML("afterend", egSlideDot);

                    document.querySelector(".embla__container > div:nth-child(3)").insertAdjacentElement("afterend", egSlide);
                    embla.reInit();

                }
            });
        }

        if (window.location.href.indexOf("https://www.vacation.inc/products/scent") != -1) {
            waitForElement(".shopping-block-pusher >div:nth-child(2) > div:nth-child(1) ul", function() {
                if (!document.querySelector(".eg-right-txt")) {
                    document.querySelector(".shopping-block-pusher >div:nth-child(2) > div:nth-child(1) ul").insertAdjacentHTML("beforeend", `<li class="eg-right-txt"><em>FREE Air Freshener With Purchase!<em></li>`);
                    live(".shopping-block-pusher >div:nth-child(2) > div:nth-child(1) > div > button[title='toggle']", "click", function() {
                        if (!document.querySelector(".eg-right-txt")) {
                            document.querySelector(".shopping-block-pusher >div:nth-child(2) > div:nth-child(1) ul").insertAdjacentHTML("beforeend", `<li class="eg-right-txt"><em>FREE Air Freshener With Purchase!<em></li>`)
                        }
                    });
                }

            }, 50, 15000);

            /* Initialize variation */
            waitForElement('.embla', init, 50, 15000);
        }
        listener();
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();