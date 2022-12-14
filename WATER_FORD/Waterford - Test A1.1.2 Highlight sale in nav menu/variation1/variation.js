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
      document.querySelector("#primaryNavigation > ul > li:nth-child(3) > ul > li > ul > li:nth-child(14) > a").innerText = `%  Brandy Glasses`

document.querySelector("#primaryNavigation > ul > li:nth-child(3) > ul > li> ul > li:nth-child(12) > a").innerText = `%  Gin Balloons & Glasses`


document.querySelector("#primaryNavigation > ul > li:nth-child(9) > ul > li:nth-child(2) > ul > li:nth-child(3) > a").innerText = `% SUSTAINABILITY`
      
    }

    /* Initialize variation */
    waitForElement('#primaryNavigation > ul > li:nth-child(9) > ul > li:nth-child(2) > ul > li:nth-child(3) > a', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


