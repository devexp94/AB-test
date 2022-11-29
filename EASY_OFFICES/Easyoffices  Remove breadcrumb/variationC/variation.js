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
        if (window.scrollY > 0) {
          document.querySelector("section.breadcrumbs").style.display = "none";
        } else {
          document.querySelector("section.breadcrumbs").style.display = "block";
        }
      };
    }

    /* Initialize variation */
    waitForElement("#listing > div > div.search-content-main > h1", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
