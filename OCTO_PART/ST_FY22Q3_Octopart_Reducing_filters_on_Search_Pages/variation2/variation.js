(function() {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";

        /* all Pure helper functions */


        // selector would be the parent div where your are changing css/js
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


        function listener() {
            /* These are the modifications: */
            window.addEventListener("locationchange", function() {
                setTimeout(function() {
                    waitForElement('#__next div.results > div:nth-child(1)', init, 20, 15000);
                }, 500);
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

        /* Variation functions */
        function init() {
            // getting the query from search link
            const params = new Proxy(new URLSearchParams(window.location.search), {
                get: (searchParams, prop) => searchParams.get(prop),
            });
            // Get the value of "q" in eg "https://octopart.com/search?q=MBR15"
            let egQuery = params.q; // "q"

            // applied category row
            const egSearchTitle = document.querySelector("#__next  div.results > div:nth-child(1) > div.applied-category-row div[role='breadcrumb']");

            let egTotalSearch = null;
            setTimeout(() => {
                egTotalSearch = egSearchTitle.textContent.split("(").pop().split(")").shift();
                if (document.querySelector(".eg-search-title")) {
                    document.querySelector(".eg-search-title").remove();
                    egSearchTitle.insertAdjacentHTML("beforebegin", `<strong class="eg-search-title">${egTotalSearch} Results Found For Your Search: ${egQuery}</strong>`);
                } else {
                    egSearchTitle.insertAdjacentHTML("beforebegin", `<strong class="eg-search-title">${egTotalSearch} Results Found For Your Search: ${egQuery}</strong>`);
                
                }

            
            }, 800);


            // moving category names boxes just right to the search title

            const egCategoryElementBox = document.querySelector("#__next div.results>div:nth-child(1)>div:nth-child(2)");
            if (egCategoryElementBox && egCategoryElementBox.tagName === "DIV") {
                egSearchTitle.insertAdjacentElement("afterend", egCategoryElementBox);
            }

            // iserting a drop down button to show filters
            if (!document.querySelector(".eg-filters-drop-down-btn")) {
                const egFilters = document.querySelector("#__next  div.results > div:nth-child(1) > ul:nth-of-type(1)");

                const egArrowIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
                                <defs>
                                </defs>
                                <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                                    <path d="M 90 24.25 c 0 -0.896 -0.342 -1.792 -1.025 -2.475 c -1.366 -1.367 -3.583 -1.367 -4.949 0 L 45 60.8 L 5.975 21.775 c -1.367 -1.367 -3.583 -1.367 -4.95 0 c -1.366 1.367 -1.366 3.583 0 4.95 l 41.5 41.5 c 1.366 1.367 3.583 1.367 4.949 0 l 41.5 -41.5 C 89.658 26.042 90 25.146 90 24.25 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #3671B0; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                </g>
                                </svg>`;

                egFilters.insertAdjacentHTML("beforebegin", `
                <input type="radio" id="eg-drop-down-radio" hidden >
                <label class="eg-filters-drop-down-btn" for="eg-drop-down-radio">Filter Results <span class="eg-arrow-icon">${egArrowIcon}</span></label>`);

                // hide filters
                let egClicked = null;
                const egRadioBtn = document.querySelector("input#eg-drop-down-radio");

                egRadioBtn.addEventListener("click", (e) => {
                    if (egClicked === egRadioBtn) {
                        egRadioBtn.checked = false;
                        egClicked = null;
                    } else {
                        egClicked = egRadioBtn;
                    }
                });
            }
        }

        listener();


        /* Initialize variation */
        waitForElement("#__next div.results > div:nth-child(1)", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();