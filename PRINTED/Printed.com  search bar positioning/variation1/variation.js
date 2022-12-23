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

            if (window.innerWidth > 979) {
                let target;

                if (window.location.pathname == "/") {
                    target = document.querySelector("#js-content-wrapper > main > cms-page-widgets-component > div > .widget-block.widget-page-header-main + .widget-block.widget-trustpilot");
                } else {
                    target = document.querySelector("#js-content-wrapper > main > cms-page-widgets-component > div > cms-widget-component.widget-block.widget-product-header");
                }

                let navBar = document.querySelector("#js-header");

                let search = document.querySelector("#v-header > div > div.l-header--desktop > div:nth-child(2) > div > div:nth-child(2)");

                // just after target3 searchbox is originally
                let target2 = document.querySelector("#v-header > div > div.l-header--desktop > div:nth-child(2) > div > a[class*='header__logo']");

                target.insertAdjacentHTML("afterend", `<div class="eg-moved"></div>`);

                let egMoved = document.querySelector(".eg-moved");
                egMoved.insertAdjacentElement("afterbegin", search);

                document.querySelector(".eg-moved input").placeholder = "What are you looking for? Leaflets, Business cards , Invitations, ....";

                // onscroll changing position of search box
                window.addEventListener("scroll", function() {
                    let egMovedBottom = egMoved.offsetTop + egMoved.offsetHeight;
                    let egMovedTop = egMoved.offsetTop;
                    if (window.scrollY >= egMovedBottom) {
                        // Scroll position is below egMoved, move search element to target2
                        target2.insertAdjacentElement("afterend", search);
                        search.querySelector("input").placeholder = "Search";
                    } else if (window.scrollY < egMovedTop) {
                        // Scroll position is above egMoved, move search element back to egMoved
                        egMoved.insertAdjacentElement("afterbegin", search);

                        document.querySelector(".eg-moved input").placeholder = "What are you looking for? Leaflets, Business cards , Invitations, ....";
                    }
                });



            }

        }

        /* Initialize variation */
        waitForElement('#js-content-wrapper > main > cms-page-widgets-component > div', init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();