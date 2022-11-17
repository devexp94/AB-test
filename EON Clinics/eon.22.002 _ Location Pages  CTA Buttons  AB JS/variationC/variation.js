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

    /* Variation functions */


    var eg_call =''+ 
'      <div class="eg_veteran">'+ 
'          <img class="eg_img" src="https://i.ibb.co/VmCDL2p/call.png" alt="call" border="0">'+ 
'      </div>';

    var eg_schedule =''+ 
'      <div class="eg_veteran">'+ 
'          <img class="eg_img" src="https://i.ibb.co/vjT0tVM/schedule.png" alt="schedule" border="0">'+ 
'      </div>';


    function init() {

      if(window.innerWidth < 768){

        document.querySelector("#mobile-nav-phone-number").insertAdjacentHTML("afterbegin" , eg_call);

        document.querySelector("#masthead > div.mobile-header > div.mobile_cta > div.mobile-nav-cta > a").insertAdjacentHTML("afterbegin", eg_schedule)

      }
     
    }
    /* Initialize variation */
    waitForElement("#masthead div.mobile_cta", init, 50, 15000);

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
