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

    /* Variation functions */

    function init() {
      if (window.innerWidth < 576) {
        let eg_cta = document.querySelectorAll(".cta-wrap");
        let eg_divs = document.querySelectorAll(
          "#postpaid-plan-card-items > div.plan-card"
        );

        eg_divs.forEach((egdiv, i) => {
          egdiv.insertAdjacentElement("beforeend", eg_cta[i]);
        });

        let eg_current = document.querySelectorAll(".btn-wrap .buyNewSIM");
        let need = document.querySelectorAll(".plan-card__header__plan-name");
        eg_current.forEach((cur, i) => {
          cur.innerText = need[i].innerText;
        });
      }
    }

    /* Initialize variation */
    waitForElement("#postpaid-plan-card-items", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();