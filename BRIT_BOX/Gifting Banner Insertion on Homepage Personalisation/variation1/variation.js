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

    //     let eg_gift = `
    //     <div class="eg_gift_wrap">
    //     <a href="https://watch.britbox.com/us/gifting?utm_source=vanity&utm_medium=redirect&utm_campaign=gifting"><img src="https://i.ibb.co/6mDmrHY/imageMob.png" alt="imageMob" border="0"></a>    
    //     </div>
    // `

    let eg_gift_des = `
    <a href="https://watch.britbox.com/us/gifting?utm_source=vanity&utm_medium=redirect&utm_campaign=gifting" class="eg_banner">
        
    <div class="eg_img">
        <img src="https://static.bbus-static.com/shain/v1/dataservice/ResizeImage/$value?Format=%27png%27&Quality=90&Width=1000&Height=952&ImageUrl=355137.png&imageType=custom" alt="gift-1" border="0">
    </div>

    <div class="eg_para">
        <span class="eg_bold"><p class="eg_str">GIVE THE GIFT OF BRITBOX</p> <p class="eg_light">THE BEST OF BRITISH TV ALL YEAR LONG</p> </span>
    </div>

    <h3>BUY NOW!</h3>
</a>
`
    /* Variation Init */
    function init() {
      /* start your code here */
        // document.querySelector("body > main > div.Hero-notLogged").insertAdjacentHTML("afterend", eg_gift);

        document.querySelector("body > main > div.Hero-notLogged").insertAdjacentHTML("afterend", eg_gift_des);

    }

    /* Initialize variation */
    waitForElement(' main > div.Hero-notLogged', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();


