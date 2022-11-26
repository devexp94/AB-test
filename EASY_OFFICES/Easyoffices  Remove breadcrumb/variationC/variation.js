(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "";
    var $;
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

    /* Variation Init */
    function init() {
      /* start your code here */

      window.onscroll = function () {
        if (window.pageYOffset > 0) {
          document.querySelector("section.breadcrumbs").style.display = "none";
        } else {
          document.querySelector("section.breadcrumbs").style.display = "block";
        }

        document.querySelector("section.filter-nav > div > .filter-facilities > a").innerText = "Filters";

        if (window.innerWidth < 500) {
          if (window.pageYOffset > 0) {
            document.querySelector("#listing > div > div.search-content-main > h1").style.display = "none";
          } else {
            document.querySelector("#listing > div > div.search-content-main > h1").style.display = "block";
            // document.querySelector("section.filter-nav > div.filters > div:nth-child(1)").style.visibility = "visible";
          }
        }
      };
    }

    /* Initialize variation */
    waitForElement("#listing > div > div.search-content-main > h1", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
