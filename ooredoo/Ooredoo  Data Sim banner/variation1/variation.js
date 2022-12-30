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

      if (window.location.href.indexOf("https://www.ooredoo.qa/web/en/") != -1) {

      document.querySelector("#slick-slide01 > div img").src = "https://www.ooredoo.qa/web/wp-content/uploads/2022/12/HomepageWE.png"
      if(window.innerWidth < 767){
        document.querySelector(".ooredoo-carousel__item:nth-child(2) .ooredoo-carousel__img img.d-lg-none").src = "https://www.ooredoo.qa/web/wp-content/uploads/2022/12/HomepageME.png"
      }
      }
      else if (window.location.href.indexOf("https://www.ooredoo.qa/web/ar/") != -1) {
        document.querySelector("#slick-slide01 > div img").src = "https://www.ooredoo.qa/web/wp-content/uploads/2022/12/HomepageWA.png";

        if(window.innerWidth < 767){
          document.querySelector(".ooredoo-carousel__item:nth-child(2) .ooredoo-carousel__img img.d-lg-none").src = "https://www.ooredoo.qa/web/wp-content/uploads/2022/12/HomepageMA.png"
        }
      }
     
    }

    /* Initialize variation */
    waitForElement('body', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


