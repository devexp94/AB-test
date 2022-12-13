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

      if(window.innerWidth > 978){
                
      
              let search = document.querySelector("#v-header > div > div.l-header--desktop > div:nth-child(2) > div > div:nth-child(2)");
             
              let target = document.querySelector("#js-content-wrapper > main > cms-page-widgets-component > div > .widget-block.widget-page-header-main + .widget-block.widget-trustpilot");
              
              let target2 = document.querySelector("#js-content-wrapper > main > cms-page-widgets-component > div > cms-widget-component.widget-block.widget-product-header");

              if(window.location.pathname == "/"){
                target.insertAdjacentElement("afterend", search);
              }else{
                target2.insertAdjacentElement("afterend", search);
              }
        
              document.querySelector("main > cms-page-widgets-component div.l-header__search-holder > input").placeholder = "What are you looking for? Leaflets, Business cards , Invitations, ....";     
    }

    }

    /* Initialize variation */
    waitForElement('#js-content-wrapper > main > cms-page-widgets-component > div', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
