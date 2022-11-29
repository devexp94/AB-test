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

    let str = `<p class="eg_para">
    <span class="eg_top">Only $3449.5 required to book today</span>
    <p class="eg_btm"><i>includes savings of $362.45</i></p>
    </p>`
    
    /* Variation Init */
    function init() {
      /* start your code here */

     const eg_ele = document.querySelector("#moorings-holiduct-side div.price");
     eg_ele.insertAdjacentHTML("afterend", str);
      
    }

    /* Initialize variation */
    waitForElement('#moorings-holiduct-side > div > div:nth-child(4)', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


