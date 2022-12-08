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

        /* Variation Init */
        function init() {
            /* start your code here */

            document.addEventListener('DOMContentLoaded', (event) => {
                if (window.innerWidth < 501) {
                    // logic for swiper
                    document.querySelectorAll("html body #toSort .offices-list-item-images").forEach(imageBox => {
                        const images = imageBox.querySelectorAll(".offices-list-item-image");

                        // current image
                        images[0].classList.add("eg-current-img");

                        let egDotHtml = ``;

                        // creating dynamic dots
                        images.forEach((img, i) => {
                            if (i + 1 === 1) {
                                egDotHtml += `<span class="eg-dot eg-dot-${i+1} active" id="${i+1}"></span>`;
                            } else {
                                egDotHtml += `<span class="eg-dot eg-dot-${i+1}" id="${i+1}"></span>`;
                            }

                        });

                        let egDotsHtml = `<div class="eg-swipe-dots">${egDotHtml}</div>`;

                        imageBox.parentElement.insertAdjacentHTML("beforeend", egDotsHtml);

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
                        if (e.target.classList.contains("eg-dot")) {
                            removeActive(e.target.parentElement.querySelector(".eg-dot.active"));
                            e.target.classList.add("active");
                            showImage(parseInt(e.target.id), e.target);
                        } else if (e.target.classList.contains("eg-right-arrow-box")) {
                            clickNext(e.target.parentElement.querySelector(".eg-dot.active"));
                        } else if (e.target.classList.contains("eg-left-arrow-box")) {
                            clickPre(e.target.parentElement.querySelector(".eg-dot.active"));
                        }
                    });

                }
            });
        }

        function clickNext(dot) {
            if (dot.nextElementSibling) {
                dot.nextElementSibling.click();
            } else {
                dot.parentElement.querySelector(".eg-dot:nth-of-type(1)").click();
            }
        }

        function clickPre(dot) {
            if (dot.previousElementSibling) {
                dot.previousElementSibling.click();
            } else {
                dot.parentElement.querySelector(".eg-dot:last-child").click();
            }
        }

        // shows image
        function showImage(num, ele) {
            // removing current class 
            ele.parentElement.previousElementSibling.querySelector(`.offices-list-item-images img.offices-list-item-image.eg-current-img`).classList.remove("eg-current-img");

            // adding current class to target image
            ele.parentElement.previousElementSibling.querySelector(`.offices-list-item-images img.offices-list-item-image:nth-of-type(${num})`).classList.add('eg-current-img');
        }

        // removes active class
        function removeActive(ele) {
            ele.classList.remove("active");
        }

        /* Initialize variation */
        waitForElement('html body #toSort .offices-list-item-images', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();