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

        const egDotsHTML = `<div class="eg-swipe-dots">
                                <span class="eg-dot eg-dot-1 active"></span>
                                <span class="eg-dot eg-dot-2"></span>
                                <span class="eg-dot eg-dot-3"></span>
                            </div>`;

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

        /* Variation Init */
        function init() {
            /* start your code here */

            window.addEventListener('DOMContentLoaded', (event) => {
                if (window.innerWidth < 501) {
                    // logic for swiper
                    document.querySelectorAll("html body #toSort .offices-list-item-images").forEach(imageBox => {
                        imageBox.querySelector(".offices-list-item-image:nth-of-type(1)").classList.add("eg-current-img");
                        imageBox.parentElement.insertAdjacentHTML("afterend", egDotsHTML);

                        // inserting left and right arrows to the parent element
                        const egArrowHTML = `
                      <div class="eg-arrow-box eg-left-arrow-box">
                        <span>
                          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 59.414 59.414" style="enable-background:new 0 0 59.414 59.414;" xml:space="preserve">
                          <polygon points="45.268,1.414 43.854,0 14.146,29.707 43.854,59.414 45.268,58 16.975,29.707 "/>
                          </svg>
                        </span>
                      </div>

                      <div class="eg-arrow-box eg-right-arrow-box">
                        <span>
                          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 59.414 59.414" style="enable-background:new 0 0 59.414 59.414;" xml:space="preserve">
                          <polygon points="15.561,0 14.146,1.414 42.439,29.707 14.146,58 15.561,59.414 45.268,29.707 "/>
                          </svg>
                        </span>
                      </div>
                    `;
                        imageBox.parentElement.insertAdjacentHTML("afterbegin", egArrowHTML);
                    });

                    // live function for dots click
                    live(['.eg-dot', '.eg-left-arrow-box', '.eg-right-arrow-box'], 'click', (e) => {
                        e.preventDefault();
                        if (e.target.classList.contains("eg-dot-1")) {
                            e.target.classList.add("active");
                            removeActive([e.target.nextElementSibling, e.target.nextElementSibling.nextElementSibling]);
                            showImage(1, e.target);

                        } else if (e.target.classList.contains("eg-dot-2")) {
                            e.target.classList.add("active");
                            removeActive([e.target.previousElementSibling, e.target.nextElementSibling]);
                            showImage(2, e.target);

                        } else if (e.target.classList.contains("eg-dot-3")) {
                            e.target.classList.add("active");
                            removeActive([e.target.previousElementSibling, e.target.previousElementSibling.previousElementSibling]);
                            showImage(3, e.target);

                        } else if (e.target.classList.contains("eg-right-arrow-box")) {
                            clickNext(e.target.parentElement.nextElementSibling.querySelectorAll(".eg-dot"));
                        } else if (e.target.classList.contains("eg-left-arrow-box")) {
                            clickPre(e.target.parentElement.nextElementSibling.querySelectorAll(".eg-dot"));
                        }
                    });

                }
            });
        }

        function clickNext(dots) {
            for (let i = 0; i < dots.length; i++) {
                if (dots[i].classList.contains("active")) {
                    if (dots[i].nextElementSibling) {
                        dots[i].nextElementSibling.click();
                    } else {
                        dots[i].parentElement.querySelector(".eg-dot:nth-of-type(1)").click();
                    }
                    break;
                }
            }
        }

        function clickPre(dots) {
            for (let i = 0; i < dots.length; i++) {
                if (dots[i].classList.contains("active")) {
                    if (dots[i].previousElementSibling) {
                        dots[i].previousElementSibling.click();
                    } else {
                        dots[i].parentElement.querySelector(".eg-dot:last-child").click();
                    }
                    break;
                }
            }
        }

        // shows image
        function showImage(num, ele) {
            let target = ele.parentElement.previousElementSibling.querySelector(`.offices-list-item-images img.offices-list-item-image:nth-of-type(${num})`);

            ele.parentElement.previousElementSibling.querySelectorAll(`.offices-list-item-images img.offices-list-item-image`).forEach(img => {
                if (img == target) {
                    img.classList.add("eg-current-img");
                } else {
                    img.classList.remove("eg-current-img");
                }
            });
        }

        // removes active class
        function removeActive(siblings) {
            siblings.forEach(s => {
                if (s.classList.contains("active")) {
                    s.classList.remove("active");
                }
            });
        }

        /* Initialize variation */
        waitForElement('html body #toSort .offices-list-item-images', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();