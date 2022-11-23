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


    const eg_ship = `<p class="egShip">Congratulations! You now qualify for <strong>FREE SHIPPING!</strong>.</p>`

    function init() {
      document.querySelector("#cartform > div.row > div.column.cart-right-section").insertAdjacentHTML("beforebegin", eg_ship)

      }

    waitForElement("#shopify-section-cart-template  div.pageContent", init, 100, 35000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();