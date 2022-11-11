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

      // let perday = document.querySelector("#booking-flow div.extra-description.row .notes > span.qualifier")
      // let price = document.querySelectorAll("#booking-flow form div.extra-line-item > div.price-quantity > span")
      // price.insertAdjacentElement("afterend",perday);

      // for (const price of prices) {
      //   price.insertAdjacentElement("afterend",perday)
      // }

      document.querySelector("#booking-flow div.extra-description.row span.crew-message").innerHTML =document.querySelector("#booking-flow div.extra-description.row span.crew-message").innerHTML.replace("*", "Note - ")
    }
    /* Initialize variation */
    waitForElement("#main .moorings-share-quote-processed .main", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();