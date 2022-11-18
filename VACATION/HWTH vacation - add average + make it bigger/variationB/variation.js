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

    function init() {
 
      var avg = document.querySelector('.star-ratings').getAttribute('title');
      var newAvg= avg.replace(' Stars','/5');
      var newItem= '<p class="eg-avg">('+newAvg+')</p>';
      console.log(newAvg);
      document.querySelector('.star-ratings').insertAdjacentHTML('beforebegin',newItem);


    }

    /* Initialise variation */
    waitForElement(".star-ratings", init, 100, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
