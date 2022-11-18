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
      if(window.innerWidth > 1024){
        const egHeaderContainer = document.querySelector(".main-header .header-container");
        const egMainNav = document.querySelector(".main-header #menu-main-nav");
        
        // moving egMainNav outside its parents
        egHeaderContainer.insertAdjacentElement("beforeend",egMainNav); 
      }
      
    }

    /* Initialize variation */
    waitForElement('.main-header .header-container', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


