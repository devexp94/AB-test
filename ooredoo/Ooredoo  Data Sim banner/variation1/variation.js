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

      if (window.location.href.indexOf("https://www.ooredoo.qa/web/en/postpaid-plans/5g-data-sim/") != -1) {

        document.querySelector("div.CMS-postpaid-selectplans > header div.slick-list.draggable > div > div.slick-slide.slick-current div.cms-home-hero-banner-desk > img").src = "https://www.ooredoo.qa/web/wp-content/uploads/2022/12/HomepageWE.png";

        document.querySelector("div.CMS-postpaid-selectplans > header div.slick-list.draggable > div > div:nth-child(1)  div.cms-home-hero-mobile > img").src = "https://www.ooredoo.qa/web/wp-content/uploads/2022/12/HomepageWE.png";
      }
      else if (window.location.href.indexOf("https://www.ooredoo.qa/web/ar/postpaid-plans/5g-data-sim/") != -1) {
        document.querySelector("div.CMS-postpaid-selectplans > header div.slick-list.draggable > div > div.slick-slide.slick-current  div.cms-home-hero-banner-desk > img").src = "https://www.ooredoo.qa/web/wp-content/uploads/2022/12/HomepageWA.png";

        document.querySelector("div.CMS-postpaid-selectplans > header div.slick-list.draggable > div > div:nth-child(1)  div.cms-home-hero-mobile > img").src = "https://www.ooredoo.qa/web/wp-content/uploads/2022/12/HomepageWA.png";
      }
     
    }

    /* Initialize variation */
    waitForElement('div.CMS-postpaid-selectplans > header div.slick-list.draggable > div > div.slick-slide.slick-current div.cms-home-hero-banner-desk > img', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


