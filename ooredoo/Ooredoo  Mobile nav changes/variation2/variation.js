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

      if (window.innerWidth < 577) {
        let ele = document.querySelector(".navbar-header-mobile #Clicks_Main_Menu_Search");
        document.querySelector("#header-menu-items").insertAdjacentElement("beforebegin", ele);
 
        let eg_oredo = `<a id="Clicks_Main_Menu_logo" class="nav-link primary-color" href="https://www.ooredoo.qa/web/en/">
        <img class="eg_img" src="https://www.ooredoo.qa/web/wp-content/uploads/2022/10/Ooredoo-new-icon.svg">
          <span>My Ooredoo</span>
        </a>`
  
        document.querySelector("div.navbar-header div.header-menu-icons").insertAdjacentHTML("afterbegin", eg_oredo);
   }

    }

    /* Initialize variation */
    waitForElement('div.container.navbar.header-main-navbar', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
