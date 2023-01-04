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

      let egCrrPrice = Math.floor(document.querySelector(".price .current_price").innerText.replace("$", ""));
       let egWasPriceEle = document.querySelector(".price .was_price");

       if (egWasPriceEle) {
                let egWasPrice = Math.floor(document.querySelector(".price .was_price").innerText.replace("$", ""));
                let egDiscount = Math.floor(Math.abs(egWasPrice - egCrrPrice));

        const egDisc = `<span class="egText"> (SAVE &dollar;${egDiscount})</span>`;

        let egPrices = document.querySelectorAll("span.current_price");
        for (const price of egPrices) {
          price.insertAdjacentHTML("afterend", egDisc)
        }
      }
    }

    /* Initialize variation */
    waitForElement('.price .was_price', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


