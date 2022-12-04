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
     const eg_btn = document.querySelector(".w-background-video.w-background-video-atom > div > a");
     eg_btn.innerText = "Explore 2023";
     eg_btn.href = "https://www.livingvehicle.com/2023-travel-trailer"
    }

    /* Initialize variation */
    waitForElement('.w-background-video.w-background-video-atom > div > a', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


